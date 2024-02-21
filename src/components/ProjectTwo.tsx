import { Badge, Box, Group, List, Text, ThemeIcon, rem } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTypescript,
  IconCircleCheck,
} from "@tabler/icons-react";

const ProjectTwo = () => {
  const skills = [
    {
      label: "React JS",
      color: "blue",
      icon: <IconBrandReact size={14} />,
    },
    {
      label: "React Native",
      color: "blue",
      icon: <IconBrandReactNative size={14} />,
    },
    {
      label: "Node JS",
      color: "green",
      icon: <IconBrandNodejs size={14} />,
    },
    {
      icon: <IconBrandRedux size={14} />,
      label: "Redux",
      color: "indigo",
    },
    {
      icon: <IconBrandTypescript size={14} />,
      label: "Typescript",
      color: "blue",
    },
    {
      icon: <IconBrandMongodb size={14} />,
      label: "MongoDB",
      color: "green",
    },
    {
      icon: <IconBrandGithub size={14} />,
      label: "Github",
      color: "dark",
    },
  ];
  const responsibilites = [
    "Developing and implementing highly responsive user interface components using react.",
    "Unit testing before pushing code.",
    "Reviewing application requirements and interface designs.",
    "Monitoring and improving front-end performance.",
    "Understanding the client requirement before working on it.",
    "Connecting with Backend team for request and response data structure in API.",
  ];
  return (
    <Box mt="xs">
      <Text fw={500}>Wipro Technologies</Text>
      <Text c="gray">June 2023 - Present</Text>
      <Group my="xs">
        {skills.map(({ color, icon, label }) => (
          <Badge leftSection={icon} key={label} color={color} variant="light">
            {label}
          </Badge>
        ))}
      </Group>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        {responsibilites.map((responsibility) => (
          <List.Item>{responsibility}</List.Item>
        ))}
      </List>
    </Box>
  );
};

export default ProjectTwo;
