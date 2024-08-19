'use client'
import InfoCards from "./InfoCards"
import { useEffect, useState } from "react"
import { ITrainingInfo } from "@/app/interfaces/training.interface";
import Loading from "@/app/loading";
import { getTrainingInfo } from "../app/api/supaApi";

const ProgramInfo = () => {
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
    <section className="py-48 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl text-center font-bold">Are You Ready To Take Your Training To The Next Level?</h2>
      <InfoCards trainingInfo={trainingInfo} preview={true} />
    </section>
  )
}

export default ProgramInfo