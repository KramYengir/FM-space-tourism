import "./Crew.css";
import { useState, useEffect } from "react";
import data from "./crewData";

const Crew = () => {
  const [currentSelection, setCurrentSelection] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    // Set aria-selected to true for the first dot-link when component mounts
    const firstLink = document.querySelector(".dot-indicators button");
    if (firstLink) {
      firstLink.setAttribute("aria-selected", "true");
    }
  }, []);

  const handleLinkClick = (event, index) => {
    event.preventDefault();
    // Set aria-selected to true for the clicked link
    const links = document.querySelectorAll(".dot-indicators button");
    links.forEach((dot, i) => {
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    // Update current selection
    setCurrentSelection(data[index]);
    setCurrentIndex(index);
  };

  // swiping functionality

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 0 && currentIndex > 0) {
      // Swipe right
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setCurrentSelection(data[currentIndex - 1]);
    } else if (deltaX < 0 && currentIndex < data.length - 1) {
      // Swipe left
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setCurrentSelection(data[currentIndex + 1]);
    }
  };

  return (
    <main
      id="main"
      className="grid-container crew flow"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="numbered-title">
        <span aria-hidden={true}>02</span> meet your crew
      </h1>
      <img src={currentSelection.images.png} alt={currentSelection.name} />
      <div className="dot-indicators flex" style={{ "--gap": "2rem" }}>
        {data.map((entry, index) => (
          <button
            key={index}
            aria-selected={index === currentIndex}
            onClick={(e) => handleLinkClick(e, index)}
          >
            <span className="sr-only">The {entry.role}</span>
          </button>
        ))}
      </div>
      <article className="crew-info">
        <h2 className="uppercase fs-600 ff-serif">{currentSelection.role}</h2>
        <p className="uppercase fs-700 ff-serif">{currentSelection.name}</p>
        <p className="text-accent">{currentSelection.bio}</p>
      </article>
    </main>
  );
};

export default Crew;
