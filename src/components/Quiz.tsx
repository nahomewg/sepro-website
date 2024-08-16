'use client'
import { Button, MobileStepper, Radio, Slider } from "@mui/material"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Question, Option } from "@/app/interfaces/questions.interface";
import { useEffect, useState } from "react";
import { Mark } from "@mui/material/Slider/useSlider.types";
import Loading from "@/app/loading";

type PropType = {
  questionsArray: Question[];
  title: string;
}

const Quiz: React.FC<PropType> = ( { questionsArray, title }) => {
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questionsArray[0]);
  const [selectedValue, setSelectedValue] = useState('');
  const [nextDisabled, setNextDisabled] = useState(true);
  const [marks, setMarks] = useState<Mark[]>([]);
  const [maxValue, setMaxValue] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleNext = () => {
    if (index < questionsArray.length - 1) {
      setIndex(index + 1);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      setAnswers({ ...answers, [currentQuestion.questionText]: selectedValue });
      const body = JSON.stringify(answers);
      console.log(body, answers)
      const res = await fetch('api/emails', { method: 'POST',
        body: JSON.stringify(body),
       })
  
      setLoading(false);
      
      if (res.ok) {
        alert('Your submission has been accepted');
      } else {
        alert('Your submission has failed, make sure the email you entered is correct.');
      }
    } catch (error) {
      setLoading(false);
      alert('Your submission has failed, make sure the email you entered is correct.');
    }
  }

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const handleInputChange = (e: any, option?: Option) => {
    const value = e.target.value;
    if (currentQuestion.questionType === 'slider') {
      if (currentQuestion.options) {
        const label = currentQuestion.options[value].optionText;
        setSelectedValue(label);
      }
    } else  {
      setSelectedValue(value);
    }
  }

  useEffect(() => {
    setCurrentQuestion(questionsArray[index]);
    const savedAnswer = answers[questionsArray[index].questionText] || '';
    setSelectedValue(savedAnswer);
    setNextDisabled(savedAnswer === '');
  }, [index, questionsArray]);

  useEffect(() => { 
    setAnswers({ ...answers, [currentQuestion.questionText]: selectedValue });
  }, [selectedValue]);

  useEffect (() => {
    if (currentQuestion.questionType === 'slider') {
      const options = currentQuestion.options || [];
      const newMarks = options.map((option) => {
        return {
          value: options.indexOf(option),
          label: option.optionText,
        };
      });
      setMarks(newMarks);
      setMaxValue(options.length - 1);
      setSelectedValue(options[0].optionText);
    }
  }, [currentQuestion]);

  useEffect(() => {
    const validateInput = (value: string): boolean => {
      switch (currentQuestion.questionText.toLowerCase()) {
        case 'weight':
          return /^\d+$/.test(value);
        case 'name':
          return /^[a-zA-Z\s]+$/.test(value);
        case 'email':
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        default:
          return value.length > 0;
      }
    }
    const isValid = validateInput(selectedValue);
    setHasError(!isValid);
    setNextDisabled(!isValid);
  }, [selectedValue]);

  const setSlider = (question: Question) => {
    if (question.questionType === 'slider') {
      const savedAnswer = answers[question.questionText];
      if (savedAnswer) {
        const index = question.options?.findIndex(option => option.optionText === savedAnswer);
        return index !== undefined && index >= 0 ? index : 0;
      }
    }
    return 0;
  };

  return (
    <div className="pb-48 px-10 lg:px-32 xl:px-64">
      {loading ? (
        <Loading />
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl pb-12 font-bold text-center">{title}</h2>
            <section>
              {currentQuestion.questionType == 'multiple' &&
                <div>
                    <p className="text-xl capitalize text-center">{currentQuestion.questionText}</p>
                    <div className={`flex flex-col items-center gap-5 py-12 lg:justify-items-center ${(currentQuestion.options?.length ?? 0) % 2 === 0 ? 'lg:grid lg:grid-cols-2' : 'lg:grid lg:grid-cols-1'}`}>
                      {currentQuestion.options?.map((option, index) => (
                        <label key={index} className="flex items-center gap-6 p-6 border-2 border-orange cursor-pointer rounded-3xl max-w-md xl:max-w-xl w-full transition-all hover:font-bold hover:border-3">
                          <Radio checked={selectedValue === option.optionText} value={option.optionText} onChange={e => handleInputChange(e)} />
                          <p className="text-xl">{option.optionText}</p>
                        </label>
                      ))}
                    </div>
                </div>
              }
              {currentQuestion.questionType == 'input' &&
                <div>
                  <p className="text-xl capitalize text-center">{currentQuestion.questionText}</p>
                  <div className="flex flex-col items-center py-12 justify-center">
                    <input value={selectedValue} type="text" placeholder="Enter Your Answer" className="w-full h-16 p-6 bg-black border-orange border-2 text-[#DDDDDD] placeholder-slate-300 rounded-3xl max-w-md xl:max-w-xl" onChange={e => handleInputChange(e)} />
                    {hasError && <p className="text-red-500 pt-3">{`Please enter a valid ${currentQuestion.questionText.toLowerCase()}`}</p>}
                  </div>
                </div>
              }
              {currentQuestion.questionType == 'slider' &&
                <div>
                  <p className="text-xl capitalize text-center">{currentQuestion.questionText}</p>
                  <Slider className="!py-12" defaultValue={0} value={setSlider(currentQuestion)} marks={marks} min={0} max={maxValue} onChange={e => handleInputChange(e)} />
                </div>
              }
            </section>
          </>
        )
      }
      <MobileStepper
        variant="progress"
        steps={questionsArray.length}
        position="static"
        activeStep={index} 
        backButton={
          <Button size="small" onClick={handleBack} disabled={index === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        } 
        nextButton={
          <Button size="small" onClick={index === questionsArray.length - 1 ? handleSubmit : handleNext} disabled={nextDisabled}>
            {index === questionsArray.length - 1 ? 'Submit' : 'Next'}
            <KeyboardArrowRight />
          </Button>
        }>
      </MobileStepper>
    </div>
  )
}

export default Quiz