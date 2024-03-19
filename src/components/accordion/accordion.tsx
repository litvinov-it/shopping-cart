import { Accordion } from "@vkontakte/vkui";

interface IProps {
  title: string;
  children: React.ReactNode;
}

export const CustomAccordion = ({ title, children }: IProps) => {
  return (
    <Accordion>
      <Accordion.Summary>{title}</Accordion.Summary>
      <Accordion.Content className="overflow-auto max-h-96">{children}</Accordion.Content>
    </Accordion>
  );
};
