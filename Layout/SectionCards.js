import Heading from "../components/Heading";
import Card from "../components/Card";
import Button from "../components/Button";
import CoursePopup from "../components/CoursePopup";
import { courseData } from "../data/courseData";
import { useState } from "react";

const SectionCards = () => {
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
    pricehClassName: "",
    pricehText: "",
    mentorImgSrc: "",
    mentorImgHeight: "",
    mentorImgWidth: "",
    mentorImgAlt: "",
    mentorImgClassName: "",
    aboutCourseHeadingTag: "h4",
    aboutCourseHeadingText: "",
    aboutCourseHeadingClassName: "",
    courseInfoText: "",
    courseLearnWhatText: "",
  });

  const renderCards = courseData.map((card, index) => {
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
        courseInfoText={card.courseInfoText}
        courseLearnWhatText={card.courseLearnWhatText}
        courseLearnWhatHeadingText={card.courseLearnWhatHeadingText}
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
      courseInfoText={popupData.courseInfoText}
      courseLearnWhatText={popupData.courseLearnWhatText}
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
        <Button className="btn-seemore" text="ნახეთ მეტი" />
      </div>
      {renderCoursePopup}
    </section>
  );
};

export default SectionCards;
