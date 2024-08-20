import { ITrainingInfo } from "@/app/interfaces/training.interface"
import { formatDate } from "@/app/utilities/dateUtils";

interface TrainingContentProps {
  training: ITrainingInfo;
}

const TrainingContent: React.FC<TrainingContentProps> = ({ training }) => {
  return (
    <section className="pb-24 pt-10 px-10 lg:px-32 xl:px-64">
      <p className="text-xl font-semibold">{formatDate(training.created_at)}</p>
      <h2 className="text-3xl pt-2 font-semibold text-left md:text-center uppercase">{training.title}</h2>
      <p className="text-xl pt-12 pb-24">{training.description}</p>
    </section>
  )
}

export default TrainingContent