"use client";
import { FormErrorMessage, Select } from "@chakra-ui/react";
import FormContainer from "../../containers/FormContainer";

interface AdminSelectorProps {
  error: string;
  selectors: Array<any>;
  label: string;
  id: string;
  options?: any;
  register: any;
  isRequired?: boolean;
}

const AdminSelector = ({
  error,
  selectors,
  label,
  id,
  options = {},
  register,
  isRequired = false,
}:AdminSelectorProps) => {
  return (
    <FormContainer label={label} error={error} isRequired={isRequired} id={id}>
      <Select placeholder={label} id={id} {...register(id, options)} size="sm">
        {selectors.map((item) =>
          item.id ? (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ) : (
            <option key={item} value={item}>
              {item}
            </option>
          )
        )}
      </Select>
      <FormErrorMessage fontSize="xs">
        {error && error.message}
      </FormErrorMessage>
    </FormContainer>
  );
};

export default AdminSelector;
