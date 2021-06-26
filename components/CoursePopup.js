import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Image from "next/image";
import Input from "../components/Input";
import { useState } from "react";

const CoursePopup = (props) => {
  const [courseInfoSpanIsOpen, setCourseInfoSpanIsOpen] = useState(false);
  const [courseLearnWhatSpanIsOpen, setCourseLearnWhatSpanIsOpen] =
    useState(false);
  const [isRegistrationButtonClicked, setIsRegistrationButtonClicked] =
    useState(false);
  const handleOnClick = (e) => {
    if (e.target.classList == "course-popup") {
      props.setIsCardClicked(false);
      document.body.classList.remove("fixed");
    }
  };
  const handleCourseInfoClick = () => {
    setCourseInfoSpanIsOpen(!courseInfoSpanIsOpen);
  };
  const handleCourseLearnWhatClick = () => {
    setCourseLearnWhatSpanIsOpen(!courseLearnWhatSpanIsOpen);
  };
  const handleRegistrationButtonClick = () => {
    setIsRegistrationButtonClicked(!isRegistrationButtonClicked);
  };

  const renderCourseInfoSpanClassName = courseInfoSpanIsOpen ? "span-open" : "";
  const renderCourseInfoButtonClassName = courseInfoSpanIsOpen
    ? "span-button-close"
    : "";
  const renderCourseLearnWhatSpanClassName = courseLearnWhatSpanIsOpen
    ? "span-open"
    : "";
  const renderCourseLearnWhatButtonClassName = courseLearnWhatSpanIsOpen
    ? "span-button-close"
    : "";
  const renderCourseInfoLessButton = courseInfoSpanIsOpen ? (
    <span className="course-popup__span-less" onClick={handleCourseInfoClick}>
      {props.spanLessButton}
    </span>
  ) : null;
  const renderCourseLearnWhatLessButton = courseLearnWhatSpanIsOpen ? (
    <span
      className="course-popup__span-less"
      onClick={handleCourseLearnWhatClick}
    >
      {props.spanLessButton}
    </span>
  ) : null;

  const renderPopup = () => {
    if (props.popupType === "registration") {
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
    } else if (props.popupType === "course") {
      return (
        <div className="course-popup" onClick={handleOnClick}>
          <div className="course-popup__box">
            <div className="course-popup__header">
              <div className="course-popup__icon-container">
                <Icon icon="close" setIsCardClicked={props.setIsCardClicked} />
              </div>
              <div className="course-popup__main-heading-container">
                <Heading
                  headingTag={props.headingTag}
                  className={props.headingClassName}
                  text={props.headingText}
                />
              </div>
            </div>
            {!isRegistrationButtonClicked ? (
              <div className="course-popup__content">
                <div className="course-popup__text-container">
                  <div className="course-popup__info">
                    <div className="course-popup__secondary-heading-container">
                      <Heading
                        headingTag={props.aboutCourseHeadingTag}
                        className={props.aboutCourseHeadingClassName}
                        text={props.aboutCourseHeadingText}
                      />
                    </div>
                    <p className="course-popup__paragraph">
                      {props.courseInfoTextLess}
                      <span
                        className={`course-popup__span-button ${renderCourseInfoButtonClassName}`}
                        onClick={handleCourseInfoClick}
                      >
                        {props.spanMoreButton}
                      </span>
                      <span
                        className={`course-popup__span-more-text ${renderCourseInfoSpanClassName}`}
                      >
                        {props.courseInfoTextMore}
                        {renderCourseInfoLessButton}
                      </span>
                    </p>
                  </div>
                  <div className="course-popup__info">
                    <div className="course-popup__secondary-heading-container">
                      <Heading
                        headingTag={props.aboutCourseHeadingTag}
                        className={props.aboutCourseHeadingClassName}
                        text={props.courseLearnWhatHeadingText}
                      />
                    </div>
                    <p className="course-popup__paragraph">
                      {props.courseLearnWhatTextLess}
                      <span
                        className={`course-popup__span-button ${renderCourseLearnWhatButtonClassName}`}
                        onClick={handleCourseLearnWhatClick}
                      >
                        {props.spanMoreButton}
                      </span>
                      <span
                        className={`course-popup__span-more-text ${renderCourseLearnWhatSpanClassName}`}
                      >
                        {props.courseLearnWhatTextMore}
                        {renderCourseLearnWhatLessButton}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="course-popup__mentor-container">
                  <div className="course-popup__info">
                    <Paragraph
                      className="course-popup__price"
                      text={props.priceText}
                    />
                    <Paragraph
                      className="course-popup__meeting"
                      text={props.meetingText}
                    />
                  </div>
                  <div className="course-popup__button-registration-container">
                    <Button
                      className="btn-course-registration"
                      text="რეგისტრაცია"
                      onClick={handleRegistrationButtonClick}
                    />
                  </div>
                  {props.isDesktop ? (
                    <div className="course-popup__img-container">
                      <Image
                        src={props.mentorImgSrc}
                        height={props.mentorImgHeight}
                        width={props.mentorImgWidth}
                        alt={props.mentorImgAlt}
                        className={props.mentorImgClassName}
                      />
                    </div>
                  ) : null}

                  <div className="course-popup__button-contact-container">
                    <Button
                      className="btn-course-contact"
                      text={`${
                        props.isDesktop ? "კონტაქტი" : "დაუკავშირდი მენტორს"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="course-popup__registration">
                <form action="#" className="course-popup__registration-form">
                  <div className="course-popup__registration-input-field">
                    <input
                      type="text"
                      placeholder="დაწყების თარიღი"
                      className="course-popup__registration-input course-popup__registration-input--date"
                    />
                  </div>
                  <div className="course-popup__registration-input-field">
                    <select
                      type="text"
                      className="course-popup__registration-input course-popup__registration-input--time"
                      id="time"
                      name="time"
                    >
                      <option value="" disabled selected>
                        Select your option
                      </option>
                      <option value="12 საათი">12 საათი</option>
                      <option value="14 საათი">14 საათი</option>
                      <option value="17 საათი">17 საათი</option>
                      <option value="20 საათი">20 საათი</option>
                    </select>
                  </div>
                  <div className="course-popup__registration-input-field">
                    <textarea
                      className="course-popup__registration-input course-popup__registration-input--textarea"
                      placeholder="შეტყობინება მენტორისთვის"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="course-popup__registration-input-field">
                    <label htmlFor="radio" className="course-popup__radio">
                      გავეცანი კურსის პირობებს
                      <input
                        type="checkbox"
                        id="radio"
                        name="radio"
                        className="course-popup__registration-input course-popup__registration-input--radio"
                      />
                      <span className="course-popup__checkmark"></span>
                    </label>
                  </div>
                  <div className="course-popup__registration-button-container">
                    <Button
                      className="btn-course-registration"
                      text="რეგისტრაციის მოთხოვნა"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      );
    }
  };
  return <>{renderPopup()}</>;
};

export default CoursePopup;
