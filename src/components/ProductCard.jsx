import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (

      <div className="card my-4" style={{width:'18rem'}}>
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text ">Price: ${product.price}</p>
          <p className="card-text ">Rating: {product.rating}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">BUY Now</Link>
        </div>
      </div>

  )
}

export default ProductCard
