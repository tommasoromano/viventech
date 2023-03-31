import { DeviceCard } from "@/components/deviceCard";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Phone } from "@/components/phone";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Power, Tv, Lightbulb, Kitchen, LocalLaundryService, BarChart, KeyboardArrowLeft, CallMade, FilterAlt, FlashOffTwoTone } from '@mui/icons-material/';
import ReactEcharts from 'echarts-for-react'; 
import { useState } from "react";
import { Toggle } from "@/components/toggle";
import { Icon } from "@/components/icon";

    
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
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
              <span className="text-xs">1.2€</span> <span className="text-xs opacity-75">30.7 KWh</span><br/>
              <span className="text-xs font-bold text-primary">-27%</span> <span className="text-xs opacity-75">-23.5KWh</span>
            </p>
            <p>
              <span className="text-md font-bold">This Month</span><br/>
              <span className="text-xs">32.5€</span> <span className="text-xs opacity-75">235.37KWh</span><br/>
              <span className="text-xs font-bold text-primary">-13%</span> <span className="text-xs opacity-75">-67.7KWh</span>
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
              <button className="btn btn-success btn-sm">Kitchen</button>
              <button className="btn btn-success btn-sm">Living Room</button>
              <button className="btn btn-success btn-sm">Bedroom 1</button>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <DeviceCard
                title={"Fridge"}
                icon={<Icon path={"/icons/fridge.png"} />}
                toggle={true}
                activeText={"155w"}
                inactiveText={"0w"}/>
              <DeviceCard
                title={"TV 1"}
                icon={<Icon path={"/icons/tv.png"} />}
                toggle={true}
                activeText={"71w"}
                inactiveText={"0w"}/>
              <DeviceCard
                title={"Laundry"}
                icon={<Icon path={"/icons/washing-machine.png"} />}
                toggle={false}
                activeText={"76w"}
                inactiveText={"0w"}/>
              <DeviceCard
                title={"Kitchen Light"}
                icon={<Icon path={"/icons/led-lamp.png"} />}
                toggle={false}
                activeText={"1w"}
                inactiveText={"0w"}/>
              <DeviceCard
                title={"Bedroom 1 Light"}
                icon={<Lightbulb />}
                toggle={false}
                activeText={"2w"}
                inactiveText={"0w"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const phoneConsumption = () => {

    const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const dataNames = ['Wattage', 'Savings'];
    const dataWattage = days.map((label,index)=>index>4?0: rand(20,50));
    const dataSavings = dataWattage.map((w)=>Math.floor(w/rand(4,10)));
    const optionsWeekly = {
      xAxis: {
        type: 'category',
        data: days
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: 5,
        bottom: 20,
        left: 25,
        right: 0,
      },
      series: [
        {
          data: dataWattage,
          type: 'bar',
          stack: 'one',
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
            symbol: 'none',
          }
        },
        {
          data: dataSavings,
          type: 'bar',
          stack: 'one',
        }
      ]
    };

    const hours = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
    // const dataNames = ['Wattage', 'Savings'];
    const dataWattageHourly = hours.map((label,index)=>index>16?0: rand(20,50));
    const dataSavingsHourly = dataWattage.map((w)=>Math.floor(w/rand(4,10)));
    const optionsHourly = {
      xAxis: {
        type: 'category',
        data: hours
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: 5,
        bottom: 20,
        left: 25,
        right: 0,
      },
      series: [
        {
          data: dataWattageHourly,
          type: 'bar',
          stack: 'one',
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
            symbol: 'none',
          }
        },
        {
          data: dataSavingsHourly,
          type: 'bar',
          stack: 'one',
        }
      ]
    };

    const optionSource = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 5,
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Wind', 'Hydro', 'Gas', 'Solar', 'Coal']
  },
  series: [
    {
      type: 'bar',
      data: [15, 20, 25, 30, 35]
    },
  ]
};

    return(
    <div className="container mx-auto min-h-full p-2 mt-12">
      <div className="flex flex-col space-y-4 m-4">
        <div className="flex flex-row justify-between">
          <KeyboardArrowLeft />
          <h1 className="text-xl font-bold">Consumption</h1>
          <div></div>
        </div>
        <Card 
        children={(
          <div className="flex flex-col space-y-2">
            <h1 className="text-md opacity-75">This week</h1>
            <div className="flex flex-row justify-between">
              <h1 className="text-xs">23Kwh</h1>
              <p className="text-xs opacity-75">-13% from last week</p>
            </div>
            <ReactEcharts option={optionsWeekly} 
            style={{
              height: '100px',
            }}
            />
            <ReactEcharts option={optionsHourly} 
            style={{
              height: '100px',
            }}
            />
            {/* <Bar options={options} data={data} /> */}
          </div>
        )} 
        />
        <Card
        children={(
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
            <h1 className="text-md">Source of Energy</h1>
            {/* <p className="text-md text-primary">+3%</p> */}
            <CallMade/>
            </div>
            <ReactEcharts option={optionSource} style={{height: '150px',}}/>
          </div>
        )}
        />
      </div>
    </div>
    )
  }

  const phoneSource =() => {

    // this function generate values from Math.sin function adding random fluctuations
    const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
    const hours = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
    const dataCoal = hours.map((label,index)=>(Math.cos((index-1)/(hours.length/6))+1)*10+rand(3,7));
    const dataGas = hours.map((label,index)=>(Math.cos((index-4)/(hours.length/6))+1)*8+rand(2,5));
    const dataSolar = hours.map((label,index)=>(Math.sin((index-7)/(hours.length/6))+1)*10+rand(3,7));
    const optionSource = {
      xAxis: {
        type: 'category',
        data: hours
      },
      legend: {
        bottom: 0,
      },
      grid: {
        top: 5,
        bottom: 60,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Coal',
          data: dataCoal,
          type: 'line',
          smooth: true
        },
        {
          name: 'Solar',
          data: dataSolar,
          type: 'line',
          smooth: true
        },
        {
          name: 'Gas',
          data: dataGas,
          type: 'line',
          smooth: true
        }
      ]
    };


    return (
      <div className="container mx-auto min-h-full p-2 mt-12">
        <div className="flex flex-col space-y-4 m-4">
          <div className="flex flex-row justify-between">
            <KeyboardArrowLeft />
            <h1 className="text-xl font-bold">Source of Energy</h1>
            <div></div>
          </div>
          <Card
            children={(
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row justify-between">
                  <h1 className="text-md">Average fluctuations<br/><span className="text-xs opacity-75">Milan, Italy</span></h1>
                  {/* <p className="text-md text-primary">+3%</p> */}
                  <FilterAlt />
                </div>
                <ReactEcharts option={optionSource} style={{ height: '200px', }} />
              </div>
            )}
          />
          <Card
            children={(
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row justify-between">
                  <h1 className="text-md">Schedule your devices</h1>
                  <CallMade />
                </div>
              </div>
            )}
          />
          <Card
            children={(
              <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between">
                <h1 className="text-md">Suggested hour ranges</h1>
                
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xs">Clean source of energy</h1>
                <p className="text-md text-primary">10 - 20</p>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xs">Cheapest energy</h1>
                <p className="text-md text-primary">11 - 19</p>
              </div>
              </div>
            )}
          />
        </div>
      </div>
    );
  }

  const phoneSchedule = () => {
    return (
      <div className="container mx-auto min-h-full p-2 mt-12">
        <div className="flex flex-col space-y-4 m-4">
          <div className="flex flex-row justify-between">
            <KeyboardArrowLeft />
            <h1 className="text-xl font-bold">Schedule</h1>
            <div></div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Switch-off periods</h1>
            <div className="flex flex-row justify-between">
              <p className="text-xs opacity-75">3 periods</p>
              <p className="text-xs opacity-75">Show All</p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2">
            <Card children={(
              <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between">
                <h1 className="text-md">Night mode<br/><span className="text-xs opacity-75">8 devices</span></h1>
                <div className="absolute bottom-1 right-1"><Toggle defaultChecked={true} label={""} checked={true} size="toggle-sm" /></div>
                <CallMade />
              </div>
              {/* <div className="flex flex-row space-x-2 flex-nowrap overflow-hidden">
                <button className="btn btn-primary btn-sm">Heat Pump</button>
                <button className="btn btn-primary btn-sm">Tv 1</button>
                <button className="btn btn-primary btn-sm">Tv 2</button>
                <button className="btn btn-primary btn-sm">Microwave</button>
              </div> */}
              </div>
            )} bg="bg-success" />
            <Card children={(
              <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between">
                <h1 className="text-md">Working hours<br/><span className="text-xs opacity-75">7 devices</span></h1>
                <div className="absolute bottom-1 right-1"><Toggle defaultChecked={true} label={""} checked={true} size="toggle-sm" /></div>
                <CallMade />
              </div>
              </div>
            )} bg="bg-success" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Sheduled devices</h1>
            <div className="flex flex-row justify-between">
              <p className="text-xs opacity-75">9 sheduled</p>
              <p className="text-xs opacity-75">Show All</p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2">
              <DeviceCard
                title={"Laundry"}
                icon={<Icon path={"/icons/washing-machine.png"} />}
                toggle={true}
                activeText={"14 - 18"}
                inactiveText={"no schedule"}
                />
              <DeviceCard
                title={"Boiler"}
                icon={<Icon path={"/icons/boiler.png"} />}
                toggle={false}
                activeText={"18 - 20"}
                inactiveText={"no schedule"}
                />
                <DeviceCard
                  title={"Conditioner"}
                  icon={<Icon path={"/icons/air-conditioner.png"} />}
                  toggle={false}
                  activeText={"18 - 22"}
                  inactiveText={"no schedule"}
                  />
                  <DeviceCard
                    title={"Dish Washer"}
                    icon={<Icon path={"/icons/dishwasher.png"} />}
                    toggle={true}
                    activeText={"12 - 14"}
                    inactiveText={"no schedule"}
                    />
          </div>
        </div>
      </div>
    );
  }

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
    section((<h1 className="text-5xl font-bold">In-deep<br/><span className="text-primary">Analitycs</span></h1>),
      "Understanding how much energy your home is using, when and where, empowers you to find savings. Gives you the tools to break it down and take action.",
      phoneConsumption(),"bg-base-100",true),
    section((<h1 className="text-5xl font-bold">Choose your<br/><span className="text-primary">Source</span><br/>of Energy</h1>),
      "The fuel mix within a region fluctuates over the course of the day based on the availability of certain resources, like solar and wind. As the fuel mix changes, so does the Carbon Intensity.",
      phoneSource(),"bg-base-100",false),
    section((<h1 className="text-5xl font-bold">Easily<br/><span className="text-primary">Schedule</span><br/>your Devices</h1>),
      "Schedule your devices to turn on and off automatically. Set a schedule for your devices when you are at work, sleep at night or go to a trip.",
      phoneSchedule(),"bg-base-100",true),
    section((<h1 className="text-5xl font-bold">Avoid<br/>Disasters<br/>with <span className="text-primary">Alerts</span></h1>),
      "Think you forgot to turn off the Tv? Set an alert to inform you if it has been on for over 4 hours.",
      phoneAlert,"bg-base-100",false),
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
    {sections[1]}
    {sections[2]}
    {sections[3]}
    {sections[4]}
    {/* {sections[2]}
    {sections[3]}
    {sections[4]} */}
    {/* cards section */}
    <Footer/>
    </>
  );
}