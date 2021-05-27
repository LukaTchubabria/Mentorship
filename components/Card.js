import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";
import CoursePopup from "./CoursePopup";

const Card = (props) => {
  // const renderCoursePopup = props.isCardClicked ? (
  //   <CoursePopup
  //     headingTag={props.headingTag}
  //     headingText={props.headingText}
  //     headingClassName={props.headingClassName}
  //     secondaryHeadingTag={props.secondaryHeadingTag}
  //     secondaryHeadingClassName={props.secondaryHeadingClassName}
  //     secondaryHeadingText={props.secondaryHeadingText}
  //   />
  // ) : null;
  return (
    <div className={`card`}>
      {/* {renderCoursePopup} */}
      <a onClick={props.onClick}>
        <div className="card__img-container">
          <Image
            src={props.courseImgSrc}
            height={props.courseImgHeight}
            width={props.courseImgWidth}
            alt={props.courseImgAlt}
            className={`card__${props.courseImgClassName}`}
          />
        </div>
        <div className="card__course-info">
          <div className="card__text-container">
            <Heading
              headingTag={props.headingTag}
              text={props.headingText}
              className={props.headingClassName}
            />
            <Paragraph
              className={`card__${props.mentorParagraphClassName}`}
              text={props.mentorParagraphText}
            />
            <Paragraph
              className={`card__${props.priceParagraphClassName}`}
              text={props.priceParagraphText}
            />
          </div>
          <div className="card__mentor-img-container">
            <Image
              src={props.mentorImgSrc}
              height={props.mentorImgHeight}
              width={props.mentorImgWidth}
              alt={props.mentorImgAlt}
              className={`card__${props.mentorImgClassName}`}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
