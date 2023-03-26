import { Drawer } from "@/components/drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";


export default function Demo() {
  return (
    <>
    <Header/>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img src="/images/55-subtle-greyscale-map.png" className="max-w-lg rounded-lg shadow-2xl" />
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Match with <p className="text-primary">Energy Producers</p>in minutes</h1>
          <p className="py-6">Find and match .</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <div className="container mx-auto p-6 m-6 mt-72">
      <div className="container mx-auto">
        <img src="/images/55-subtle-greyscale-map.png" className="rounded-lg shadow-2xl" />
      </div>
    </div>
    <Footer/>
    </>
  );
}