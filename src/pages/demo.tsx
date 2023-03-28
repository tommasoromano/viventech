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

  const phoneDevices = (
    <div className="container mx-auto min-h-full p-4 mt-12">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-xl text-center font-bold">Your devices:</h1>
        <DeviceCard
          title={"Fridge"}
          icon={<Kitchen />}
          toggle={true}
          watt={155}
          seconds={4560}
          planned={0} alerts={1}          />
        <DeviceCard
          title={"TV 1"}
          icon={<Tv />}
          toggle={true}
          watt={71}
          seconds={540}
          planned={2} alerts={2}          />
        <DeviceCard
          title={"Dishwasher"}
          icon={<LocalLaundryService />}
          toggle={false}
          watt={76}
          seconds={340}
          planned={3} alerts={1}          />
        <DeviceCard
          title={"Kitchen Light"}
          icon={<Lightbulb />}
          toggle={false}
          watt={1}
          seconds={870}
          planned={0} alerts={1}          />
        <DeviceCard
          title={"Bedroom 1 Light"}
          icon={<Lightbulb />}
          toggle={false}
          watt={2}
          seconds={980}
          planned={0} alerts={1}          />
      </div>
    </div>
  );

  const phoneAlert = (
    <div className="container mx-auto min-h-full bg-base-200">
      <div className="min-h-full flex flex-col justify-center space-y-4">
        <div className="card shadow-xl text-center p-4 m-4 bg-base-100">
        <h1 className="text-5xl text-primary"><Tv/></h1>
        <h3 className="font-bold text-lg">Your Tv 1 is running for more than 4 hours!</h3>
        <button className="btn btn-error">Check it out</button>
        <button className="btn btn-ghost">Edit alert</button>
        </div>
      </div>
    </div>
  );

  const section = (title:JSX.Element,description:string, phoneContent:JSX.Element, bgcolor:string, reverse:boolean) => {
    return (
      <div className={"hero min-h-screen "+bgcolor}>
        <div className={"hero-content flex-col lg:flex-row justify-around pt-20 lg:pt-0"+(reverse ? " lg:flex-row-reverse":"")}>
          {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className={"container mx-auto max-w-md"+(reverse?"":" lg:text-right")}>
            <div>
              {title}
              <p className="py-6">{description}</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="container mx-auto max-w-sm px-4">
            <Phone
            content={phoneContent}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    {/* hero section */}
    {section(
      (<h1 className="text-5xl font-bold">Whole-devices <span className="text-primary">Energy</span><br/>Monitoring</h1>),
      "Machine Learning algorithms find device signatures within your home's power profile and gradually learn about your home as things turn on and off. ",
      phoneDevices,"bg-base-200",false)}
    {section((<h1 className="text-5xl font-bold">Avoid<br/>Disasters<br/>with <span className="text-primary">Alerts</span></h1>),
      "Think you forgot to turn off the Tv? Set an alert to inform you if it has been on for over 4 hours.",
      phoneAlert,"bg-base-100",true)}
    {/* cards section */}
    <Footer/>
    </>
  );
}