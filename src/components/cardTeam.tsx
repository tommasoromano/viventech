export interface CardTeamProps {
  title: string;
  subtitle: string;
  content: string;
}

export function CardTeam({ title, subtitle, content }: CardTeamProps) {
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/favicon.ico" />
          </div>
        </div>
        <div className="card-title">{title}</div>
        {/* <div className="card-subtitle text-neutral-content">Card Subtitle</div> */}
        <div className="card-content text-left">
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}