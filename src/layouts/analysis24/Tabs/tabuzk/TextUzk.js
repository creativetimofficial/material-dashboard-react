import React from "react"
import { Button } from "@material-ui/core"
import MDEditor from "@uiw/react-md-editor"
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"

function TextUzk({ uzKirile, setUzKirile, uzkText, setUzkText }) {
  console.log(uzKirile)
  console.log(uzkText)
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
          Analysis24 : Kirilcha
        </MDTypography>
        <Button variant="contained" color="secondary" component="span">
          Lotin matniga nusxalash
        </Button>
      </MDBox>
      <MDBox pt={3}>
        <div className="container" data-color-mode="light">
          <div className="form-group w-100">
            <MDInput placeholder="text"
              className="form-control"
              id="titleuzk"
              onChange={(e) => setUzKirile(e.target.value)}
              rows="1"
            />
          </div>
          <MDEditor
           value={uzkText}
            onChange={setUzkText}
          />
        </div>
      </MDBox>
    </>
  )
}

export default TextUzk
