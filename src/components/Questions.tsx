import { Radio, Slider } from "@mui/material";
import { Mark } from "@mui/material/Slider/useSlider.types";
import { useEffect, useState } from "react";

type PropType = {
    questions: Questions[];
    activeStep: number;
}

const Questions: React.FC<PropType> = (props) => {
  const { questions, activeStep } = props;
  const [selectedValue, setSelectedValue] = useState('');
  const [marks, setMarks] = useState<Mark[]>([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    if (questions[activeStep]?.questionType === 'slider') {
      const options = questions[activeStep].options || [];
      const newMarks = options.map((option) => {
        return {
          value: options.indexOf(option),
          label: option.option,
        };
      });
      setMarks(newMarks);
      setMaxValue(options.length - 1);
    }
  }, [questions, activeStep]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section>
        {questions[activeStep].questionType == 'multiple' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
                <div className="flex flex-col items-center gap-5 py-12 lg:justify-items-center lg:grid lg:grid-cols-2">
                    {questions[activeStep].options?.map((option, index) => (
                        <label key={index} className="flex items-center gap-6 p-6 border-2 border-orange cursor-pointer rounded-3xl max-w-md xl:max-w-xl w-full transition-all hover:font-bold hover:border-3">
                            <Radio checked={selectedValue === option.option} value={option.option} onChange={handleChange} />
                            <p className="text-xl">{option.option}</p>
                        </label>
                    ))}
                </div>
            </div>
        }
        {questions[activeStep].questionType == 'input' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
                <div className="flex py-12 justify-center">
                    <input type="text" placeholder="Enter Your Answer" className="w-full h-16 p-6 bg-black border-orange border-2 text-[#DDDDDD] placeholder-slate-300 rounded-3xl max-w-md xl:max-w-xl" />
                </div>
            </div>
        }
        {questions[activeStep].questionType == 'slider' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
                <Slider className="py-12" defaultValue={0} marks={marks} min={0} max={maxValue}  />

            </div>
        }
    </section>
  )
}

export default Questions