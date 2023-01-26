import { Box, Button, Grid, ListItem } from "@mui/material";
import { CartHelper } from "../../helper/CartHelper";
import Typography from "@mui/material/Typography";
import ProductCartDetail from "../../Common/ProductCartDetail/ProductCartDetail";
import Divider from "@mui/material/Divider/Divider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import sumPrices from "../../Utilis/sumPrices";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalAmount = sumPrices(cartItems);

  return (
    <Grid container gap={4}>
      <Grid container item width="1056px" alignItems="center" mt={2}>
        <Typography fontWeight="700" fontSize="24px">
          Your Cart{" "}
        </Typography>
        {cartItems.map((item) => {
          return (
            <Grid
              item
              container
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              key={item.id}
            >
              <ProductCartDetail {...item} />
              <Divider style={{ width: "100%" }} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        width="336px"
        gap={2}
        mt={2}
      >
        <Typography fontWeight="700" fontSize="24px">
          Order Summary
        </Typography>
        <Grid item>
          <Box display="flex" justifyContent="space-between" paddingY={2}>
            <Typography fontWeight="700" fontSize="16px" color="#6B737C">
              number of items :
            </Typography>

            <Typography fontWeight="700" fontSize="16px" color="#6B737C">
              {cartItems.length}
            </Typography>
          </Box>
          <Divider style={{ width: "100%" }} />
        </Grid>
        <Grid item display="flex" justifyContent="space-between">
          <Typography color="#091625" fontWeight="600" fontSize="16px">
            total:
          </Typography>
          <Typography color="#091625" fontWeight="600" fontSize="16px">
            {totalAmount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
          >
            Proceed to Checkout
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" fullWidth>
            Continue shopping
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
function state(state: unknown): unknown {
  throw new Error("Function not implemented.");
}
