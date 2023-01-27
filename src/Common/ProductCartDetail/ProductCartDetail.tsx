import {
  Box,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../../Models/CartItems";

import { deleteCart, updateQuantity } from "../../Store/Features/cart";
import { useAppDispatch } from "../../Store/store";
import Img4 from "./../../assets/image 4.svg";
import Img9 from "./../../assets/image 9.svg";
import Img10 from "./../../assets/image 10.svg";
const ProductCartDetail = ({
  id,
  title,
  quantity,
  subItems,
  subtItems2,
  subtItems3,
  price,
}: CartItem) => {
  const dispatch = useAppDispatch();
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, id: number) => {
    const quantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: id, quantity: quantity }));
  };

  return (
    <>
      <Grid item display="flex" gap={2} paddingY={2}>
        <Box width="120px" height="120px" bgcolor="primary.dark10">
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", left: "40px", top: "15px" }}>
              {subtItems2 && <img src={Img9} alt="product - item" />}
            </Box>
            <Box sx={{ position: "absolute", left: "30px", top: "55px" }}>
              {subItems && <img src={Img4} alt="product - item" />}
            </Box>
            <Box sx={{ position: "absolute", left: "75px", top: "55px" }}>
              {subtItems3 && <img src={Img10} alt="product - item" />}
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="700" fontSize="18px" color="primary.dark01">
            {title}
          </Typography>
          <Box fontWeight="600" fontSize="16px" color="primary.dark01">
            Quantity:
            <FormControl sx={{ mx: 1, minWidth: 10 }} size="small">
              <NativeSelect
                defaultValue={quantity}
                // onChange={handleChange}
                disableUnderline
                inputProps={{ "aria-label": "Without label" }}
                sx={{ border: 0, fontWeight: 700, fontSize: 16 }}
                onChange={(e) => handleSelect(e, id)}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
              </NativeSelect>
            </FormControl>
          </Box>
          {subItems || subtItems2 || subtItems3 ? (
            <>
              <List
                dense
                sx={{
                  listStyleType: "disc",
                  pl: 1,
                }}
              >
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <Typography
                    fontSize="14px"
                    color="primary.dark01"
                    fontWeight="600"
                  >
                    {subItems}
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  {" "}
                  <Typography
                    fontSize="14px"
                    color="primary.dark01"
                    fontWeight="600"
                  >
                    {subtItems2}
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <Typography
                    fontSize="14px"
                    color="primary.dark01"
                    fontWeight="600"
                  >
                    {subtItems3}
                  </Typography>
                </ListItem>
              </List>
              <Box display="flex" gap={1}>
                <Box>
                  <Typography fontWeight="600" fontSize="12px">
                    Edit pack
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  component="span"
                  sx={{ cursor: "pointer" }}
                  onClick={() => dispatch(deleteCart(id))}
                >
                  <Typography fontWeight="600" fontSize="12px">
                    remove
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              onClick={() => dispatch(deleteCart(id))}
              sx={{ cursor: "pointer" }}
            >
              <DeleteIcon />
              <Typography fontWeight="600" fontSize="12px">
                {" "}
                Remove
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item p={2}>
        <Typography
          fontWeight="700"
          fontSize="16px"
          color="primary.dark01"
          align="right"
        >
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
        <Typography fontWeight="700" fontSize="16px" color="primary.dark01">
          Total:
          {(quantity * price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Grid>
    </>
  );
};

export default ProductCartDetail;
