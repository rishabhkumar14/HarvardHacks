/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// Billing page components
import PaymentMethod from "layouts/upload-image/components/PaymentMethod";
import UploadImage from "layouts/upload-image/components/ImageUploadCard";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/upload-image/components/Transactions";
import SJSDiagnosisSection from "layouts/upload-image/components/SJSDiagnosisSection";
import MDTypography from "components/MDTypography";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            {/* Rishabh */}

            <Grid item xs={12} lg={8}>
              <SJSDiagnosisSection />
            </Grid>

            {/* Qiming */}
            <Grid item xs={12} lg={4}>
              <MDTypography>Please specify your image type here</MDTypography>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Regular Image" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Stain Image" />
              </FormGroup>
              <Box
                sx={{
                  border: "2px dashed gray", // Dashed border
                  borderRadius: "8px", // Rounded corners
                  padding: "16px", // Inner spacing
                  textAlign: "center", // Center align content
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "250px", // Adjust height as needed
                  position: "relative",
                }}
              >
                <UploadImage />
              </Box>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox mb={3}>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid> */}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
