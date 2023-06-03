/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom"

// @mui material components
import Card from "@mui/material/Card"
import Checkbox from "@mui/material/Checkbox"

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"
import MDButton from "components/MDButton"

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout"

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg"
import { useState } from "react"

function Cover() {
  const history = useNavigate()
  const [firstN, setFirstN] = useState("")
  const [lastN, setLastN] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSingup = () => {
    console.log("bosildi")
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      firstName: firstN,
      lastName: lastN,
      password: email,
      phoneNumber: password,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("https://bazark.uz/api/auth/v1/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) history("/authentication/sign-in")
        alert(`You are registered`)
      })
      .catch((error) => {
        console.log(error)
        alert(`You are not registered ${error}`)
      })
  }

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={3} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={1}>
              <MDInput
                onChange={(e) => setFirstN(e.target.value)}
                type="text"
                label="firstName"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput
                onChange={(e) => setLastN(e.target.value)}
                type="text"
                label="lastName"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput
                onChange={(e) => setEmail(e.target.value)}
                type="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput
                onChange={(e) => setPassword(e.target.value)}
                type="email"
                label="PhoneNumber"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDButton onClick={() => handleSingup()} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  )
}

export default Cover
