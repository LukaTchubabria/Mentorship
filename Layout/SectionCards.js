import Heading from "../components/Heading";
import Card from "../components/Card";
import Button from "../components/Button";

const SectionCards = () => {
  const mockArray = [1, 2, 3, 4];
  const renderCards = mockArray.map((card, index) => {
    return (
      <Card
        courseImgSrc="/img/course-image.png"
        courseImgHeight="211"
        courseImgWidth="282"
        courseImgAlt="Course Image"
        courseImgClassName="course-img"
        headingTag="h4"
        headingClassName="heading-quaternary"
        headingText="კურსის სახელი"
        mentorParagraphClassName="course-name"
        mentorParagraphText="მენტორი"
        priceParagraphClassName="course-price"
        priceParagraphText="100 ₾"
        mentorImgSrc="/img/mentor.jpg"
        mentorImgHeight="80"
        mentorImgWidth="81"
        mentorImgAlt="Mentor Image"
        mentorImgClassName="mentor-img"
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
