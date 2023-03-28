import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toggle } from "./toggle";
import {KeyboardArrowRight} from '@mui/icons-material/';
import { useState } from "react";

export interface DeviceCardProps {
  title: string;
  icon: JSX.Element;
  toggle: boolean;
  watt: number;
}

export function DeviceCard({title, icon, toggle, watt}: DeviceCardProps) {

  const [isToggle, setIsToggle] = useState(toggle);

  return (
    <div className={"card shadow-xl "+(isToggle ? "bg-success" : "")}>
      <div className={"card-body flex flex-row justify-between"}>
        <div className="w-10 rounded-full text-center text-primary text-xl">
        {icon}
        </div>
        {/* <div className="card-title">{title}</div> */}
        <p className="text-left"> <span className="text-md">{title}</span><br/>{isToggle ? watt.toString() : "0"}w</p>
        {/* <div className="card-subtitle text-neutral-content">Card Subtitle</div> */}
        <Toggle
          label=""
          defaultChecked={toggle}
          onChange={() => setIsToggle(!isToggle)}
          checked={isToggle}
        />
        {/* <KeyboardArrowRight/> */}
      </div>
    </div>
  );
}