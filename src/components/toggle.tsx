
export interface ToggleProps {
  defaultChecked: boolean;
  label: string;
  onChange?: () => void;
  checked: boolean;
}

export function Toggle({defaultChecked, label, onChange=()=>{}, checked}: ToggleProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span> 
        <input type="checkbox" className="toggle"
        defaultChecked={defaultChecked}
        onChange={(e) => onChange()}
        checked={checked}
        />
      </label>
    </div>
  );
} 