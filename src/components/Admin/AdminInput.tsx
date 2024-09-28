"use client";
import { Input } from "@chakra-ui/react";
import FormContainer from "../../containers/FormContainer";

interface AdminInputProps {
  error: string;
  defaultValue: string;
  label: string;
  id: string;
  options?: any;
  register: any;
  isRequired?: boolean;
}

const AdminInput = ({
  error,
  defaultValue,
  label,
  id,
  options = {},
  register,
  isRequired = false,
}:AdminInputProps) => {
  return (
    <FormContainer label={label} error={error} isRequired={isRequired} id={id}>
      <Input
        id={id}
        {...register(id, options)}
        size="sm"
        defaultValue={defaultValue}
      />
    </FormContainer>
  );
};

export default AdminInput;
