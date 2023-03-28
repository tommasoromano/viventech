import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toggle } from "./toggle";
import {KeyboardArrowRight} from '@mui/icons-material/';
import { useState } from "react";

export interface DeviceCardProps {
  title: string;
  icon: JSX.Element;
  toggle: boolean;
  watt: number;
  seconds: number;
  planned: number;
  alerts: number;
}

function formatDuration(durationInSeconds:number) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;
  
  const hoursStr = hours > 0 ? hours + "h " : "";
  const minutesStr = minutes > 0 ? minutes + "m " : "1m";
  const secondsStr = seconds + "s";

  return hoursStr + minutesStr;
}

export function DeviceCard({title, icon, toggle, watt, seconds, planned, alerts}: DeviceCardProps) {

  const [isToggle, setIsToggle] = useState(toggle);

  return (
    <div className={"card shadow-xl "+(isToggle ? "bg-success" : "")}>
      <div className={"card-body flex flex-row justify-between"}>
        {/* <div className="w-10 rounded-full text-center text-primary text-xl">
        {icon}
        </div> */}
        <p className="text-left">  
        <span className="text-xl text-primary mr-2">{icon}</span>
        <span className="text-md font-bold mr-2">{title}</span>
        <span className="italic opacity-75 text-sm">
          {isToggle ? watt.toString() : "0"}w
        </span>
        <br/>
        <span className="opacity-75 text-sm">
          {planned.toString()} plans - {alerts.toString()} alerts
        </span>
        </p>
        {/* <div className="card-subtitle text-neutral-content">Card Subtitle</div> */}
        <div className="flex flex-col justify-between">
          <Toggle
            label=""
            defaultChecked={toggle}
            onChange={() => setIsToggle(!isToggle)}
            checked={isToggle}
          />
          <p className="text-right italic opacity-75 text-sm">  
          {isToggle ? formatDuration(seconds) : ""}
          </p>
        </div>
        {/* <KeyboardArrowRight/> */}
      </div>
    </div>
  );
}