'use client'
import TrainingContent from "@/components/TrainingContent";
import TrainingInfo from "@/components/TrainingInfo";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ITrainingInfo } from "../interfaces/training.interface";
import { getTrainingInfo } from "@/actions/supaAction";
import Loading from "../loading";
import Quiz from "@/components/Quiz";
import { READINESS_QUIZ } from "@/constants";

export default function Training() {
    const [selectedTraining, setSelectedTraining] = useState<any>(null);
    const searchParams = useSearchParams();
    const trainingId = searchParams.get("id");
    const [trainingInfo, setTrainingInfo] = useState<ITrainingInfo[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchTrainingInfo = async () => {
        try {
          const data = await getTrainingInfo();
          setTrainingInfo(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } 
        fetchTrainingInfo();
    }, [])
  
    useEffect(() => {
        if (trainingId) {
            const training = trainingInfo.find(training => training.id === trainingId);
            setSelectedTraining(training);
        } else {
            setSelectedTraining(trainingInfo[0]);
        }
    }, [trainingId, trainingInfo]);

    
    if (loading) {
      return <Loading />
    }

    return (
        <>
            <TrainingInfo trainingInfo={trainingInfo} />
            {selectedTraining && <TrainingContent training={selectedTraining} />}
            <Quiz questionsArray={READINESS_QUIZ} title="Readiness Quiz" />
        </>
    )
}