import { Badge, Box, Group, List, Text, ThemeIcon, rem } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconCircleCheck,
} from "@tabler/icons-react";

const ProjectOne = () => {
  const skills = [
    {
      label: "React JS",
      color: "blue",
      icon: <IconBrandReact size={14} />,
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
    "Work with other developers to ensure that the website is functional and visually appealing.",
    "Collaborate with back-end web developers and programmers to improve usability.",
    "Conduct testing of completed applications, websites and software to Assess user experience.",
  ];
  return (
    <Box mt="xs">
      <Text fw={500}>Wipro Technologies</Text>
      <Text c="gray">Aug 2021 - May 2023</Text>
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

export default ProjectOne;
