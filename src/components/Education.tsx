import { Text, Timeline, rem } from "@mantine/core";
import { IconIdBadge, IconIdBadge2 } from "@tabler/icons-react";

const Education = () => {
  return (
    <Timeline mt="xl" active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<IconIdBadge2 style={{ width: rem(16), height: rem(16) }} />}
        color="blue"
        title="SES Polytechnic"
      >
        <Text c="dimmed" size="sm">
          Diploma in Computer Technology
        </Text>
        <Text size="xs" mt={4}>
          Jun 2015 - Jun 2018
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconIdBadge style={{ width: rem(16), height: rem(16) }} />}
        title="VVP Institute of Engineering and Technology"
        color="green"
      >
        <Text c="dimmed" size="sm">
          B.Tech in Computer Science & Engineering
        </Text>
        <Text size="xs" mt={4}>
          Aug 2018 - Aug 2021
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

export default Education;
