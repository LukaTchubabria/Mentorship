import Input from "./Input";
import Button from "./Button";

const RegistrationPopup = (props) => {
  return (
    <div className="registration-popup" onClick={props.onClick}>
      <div className="registration-popup__box">
        <form action="#" className="registration-popup__form">
          <div className="registration-popup__input-field">
            <Input
              type="text"
              name="username"
              id="username"
              className="registration-popup__input"
              value={props.userNameValue}
              onChange={props.onUserNameChange}
              placeholder="მომხმარებელი"
            />
          </div>
          <div className="registration-popup__input-field">
            <Input
              type="password"
              name="password"
              id="password"
              className="registration-popup__input"
              value={props.passwordValue}
              onChange={props.onPasswordChange}
              placeholder="პაროლი"
            />
          </div>
          <div className="registration-popup__input-field">
            <Input
              type="email"
              name="email"
              id="email"
              className="registration-popup__input"
              value={props.emailValue}
              onChange={props.onEmailChange}
              placeholder="ელ-ფოსტა"
            />
          </div>
          <div className="registration-popup__input-field">
            <Button text="რეგისტრაცია" className="btn-primary" />
          </div>
          <div className="registration-popup__input-field">
            <Button text="სისტემაში შესვლა" className="btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPopup;
