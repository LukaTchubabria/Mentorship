import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const SectionSearch = () => {
  const [courseName, setCourseName] = useState("");
  const [courseLocation, setCourseLocation] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

  const handleNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setCourseLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setCoursePrice(e.target.value);
  };

  return (
    <section className="section-search" id="search">
      <div className="section-search__heading-container">
        <Heading
          headingTag="h2"
          className="heading-secondary"
          text="მოძებნე სასურველი კურსი მარტივად და სწრაფად"
        />
      </div>
      <form action="#" className="section-search__form">
        <div className="section-search__input-container">
          <div className="section-search__input-field section-search__input-field--name">
            <Input
              name="course-name"
              id="course-name"
              placeholder="კურსის დასახელება"
              type="text"
              className="section-search__input section-search__input--name"
              value={courseName}
              onChange={handleNameChange}
            />
          </div>
          <div className="section-search__input-field section-search__input-field--location">
            <Input
              name="course-location"
              id="course-location"
              placeholder="ადგილმდებარეობა"
              type="text"
              className="section-search__input section-search__input--location"
              value={courseLocation}
              onChange={handleLocationChange}
            />
          </div>
          <div className="section-search__input-field section-search__input-field--price">
            <Input
              name="course-price"
              id="course-price"
              placeholder="ფასი"
              type="number"
              className="section-search__input section-search__input--price"
              value={coursePrice}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        <div className="section-search__button-container">
          <Button text="ძიება" className="btn-primary search__btn" />
        </div>
      </form>
    </section>
  );
};

export default SectionSearch;
