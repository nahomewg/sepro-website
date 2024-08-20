import { ITrainingInfo } from "@/app/interfaces/training.interface"
import InfoCards from "./InfoCards"

const TrainingInfo = ( { trainingInfo }: { trainingInfo: ITrainingInfo[] }) => {

  return (
    <section className="px-10 lg:px-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold">TRAINING</h2>
      <InfoCards trainingInfo={trainingInfo} preview={false} options={{ align: 'center', loop: true }} />
    </section>
  )
}

export default TrainingInfo