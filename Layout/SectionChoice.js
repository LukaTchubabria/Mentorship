import Heading from "../components/Heading";
import Button from "../components/Button";

const SectionChoice = () => {

  return (
    <section className="section-choice">
      <div className="section-choice-cont">
        <div className="section-choice-cont__heading-container">
          <Heading
            headingTag="h2"
            className="heading-first"
            text="აირჩიე სასურველი გაკვეთილები და გაუზიარე ცოდნა"
          />
        </div>
        <div className="section-choice-cont__btn-cont">
          <Button text="მინდა ვისწავლო" 
            className="btn-learn" 
          />
          <Button text="მინდა ვისწავლო" 
            className="btn-teach" 
          />
        </div>
      </div>
      <img id="section-img" src="/img/g12.svg" alt="illustr"></img>
    </section>
  );
};

export default SectionChoice;