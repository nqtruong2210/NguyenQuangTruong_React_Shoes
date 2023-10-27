export const ProductItem = (props) => {
  const { product, handleProductDetail, handleCarts } = props;
  // console.log("product: ", product);
  // UI giống => Build Component dùng chung, khác nhau thì props truyền xuống
  return (
    <div className="col-3">
      <div className="card">
        <img src={product.image} alt="" />
        <div className="card-body">
          <p className="card-title text-center fw-bold">{product.name}</p>
          <p className="text-center text-danger">Price: {product.price}$</p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                handleCarts(product);
              }}
            >
              Buy
            </button>
            <button
              className="btn btn-outline-success "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleProductDetail(product)}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
