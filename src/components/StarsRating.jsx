import { useState } from "react";
import "./StarsRating.css";

import greenStar from "../assets/green-star.svg";
import grayStar from "../assets/gray-star.svg";

export default function StarsRating({ value, onChange }) {
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(value);

  const handleClick = (star) => {
    setSelectedStar(star);
    setHoveredStar(-1);
    onChange(star);
  };

  return (
    <div className="stars-rating" onMouseLeave={() => setHoveredStar(-1)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          aria-selected={star <= selectedStar && hoveredStar === -1}
          onClick={() => handleClick(star)}
          onMouseOver={() => setHoveredStar(star)}
        >
          <img
            src={
              star <= hoveredStar ||
              (selectedStar >= star && hoveredStar === -1)
                ? greenStar
                : grayStar
            }
            alt={`${star} estrela(s)`}
          />
        </button>
      ))}
    </div>
  );
}
