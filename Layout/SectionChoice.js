import Heading from "../components/Heading";
import Button from "../components/Button";

const SectionChoice = () => {

  return (
    <section className="section-choice">
        <div className="section-choice__heading-container">
        <Heading
            headingTag="h2"
            className="heading-secondary"
            text="აირჩიე სასურველი გაკვეთილები და გაუზიარე ცოდნა"/>
        </div>
        <div className="section-search__input-field section-search__input-field--button">
            <Button text="მინდა ვისწავლო" className="btn-primary" />
            <Button text="ძიებამინდა ვისწავლო" className="btn-primary" />
        </div>
    </section>
  );
};

export default SectionChoice;