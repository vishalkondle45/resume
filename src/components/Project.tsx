import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Group,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

interface ProjectProp {
  images: string[];
  skills: {
    color: string;
    label: string;
    icon: JSX.Element;
  }[];
  timeline: string;
  points: string[];
  title: string;
  github: string;
}

interface Props {
  project: ProjectProp;
}

export default function Project({ project }: Props) {
  return (
    <Card shadow="xl" radius="xl" withBorder>
      <Card.Section>
        <Carousel
          withIndicators
          height={200}
          dragFree
          slideGap="md"
          align="start"
          loop
        >
          {project.images.map((image) => (
            <Carousel.Slide>
              <Image fit="fill" src={image} alt="Image not found" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>
      <Group justify="space-between" mt="xs">
        <Text ff="mono" fw={700}>
          {project.title}
        </Text>
      </Group>
      <Text size="sm" c="dimmed">
        {project.timeline}
      </Text>
      <Group mt="xs">
        <AvatarGroup>
          {project.skills.map((skill) => (
            <Tooltip label={skill.label} key={skill.label}>
              <Avatar variant="filled" color={skill.color}>
                {skill.icon}
              </Avatar>
            </Tooltip>
          ))}
        </AvatarGroup>
      </Group>
      <Group justify="space-between" grow>
        <Button
          color="dark"
          fullWidth
          mt="md"
          radius="md"
          component="a"
          href={project.github}
          target="_blank"
          leftSection={<IconBrandGithub size={18} />}
        >
          Github
        </Button>
        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          leftSection={<IconWorld size={18} />}
        >
          Live
        </Button>
      </Group>
    </Card>
  );
}
