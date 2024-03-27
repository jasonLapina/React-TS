import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CourseGoal } from "../types";

interface AddGoalProp {
  addGoal: (goal: CourseGoal) => void;
}

export default function AddGoal({ addGoal }: AddGoalProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  function handleAdd() {
    if (
      titleRef.current?.value.trim().length === 0 ||
      descriptionRef.current?.value.trim().length === 0
    )
      return;

    addGoal({
      id: Math.random(),
      title: titleRef.current?.value ?? "",
      description: descriptionRef.current?.value ?? "",
    });

    onClose();
  }
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize='24px'
        _hover={{ bg: "none" }}
        variant='ghost'
        color='green.600'
      >
        + Create
      </Button>
      <Modal size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Goal</ModalHeader>
          <ModalCloseButton _hover={{ bg: "none", color: "red" }} />
          <ModalBody>
            <VStack gap='24px'>
              <Input ref={titleRef} placeholder='Title' />
              <Input ref={descriptionRef} placeholder='Short description' />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor='green'
              _hover={{ bgColor: "green.600" }}
              color='white'
              onClick={handleAdd}
            >
              Add goal
            </Button>
            <Button colorScheme='red' variant='ghost' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
