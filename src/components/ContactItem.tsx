import { Anchor, Code, Group, ThemeIcon } from "@mantine/core";

interface Props {
  content: string;
  icon: JSX.Element;
  title?: string;
  color: string;
}

const ContactItem = ({ icon, content, title, color }: Props) => {
  return (
    <Anchor href={content} target="_blank">
      <Group wrap="nowrap" gap="xs">
        <ThemeIcon color={color} variant="transparent">
          {icon}
        </ThemeIcon>
        <Code style={{ whiteSpace: "nowrap" }}>{title || content}</Code>
      </Group>
    </Anchor>
  );
};

export default ContactItem;
