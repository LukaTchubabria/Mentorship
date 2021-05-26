import Icon from "../components/Icon";

const Header = () => {
  return (
    <header className="header">
      <div className="header__social-media">
        <div className="header__icon-container">
          <Icon instagram={true} />
        </div>
        <div className="header__icon-container">
          <Icon instagram={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;