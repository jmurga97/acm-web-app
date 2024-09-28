"use client";
import {
  Flex,
  Checkbox,
} from "@chakra-ui/react";
import FormContainer from "../../containers/FormContainer";

interface AdminCheckboxProps {
  options: Array<any>;
  register: any;
  id: string;
  label: string;
  error: string;
  isRequired?: boolean;
}

const AdminCheckbox = ({ options, register, id, label, error, isRequired = false }:AdminCheckboxProps) => {
  return (
    <FormContainer label={label} error={error} isRequired={isRequired} id={id}>
      <Flex gap={5} flexWrap="wrap">
        {options.length > 0 &&
          options.map((option, index) => (
            <Checkbox
              {...register(id)}
              value={option.id}
              key={`option ${option} - ${index}`}
              size="sm"
              fontSize="xs"
              iconColor="brand.100"
            >
              {option.title}
            </Checkbox>
          ))}
      </Flex>
    </FormContainer>
  );
};

export default AdminCheckbox;
