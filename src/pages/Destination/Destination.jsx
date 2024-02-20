import React, { useState, useEffect } from "react";
import "./Destination.css";
import data from "./destinationData";

const Destination = () => {
  const [currentSelection, setCurrentSelection] = useState(data[0]);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    // Set aria-selected to true for the first link when component mounts
    const firstLink = document.querySelector(".tablist button");
    if (firstLink) {
      firstLink.setAttribute("aria-selected", "true");
    }
  }, []);

  const handleLinkClick = (event, index) => {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Set aria-selected to true for the clicked link
    const links = document.querySelectorAll(".tablist button");
    links.forEach((link, i) => {
      if (i === index) {
        link.setAttribute("aria-selected", "true");
      } else {
        link.setAttribute("aria-selected", "false");
      }
    });

    // Update current selection
    setCurrentSelection(data[index]);
  };

  // Swiping functionality

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Determine if swiping left or right
    if (deltaX > 0) {
      // Swipe right
      const newIndex = Math.max(
        0,
        data.findIndex((item) => item === currentSelection) - 1
      );
      setCurrentSelection(data[newIndex]);
    } else if (deltaX < 0) {
      // Swipe left
      const newIndex = Math.min(
        data.length - 1,
        data.findIndex((item) => item === currentSelection) + 1
      );
      setCurrentSelection(data[newIndex]);
    }
  };

  return (
    <main
      id="main"
      className="grid-container destination flow"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="numbered-title">
        <span aria-hidden={true}>01</span> pick your destination
      </h1>

      <picture>
        <source srcSet={currentSelection.images.webp} type="image/webp" />
        <img src={currentSelection.images.png} alt={currentSelection.name} />
      </picture>

      <ul className="tablist underline-indicators flex">
        {data.map((spaceBody, index) => (
          <li key={index}>
            <button
              aria-selected={currentSelection === spaceBody}
              className="uppercase text-accent bg-dark letter-spacing-2"
              onClick={(event) => handleLinkClick(event, index)}
            >
              {spaceBody.name}
            </button>
          </li>
        ))}
      </ul>
      <article className="destination-info flow">
        <h2 className="uppercase fs-800 letter-spacing-2 ff-serif">
          {currentSelection.name}
        </h2>
        <p className="text-accent">{currentSelection.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="uppercase fs-200 text-accent">Avg. Distance</h3>
            <p className="uppercase ff-serif">{currentSelection.distance}</p>
          </div>
          <div>
            <h3 className="uppercase fs-200 text-accent">est. travel time</h3>
            <p className="uppercase ff-serif">{currentSelection.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
