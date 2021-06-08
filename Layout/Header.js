import { useState } from "react";
import Icon from "../components/Icon";
import CoursePopup from "../components/CoursePopup";

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

  const handlePopupBoxClose = (e) => {
    if (e.target.classList == "registration-popup") {
      setIsUserClicked(false);
    }
  };

  const renderPopup = isUserClicked ? (
    <CoursePopup
      user={true}
      userNameValue={userName}
      passwordValue={password}
      emailValue={email}
      onUserNameChange={handleUserNameChange}
      onPasswordChange={handlePasswordChange}
      onEmailChange={handleEmailChange}
      onClick={handlePopupBoxClose}
      popupType="registration"
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
