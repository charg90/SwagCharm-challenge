import { Container } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/NavBar";
import Header from "../Components/Header/Header";
import Recomendation from "../Components/Recommendation/Recomendation";
import Cart from "../Components/Cart/Cart";

const LayoutCart = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Container maxWidth="xl" sx={{ marginBottom: "1rem" }}>
        <Cart />
        <Recomendation />
      </Container>
      <Footer />
    </>
  );
};

export default LayoutCart;
