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
import { Power, Tv, Lightbulb, Kitchen, LocalLaundryService, BarChart } from '@mui/icons-material/';
import ReactEcharts from 'echarts-for-react'; 
import { useState } from "react";
import { Toggle } from "@/components/toggle";
import { Icon } from "@/components/icon";

    
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface CardProps {
  children: JSX.Element;
  bg?: string;
}
export function Card({children,bg="bg-base-100"}: CardProps) {
  return (
    <div className={"card shadow-xl p-4 "+bg} >
      {children}
    </div>
  )
}

export default function Demo() {

  const phoneHome = () => {

    const energyConsumption = () => {
      return (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-bold">Energy Usage</h1>
            <BarChart/>
          </div>
          <div className="flex flex-row justify-between">
            <p>
              <span className="text-md font-bold">Today</span><br/>
              <span className="text-xs opacity-75">30.7 KWh</span><br/>
              <span className="text-xs font-bold text-primary">-27%</span> <span className="text-xs opacity-75">-23.5 KWh</span>
            </p>
            <p>
              <span className="text-md font-bold">This Month</span><br/>
              <span className="text-xs opacity-75">235.37 KWh</span><br/>
              <span className="text-xs font-bold text-primary">-13%</span> <span className="text-xs opacity-75">-67.7 KWh</span>
            </p>
          </div>
          {/* <p>
            <span className="text-md font-bold">Energy Savings</span><br/>
            <span className="text-xs font-bold text-primary">-27%</span> <span className="text-xs opacity-75">-23.5 KWh</span>
          </p> */}
          
        </div>
      );
    }

    const energySaving = () => {
      const [checked, setChecked] = useState(true);
      return (
      <div className="flex flex-row justify-between">
        <p>
          <span className="text-md font-bold">Energy Savings</span><br/>
          <span className="text-xs font-bold text-primary">-27%</span> <span className="text-xs opacity-75">-23.5 KWh</span>
        </p>
        <Toggle defaultChecked={true} label={""} checked={checked} onChange={()=>setChecked(!checked)}/>
      </div>
      );
    }
    
    return (
      <div className="container mx-auto min-h-full p-2 mt-12">
        <div className="flex flex-col space-y-4 m-4">
          <h1 className="text-2xl font-bold">Hi Leonardo! 👋</h1>
          <Card children={energyConsumption()}/>
          {/* <Card children={energySaving()}/> */}
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-xl font-bold">Devices</h1>
              <div className="flex flex-row justify-between">
                <p className="text-xs opacity-75">8 Devices Running</p>
                <p className="text-xs opacity-75">Show All</p>
              </div>
            </div>
            <div className="flex flex-row space-x-2 flex-nowrap">
              <button className="btn btn-primary btn-sm">Favourites</button>
              <button className="btn btn-primary btn-sm">Kitchen</button>
              <button className="btn btn-primary btn-sm">Living Room</button>
              <button className="btn btn-primary btn-sm">Bedroom 1</button>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <DeviceCard
                title={"Fridge"}
                icon={<Icon path={"/icons/fridge.png"} />}
                toggle={true}
                watt={155}
                seconds={4560}
                planned={0} alerts={1}          />
              <DeviceCard
                title={"TV 1"}
                icon={<Icon path={"/icons/tv.png"} />}
                toggle={true}
                watt={71}
                seconds={540}
                planned={2} alerts={2}          />
              <DeviceCard
                title={"Laundry"}
                icon={<Icon path={"/icons/washing-machine.png"} />}
                toggle={false}
                watt={76}
                seconds={340}
                planned={3} alerts={1}          />
              <DeviceCard
                title={"Kitchen Light"}
                icon={<Icon path={"/icons/led-lamp.png"} />}
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
        </div>
      </div>
    );
  }

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

  const phoneWeekly = () => {

    const timeLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dataLabels = ['Spending €', 'Wattage w', 'Savings €'];
    const option = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: dataLabels
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeLabels
      },
      yAxis: {
        type: 'value'
      },
      series: dataLabels.map((label) => ({
          name: label,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 5
          },
          data: timeLabels.map(() => Math.floor(Math.random() * 1000))
        }))
    };



    return (
      <div className="container mx-auto min-h-full p-4 mt-12">
        <h1 className="text-5xl font-bold">Your usage</h1>
        <p className="py-6"></p>
        <h1 className="text-xl font-bold pb-4">Weekly</h1>
        <ReactEcharts option={option} />
      </div>
    );
  }

  const phoneSpending = () => {

    const timeLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const dataLabels = ['Spending €', 'Savings €'];
    const option = {
      title: {},
      tooltip: {},
      legend: {
        data: dataLabels,
        left: '10%'
      },
      grid: {
      },
      xAxis: {
        type: 'category',
        data: timeLabels
      },
      yAxis: {},
      series: dataLabels.map((label) => ({
          name: label,
          type: 'bar',
          data: timeLabels.map(() => Math.random() * 2)
        }))
    };



    return (
      <div className="container mx-auto min-h-full p-4 mt-12">
        <h1 className="text-5xl font-bold">March 37€*</h1>
        <h1 className="">* but saved 6€</h1>  
        <p className="py-6"></p>
        <ReactEcharts option={option} />
      </div>
    );
  }

  const phoneDaily = () => {

    const timeLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    const dataLabels = ['Solar', 'Wind', 'Coal'];
    const option = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: dataLabels
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeLabels
      },
      yAxis: {
        type: 'value'
      },
      series: dataLabels.map((label) => ({
          name: label,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 5
          },
          data: timeLabels.map(() => Math.floor(Math.random() * 1000))
        }))
    };



    return (
      <div className="container mx-auto min-h-full p-4 mt-12">
        <h1 className="text-5xl font-bold">Energy Sources</h1>
        <p className="py-6"></p>
        <h1 className="text-xl font-bold pb-4">Average Hourly</h1>
        <ReactEcharts option={option} />
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Devices', 'Alerts', 'Spending', 'Sources','Spendings']

  const section = (title:JSX.Element,description:string, phoneContent:JSX.Element, bgcolor:string, reverse:boolean) => {

    return (
      <div className={"hero min-h-screen "+bgcolor}>
        <div className={"hero-content flex-col lg:flex-row justify-around pt-20 lg:pt-0"+(reverse ? " lg:flex-row-reverse":"")}>
          {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className={"container mx-auto max-w-md"+(reverse?"":" lg:text-right")}>
            <div>
              {title}
              <p className="py-6">{description}</p>
              {/* <button className="btn btn-primary">Learn More</button> */}
              {/* <ul className="steps">
                {tabs.map((tab, index) => (<li data-content="●" className={"step"+(activeTab === index ? " step-primary":"")} onClick={() => setActiveTab(index)}>{tab}</li>))}
              </ul> */}
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

  const sections = [
    section((<h1 className="text-5xl font-bold">Whole-home <span className="text-primary">Energy</span><br/>Monitoring</h1>),
      "Machine Learning algorithms find device signatures within your home's power profile and gradually learn about your home as things turn on and off. ",
      phoneHome(),"bg-base-100",false),
    section((<h1 className="text-5xl font-bold">Whole-home <span className="text-primary">Energy</span><br/>Monitoring</h1>),
      "Machine Learning algorithms find device signatures within your home's power profile and gradually learn about your home as things turn on and off. ",
      phoneDevices,"bg-base-100",false),
    section((<h1 className="text-5xl font-bold">Avoid<br/>Disasters<br/>with <span className="text-primary">Alerts</span></h1>),
      "Think you forgot to turn off the Tv? Set an alert to inform you if it has been on for over 4 hours.",
      phoneAlert,"bg-base-100",true),
    section((<h1 className="text-5xl font-bold"><span className="text-primary">Save</span> Energy<br/>and Money</h1>),
      "Understanding how much energy your home is using, when and where, empowers you to find savings. Gives you the tools to break it down and take action.",
      phoneWeekly(),"bg-base-100",false),
    section((<h1 className="text-5xl font-bold">Daily<br/><span className="text-primary">Carbon</span><br/>Intensity</h1>),
      "Once detected, devices can be tracked here. Review individual statistics, a device-specific power meter, and manage settings",
      phoneDaily(),"bg-base-100",true),
    section((<h1 className="text-5xl font-bold">Manage your<br/><span className="text-primary">Spendings</span><br/>and Savings</h1>),
      "Once detected, devices can be tracked here. Review individual statistics, a device-specific power meter, and manage settings",
      phoneSpending(),"bg-base-100",false)
  ]

  return (
    <>
    <Header/>
    {/* hero section */}
    {/* {section(
      (<h1 className="text-5xl font-bold">Whole-home <span className="text-primary">Energy</span><br/>Monitoring</h1>),
      "Machine Learning algorithms find device signatures within your home's power profile and gradually learn about your home as things turn on and off. ",
      phoneDevices,"bg-base-100",false)}
    {section((<h1 className="text-5xl font-bold">Avoid<br/>Disasters<br/>with <span className="text-primary">Alerts</span></h1>),
      "Think you forgot to turn off the Tv? Set an alert to inform you if it has been on for over 4 hours.",
      phoneAlert,"bg-base-100",true)}
    {section(
      (<h1 className="text-5xl font-bold"><span className="text-primary">Save</span> Energy<br/>and Money</h1>),
      "Understanding how much energy your home is using, when and where, empowers you to find savings. Gives you the tools to break it down and take action.",
      phoneWeekly(),"bg-base-100",false)}
    {section(
      (<h1 className="text-5xl font-bold">Daily<br/><span className="text-primary">Carbon</span><br/>Intensity</h1>),
      "Once detected, devices can be tracked here. Review individual statistics, a device-specific power meter, and manage settings",
      phoneDaily(),"bg-base-100",true)} */}
    {/* {sections[activeTab]} */}
    {sections[0]}
    {/* {sections[1]} */}
    {sections[2]}
    {sections[3]}
    {sections[4]}
    {/* cards section */}
    <Footer/>
    </>
  );
}