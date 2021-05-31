import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Image from "next/image";

const CoursePopup = (props) => {
  const handleOnClick = (e) => {
    if (e.target.classList == "course-popup") {
      props.setIsCardClicked(false);
    }
  };
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
          <Paragraph text={props.courseInfoText} className="paragraph-popup" />
        </div>
        <div className="course-popup__info">
          <Heading
            headingTag={props.aboutCourseHeadingTag}
            className={props.aboutCourseHeadingClassName}
            text={props.courseLearnWhatHeadingText}
          />
          <Paragraph
            text={props.courseLearnWhatText}
            className="paragraph-popup"
          />
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
