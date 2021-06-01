import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Image from "next/image";
import { useState } from "react";

const CoursePopup = (props) => {
  const [courseInfoSpanIsOpen, setCourseInfoSpanIsOpen] = useState(false);
  const [courseLearnWhatSpanIsOpen, setCourseLearnWhatSpanIsOpen] =useState(false);
  const handleOnClick = (e) => {
    if (e.target.classList == "course-popup") {
      props.setIsCardClicked(false);
    }
  };

  const renderCourseInfoSpanClassName = courseInfoSpanIsOpen ? "span-open" : "";
  const renderCourseInfoButtonClassName = courseInfoSpanIsOpen ? "span-button-close" : "";
  const renderCourseLearnWhatSpanClassName= courseLearnWhatSpanIsOpen ? "span-open" : "";
  const renderCourseLearnWhatButtonClassName = courseLearnWhatSpanIsOpen ? "span-button-close" : "";


  const handleCourseInfoClick = () => {
    setCourseInfoSpanIsOpen(!courseInfoSpanIsOpen)
  }
  const handleCourseLearnWhatClick = () => {
    setCourseLearnWhatSpanIsOpen(!courseLearnWhatSpanIsOpen);
  }
  return (
    <div className="course-popup" onClick={handleOnClick}>
      <div className="course-popup__box">
        <Heading
          headingTag={props.headingTag}
          className={props.headingClassName}
          text={props.headingText}
        />
        <div className="course-popup__info">
          <Heading
            headingTag={props.aboutCourseHeadingTag}
            className={props.aboutCourseHeadingClassName}
            text={props.aboutCourseHeadingText}
          />
          <p className="paragraph-popup">{props.courseInfoTextLess}<span className={`course-popup__span-button ${renderCourseInfoButtonClassName}`} onClick={handleCourseInfoClick}>&nbsp;{props.spanButton}</span> <span className={`course-popup__span-more-text ${renderCourseInfoSpanClassName}`}>{props.courseInfoTextMore}</span></p>
        </div>
        <div className="course-popup__info">
          <Heading
            headingTag={props.aboutCourseHeadingTag}
            className={props.aboutCourseHeadingClassName}
            text={props.courseLearnWhatHeadingText}
          />
          <p className="paragraph-popup">{props.courseLearnWhatTextLess}<span className={`course-popup__span-button ${renderCourseLearnWhatButtonClassName}`} onClick={handleCourseLearnWhatClick}>&nbsp;{props.spanButton}</span> <span className={`course-popup__span-more-text ${renderCourseLearnWhatSpanClassName}`}>{props.courseLearnWhatTextMore}</span></p>
            
            
          
        </div>
        <div className="course-popup__info">
          <Paragraph className={props.priceClassName} text={props.priceText} />
          <Paragraph
            className={props.meetingClassName}
            text={props.meetingText}
          />
        </div>
        <div className="course-popup__button-registration-container">
          <Button className="btn-course-registration" text="რეგისტრაცია" />
        </div>
        <div className="course-popup__img-container">
          <Image
            src={props.mentorImgSrc}
            height={props.mentorImgHeight}
            width={props.mentorImgWidth}
            alt={props.mentorImgAlt}
            className={props.mentorImgClassName}
          />
        </div>
        <div className="course-popup__button-contact-container">
          <Button className="btn-course-contact" text="კონტაქტი" />
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
