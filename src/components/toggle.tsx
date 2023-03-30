
export interface ToggleProps {
  defaultChecked: boolean;
  label: string;
  onChange?: () => void;
  checked: boolean;
  size?: string;
}

export function Toggle({defaultChecked, label, onChange=()=>{}, checked, size="toggle-md"}: ToggleProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span> 
        <input type="checkbox" className={"toggle "+size}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange()}
        checked={checked}
        />
      </label>
    </div>
  );
} 