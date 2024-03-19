import { Card, Text, Title } from "@vkontakte/vkui";

interface IProps {
  imgSrc: string;
  imgAlt: string;
  price: number;
  title: string;
  description: string;
  count: number;
  children: React.ReactNode;
}

export const CartProduct = ({
  imgSrc,
  imgAlt,
  price,
  title,
  description,
  count,
  children,
}: IProps) => {
  return (
    <Card className="w-full max-w-xl p-5" mode="outline">
      <img
        className="aspect-square max-w-80 object-contain mx-auto"
        src={imgSrc}
        alt={imgAlt}
      />
      <Title className="mt-4 mb-2" level="2">
        {title}
      </Title>
      <Text className="mb-4">{description}</Text>
      <div className="flex justify-between">
        <Text className="text-neutral-600 text-xl">
          <span className="text-sm text-neutral-400 uppercase">Цена: </span>
          {price}₽
        </Text>
        <Text className="text-neutral-600 text-xl">
          <span className="text-sm text-neutral-400 uppercase">
            Количество:{" "}
          </span>
          {count}
        </Text>
      </div>
      {children}
    </Card>
  );
};
