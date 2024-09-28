"use client";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface FormContainerProps {
  children: React.ReactNode;
  isRequired?: boolean;
  error?: string;
  id?: string;
  label?: string;
}

const FormContainer = ({ children, isRequired = false, error, id, label }:FormContainerProps) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={error}>
      <FormLabel htmlFor={id} fontSize="xs">
        {label}
      </FormLabel>
      {children}
      <FormErrorMessage fontSize="xs">
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormContainer;
