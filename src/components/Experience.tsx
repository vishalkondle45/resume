import { Text, Timeline, rem } from "@mantine/core";
import { IconBrandReact, IconCode } from "@tabler/icons-react";

const Experience = () => {
  return (
    <Timeline mt="xl" active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<IconCode style={{ width: rem(16), height: rem(16) }} />}
        color="blue"
        title="Oskar Technologies"
      >
        <Text c="dimmed" size="sm">
          Frontend Developer
        </Text>
        <Text size="xs" mt={4}>
          Dec 2020 - Jan 2021
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconBrandReact style={{ width: rem(16), height: rem(16) }} />}
        title="Wipro Technologies"
        color="green"
      >
        <Text c="dimmed" size="sm">
          Fullstack Developer
        </Text>
        <Text size="xs" mt={4}>
          Aug 2021 - Present
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

export default Experience;
