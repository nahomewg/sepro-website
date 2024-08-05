'use client'
import InfoCards from "./InfoCards"
import { useState, useEffect } from "react";
import { getTrainingInfo } from "@/actions/supaAction";
import { ITrainingInfo } from "@/app/interfaces/training.interface";
import Loading from "@/app/loading";

const TrainingInfo = () => {
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

  if (loading) {
    return <Loading />
  }
  return (
    <section className="px-10 lg:px-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold">Training</h2>
      <InfoCards trainingInfo={trainingInfo} preview={false} options={{ align: 'center', loop: true }} />
    </section>
  )
}

export default TrainingInfo