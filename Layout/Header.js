import Icon from "../components/Icon";
const Header = () => {
  return (
    <header className="header">
      <div className="header__social-media">
        <div className="header__icon-container">
          <Icon icon="search" />
        </div>
        <div className="header__icon-container">
          <Icon icon="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
