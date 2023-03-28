import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toggle } from "./toggle";
import {KeyboardArrowRight} from '@mui/icons-material/';

export interface DeviceCardProps {
  title: string;
  icon: JSX.Element;
  toggle: boolean;
  watt: number;
}

export function DeviceCard({title, icon, toggle, watt}: DeviceCardProps) {

  return (
    <div className={"card shadow-xl "+(toggle ? "bg-success" : "")}>
      <div className={"card-body flex flex-row justify-between"}>
        <div className="w-10 rounded-full text-center text-primary text-xl">
        {icon}
        </div>
        {/* <div className="card-title">{title}</div> */}
        <h1 className="text-md">{title}</h1>
        {/* <div className="card-subtitle text-neutral-content">Card Subtitle</div> */}
        <Toggle
          label=""
          defaultChecked={toggle}
        />
        {/* <KeyboardArrowRight/> */}
      </div>
    </div>
  );
}