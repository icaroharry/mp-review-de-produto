import "./ProductDetails.css";
import ProductImage from "../assets/product.png";
import GreenStar from "../assets/green-star.svg";

export default function ProductDetails() {
  return (
    <div className="product-details">
      <img src={ProductImage} alt="Fone de Ouvido Escutante Deluxe On-Ear" />
      <div className="product-info">
        <h2>Fone de Ouvido Escutante Deluxe On-Ear</h2>
        <div className="price-container">
          <div className="price">
            <span>R$</span> 699
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img src={GreenStar} alt="Green Star" key={star} />
            ))}
          </div>
        </div>
        <ProductDescription />
        <ProductSpecifications />
      </div>
    </div>
  );
}

function ProductDescription() {
  return (
    <div className="description">
      <p>
        Eleve sua experiência sonora com o Fone de Ouvido Escutante Deluxe
        On-Ear, um acessório de áudio premium com design sofisticado e
        desempenho excepcional. Com drivers de alta qualidade e tecnologia de
        cancelamento de ruído avançada, este fone foi projetado para oferecer o
        máximo de conforto e um som cristalino. Ideal para quem busca estilo e
        alta performance, o Escutante Deluxe proporciona graves profundos,
        médios nítidos e agudos cristalinos, garantindo uma imersão completa em
        qualquer gênero musical.
      </p>
    </div>
  );
}

function ProductSpecifications() {
  return (
    <>
      <div className="divider" />
      <h3>Especificações:</h3>
      <ul>
        <li>Modelo: Escutante Deluxe On-Ear</li>
        <li>Material: Alumínio escovado com almofadas em couro macio</li>
        <li>Conectividade: Cabo reforçado de alta durabilidade</li>
        <li>
          Compatibilidade: Funciona com qualquer dispositivo que tenha entrada
          P2
        </li>
        <li>Impedância: 32Ω</li>
        <li>Arco: Flexível com detalhes em couro marrom</li>
        <li>Peso: 280g</li>
        <li>Resposta de frequência: 20Hz - 20kHz</li>
        <li>Sensibilidade: 100dB</li>
        <li>Impedância: 32Ω</li>
      </ul>
    </>
  );
}
