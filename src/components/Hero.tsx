import Button from "./Button"

const Hero = () => {
  return (
    <section className="w-full h-[660px] relative">
      <div className="bg-hero-background h-full w-full bg-cover bg-center opacity-70 absolute" />
      <div className="flex items-center justify-center h-full lg:h-auto lg:absolute lg:top-24 lg:right-24">
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-bold">SEPRO-GRAM</h1>
          <p className="text-center lg:text-start text-4xl font-bold">TRAINING</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Button type="button" title="GET STARTED" color="bg-transparent" borderColor="border-slate-400" borderSize="border-4" />
      </div>
    </section>
  )
}

export default Hero