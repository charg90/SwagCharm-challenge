import { Badge, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
import DrawerMobile from "./DrawerMobiel";

const NavBar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  return (
    <>
      <Box>
        <DrawerMobile />
      </Box>
      <Box
        sx={{
          // backgroundColor: "primary.dark01",
          height: "88px",
          display: { xs: "none", md: "flex" },
        }}
        display="flex"
        alignItems="center"
        bgcolor="primary.dark01"
      >
        <Container maxWidth="xl">
          <Grid container direction="row" alignItems="center">
            <Grid
              item
              width="172px"
              height="48px"
              bgcolor="primary.dark09"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography color="primary.dark06" fontWeight="400">
                  {" "}
                  Logo
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              height="40px"
              width="40%"
              display="flex"
              alignItems="center"
              ml={10}
            >
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50px",
                  width: "100%",
                  paddingX: "10px",
                  maxWidth: "628px",
                }}
              >
                <SearchIcon />

                <InputBase
                  placeholder="Search Products"
                  sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                />
              </Paper>
            </Grid>
            <Grid
              item
              sx={{ flexGrow: 1 }}
              display="flex"
              justifyContent="flex-end"
              gap={2}
            >
              <Box display="flex" alignItems="center" flexDirection="row">
                <Person4OutlinedIcon color="primary" />

                <Typography color="#fff" fontSize="15px" fontWeight="400">
                  Sign In
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="row">
                <Badge
                  badgeContent={cartItems.length}
                  color="secondary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <BusinessCenterIcon color="primary" />
                </Badge>
                <Typography color="#fff" fontSize="15px" fontWeight="400">
                  Cart{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NavBar;
