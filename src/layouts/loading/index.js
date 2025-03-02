import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a 2-second loading time before navigating
    const timer = setTimeout(() => {
      navigate("/notifications");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3} display="flex" justifyContent="center" alignItems="center" height="70vh">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ textAlign: "center", p: 4 }}>
              <MDBox mb={2}>
                <CircularProgress size={60} color="info" />
              </MDBox>
              <MDTypography variant="h5" fontWeight="bold">
                Model Analyzing...
              </MDTypography>
              <MDTypography variant="body2" color="text.secondary">
                Please wait while we process your uploaded image.
              </MDTypography>
              <MDBox mt={3}>
                <LinearProgress color="info" />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LoadingPage;
