import { Box, Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderProp {
  image: { src: string; alt: string };
  children: ReactNode;
}

export default function Header(props: HeaderProp) {
  return (
    <Box
      maxW='1080px'
      gap='40px'
      mx='auto'
      as='header'
      display='flex'
      alignItems='center'
      justifyContent='center'
      py='40px'
    >
      <Image
        w='80px'
        aspectRatio='1/1'
        borderRadius='full'
        src={props.image.src}
        alt={props.image.alt}
      />
      <Heading>{props.children}</Heading>
    </Box>
  );
}
