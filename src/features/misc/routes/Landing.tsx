import { AppShell, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faShirt } from "@fortawesome/free-solid-svg-icons";

export function Landing() {
  const images = [
    "https://get.wallhere.com/photo/girl-brunette-thoughtful-Pen-thought-745631.jpg",
  ];
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <AppShell>
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
    </AppShell>
  );
}
