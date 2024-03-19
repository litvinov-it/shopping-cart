import { Group } from "@vkontakte/vkui";
import { CartList } from "../../modules/cart-list/cart-list";
import { CostInCart } from "../../modules/cots-in-cart/cost-in-cart";

export const HomePage = () => {
  return (
    <main>
      <Group mode="plain" className="h-screen grid grid-cols-3 mx-2 gap-4 max-[768px]:flex max-[768px]:flex-col-reverse max-[768px]:items-center">
        <CartList />
        <CostInCart />
      </Group>
    </main>
  );
};
