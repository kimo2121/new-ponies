import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import "./FAQ.css";
import { RiArrowDownSLine } from "react-icons/ri";

const Accordion = withStyles({
  root: {
    textAlign: "left",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "transparent",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "white",
    paddingRight: "60px",
    margin: "5vh 0 0 0",
    border: "2px solid #f85185",
    boxShadow: " 0px 0px 2px 1px black",

    marginBottom: -1,
    minHeight: 89,
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className="faq-component">
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <RiArrowDownSLine
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              Why should I care?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You are right, why should you care? The Poniez are another
              pixelated NFT collection that is similar to other pixelated works
              that have come before. There we said it. But no, really you should
              only care because being part of The Poniez Union is like being a
              part of a fun club. We have cool things planned for our future
              releases, and being a Poniez collector will get you ready for the
              fun things to come. Also The Poniez have fun eyes and if you catch
              them just right its like they are getting dolled up, ready to kick
              Covid to the curb and go out for a night of fun and dancing, or
              just Netflix and Chill.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <RiArrowDownSLine
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              Minting - How To Get Your Poniez
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <span className="inner-question-faq">
                When will Poniez be available?
              </span>
              <span className="inner-answer-faq">
                Our scheduled launch date for Poniez Season 1 is September 24th
                at 3pm EST. Plan on being at The Poniez Union right around that
                time to make sure your wallet is connected and you have enough
                ETH for your Poniez and also the gas
              </span>
              <span className="inner-question-faq">
                How much are The Poniez?
              </span>
              <span className="inner-answer-faq">
                Poniez season 1 are all priced at .0325 ETH + Gas.
              </span>
              <span className="inner-question-faq">
                Is there a limit to how many I can buy?
              </span>
              <span className="inner-answer-faq">
                There is a limit of 10 Poniez per transaction.
              </span>
              <span className="inner-question-faq">What do I need?</span>
              <span className="inner-answer-faq">
                You will need a Metamask Wallet with enough ETH to complete the
                purchase + the gas fees. If you need help with Metamask, check
                this link for a quick tutorial on how it works. You will need to
                connect your wallet by clicking the top right button that says
                "connect”
              </span>
              <span className="inner-question-faq">
                Can I mint from the contract directly?
              </span>
              <span className="inner-answer-faq">
                Yes you can, the contract address is here
              </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <RiArrowDownSLine
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              What is planned for the future
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Poniez Union as you see it currently is quite good, its not
              great but its good. We have plans for some upgrades to The Poniez
              Union. The Poniez are a social bunch and like being around other
              people and other Poniez. Watch this space for more Poniez Union
              future plans
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <RiArrowDownSLine
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              Is there a “Pre-Mint”
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1-100 are being held back for two reasons. Firstly we want to
              reward the team for their hard work, they are excited to start
              their Poniez collection also. And secondly the majority of the 100
              that are being held back will be for our giveaways and airdrops
              for you, the Poniez collectors and Poniez enthusiasts
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
