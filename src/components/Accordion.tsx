import { ActionIcon, Group, Paper, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface Props {
  title: string;
  content: React.ReactElement;
}

const Accordion = ({ title, content }: Props) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Paper withBorder radius="xl" p="xl">
      <Group justify="space-between" wrap="nowrap">
        <Text size={rem(30)} ta="left" fw={700}>
          {title}
        </Text>
        <ActionIcon variant="transparent" color="dark" onClick={toggle}>
          {opened ? (
            <IconChevronUp style={{ width: rem(28), height: rem(28) }} />
          ) : (
            <IconChevronDown style={{ width: rem(28), height: rem(28) }} />
          )}
        </ActionIcon>
      </Group>
      {opened && content}
    </Paper>
  );
};

export default Accordion;
