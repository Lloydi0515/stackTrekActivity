import "./MainProducts.css";
import Products from "../products.json";
import Pagination from "./Pagination";

const MainProducts = () => {
  return (
    <>
      <div className="card">
        {Products.slice(0, 10).map((product) => {
          return (
            <div
              className="card-header border border-warning m-4 text-primary"
              style={{ width: 18 + "rem" }}
              key={product.id}
            >
              <strong>{product.id}</strong>
              <br />
              <strong>{product.name}</strong>
              <br />
              <strong>{product.supplier}</strong>
              <br />
              <strong>{product.description}</strong>
              <br />
              <strong>{product.price}</strong>
              <br />
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default MainProducts;
