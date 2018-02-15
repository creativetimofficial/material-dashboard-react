// ##############################
// // // CustomInput styles
// #############################

import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "variables/styles";

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:before": {
      backgroundColor: "#D2D2D2",
      height: "1px !important"
    }
  },
  inkbar: {
    "&:after": {
      backgroundColor: primaryColor
    }
  },
  inkbarError: {
    "&:after": {
      backgroundColor: dangerColor
    }
  },
  inkbarSuccess: {
    "&:after": {
      backgroundColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  },
  labelRootError: {
    color: dangerColor
  },
  labelRootSuccess: {
    color: successColor
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative"
  }
};

export default customInputStyle;
