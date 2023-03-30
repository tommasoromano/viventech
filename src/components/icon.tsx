
export interface IconProps {
  path:string;
  width?:string;
}

export function Icon({path, width="w-10"}: IconProps) {
  return (
    <div className={""+width}>
      <img src={path} />
    </div>
  );
}