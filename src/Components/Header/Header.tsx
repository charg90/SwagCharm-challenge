import { headerHelper } from "../../helper/HeaderHelper";
import Box from "@mui/material/Box";

import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  console.log(headerHelper);
  return (
    <Box
      bgcolor="primary.dark09"
      height="64px"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Container maxWidth="xl">
        <Grid container gap={4}>
          {headerHelper.map((info) => (
            <Grid
              item
              key={info.id}
              height="64px"
              display="flex"
              alignItems="center"
            >
              <Typography
                fontWeight="400"
                color="primary.dark04"
                fontSize="15px"
              >
                {" "}
                {info.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
