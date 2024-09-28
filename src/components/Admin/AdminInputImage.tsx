"use client";
import { Text } from "@chakra-ui/react";
import InputImage from "./InputImage";
import FormContainer from "../../containers/FormContainer";

interface AdminInputImageProps {
  error: string;
  label: string;
  id: string;
  register: any;
  isRequired?: boolean;
  img: string;
  path: string;
  options?: any;
  desktop?: boolean;
  maxSize?: number;
  isSquare?: boolean;
}

const AdminInputImage = ({
  error,
  label,
  id,
  register,
  isRequired = false,
  img,
  path,
  options,
  desktop = false,
  maxSize,
  isSquare = false
}:AdminInputImageProps) => {
  return (
    <FormContainer label={label} error={error} isRequired={isRequired} id={id}>
      <Text mb={2} fontSize="xs" color="brand.500">
        {path}
      </Text>
      <InputImage
        img={img}
        register={register}
        id={id}
        options={options}
        desktop={desktop}
        maxSize={maxSize}
        isSquare={isSquare}
      />
    </FormContainer>
  );
};

export default AdminInputImage;
