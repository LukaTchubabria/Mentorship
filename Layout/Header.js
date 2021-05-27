import { useState } from "react";
import Icon from "../components/Icon";
import RegistrationPopup from "../components/RegistrationPopup";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isUserClicked, setIsUserClicked] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserClick = () => {
    setIsUserClicked(!isUserClicked);
  };

  const renderPopup = isUserClicked ? (
    <RegistrationPopup
      user={true}
      userNameValue={userName}
      passwordValue={password}
      emailValue={email}
      onUserNameChange={handleUserNameChange}
      onPasswordChange={handlePasswordChange}
      onEmailChange={handleEmailChange}
    />
  ) : null;
  return (
    <header className="header">
      <div className="header__social-media">
        <div className="header__icon-container">
          <Icon icon="search" />
        </div>
        <div className="header__icon-container">
          <Icon icon="user" onUserClick={handleUserClick} />
          {renderPopup}
        </div>
      </div>
    </header>
  );
};

export default Header;
