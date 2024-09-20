import "./ProductPage.css";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ReviewSection from "./ReviewSection";

export default function ProductPage() {
  return (
    <div className="product-page">
      <Header />
      <main className="container">
        <ProductDetails />
        <ReviewSection />
      </main>
    </div>
  );
}
