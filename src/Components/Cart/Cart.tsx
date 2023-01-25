import { Button, Grid, ListItem } from "@mui/material";
import { CartHelper } from "../../helper/CartHelper";
import Typography from "@mui/material/Typography";

import ProductCartDetail from "../../Common/ProductCartDetail/ProductCartDetail";
import Divider from "@mui/material/Divider/Divider";
const Cart = () => {
  return (
    <Grid container gap={4}>
      <Grid container item width="1056px" height="605px" alignItems="center">
        <Typography fontWeight="700" fontSize="24px">
          Your Cart{" "}
        </Typography>
        {CartHelper.map((item) => {
          return (
            <>
              <ProductCartDetail {...item} />
              <Divider style={{ width: "100%" }} />
            </>
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
          <Typography fontWeight="700" fontSize="16px" color="#6B737C">
            number of items
          </Typography>
          <Divider style={{ width: "100%" }} />
        </Grid>
        <Grid item>
          <Typography color="#091625" fontWeight="600" fontSize="16px">
            total
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
