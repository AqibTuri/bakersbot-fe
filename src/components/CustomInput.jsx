import { FormGroup, InputLabel, OutlinedInput } from "@mui/material";

const CustomInput = ({ label, placeholder, ...rest }) => {
  const { className } = rest;
  return (
    <FormGroup className={`${className} flex flex-col gap-2 w-full`}>
      <InputLabel htmlFor={label} className="!text-white">
        {label}
      </InputLabel>
      <OutlinedInput
        id={label}
        placeholder={placeholder || `Enter Your ${label}`}
        classes={{
          input:
            "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2 w-full",
        }}
      />
    </FormGroup>
  );
};

export default CustomInput;
