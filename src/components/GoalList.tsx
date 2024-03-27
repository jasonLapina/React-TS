import { Box, VStack, Text, HStack, Button, Center } from "@chakra-ui/react";
import { CourseGoal } from "../types";

interface GoalListProps {
  goals: CourseGoal[];
  deleteGoal: (id: number) => void;
}

export default function GoalList({ goals, deleteGoal }: GoalListProps) {
  if (goals.length < 1)
    return (
      <Center my='40px' fontSize='32px'>
        <Text>No goals added</Text>
      </Center>
    );
  return (
    <Box
      display='grid'
      gridTemplateColumns='1fr 1fr'
      rowGap='40px'
      columnGap='16px'
      mt='32px'
    >
      {goals.map((g, i) => (
        <Box key={g.id + i} borderBottom='solid 2px black' pb='16px'>
          <HStack
            bgColor={i % 2 === 0 ? "gray.100" : "blue.100"}
            borderRadius='10px'
            justifyContent='space-between'
            alignItems='start'
            px='24px'
            py='16px'
          >
            <VStack align='normal'>
              <Text fontSize='24px'>{g.title}</Text>
              <Text>{g.description}</Text>
            </VStack>
            <Button
              bg='none'
              color='red'
              variant='ghost'
              _hover={{ bg: "none", color: "red.800" }}
              onClick={() => deleteGoal(g.id)}
            >
              Delete
            </Button>
          </HStack>
        </Box>
      ))}
    </Box>
  );
}
