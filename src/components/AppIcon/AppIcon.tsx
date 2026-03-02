import "./AppIcon.css";

interface AppIconProps {
  icon: string;
  title: string;
  path: string;
}

const AppIcon = ({ icon, title, path }: AppIconProps) => {
  return (
    <div className="icon-wrapper">
      <a className="app-wrapper" href={path}>
        <img src={icon} alt="tools" className="app-icon" />
      </a>
      <p className="app-title">{title}</p>
    </div>
  );
};

export default AppIcon;
