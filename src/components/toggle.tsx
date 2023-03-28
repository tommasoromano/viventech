
export interface ToggleProps {
  defaultChecked: boolean;
  label: string;
}

export function Toggle({defaultChecked, label}: ToggleProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span> 
        <input type="checkbox" className="toggle" defaultChecked={defaultChecked} />
      </label>
    </div>
  );
} 