import { useState } from "react";
import Icon from "../components/Icon";
import CoursePopup from "../components/CoursePopup";
import Button from "../components/Button";

const Header = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isUserClicked, setIsUserClicked] = useState(false);

  const renderRegistrationButton = props.isDesktop ? (
    <div className="header__registration-button-container">
      <Button className="btn-primary" text="რეგისტრაცია" />
    </div>
  ) : null;

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
      isDesktop={props.isDesktop}
    />
  ) : null;
  return (
    <header className="header">
      <div className="header__user-panel">
        <div className="header__icon-container">
          <Icon icon="search" />
        </div>
        <div
          className={`header__icon-container ${
            isUserClicked ? "user-button-active" : ""
          }`}
        >
          <Icon icon="user" onUserClick={handleUserClick} />
          {renderPopup}
        </div>
        {renderRegistrationButton}
      </div>
    </header>
  );
};

export default Header;
