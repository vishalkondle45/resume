import "@mantine/carousel/styles.css";
import {
  Container,
  Grid,
  MantineProvider,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import {
  IconApi,
  IconBrandGit,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVercel,
} from "@tabler/icons-react";
import Accordion from "./components/Accordion";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Project from "./components/Project";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { theme } from "./theme";

export default function App() {
  const projects = [
    {
      images: [
        "https://vishalkondle.s3.eu-north-1.amazonaws.com/notes.png",
        "https://vishalkondle.s3.eu-north-1.amazonaws.com/todos.png",
        "https://vishalkondle.s3.eu-north-1.amazonaws.com/split-6.png",
        "https://vishalkondle.s3.eu-north-1.amazonaws.com/forum.png",
      ],
      skills: [
        {
          color: "blue",
          label: "React JS",
          icon: <IconBrandReact size={18} />,
        },
        {
          color: "dark",
          label: "Next JS",
          icon: <IconBrandNextjs size={18} />,
        },
        {
          color: "green",
          label: "Node JS",
          icon: <IconBrandNodejs size={18} />,
        },
        {
          color: "green",
          label: "MongoDB",
          icon: <IconBrandMongodb size={18} />,
        },
        {
          color: "blue",
          label: "Rest API's",
          icon: <IconApi size={18} />,
        },
        {
          color: "blue",
          label: "Typescript",
          icon: <IconBrandTypescript size={18} />,
        },
        {
          color: "red",
          label: "Git",
          icon: <IconBrandGit size={18} />,
        },
        {
          color: "dark",
          label: "Vercel",
          icon: <IconBrandVercel size={18} />,
        },
      ],
      timeline: "Jan 2023 - Jun 2023",
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
      title: "DevLovePer",
      github: "https://github.com/vishalkondle45/devloveper",
    },
  ];

  return (
    <MantineProvider theme={theme}>
      <Container size="md">
        <Stack my="xl">
          <Profile />
          <Accordion title="Summary" content={<Summary />} />
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Accordion title="Experience" content={<Experience />} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Accordion title="Education" content={<Education />} />
            </Grid.Col>
          </Grid>
          <Accordion title="Skills" content={<Skills />} />
          <Text my="xs" size={rem(30)} ta="center" fw={700}>
            Profession Projects
          </Text>
          <Accordion
            title="UBS - Regulatory Reports Framework"
            content={<ProjectOne />}
          />
          <Accordion title="Optum - Solutran" content={<ProjectTwo />} />
          <Text my="xs" size={rem(30)} ta="center" fw={700}>
            Personal Projects
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            {projects?.map((project) => (
              <Project project={project} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </MantineProvider>
  );
}
