import { Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import {
  IconApi,
  IconBrandAws,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
} from "@tabler/icons-react";

const Skills = () => {
  const data = [
    {
      icon: <IconBrandReact />,
      label: "React JS",
      color: "blue",
    },
    {
      icon: <IconBrandNextjs />,
      label: "Next JS",
      color: "dark",
    },
    {
      icon: <IconBrandReactNative />,
      label: "React Native",
      color: "blue",
    },
    {
      icon: <IconBrandJavascript />,
      label: "Javascript",
      color: "yellow",
    },
    {
      icon: <IconBrandGithub />,
      label: "Github",
      color: "dark",
    },
    {
      icon: <IconBrandVscode />,
      label: "VS Code",
      color: "blue",
    },
    {
      icon: <IconBrandHtml5 />,
      label: "HTML",
      color: "red",
    },
    {
      icon: <IconBrandCss3 />,
      label: "CSS",
      color: "blue",
    },
    {
      icon: <IconBrandNodejs />,
      label: "Node JS",
      color: "green",
    },
    {
      icon: <IconBrandTailwind />,
      label: "Tailwind",
      color: "blue",
    },
    {
      icon: <IconBrandTypescript />,
      label: "Typescript",
      color: "blue",
    },
    {
      icon: <IconBrandDocker />,
      label: "Docker",
      color: "blue",
    },
    {
      icon: <IconBrandAws />,
      label: "AWS",
      color: "orange",
    },
    {
      icon: <IconBrandBootstrap />,
      label: "Bootstrap",
      color: "violet",
    },
    {
      icon: <IconBrandPhp />,
      label: "PHP",
      color: "indigo",
    },
    {
      icon: <IconBrandMongodb />,
      label: "MongoDB",
      color: "green",
    },
    {
      icon: <IconBrandRedux />,
      label: "Redux",
      color: "indigo",
    },
    {
      icon: <IconApi />,
      label: "Rest API's",
      color: "indigo",
    },
  ];
  return (
    <Group gap="xl" mt="xl">
      {data.map(({ color, icon, label }) => (
        <Paper key={label} w="max-content">
          <Stack align="center" gap={0}>
            <ThemeIcon variant="transparent" color={color + ".9"} radius="xl">
              {icon}
            </ThemeIcon>
            <Text fw={500}>{label}</Text>
          </Stack>
        </Paper>
      ))}
    </Group>
  );
};

export default Skills;
