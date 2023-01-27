import { Box, Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import Facebook from "./../../assets/Facebook (1).svg";
import Instagram from "./../../assets/Instagram.svg";
import Linkedin from "./../../assets/Linkedin.svg";
import Twitter from "./../../assets/Twitter.svg";
import Youtube from "./../../assets/Youtube.svg";
import Eeuu from "./../../assets/eeuu.svg";
import { company, help, infomation } from "../../helper/FooterHelper";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <Box bgcolor="primary.dark10" mt={2} padding={6}>
      <Container maxWidth="xl">
        <Stack>
          <Grid container gap={22}>
            <Grid item gap={2}>
              <Box
                width="172px"
                height="48px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="primary.dark09"
              >
                <Typography>Logo</Typography>
              </Box>
              <Box width="264px" mt={2}>
                <Typography
                  color="primary.dark05"
                  fontSize="15px"
                  fontWeight="400"
                >
                  We sell custom products for all your needs. Packs and bulk
                  products that you will enjoy.
                </Typography>
              </Box>
              <Box display="flex" mt={2}>
                <CallIcon />
                <Typography
                  color=" primary.dark01"
                  fontWeight="600"
                  fontSize="15px"
                >
                  +1-202-555-0129
                </Typography>
              </Box>
              <Box mt={2}>
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Instagram} alt="instagram" />
                <img src={Linkedin} alt="linkedin" />
                <img src={Youtube} alt="youtube" />
              </Box>
            </Grid>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
              }}
            >
              <MobileFooter />
            </Box>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Box>
                <Typography fontWeight="700" fontSize="16px">
                  Our Company
                </Typography>
              </Box>
              {company.map((data) => (
                <Box key={data.id} mt={2}>
                  <Typography
                    color="#primary.dark03"
                    fontWeight="400"
                    fontSize="15px"
                  >
                    {data.title}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Box>
                <Typography fontWeight="700" fontSize="16px">
                  How can we help
                </Typography>
              </Box>
              {help.map((data) => (
                <Box key={data.id} mt={2}>
                  <Typography
                    color="#primary.dark03"
                    fontWeight="400"
                    fontSize="15px"
                  >
                    {data.title}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Box>
                <Typography fontWeight="700" fontSize="16px">
                  Information
                </Typography>
              </Box>
              {infomation.map((data) => (
                <Box key={data.id} mt={2}>
                  <Typography
                    color="#primary.dark03"
                    fontWeight="400"
                    fontSize="15px"
                  >
                    {data.title}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Stack>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          width="100%"
          mt={15}
        >
          <Typography fontWeight="400" fontSize="14px" color="primary.dark04">
            © 2022 Customer Products. All rights reserved.
          </Typography>
          <Stack flexDirection={{ xs: "column", sm: "row" }} gap={2}>
            <Box display="flex">
              <Typography>
                <Box
                  component="span"
                  color=" primary.dark04"
                  fontSize="14px"
                  fontWeight="400"
                >
                  Region:
                </Box>
                <Box component="span" mx={1}>
                  <img src={Eeuu} alt="eeuu flag" />
                </Box>
                United States
              </Typography>
              <Box>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Box display="flex">
              <Typography>
                <Box
                  component="span"
                  color=" primary.dark04"
                  fontSize="14px"
                  fontWeight="400"
                >
                  Language:
                </Box>
                <Box component="span" mx={1}>
                  <img src={Eeuu} alt="eeuu flag" />
                </Box>
                English
              </Typography>
              <Box>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
