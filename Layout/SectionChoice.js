import Heading from "../components/Heading";
import Button from "../components/Button";

const SectionChoice = () => {

  return (
    <section className="section-choice">
        <div className="section-choice__heading-container">
          <Heading
            headingTag="h2"
            className="heading-secondary"
            text="აირჩიე სასურველი გაკვეთილები და გაუზიარე ცოდნა"
          />
        </div>
        <div className="section-choice__btn-cont">
          <Button text="მინდა ვისწავლო" 
            className="btn-learn" 
          />
          <Button text="ძიებამინდა ვისწავლო" 
            className="btn-teach" 
          />
        </div>
    </section>
  );
};

export default SectionChoice;