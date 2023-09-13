import {
  AppShell,
  Image,
  Stack,
  Group,
  Header,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faShirt } from "@fortawesome/free-solid-svg-icons";

export function Landing(): JSX.Element {
  const images = [
    "https://get.wallhere.com/photo/girl-brunette-thoughtful-Pen-thought-745631.jpg",
    "https://images3.alphacoders.com/132/1329618.png",
    "https://images2.alphacoders.com/132/1320348.jpeg",
    "https://images2.alphacoders.com/132/1325881.jpeg",
  ];
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <AppShell>
      <Header height={75} p="md" fixed>
        <Group spacing="xs">
          {/* <ThemeIcon icon={faShirt} size="xl" style={{ color: "#F06595" }} /> */}
          <Text
            variant="gradient"
            fz={25}
            fw={700}
            gradient={{ from: "#A61E4D", to: "cyan", deg: 45 }}
          >
            You're finally awake, welcome.
          </Text>
        </Group>
      </Header>

      <Stack>
        <Carousel
          slideSize="70%"
          height={600}
          slideGap="md"
          loop
          dragFree
          withIndicators
        >
          {slides}
        </Carousel>
      </Stack>
    </AppShell>
  );
}
