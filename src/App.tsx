import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import { useState } from "react";
import GoalList from "./components/GoalList";
import AddGoal from "./components/AddGoal";
import { CourseGoal } from "./types";

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: CourseGoal): void {
    const newGoal = {
      id: Math.random(),
      title: goal.title,
      description: goal.description,
    };
    setGoals((prev) => [...prev, newGoal]);
  }

  function handleDelete(id: number): void {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }
  return (
    <>
      <Header
        image={{
          src: "https://images.inc.com/uploaded_files/image/1920x1080/shutterstock_318915104_360067.jpg",
          alt: "goal",
        }}
      >
        My Course Goals
      </Header>
      <Box as='main' maxW='1020px' mx='auto' py='120px'>
        <AddGoal addGoal={handleAddGoal} />
        <GoalList goals={goals} deleteGoal={handleDelete} />
      </Box>
    </>
  );
}

export default App;
