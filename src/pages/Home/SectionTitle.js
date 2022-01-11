import { Box, Stack } from "@mui/material";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";

const SectionTitle = ({ title, rightElement, ...props }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <ResponsiveText variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </ResponsiveText>
      <Box>{rightElement}</Box>
    </Stack>
  );
};

export default SectionTitle;
