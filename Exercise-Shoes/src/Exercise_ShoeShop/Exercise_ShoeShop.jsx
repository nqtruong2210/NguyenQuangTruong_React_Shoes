import { useState } from "react";
import { ProductDetailModal } from "./ProductDetailModal";
// import { ProductItem } from "./ProductItem";
import { ProductList } from "./ProductList";
import dataJson from "./dataShoes.json";
import { CartModal } from "./CartModal";
// console.log("dataJson: ", dataJson);

export const Exercise_ShoeShop = () => {
  const [productDetail, setProductDetail] = useState({});

  const handleProductDetail = (data) => {
    return setProductDetail(data);
  };

  /* Ví dụ PrevState
    const [number, setNumber] = useState(10)
    number = 10
    setNumber((prevState) =>{
      // 10
    })
    Hiểu đơn giản prevState chính là State, truyền vào set 1 callback
  */

  const [carts, setCarts] = useState([]);

  const handleCarts = (data) => {
    // setCarts([...carts, { ...data, cartQuantity: 1 }]);
    setCarts((preveState) => {
      // Kiểm tra trong giỏ hàng đang có sản phẩm đang muốn thêm hay chưa?
      const index = preveState.findIndex((value) => value.id === data.id);
      // Chưa tồn tại trong giỏ hàng
      if (index === -1) {
        preveState.push({ ...data, cartQuantity: 1 });
      } else {
        preveState[index].cartQuantity += 1;
      }
      return [...preveState];
    });
  };

  // quantity: 1 !! -1
  // 1: Button +
  // 2: Button -
  const handleCartQuantity = (dataId, quantity) => {
    console.log("quantity: ", quantity);
    console.log("dataId: ", dataId);
    setCarts((preveState) => {
      const index = preveState.findIndex((value) => value.id === dataId);
      preveState[index].cartQuantity =
        preveState[index].cartQuantity + quantity || 1;
      return [...preveState];
    });
  };

  const deleteCart = (dataId) => {
    setCarts((preveState) => {
      return preveState.filter((value) => value.id != dataId);
    });
  };
  return (
    <div className="container mt-3">
      <div>
        <h1 className="text-center fw-bold">Exercise-Shoes</h1>
        <p
          className="fs-5 text-end"
          style={{
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          Giỏ hàng
          <i className="fa-solid fa-cart-shopping me-2" />
        </p>
      </div>

      <ProductList
        data={dataJson}
        handleProductDetail={handleProductDetail}
        handleCarts={handleCarts}
      />
      <ProductDetailModal productDetail={productDetail} />
      <CartModal
        carts={carts}
        handleCartQuantity={handleCartQuantity}
        deleteCart={deleteCart}
      />
    </div>
  );
};
