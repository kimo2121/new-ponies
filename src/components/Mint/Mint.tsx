import React, { useEffect, useState } from "react";
import "./Mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import { NFTMintEngineDetail } from "utils/typs";
// import { getEngineInfo, purchase } from "utils/contracts";
// import { useWeb3React } from "@web3-react/core";
// import toast from "react-hot-toast";
// import ButtonComponent from "components/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      boxShadow: "0 1px 2px 2px #9A7FDC",
      background: "#E5A2BC ",
      color: "white",
      fontWeight: "bolder",
      width: "25px",
      height: "25px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#9A7FDC",
      },
      "&:disabled": {
        color: "gray",
      },
    },
    rootButton: {
      background: "#E5A2BC",
      borderRadius: 8,
      border: 0,
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.6vmax",
      height: 50,
      padding: "0 30px",
      boxShadow: "0 1px 2px 2px #9A7FDC",
      "&:hover": {
        backgroundColor: "#9A7FDC",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  // const [mintEngineDetail, setMintEngineDetail] =
  //   useState<NFTMintEngineDetail>(null);
  // const { connector, library, chainId, account, active } = useWeb3React();
  // useEffect(() => {
  //   getEngineInfo(chainId, library).then(
  //     (nftMintEngineDetail: NFTMintEngineDetail) => {
  //       setMintEngineDetail(nftMintEngineDetail);
  //     }
  //   );
  // }, [connector, library, account, active, chainId]);

  // const mintTokens = async () => {
  //   if (count <= 0) {
  //     toast.error("Mint Count should be over than 0");
  //     return;
  //   }
  //   const load_toast_id = toast.loading("Plesae wait for Mint...");
  //   try {
  //     const bSuccess = await purchase(chainId, library.getSigner(), count);
  //     if (bSuccess) {
  //       toast.success("Mint Success!");

  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 3000);
  //     } else {
  //       toast.error("Mint Failed!");
  //     }
  //   } catch (error) {
  //     toast.error("Mint Failed!");
  //   }
  //   toast.dismiss(load_toast_id);
  // };

  return (
    <div id="mint" className="mint-container">
      <div className="sec-title">
        <Header header="Mint" />

        <span
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="linear"
        ></span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="linear"
        className="mint-component"
      >
        <div className="counter-button-container">
          <div className="btn-group">
            <div className={classes.root}>
              <div>
                <ButtonGroup className="inner-btn-group">
                  <Button
                    className={classes.buttonStyle}
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                    disabled={count === 0}
                  >
                    <RemoveIcon
                      style={{ fontWeight: "bolder", fontSize: "1.6vmax" }}
                    />
                  </Button>
                  <Button
                    disabled
                    style={{
                      boxShadow: "0 1px 2px 2px #9A7FDC",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                      background: "#E5A2BC",
                      color: "white",
                      fontSize: "1.3vmax",
                      fontWeight: "bolder",
                      borderRadius: "8px",
                    }}
                  >
                    {count}
                  </Button>
                  <Button
                    className={classes.buttonStyle}
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    disabled={count === 25}
                  >
                    <AddIcon
                      style={{ fontWeight: "bold", fontSize: "1.5vmax" }}
                    />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <Button
              classes={{
                root: classes.rootButton,
                label: classes.label,
              }}
              // onClick={mintTokens}
            >
              Mint
            </Button>
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              boxShadow: "0px 0px 3px 1px #9A7FDC",
              borderRadius: "5px",
              margin: "2vh 0",
            }}
          >
            <span style={{ marginRight: "5vw" }}>Minted 0/ 10000</span>
            <span> ETH per Mint</span>
          </div>
        </div>
        {/* <div className="counter-div quantity-address">
          <span>Contract address : </span>
        </div> */}
      </div>
    </div>
  );
};

export default Mint;
