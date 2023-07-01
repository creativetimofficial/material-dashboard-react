import React from "react"
import MDEditor from "@uiw/react-md-editor"
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import { Button } from "@material-ui/core"
import MDInput from "components/MDInput"

function TextEn({ engTitle, setEngtitle, engText, setEngtext }) {

    console.log(engText)
    console.log(engText)
  return (
    <>
      <MDBox
        mx={2}
        mt={1}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" color="white">
          Analysis24 : English
        </MDTypography>
        <Button variant="contained" color="secondary" component="span">
          Ruscha matniga nusxalash
        </Button>
      </MDBox>
      <MDBox pt={3}>
        <div className="container" data-color-mode="light">
          <div className="form-group w-100">
            <MDInput
              placeholder="text"
              className="form-control"
              id="titleEng"
              value={engTitle}
              onChange={(e) => setEngtitle(e.target.value)}
              rows="1"
            />
          </div>
          <MDEditor value={engText} onChange={setEngtext} />
        </div>
      </MDBox>
    </>
  )
}
export default TextEn
