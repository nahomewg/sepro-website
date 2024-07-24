import { DUMMY_TRAINING_INFO } from "@/constants"
import InfoCards from "./InfoCards"

const ProgramInfo = () => {
  return (
    <section className="py-48 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl text-center font-bold">Are You Ready To Take Your Training To The Next Level?</h2>
      <InfoCards trainingInfo={DUMMY_TRAINING_INFO} preview={true} />
    </section>
  )
}

export default ProgramInfo