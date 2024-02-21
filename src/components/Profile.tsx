import { Badge, Paper, Text, rem } from "@mantine/core";
import { IconBrandReact } from "@tabler/icons-react";
import Contact from "./Contact";

const Profile = () => {
  return (
    <Paper ta="center" withBorder radius="xl" p="xl">
      <Text
        size={rem(64)}
        fw={700}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        my="xs"
      >
        Vishal Kondle
      </Text>
      <Badge
        p="lg"
        variant="transparent"
        ff="mono"
        size={rem(24)}
        tt="capitalize"
        fw={700}
        radius="sm"
        color="green"
        leftSection={<IconBrandReact />}
      >
        React Developer
      </Badge>
      <Contact />
    </Paper>
  );
};

export default Profile;
