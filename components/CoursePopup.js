import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const CoursePopup = (props) => {
  return (
    <div className="course-popup">
      <Heading
        headingTag={props.headingTag}
        className={props.headingClassName}
        text={props.headingText}
      />
      <div className="course-popup__info">
        <Heading
          headingTag={props.secondaryHeadingTag}
          className={props.secondaryHeadingClassName}
          text={props.secondaryHeadingText}
        />
        <Paragraph text={props.courseInfoText} className="paragraph-popup" />
      </div>
    </div>
  );
};

export default CoursePopup;
