import "./AppIcon.css";

interface AppIconProps {
  icon: string;
  title: string;
  path: string;
}

const AppIcon = ({ icon, title, path }: AppIconProps) => {
  return (
    <a className="app-wrapper" href={path}>
      <img src={icon} alt="tools" className="app-icon" />

      <p className="app-title">{title}</p>
    </a>
  );
};

export default AppIcon;
