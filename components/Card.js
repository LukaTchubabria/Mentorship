import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";

const Card = (props) => {
  const handleCardClick = () => {
    document.body.classList.add("fixed");

    props.setIsCardClicked(!props.isCardClicked);
    const {
      headingText,
      headingTag,
      headingClassName,
      aboutCourseHeadingTag,
      aboutCourseHeadingText,
      aboutCourseHeadingClassName,
      courseInfoTextLess,
      courseInfoTextMore,
      courseLearnWhatTextLess,
      courseLearnWhatTextMore,
      spanButton,
      courseLearnWhatHeadingText,
      meetingText,
      meetingClassName,
      priceClassName,
      priceText,
      mentorImgSrc,
      mentorImgHeight,
      mentorImgWidth,
      mentorImgAlt,
      mentorImgClassName,
    } = props;
    props.setPopupData((prevState) => ({
      ...prevState,
      headingText,
      headingTag,
      headingClassName,
      aboutCourseHeadingTag,
      aboutCourseHeadingText,
      aboutCourseHeadingClassName,
      courseInfoTextLess,
      courseInfoTextMore,
      courseLearnWhatTextLess,
      courseLearnWhatTextMore,
      spanButton,
      courseLearnWhatHeadingText,
      meetingText,
      meetingClassName,
      priceClassName,
      priceText,
      mentorImgSrc,
      mentorImgHeight,
      mentorImgWidth,
      mentorImgAlt,
      mentorImgClassName,
    }));
  };
  return (
    <div className={`card`}>
      <a onClick={handleCardClick}>
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
              className={`card__${props.priceClassName}`}
              text={props.priceText}
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
