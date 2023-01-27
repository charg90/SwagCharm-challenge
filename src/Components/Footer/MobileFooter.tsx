import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { company, help, infomation } from "../../helper/FooterHelper";
import { Box } from "@mui/material";
const MobileFooter = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: "primary.dark10" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            fontWeight="700"
            fontSize="16px"
          >
            Company
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {company.map((item) => (
            <Typography key={item.id}>{item.title}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: "primary.dark10" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{ width: "100%", flexShrink: 0 }}
            fontWeight="700"
            fontSize="16px"
          >
            How can we help?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {help.map((item) => (
            <Typography key={item.id}>{item.title}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ backgroundColor: "primary.dark10" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{ backgroundColor: "primary.dark10" }}
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            fontWeight="700"
            fontSize="16px"
          >
            Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {infomation.map((item) => (
            <Typography key={item.id}>{item.title}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MobileFooter;
