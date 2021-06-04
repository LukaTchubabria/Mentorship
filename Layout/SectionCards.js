import Heading from "../components/Heading";
import Card from "../components/Card";
import Button from "../components/Button";
import CoursePopup from "../components/CoursePopup";
import { courseData } from "../data/courseData";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const SectionCards = () => {
  const [cardNumber, setCardNumber] = useState(4);
  const isMobile = useMediaQuery({
    query: "(max-width: 599px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-device-width: 600px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

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
    spanButton: "",
  });

  useEffect(() => {
    if (isMobile) {
      setCardNumber(4);
    }
    if (isTablet) {
      setCardNumber(6);
    }
    if (isDesktop) {
      setCardNumber(16);
    }
  }, [isMobile, isTablet, isDesktop]);

  const handleCourseDataSplice = (itemCount) => {
    const courseDataSplicedArr = courseData.slice(0, itemCount);
    return courseDataSplicedArr;
  };

  const handleOnClick = () => {
    setCardNumber(cardNumber + 4);
    console.log(cardNumber);
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
        spanButton={card.spanButton}
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
      spanButton={popupData.spanButton}
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
