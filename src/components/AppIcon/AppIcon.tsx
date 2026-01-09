import "./AppIcon.css";

interface AppIconProps {
  icon: string;
  title: string;
}

const AppIcon = ({ icon, title }: AppIconProps) => {
  return (
    <div className="app-wrapper">
      <img src={icon} alt="tools" className="app-icon" />

      <p className="app-title">{title}</p>
    </div>
  );
};

export default AppIcon;
