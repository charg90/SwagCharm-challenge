import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ width: "336px", height: "394px" }} elevation={0}>
      <Box maxWidth="336px" height="336px" bgcolor="primary.dark09" />
      <CardContent sx={{ padding: "0px" }}>
        <Typography fontSize="16px" fontWeight="700">
          Unisex Short Sleeve T-Shirt
        </Typography>
        <Grid display="flex" gap={9}>
          <Typography fontSize="15px" fontWeight="600">
            {" "}
            $10 - $24
          </Typography>
          <Typography fontSize="14px">
            {" "}
            <Box
              component="span"
              color=" primary.dark05"
              fontSize="14px"
              fontWeight="400"
            >
              Minimum:
            </Box>{" "}
            24
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
