import Heading from "../components/Heading";
import Card from "../components/Card";
import Button from "../components/Button";
import CoursePopup from "../components/CoursePopup";
import { courseData } from "../data/courseData";
import { useEffect, useState } from "react";

const SectionCards = (props) => {
  const [cardNumber, setCardNumber] = useState(4);

  const [isCardClicked, setIsCardClicked] = useState(false);
  const [popupData, setPopupData] = useState({
    courseImgSrc: "",
    courseImgHeight: "",
    courseImgWidth: "",
    courseImgAlt: "",
    courseImgClassName: "",
    headingTag: "h3",
    headingClassName: "",
    headingText: "",
    mentorParagraphClassName: "",
    mentorParagraphText: "",
    priceClassName: "",
    priceText: "",
    mentorImgSrc: "",
    mentorImgHeight: "",
    mentorImgWidth: "",
    mentorImgAlt: "",
    mentorImgClassName: "",
    aboutCourseHeadingTag: "h4",
    aboutCourseHeadingText: "",
    aboutCourseHeadingClassName: "",
    courseInfoTextLess: "",
    courseInfoTextMore: "",
    courseLearnWhatTextLess: "",
    courseLearnWhatTextMore: "",
    spanMoreButton: "",
    spanLessButton: "",
  });

  useEffect(() => {
    if (props.isMobile) {
      setCardNumber(4);
    }
    if (props.isTablet) {
      setCardNumber(6);
    }
    if (props.isDesktop) {
      setCardNumber(16);
    }
  }, [props.isMobile, props.isTablet, props.isDesktop]);

  const handleCourseDataSplice = (itemCount) => {
    const courseDataSplicedArr = courseData.slice(0, itemCount);
    return courseDataSplicedArr;
  };

  const handleOnClick = () => {
    setCardNumber(cardNumber + 4);
  };

  const renderCards = handleCourseDataSplice(cardNumber).map((card, index) => {
    return (
      <Card
        courseImgSrc={card.courseImgSrc}
        courseImgHeight={card.courseImgHeight}
        courseImgWidth={card.courseImgWidth}
        courseImgAlt={card.courseImgAlt}
        courseImgClassName={card.courseImgClassName}
        headingTag={card.headingTag}
        headingClassName={card.headingClassName}
        headingText={card.headingText}
        aboutCourseHeadingTag={card.aboutCourseHeadingTag}
        aboutCourseHeadingClassName={card.aboutCourseHeadingClassName}
        aboutCourseHeadingText={card.aboutCourseHeadingText}
        mentorParagraphClassName={card.mentorParagraphClassName}
        mentorParagraphText={card.mentorParagraphText}
        priceClassName={card.priceClassName}
        priceText={card.priceText}
        mentorImgSrc={card.mentorImgSrc}
        mentorImgHeight={card.mentorImgHeight}
        mentorImgWidth={card.mentorImgWidth}
        mentorImgAlt={card.mentorImgAlt}
        mentorImgClassName={card.mentorImgClassName}
        meetingQuantity={card.meetingQuantity}
        courseInfoTextLess={card.courseInfoTextLess}
        courseInfoTextMore={card.courseInfoTextMore}
        courseLearnWhatTextLess={card.courseLearnWhatTextLess}
        courseLearnWhatTextMore={card.courseLearnWhatTextMore}
        courseLearnWhatHeadingText={card.courseLearnWhatHeadingText}
        spanMoreButton={card.spanMoreButton}
        spanLessButton={card.spanLessButton}
        meetingText={card.meetingText}
        meetingClassName={card.meetingClassName}
        isCardClicked={isCardClicked}
        setIsCardClicked={setIsCardClicked}
        popupData={popupData}
        setPopupData={setPopupData}
        key={index}
      />
    );
  });

  const renderCoursePopup = isCardClicked ? (
    <CoursePopup
      headingTag={popupData.headingTag}
      headingClassName={popupData.headingClassName}
      headingText={popupData.headingText}
      aboutCourseHeadingClassName={popupData.aboutCourseHeadingClassName}
      aboutCourseHeadingTag={popupData.aboutCourseHeadingTag}
      aboutCourseHeadingText={popupData.aboutCourseHeadingText}
      courseInfoTextLess={popupData.courseInfoTextLess}
      courseInfoTextMore={popupData.courseInfoTextMore}
      courseLearnWhatTextLess={popupData.courseLearnWhatTextLess}
      courseLearnWhatTextMore={popupData.courseLearnWhatTextMore}
      spanMoreButton={popupData.spanMoreButton}
      spanLessButton={popupData.spanLessButton}
      courseLearnWhatHeadingText={popupData.courseLearnWhatHeadingText}
      priceClassName={popupData.priceClassName}
      priceText={popupData.priceText}
      meetingText={popupData.meetingText}
      meetingClassName={popupData.meetingClassName}
      mentorImgSrc={popupData.mentorImgSrc}
      mentorImgHeight={popupData.mentorImgHeight}
      mentorImgWidth={popupData.mentorImgWidth}
      mentorImgAlt={popupData.mentorImgAlt}
      mentorImgClassName={popupData.mentorImgClassName}
      isCardClicked={isCardClicked}
      setIsCardClicked={setIsCardClicked}
      popupType="course"
      isDesktop={props.isDesktop}
    />
  ) : null;

  return (
    <section className="section-cards">
      <div className="section-cards__heading-container">
        <Heading
          headingTag="h3"
          text="ახალი დამატებული"
          className="heading-tertiary"
        />
      </div>
      <div className="section-cards__cards-container">{renderCards}</div>
      <div className="section-cards__button-container">
        <Button
          className="btn-seemore"
          text="ნახეთ მეტი"
          onClick={handleOnClick}
        />
      </div>
      {renderCoursePopup}
    </section>
  );
};

export default SectionCards;
