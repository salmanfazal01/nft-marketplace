/* eslint-disable no-unused-vars */
import { Stack, Typography, useTheme } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";

const Dropzone = ({ onChange, children, ...rest }) => {
  const theme = useTheme();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // console.log({ acceptedFiles });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      {...getRootProps()}
      sx={{
        border: `1px solid ${theme.palette.primary.grey3}`,
        height: 100,
        borderRadius: "8px",
        p: 2,
      }}
    >
      <input {...getInputProps({ onChange })} />

      {/* {isDragActive && <Typography>Drop the files here ...</Typography>} */}

      {children}
    </Stack>
  );
};

const FormDropzone = ({ name, control, children, ...rest }) => {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone onChange={(e) => onChange(e.target.files[0])} {...rest}>
          {children}
        </Dropzone>
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};

export default FormDropzone;
