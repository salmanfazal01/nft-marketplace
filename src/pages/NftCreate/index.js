import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BreadcrumbsSection from "../../components/BreadcrumbsSection";
import RoundedButton from "../../components/Buttons/RoundedButton";
import PreviewCreateNftCard from "../../components/Cards/PreviewCreateNftCard";
import FormDropzone from "../../components/FormComponents/FormDropzone";
import FormTextField from "../../components/FormComponents/FormTextField";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import SelectButton from "./SelectButton";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Create Item", active: true },
];

const NftCreate = () => {
  const theme = useTheme();
  const [method, setMethod] = useState(0);

  const hookForm = useForm();
  const { handleSubmit, reset, control, getValues } = hookForm;

  const onSubmit = (data, e) => {
    reset(); // reset after form submit
    console.log(data);
  };

  const SectionTitle = ({ children }) => (
    <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 2.5 }}>
      {children}
    </Typography>
  );

  const FixedPriceForm = () => (
    <>
      <Box>
        <SectionTitle>Price</SectionTitle>
        <FormTextField
          name="price"
          control={control}
          placeholder="Enter price for one item (ETH)"
        />
      </Box>

      <Box>
        <SectionTitle>Title</SectionTitle>
        <FormTextField name="title" control={control} placeholder="Item Name" />
      </Box>

      <Box>
        <SectionTitle>Description</SectionTitle>
        <FormTextField
          name="description"
          control={control}
          placeholder='e.g. "This is a very limited item"'
          multiline
          rows={3}
        />
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="flex-end"
        spacing={2}
      >
        <Box sx={{ width: "100%" }}>
          <SectionTitle>Royalties</SectionTitle>
          <FormTextField name="royalties" control={control} placeholder="5%" />
        </Box>

        <Box sx={{ width: "100%" }}>
          <SectionTitle>Size</SectionTitle>
          <FormTextField
            name="size"
            control={control}
            placeholder='e.g. "size"'
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <FormTextField
            name="abstraction"
            control={control}
            placeholder="Abstraction"
          />
        </Box>
      </Stack>
    </>
  );

  const AuctionForm = () => (
    <>
      <Box>
        <SectionTitle>Minimum Bid</SectionTitle>
        <FormTextField
          name="minimum_bid"
          control={control}
          placeholder="enter minimum bid"
        />
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: "100%" }}>
          <SectionTitle>Starting Date</SectionTitle>
          <FormTextField
            name="start_date"
            control={control}
            placeholder="mm/dd/yyyy"
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <SectionTitle>Expiration date</SectionTitle>
          <FormTextField
            name="end_date"
            control={control}
            placeholder="mm/dd/yyyy"
          />
        </Box>
      </Stack>

      <Box>
        <SectionTitle>Title</SectionTitle>
        <FormTextField name="title" control={control} placeholder="Item Name" />
      </Box>

      <Box>
        <SectionTitle>Description</SectionTitle>
        <FormTextField
          name="description"
          control={control}
          placeholder='e.g. "This is a very limited item"'
          multiline
          rows={3}
        />
      </Box>
    </>
  );

  const BidsForm = () => (
    <>
      <Box>
        <SectionTitle>Price</SectionTitle>
        <FormTextField
          name="price"
          control={control}
          placeholder="Enter price for one item (ETH)"
        />
      </Box>

      <Box>
        <SectionTitle>Minimum Bid</SectionTitle>
        <FormTextField
          name="minimum_bid"
          control={control}
          placeholder="enter minimum bid"
        />
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: "100%" }}>
          <SectionTitle>Starting Date</SectionTitle>
          <FormTextField
            name="start_date"
            control={control}
            placeholder="mm/dd/yyyy"
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <SectionTitle>Expiration date</SectionTitle>
          <FormTextField
            name="end_date"
            control={control}
            placeholder="mm/dd/yyyy"
          />
        </Box>
      </Stack>

      <Box>
        <SectionTitle>Title</SectionTitle>
        <FormTextField name="title" control={control} placeholder="Item Name" />
      </Box>

      <Box>
        <SectionTitle>Description</SectionTitle>
        <FormTextField
          name="description"
          control={control}
          placeholder='e.g. "This is a very limited item"'
          multiline
          rows={3}
        />
      </Box>
    </>
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
      <BreadcrumbsSection title="Create Item" breadcrumbs={breadcrumbs} />

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={{ xs: 3, md: 6, lg: 9 }}>
          {/* Preview */}
          <Grid item xs={12} md={4} lg={3}>
            <SectionTitle>Preview Item</SectionTitle>
            <PreviewCreateNftCard control={control} {...getValues()} />
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={8} lg={9}>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                {/* Upload File */}
                <Box>
                  <SectionTitle>Upload file</SectionTitle>
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
                      <Typography>
                        PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                      </Typography>

                      <RoundedButton variant="navbar">
                        Upload file
                      </RoundedButton>
                    </Stack>
                  </FormDropzone>
                </Box>

                {/* Select method */}
                <Box>
                  <SectionTitle>Select method</SectionTitle>
                  <Stack direction="row" spacing={2}>
                    <SelectButton
                      active={method === 0}
                      onClick={() => setMethod(0)}
                      icon={<LocalOfferIcon fontSize="small" />}
                    >
                      Fixed Price
                    </SelectButton>

                    <SelectButton
                      active={method === 1}
                      onClick={() => setMethod(1)}
                      icon={<WatchLaterIcon fontSize="small" />}
                    >
                      Time Auctions
                    </SelectButton>

                    <SelectButton
                      active={method === 2}
                      onClick={() => setMethod(2)}
                      icon={<PeopleAltIcon fontSize="small" />}
                    >
                      Open For Bids
                    </SelectButton>
                  </Stack>
                </Box>

                {/* Remaining Form */}
                {method === 0 ? (
                  <FixedPriceForm />
                ) : method === 1 ? (
                  <AuctionForm />
                ) : (
                  <BidsForm />
                )}

                {/* Submit */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  sx={{ pt: 2 }}
                >
                  <RoundedButton
                    variant="purple"
                    type="reset"
                    sx={{
                      width: 100,
                      [theme.breakpoints.up("md")]: { width: 150 },
                    }}
                  >
                    Reset
                  </RoundedButton>
                  <RoundedButton
                    variant="white-contained"
                    type="submit"
                    sx={{
                      width: 100,
                      [theme.breakpoints.up("md")]: { width: 150 },
                    }}
                  >
                    Submit
                  </RoundedButton>
                </Stack>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NftCreate;
