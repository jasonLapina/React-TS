import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface courseGoalProp {
  title: string;
  children: ReactNode;
}

export default function CourseGoal({ title, children }: courseGoalProp) {
  return (
    <Box p='16px' borderRadius='20px' as='article'>
      <Box>
        <Heading mb='16px' as='h2'>
          {title}
        </Heading>
        <Text>{children}</Text>
      </Box>
    </Box>
  );
}
