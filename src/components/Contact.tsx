import { SimpleGrid } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <>
      <SimpleGrid
        mt="lg"
        cols={{ base: 1, sm: 2 }}
        spacing="xl"
        verticalSpacing="xs"
      >
        <ContactItem
          color="blue"
          content="https://www.linkedin.com/in/vishal-kondle/"
          icon={<IconBrandLinkedin />}
        />
        <ContactItem
          color="green"
          content="tel:+917276718848"
          title="+91 7276718848"
          icon={<IconPhoneCall />}
        />
        <ContactItem
          color="dark"
          content="https://github.com/vishalkondle45/"
          icon={<IconBrandGithub />}
        />
        <ContactItem
          color="red"
          content="mailto:vishal.kondle@gmail.com"
          title="vishal.kondle@gmail.com"
          icon={<IconMail />}
        />
      </SimpleGrid>
    </>
  );
};

export default Contact;
