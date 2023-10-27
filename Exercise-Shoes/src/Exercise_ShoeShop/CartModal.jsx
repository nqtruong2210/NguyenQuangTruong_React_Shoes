import React from "react";

export const CartModal = ({ carts, handleCartQuantity, deleteCart }) => {
  console.log("carts: ", carts);
  // const { carts } = props;
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart-Modal
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* Nếu carts rỗng */}
              {!carts.length && (
                <h5 className="text-center text-danger">
                  Chưa có sản phẩm trong giỏ hàng
                </h5>
              )}
              {/* Nếu carts có sản phẩm */}
              {/* !! Quy đổi giá trị thành Boolean */}
              {!!carts.length && (
                <table className="table">
                  <thead>
                    <tr className="text">
                      <th>ID</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-start">
                    {carts.map((product, index) => {
                      return (
                        <tr key={product.id}>
                          <td className="d-flex flex-columns justify-content-center">
                            {index + 1}
                          </td>
                          <td>
                            <img
                              style={{
                                width: 80,
                                height: 100,
                              }}
                              src={product.image}
                              alt=""
                            />
                          </td>
                          <td
                            style={{
                              maxWidth: 200,
                            }}
                          >
                            {product.name}
                          </td>
                          <td
                            style={{
                              maxWidth: 400,
                            }}
                          >
                            {product.description}
                          </td>
                          <td className="text-center">{product.price}</td>
                          <td
                            className="d-flex text-center justify-content-between"
                            style={{
                              maxWidth: 400,
                            }}
                          >
                            <button
                              className="btn btn-outline-dark border-0 fs-5 p-1"
                              style={{
                                padding: 20,
                              }}
                              onClick={() => {
                                handleCartQuantity(product.id, -1);
                              }}
                            >
                              -
                            </button>
                            <span className="mt-2">{product.cartQuantity}</span>
                            <button
                              className="btn btn-outline-dark border-0 fs-5 p-1"
                              style={{
                                padding: 5,
                              }}
                              onClick={() => {
                                handleCartQuantity(product.id, 1);
                              }}
                            >
                              +
                            </button>
                          </td>
                          <td className="text-center">
                            {product.cartQuantity * product.price}
                          </td>
                          <td>
                            <button
                              className="btn btn-outline-dark border-0 fw-bold"
                              onClick={() => {
                                deleteCart(product.id);
                              }}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
