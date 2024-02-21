import {
  Container,
  Grid,
  MantineProvider,
  Paper,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import Accordion from "./components/Accordion";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { theme } from "./theme";

export default function App() {
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
          <Paper radius="xl" py="lg" withBorder>
            <Text size={rem(30)} ta="center" fw={700}>
              Projects
            </Text>
          </Paper>
          <Accordion
            title="UBS - Regulatory Reports Framework"
            content={<ProjectOne />}
          />
          <Accordion title="Optum - Solutran" content={<ProjectTwo />} />
        </Stack>
      </Container>
    </MantineProvider>
  );
}
