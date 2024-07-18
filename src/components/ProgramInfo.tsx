import InfoCard from "./InfoCard"

const ProgramInfo = () => {
  return (
    <section className="py-48 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl text-center font-bold">Are You Ready To Take Your Training To The Next Level?</h2>
      <div className="flex flex-col items-center gap-5 py-12 lg:justify-items-center lg:grid lg:grid-cols-2">
        <InfoCard title="Info About The Program" size="sm" image="/ropes.png" />
        <InfoCard title="Info About The Program" size="sm" />
        <InfoCard title="Info About The Program" size="sm" />
        <InfoCard title="Info About The Program" size="sm" />
      </div>
    </section>
  )
}

export default ProgramInfo