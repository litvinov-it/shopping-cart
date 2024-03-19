import { Button, ButtonGroup } from "@vkontakte/vkui";
import { Icon24Delete, Icon16Add, Icon16Minus } from "@vkontakte/icons";

type DefaultFunc = () => void;

interface IProps {
  deleteHandler: DefaultFunc;
  addHandler: DefaultFunc;
  removeHandler: DefaultFunc;
  count: number;
}

export const ActionsCardProduct = ({
  addHandler,
  removeHandler,
  deleteHandler,
  count,
}: IProps) => {
  return (
    <>
      <ButtonGroup
        className="w-full py-2"
        mode="horizontal"
        gap="m"
        align="right"
      >
        <Button
          onClick={() => addHandler()}
          size="l"
          appearance="positive"
          disabled={count === 10}
        >
          <Icon16Add />
        </Button>
        <Button
          onClick={() => removeHandler()}
          size="l"
          appearance="positive"
          disabled={count === 1}
        >
          <Icon16Minus />
        </Button>
        <Button onClick={() => deleteHandler()} size="l" appearance="negative">
          <Icon24Delete />
        </Button>
      </ButtonGroup>
    </>
  );
};
