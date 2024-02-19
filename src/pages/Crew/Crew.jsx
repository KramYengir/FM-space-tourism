import "./Crew.css";
import { useState, useEffect } from "react";
import data from "./crewData";

const Crew = () => {
  const [currentSelection, setCurrentSelection] = useState(data[0]);

  useEffect(() => {
    // Set aria-selected to true for the first dot-link when component mounts
    const firstLink = document.querySelector(".dot-indicators button");
    if (firstLink) {
      firstLink.setAttribute("aria-selected", "true");
    }
  }, []);

  const handleLinkClick = (event, index) => {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Set aria-selected to true for the clicked link
    const links = document.querySelectorAll(".dot-indicators button");
    links.forEach((dot, i) => {
      if (i === index) {
        dot.setAttribute("aria-selected", "true");
      } else {
        dot.setAttribute("aria-selected", "false");
      }
    });

    // Update current selection
    setCurrentSelection(data[index]);
  };

  return (
    <main id="main" className="grid-container crew flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>02</span> meet the crew
      </h1>
      <img src={currentSelection.images.png} alt={currentSelection.name} />
      <div className="dot-indicators flex" style={{ "--gap": "2rem" }}>
        {data.map((entry, index) => (
          <button
            key={index}
            aria-selected={false}
            onClick={(e) => handleLinkClick(e, index)}
          >
            <span className="sr-only">Slide title</span>
          </button>
        ))}
      </div>
      <article className="crew-info">
        <h3 className="uppercase fs-600 letter-spacing-3 ff-serif">
          {currentSelection.role}
        </h3>
        <h2 className="uppercase fs-700 letter-spacing-2 ff-serif">
          {currentSelection.name}
        </h2>
        <p className="text-accent">{currentSelection.bio}</p>
      </article>
    </main>
  );
};

export default Crew;
