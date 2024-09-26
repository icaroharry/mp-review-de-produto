import { useEffect, useState } from "react";
import "./ReviewSection.css";
import { getReviews } from "../services/ReviewService";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  return (
    <section className="reviews">
      <h3>O que nossos clientes dizem</h3>

      <div className="reviews-container">
        {reviews
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

        {reviews.length === 0 && <div>Sem avaliações até o momento</div>}
      </div>

      <div className="review-form-container">
        <h3>Deixe seu review</h3>

        <ReviewForm />
      </div>
    </section>
  );
}
