import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import BreadcrumbsSection from "../../components/BreadcrumbsSection";
import RoundedButton from "../../components/Buttons/RoundedButton";
import FormDropzone from "../../components/FormComponents/FormDropzone";
import FormTextField from "../../components/FormComponents/FormTextField";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import { Avatar2 } from "../../utils/dummyData";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Author", href: "#" },
  { label: "Edit Profile", active: true },
];

const ProfileEdit = () => {
  const theme = useTheme();

  const hookForm = useForm();
  const { handleSubmit, reset, control } = hookForm;

  const _image = useWatch({ control, name: "image" }) || Avatar2;
  const image =
    typeof _image === "object" ? URL.createObjectURL(_image) : _image;

  const onSubmit = (data, e) => {
    reset(); // reset after form submit
    console.log(data);
  };

  const SectionTitle = ({ children, disableMargin }) => (
    <Typography
      sx={{ fontSize: 20, fontWeight: 600, mb: !disableMargin && 2.5 }}
    >
      {children}
    </Typography>
  );

  const FieldLabel = ({ children }) => (
    <Typography sx={{ fontSize: 14, fontWeight: 300, mb: 1 }}>
      {children}
    </Typography>
  );

  return (
    <Box
      sx={{
        marginTop: `-${NAVBAR_HEIGHT_MOBILE}px`,
        [theme.breakpoints.up("md")]: {
          marginTop: `-${NAVBAR_HEIGHT_DESKTOP}px`,
        },
      }}
    >
      <BreadcrumbsSection title="Edit Profile" breadcrumbs={breadcrumbs} />

      <Container maxWidth="xl" sx={{ py: 10 }}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={{ xs: 3, md: 6, lg: 9 }}>
            {/* Preview */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2.5, borderRadius: '20px' }}>
                <Stack spacing={2}>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: 270,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: 20,
                      marginBottom: 5,
                    }}
                  />

                  <RoundedButton variant="white">
                    Upload New Photo
                  </RoundedButton>

                  <RoundedButton variant="white">Delete</RoundedButton>
                </Stack>
              </Paper>
            </Grid>

            {/* Form */}
            <Grid item xs={12} md={8} lg={9}>
              {/* Upload File */}
              <Box>
                <SectionTitle>Upload a Cover Image</SectionTitle>
                <FormDropzone name="image" control={control}>
                  <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      width: "100%",
                      [theme.breakpoints.up("md")]: { px: 6 },
                    }}
                  >
                    <Typography>Only types PNG or JPG under 5mb</Typography>
                    <RoundedButton variant="navbar">Upload file</RoundedButton>
                  </Stack>
                </FormDropzone>
              </Box>

              {/* Form */}
              <Grid
                container
                spacing={{ xs: 2, md: 4, lg: 6 }}
                sx={{ pt: { xs: 3, lg: 4 } }}
              >
                {/* Account Left side */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <SectionTitle disableMargin>Account Info</SectionTitle>

                    <Box>
                      <FieldLabel>Display name</FieldLabel>
                      <FormTextField
                        name="name"
                        control={control}
                        placeholder="John McAfee"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Custom URL</FieldLabel>
                      <FormTextField
                        name="url"
                        control={control}
                        placeholder="Axies.com/profile/johnmcafee"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Email</FieldLabel>
                      <FormTextField
                        name="email"
                        control={control}
                        placeholder="abc@gmail.com"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Bio</FieldLabel>
                      <FormTextField
                        name="name"
                        control={control}
                        multiline
                        rows={3}
                      />
                    </Box>
                  </Stack>
                </Grid>

                {/* Socials Right side */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <SectionTitle disableMargin>Your Social Media</SectionTitle>

                    <Box>
                      <FieldLabel>Facebook</FieldLabel>
                      <FormTextField
                        name="facebook"
                        control={control}
                        placeholder="@john_mcafee"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Twitter</FieldLabel>
                      <FormTextField
                        name="url"
                        control={control}
                        placeholder="@Nephew_Sam_"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Discord</FieldLabel>
                      <FormTextField
                        name="discord"
                        control={control}
                        placeholder="Discord Link"
                      />
                    </Box>

                    <Box>
                      <FieldLabel>Other</FieldLabel>
                      <FormTextField
                        name="other_link"
                        control={control}
                        placeholder="Any other link you have"
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

              {/* Submit */}
              <Stack direction="row" spacing={2} sx={{ pt: 5 }}>
                <RoundedButton
                  variant="navbar"
                  type="submit"
                  sx={{
                    width: 100,
                    [theme.breakpoints.up("md")]: { width: 150 },
                  }}
                >
                  Update Profile
                </RoundedButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ProfileEdit;
