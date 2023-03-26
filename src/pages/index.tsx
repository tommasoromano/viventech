import { CardTeam } from "@/components/cardTeam";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <div className="hero min-h-[50vh]" 
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-max text-primary">
          <h1 className="mb-5 text-center text-5xl font-bold">Our Stats</h1>
          <Stats/>
        </div>
      </div>
    </div>
    <div className="hero min-h-[100vh] bg-primary" 
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-max">
          <h1 className="mb-5 text-center text-5xl font-bold">viventech Team</h1>
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 content-center items-stretch">
            <CardTeam title={"Tommaso Romano"} subtitle={""} content={"tagline"}/>
            <CardTeam title={"Daniele Vozza"} subtitle={""} content={"tagline"}/>
            <CardTeam title={"Francesco Cerni"} subtitle={""} content={"tagline"}/>
            <CardTeam title={"Leonardo Donatacci"} subtitle={""} content={"tagline"}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}