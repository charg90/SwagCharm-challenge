import {
  Badge,
  Button,
  Drawer,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { headerHelper } from "../../helper/HeaderHelper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box } from "@mui/system";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const DrawerMobile = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        display="flex"
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        p={2}
      >
        <Button
          onClick={() => setOpen(!open)}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon color="secondary" />
        </Button>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            width: "100%",
            paddingX: "10px",
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
      </Box>
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#091625",
            color: "#fff",
          },
        }}
        variant="persistent"
      >
        <Box display="flex" justifyContent="end">
          <Button onClick={() => setOpen(!open)}>
            <ChevronLeftIcon />
          </Button>
        </Box>
        <Box>
          <Typography color="#848A92" fontWeight="400" align="center">
            {" "}
            Logo
          </Typography>
        </Box>
        <List>
          {headerHelper.map((item) => (
            <ListItem key={item.id}>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Box padding={2}>
          <Box display="flex" alignItems="center" flexDirection="row">
            <Person4OutlinedIcon color="primary" />
            <Typography color="#fff" fontSize="15px" fontWeight="400">
              Sign In
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="row">
            <BusinessCenterIcon color="primary" />

            <Typography color="#fff" fontSize="15px" fontWeight="400">
              Cart{" "}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerMobile;
