import { DeviceCard } from "@/components/deviceCard";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Phone } from "@/components/phone";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Power, Tv, Lightbulb, Kitchen, LocalLaundryService } from '@mui/icons-material/';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Demo() {

  const phoneContent = (
    <div className="container mx-auto min-h-full p-4 mt-12">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-xl text-center font-bold">Your devices:</h1>
        <DeviceCard title={"Fridge"} 
        icon={<Kitchen/>} 
        toggle={true} watt={155}/>
        <DeviceCard title={"TV 1"} 
        icon={<Tv/>} 
        toggle={true} watt={71}/>
        <DeviceCard title={"Dishwasher"} 
        icon={<LocalLaundryService/>} 
        toggle={false} watt={0}/>
        <DeviceCard title={"Kitchen Light"} 
        icon={<Lightbulb/>} 
        toggle={false} watt={0}/>
        <DeviceCard title={"Bedroom 1 Light"} 
        icon={<Lightbulb/>} 
        toggle={false} watt={0}/>
      </div>
    </div>
  );
  // const phoneContent = (
  //   <Line options={options} data={data} />
  // );

  return (
    <>
    <Header/>
    {/* hero section */}
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-around pt-20 lg:pt-0">
        {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div className="container mx-auto max-w-md">
          <div>
            <h1 className="text-5xl font-bold">Whole-home <span className="text-primary">Energy</span><br/>Monitoring</h1>
            <p className="py-6">Machine Learning algorithms find device signatures within your home's power profile and gradually learn about your home as things turn on and off. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="container mx-auto max-w-sm">
          <Phone
          content={phoneContent}
          />
        </div>
      </div>
    </div>
    {/* cards section */}
    <Footer/>
    </>
  );
}