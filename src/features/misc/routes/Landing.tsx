import {
  AppShell,
  Image,
  Stack,
  Group,
  Header,
  Text,
  Footer,
  ActionIcon,
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
  Switch,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumpster,
  faDumpsterFire,
  faEnvelope,
  faMoon,
  faPenToSquare,
  faPhoneVolume,
  faShirt,
  faSun,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const theme = useMantineTheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          header={
            <Header height={65} p="sm">
              <Group position="apart">
                <Group spacing="sm">
                  <FontAwesomeIcon icon={faToriiGate} />
                  <Text
                    variant="gradient"
                    fz={25}
                    fw={700}
                    gradient={{ from: "pink.7", to: "pink.9", deg: 45 }}
                  >
                    You're finally awake, welcome
                  </Text>
                  <FontAwesomeIcon icon={faToriiGate} />
                </Group>
                <Group>
                  <ActionIcon size="lg" radius="md">
                    <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
                  </ActionIcon>
                  <ActionIcon size="lg" radius="md">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </ActionIcon>
                  <Switch
                    onChange={(event) => {
                      setColorScheme("dark");
                      if (colorScheme === "dark") {
                        setColorScheme("light");
                      }
                    }}
                    size="md"
                    color={colorScheme === "dark" ? "dark" : "grey.0"}
                    onLabel={
                      <FontAwesomeIcon
                        size="sm"
                        icon={faSun}
                        color={theme.colors.yellow[4]}
                      />
                    }
                    offLabel={
                      <FontAwesomeIcon
                        size="sm"
                        icon={faMoon}
                        color={theme.colors.gray[6]}
                      />
                    }
                  />
                </Group>
              </Group>
            </Header>
          }
          footer={
            <Footer height={60} p="md">
              To be Designed
            </Footer>
          }
        >
          {/* Body */}
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
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
