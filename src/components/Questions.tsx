import { Radio } from "@mui/material";
import { useState } from "react";

type PropType = {
    questions: Questions[];
    activeStep: number;
}

const Questions: React.FC<PropType> = (props) => {
  const { questions, activeStep } = props;
  const [selectedValue, setSelectedValue] = useState('');

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
                            <Radio checked={selectedValue === option} value={option} onChange={handleChange} />
                            <p className="text-xl">{option}</p>
                        </label>
                    ))}
                </div>
            </div>
        }
        {questions[activeStep].questionType == 'input' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
            </div>
        }
        {questions[activeStep].questionType == 'slider' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
            </div>
        }
    </section>
  )
}

export default Questions