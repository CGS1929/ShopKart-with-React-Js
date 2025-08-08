import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoriesFilter";
import loadingGif from "../assets/loading.gif";
import SearchBar from "../components/searchbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoding] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  let query = "https://dummyjson.com/products";

  if (category) {
    query = `https://dummyjson.com/products/category/${category}`;
  } else if(search)
  {
    query = `https://dummyjson.com/products/search?q=${search}`;
  }

  const fetchProducts = async () => {
    const res = await fetch(query);
    const data = await res.json();
    setProducts(data.products);
    setLoding(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [category,search]);

  return (
    <div className="container-fluid mt-4 text-center">
      <h1 className="container mt-4">Home</h1>
      <SearchBar setSearch={setSearch} />
      <CategoryFilter setCategory={setCategory} />
      {loading ? (
        <div className="text-center mt-5">
          <img src={loadingGif} alt="Loading..." width={100} />
        </div>
      ) : (
        <div className="row mt-4 justify-content-around">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
