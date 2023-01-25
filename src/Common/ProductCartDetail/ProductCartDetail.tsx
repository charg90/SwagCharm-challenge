import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { CartHelper } from "../../helper/CartHelper";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCartDetail = ({
  id,
  title,
  quantity,
  subItems,
  subtItems2,
  subtItems3,
  price,
}: CartHelper) => {
  return (
    <Grid item container display="flex" justifyContent="space-between" key={id}>
      <Grid item display="flex" gap={2}>
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
          ${price}
        </Typography>
        <Typography fontWeight="700" fontSize="16px" color="#091625">
          Total:${quantity * price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductCartDetail;
