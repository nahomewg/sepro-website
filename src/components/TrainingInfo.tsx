import { DUMMY_TRAINING_INFO } from "@/constants"
import InfoCards from "./InfoCards"

const TrainingInfo = () => {
  return (
    <section className="px-12">
        <h2 className="text-3xl md:text-4xl text-center font-bold">Training</h2>
        <InfoCards trainingInfo={DUMMY_TRAINING_INFO} preview={false} />
    </section>
  )
}

export default TrainingInfo