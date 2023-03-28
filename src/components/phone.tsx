export interface PhoneProps {
  content: JSX.Element;
}

export function Phone({ content }: PhoneProps) {
  return (
    <div className="mockup-phone">
      <div className="camera"></div> 
      <div className="display">
        <div className="artboard artboard-demo phone-1">{content}</div>
      </div>
    </div>
  );
}