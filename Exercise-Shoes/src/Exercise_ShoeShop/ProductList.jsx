import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  const { data, handleProductDetail, handleCarts } = props;
  // console.log("data: ", data);
  return (
    <div className="row">
      {data.map((value, index) => {
        return (
          <ProductItem
            key={value.id}
            product={value}
            handleProductDetail={handleProductDetail}
            handleCarts={handleCarts}
          />
        );
      })}
    </div>
  );
};
