import { useState } from "react";
import "./ReviewForm.css";
import StarsRating from "./StarsRating";
import { createReview } from "../services/ReviewService";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = await createReview({ name, description, stars });

    if (review) {
      setName("");
      setStars(5);
      setDescription("");
      window.scrollTo(0, 0);
      window.location.reload();
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Review</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stars">Estrelas</label>

        <StarsRating value={stars} onChange={setStars} />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
