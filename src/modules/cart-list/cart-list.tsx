import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addCart,
  deleteCart,
  initProducts,
  removeCart,
} from "../../store/slices/products-slice";
import { getProducts } from "./api/get-products";
import { CartProduct } from "../../components/card-product/card-product";
import { Group } from "@vkontakte/vkui";
import { ActionsCardProduct } from "../../components/actions-card-product/actions-card-product";

export const CartList = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncEffect = async () => {
      const products = await getProducts();
      dispatch(initProducts(products));
    };
    asyncEffect();
  }, []);

  return (
    <Group
      mode="plain"
      className="flex flex-col items-center gap-y-4 col-span-2 max-h-screen overflow-y-auto scroll-smooth"
    >
      {products.map((product, idx) => (
        <CartProduct
          title={product.title}
          count={product.count}
          imgSrc={product.image}
          imgAlt={product.title}
          price={product.price}
          description={product.description}
        >
          <ActionsCardProduct
            count={product.count}
            addHandler={() => dispatch(addCart(idx))}
            removeHandler={() => dispatch(removeCart(idx))}
            deleteHandler={() => dispatch(deleteCart(idx))}
          />
        </CartProduct>
      ))}
    </Group>
  );
};
