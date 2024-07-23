import { Radio, Slider } from "@mui/material";
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
                <div className="flex py-12 justify-center">
                    <input type="text" placeholder="Enter Your Answer" className="w-full h-16 p-6 bg-black border-orange border-2 text-[#DDDDDD] placeholder-slate-300 rounded-3xl max-w-md xl:max-w-xl" />
                </div>
            </div>
        }
        {questions[activeStep].questionType == 'slider' &&
            <div>
                <p className="text-xl capitalize text-center">{questions[activeStep].question}</p>
                <Slider className="py-12" defaultValue={0} marks min={0} max={5} />

            </div>
        }
    </section>
  )
}

export default Questions