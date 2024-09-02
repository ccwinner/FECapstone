import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../Context/alertContext";
import { useRef } from "react";

const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay style={{justifyContent: "center"}}>
        <AlertDialogContent
          py={4}
          px={6}
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
          width="50%"
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? "All good!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Close</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
export default Alert;
