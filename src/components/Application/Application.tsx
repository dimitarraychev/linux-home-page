import "./Application.css";

interface ApplicationProps {
  icon: string;
  title: string;
  path: string;
}

const Application = ({ icon, title, path }: ApplicationProps) => {
  return (
    <div className="app-wrapper">
      <a className="icon-wrapper" href={path}>
        <img src={icon} alt="tools" className="app-icon" />
      </a>
      <p className="app-title">{title}</p>
    </div>
  );
};

export default Application;
