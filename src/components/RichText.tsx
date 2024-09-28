"use client";
import "react-quill/dist/quill.snow.css";
import FormContainer from "../containers/FormContainer";
import dynamic from "next/dynamic";
import { Controller } from "react-hook-form";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

interface RichTextProps {
  label: string;
  id: string;
  isRequired: boolean;
  control: unknown;
  rules?: unknown;
  error?: string;
}

const RichText = ({ label, id, isRequired, control, rules = {}, error }:RichTextProps) => {
  return (
    <FormContainer label={label} id={id} isRequired={isRequired} error={error}>
      <Controller
        name={id}
        control={control}
        rules={rules}
        render={({ field }) => (
          <ReactQuill
            theme="snow"
            value={field.value}
            onChange={(val) => field.onChange(val)}
          />
        )}
      />
    </FormContainer>
  );
};

export default RichText;
