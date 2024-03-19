import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Avatar, Card, Cell } from "@vkontakte/vkui";
import { CustomAccordion } from "../../components/accordion/accordion";

export const CostInCart = () => {
  const products = useSelector((state: RootState) => state.products);

  const price = products.reduce(
    (acc, product) => acc + product.count * product.price,
    0
  );

  return (
    <Card mode="outline" className="col-span-1 p-4 h-fit max-[768px]:w-full">
      <CustomAccordion title={`Итого: ${Math.round(price)} руб.`}>
        {products.map((product) => (
          <Cell
            subtitle={`суммарная стоимость ${Math.round(
              product.count * product.price
            )}₽`}
            after={
              <Avatar
                className="ml-10"
                size={20}
                children={<p className="p-2">{product.count}</p>}
              />
            }
          >
            {product.title}
          </Cell>
        ))}
      </CustomAccordion>
    </Card>
  );
};
