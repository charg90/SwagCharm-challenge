import Grid from "@mui/material/Grid";
import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { RecomendationHelper } from "../../helper/RecomendationHelper";
import Typography from "@mui/material/Typography";
const Recomendation = () => {
  return (
    <>
      <Typography fontSize="24px" fontWeight="700" mb={2}>
        You might also like
      </Typography>
      <Grid container justifyContent="space-between">
        {RecomendationHelper.map((recomendation) => (
          <Grid item key={recomendation.id}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Recomendation;
