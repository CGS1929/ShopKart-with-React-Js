import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProducts] = useState({});

  const fetchProdut = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProdut();
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="img-fluid mb-3"
      />
      <p style={{fontWeight:'bold'}}>Description: {product.description}</p>
      <p style={{fontWeight:'bold'}} className="card-text ">Rating: {product.rating}</p>
      <p style={{fontSize:'2rem',fontWeight:'bolder'}}>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
