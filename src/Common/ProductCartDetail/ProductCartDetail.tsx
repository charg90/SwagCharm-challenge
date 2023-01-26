import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { CartHelper } from "../../helper/CartHelper";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../../Models/CartItems";

const ProductCartDetail = ({
  id,
  title,
  quantity,
  subItems,
  subtItems2,
  subtItems3,
  price,
}: CartItem) => {
  return (
    <>
      <Grid item display="flex" gap={2} paddingY={2}>
        <Box width="120px" height="120px" bgcolor="#E6E8E9 "></Box>
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="700" fontSize="18px" color="#091625">
            {title}
          </Typography>
          <Typography fontWeight="600" fontSize="16px" color="#091625">
            Quantity:{quantity}
          </Typography>
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
                  <Typography fontSize="14px" color="#091625" fontWeight="600">
                    {subItems}
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  {" "}
                  <Typography fontSize="14px" color="#091625" fontWeight="600">
                    {subtItems2}
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <Typography fontSize="14px" color="#091625" fontWeight="600">
                    {subtItems3}
                  </Typography>
                </ListItem>
              </List>
              <Typography fontWeight="600" fontSize="12px">
                edit | remove
              </Typography>
            </>
          ) : (
            <Box display="flex" alignItems="center" gap={1}>
              <DeleteIcon />
              <Typography fontWeight="600" fontSize="12px">
                {" "}
                Remove
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item>
        <Typography fontWeight="700" fontSize="16px" color="#091625">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
        <Typography fontWeight="700" fontSize="16px" color="#091625">
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
