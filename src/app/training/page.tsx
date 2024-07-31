import Quiz from "@/components/Quiz";
import TrainingInfo from "@/components/TrainingInfo";
import { DUMMY_QUESTIONS } from "@/constants";

export default function Training() {
    return (
        <>
            <TrainingInfo />
            <Quiz questions={DUMMY_QUESTIONS} />
        </>
    )
}