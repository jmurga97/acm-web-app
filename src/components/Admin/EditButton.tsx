"use client";
import { Spinner, Button, Flex } from "@chakra-ui/react";
import IconButton from "../IconButton";
import { AiOutlineClose } from "react-icons/ai";

interface EditButtonProps {
  enableFields: () => void;
  loader?: boolean;
  disabled?: boolean;
  save: () => void;
}

const EditButton = ({ enableFields, loader, disabled, save }:EditButtonProps) => {
  if (disabled) {
    return (
      <Button
        bg="brand.100"
        color="white"
        boxShadow="md"
        size="sm"
        mt="10px"
        onClick={() => enableFields()}
      >
        Editar
      </Button>
    );
  } else {
    return (
      <Flex gap={5} mt="10px" alignItems="center">
        <Button
          bg="brand.300"
          color="white"
          boxShadow="md"
          size="sm"
          onClick={() => save()}
        >
          {loader ? <Spinner color="white" size="xs" /> : <>Guardar</>}
        </Button>
        <IconButton
          size="xs"
          icon={<AiOutlineClose />}
          variant="outline"
          handleClick={enableFields}
          style={{
            borderColor: "red",
            color: "red",
          }}
        />
      </Flex>
    );
  }
};

export default EditButton;
