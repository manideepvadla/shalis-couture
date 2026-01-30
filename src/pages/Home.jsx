import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import saree from '../logos/saree.jpg';
import div from '../logos/div.jpeg';
import fashionsale from '../logos/fashionsale.jpeg';
import picoftheweek from '../logos/picoftheweek.jpg';
import shalis from '../logos/shalis.png';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  // Local images of Indian women dresses
  const dressImages = [
    { url: saree, alt: "Saree Dress" },
    { url: div, alt: "Divya Dress" },
    { url: fashionsale, alt: "Fashion Sale" },
    { url: picoftheweek, alt: "Pic of the Week" },
    { url: shalis, alt: "Shalis Couture" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      {/* Fancy Carousel */}
      <div style={{ maxWidth: 1100, margin: '0 auto', marginTop: 24, marginBottom: 32, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', height: 600 }}>
        <Slider {...sliderSettings}>
          {dressImages.map((img, idx) => (
            <div key={idx}>
              <img
                src={img.url}
                alt={img.alt}
                style={{ width: '100%', height: 600, objectFit: 'cover', objectPosition: 'top', borderRadius: 16 }}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Product Grid */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
