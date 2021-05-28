import Heading from "../components/Heading";
import Card from "../components/Card";
import Button from "../components/Button";
import { courseData } from "../data/courseData";
import { useState } from "react";

const SectionCards = () => {
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

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
        secondaryHeadingTag={card.secondaryHeadingTag}
        secondaryHeadingClassName={card.secondaryHeadingClassName}
        secondaryHeadingText={card.secondaryHeadingText}
        tertiaryHeadingTag={card.tertiaryHeadingTag}
        tertiaryHeadingClassName={card.tertiaryHeadingClassName}
        tertiaryHeadingText={card.tertiaryHeadingText}
        mentorParagraphClassName={card.mentorParagraphClassName}
        mentorParagraphText={card.mentorParagraphText}
        priceParagraphClassName={card.priceParagraphClassName}
        priceParagraphText={card.priceParagraphText}
        mentorImgSrc={card.mentorImgSrc}
        mentorImgHeight={card.mentorImgHeight}
        mentorImgWidth={card.mentorImgWidth}
        mentorImgAlt={card.mentorImgAlt}
        mentorImgClassName={card.mentorImgClassName}
        meetingQuantity={card.meetingQuantity}
        courseInfoText={card.courseInfoText}
        onClick={handleCardClick}
        isCardClicked={isCardClicked}
        key={index}
      />
    );
  });
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
        <Button className="btn-secondary" text="ნახეთ მეტი" />
      </div>
    </section>
  );
};

export default SectionCards;
