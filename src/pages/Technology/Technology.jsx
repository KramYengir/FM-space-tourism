import { useState, useEffect } from "react";
import "./Technology.css";
import data from "./technologyData";

const Technology = () => {
  const [currentSelection, setCurrentSelection] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    // Set aria-selected to true for the first dot-link when component mounts
    const firstLink = document.querySelector(".numbered-indicators button");
    if (firstLink) {
      firstLink.setAttribute("aria-selected", "true");
    }
  }, []);

  const handleLinkClick = (event, index) => {
    event.preventDefault();
    // Set aria-selected to true for the clicked link
    const links = document.querySelectorAll(".numbered-indicators button");
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
      setCurrentSelection(data[currentIndex - 1]);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (deltaX < 0 && currentIndex < data.length - 1) {
      // Swipe left
      setCurrentSelection(data[currentIndex + 1]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    // Set aria-selected to true for the updated index after swipe
    const links = document.querySelectorAll(".numbered-indicators button");
    links.forEach((dot, i) => {
      dot.setAttribute("aria-selected", i === currentIndex ? "true" : "false");
    });
  };

  return (
    <main
      className="grid-container technology flow"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="numbered-title">
        <span aria-hidden={true}>03</span> space launch 101
      </h1>

      <img
        className="landscape"
        src={currentSelection.images.landscape}
        alt={currentSelection.name}
      />
      <img
        className="portrait"
        src={currentSelection.images.portrait}
        alt={currentSelection.name}
      />

      <div
        className="dots-and-info flex flow"
        style={{ "--flow-space": "2rem" }}
      >
        <div className="numbered-indicators flex " style={{ "--gap": "2rem" }}>
          {data.map((entry, index) => (
            <button
              key={index}
              aria-selected={index === currentIndex}
              className="text-accent bg-dark ff-serif fs-500"
              onClick={(e) => handleLinkClick(e, index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <article className="technology-info flow">
          <header className="flow flow--space-small">
            <h2 className="uppercase fs-400 text-accent ff-sans-cond letter-spacing-3">
              the terminology...
            </h2>
            <p className="uppercase fs-700 ff-serif">{currentSelection.name}</p>
          </header>
          <p className="text-accent">{currentSelection.description}</p>
        </article>
      </div>
    </main>
  );
};

export default Technology;
