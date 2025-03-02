import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Button from "@mui/material/Button";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Box } from "@mui/material";

// SJSTENSeverityChart Component
function SJSTENSeverityChart({ color, title, description, date }) {
  const data = [
    { day: 1, severity: 2 },
    { day: 2, severity: 4 },
    { day: 3, severity: 3 },
    { day: 4, severity: 5 },
    { day: 5, severity: 4 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div" color={color}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="severity" stroke="#8884d8" />
        </LineChart>
        <Typography variant="caption" display="block">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}

SJSTENSeverityChart.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

function PatientInfoCard() {
  return (
    <Card>
      <CardContent>
        {/* Flex container to place Avatar and title side by side */}
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            alt="John Doe"
            src="/path/to/avatar.jpg"
            sx={{
              width: 56,
              height: 56,
              marginRight: 2,
              marginLeft: 4,
              marginTop: 4,
              marginBottom: 3,
            }}
          />
          <Typography variant="h6" component="div">
            Last Diagnosed Patient Info:
          </Typography>
        </Box>

        <Typography variant="body2">
          <b>Name:</b> John Doe
          <br />
          <b>Age:</b> 45 &emsp;&emsp;&emsp;&emsp;&emsp;<b>Patient Since:</b> 02/12/2021
          <br />
          <b>Gender:</b> Male&emsp;&emsp;&emsp;<b>Last Visit:</b> 03/12/2021
          <br />
          <b>Blood Type:</b> A+&emsp;&emsp;<b>Next Visit:</b> 04/12/2021
          <br />
          <b>Allergies:</b> Penicillin, Sulfa Drugs, Allopurinol
        </Typography>
      </CardContent>
    </Card>
  );
}
// DiagnosisResultsCard Component
function DiagnosisResultsCard() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginRight: 2,
            marginTop: 4,
            marginBottom: 3,
          }}
        >
          Diagnosis Results
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: 3,
          }}
        >
          Diagnosis: Stevens-Johnson Syndrome (SJS)
          <br />
          Confidence: 92%
          <br />
          Key Symptoms: Skin rash, fever, blistering
          <br />
          Recommended Tests: Skin biopsy, blood tests
          <br />
          Treatment initiated: IV fluids, corticosteroids
          <br />
          Prognosis: Guarded, monitor closely
        </Typography>
      </CardContent>
    </Card>
  );
}

// TreatmentPlanCard Component
function TreatmentPlanCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Treatment Plan
        </Typography>
        <Typography variant="body2">
          1. Discontinue suspected trigger medication
          <br />
          2. Administer IV fluids and electrolytes
          <br />
          3. Apply topical corticosteroids to affected areas
          <br />
          4. Monitor for signs of infection
          <br />
          5. Pain management with opioid analgesics
          <br />
          6. Ophthalmological evaluation and care
        </Typography>
      </CardContent>
    </Card>
  );
}

// ImageUploadCard Component
function ImageUploadCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Diagnosis with Image Upload
        </Typography>
        <></>
        <Button
          size="small"
          variant="contained"
          endIcon={<SendIcon color="white" />}
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Typography variant="body2" style={{ color: "white" }}>
            Go to Image Segmentation Tool
          </Typography>
          <input type="file" hidden />
        </Button>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          Upload patient images and chat with our trained LLM agent for a complete and through
          analysis and documentation.
        </Typography>
      </CardContent>
    </Card>
  );
}

function SJSTENDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="sick"
                title="SJS/TEN Severity"
                count="Moderate"
                percentage={{
                  color: "error",
                  amount: "SCORTEN: 2",
                  label: "High Risk",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="timeline"
                title="Time Since Onset"
                count="3 days"
                percentage={{
                  color: "warning",
                  amount: "Critical Period",
                  label: "Monitor closely",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="percent"
                title="BSA Affected"
                count="15%"
                percentage={{
                  color: "error",
                  amount: "TEN",
                  label: "Classification",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="medication"
                title="Suspected Trigger"
                count="Allopurinol"
                percentage={{
                  color: "success",
                  amount: "ALDEN: 6",
                  label: "Probable",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <SJSTENSeverityChart
                  color="warning"
                  title="SJS/TEN Progression"
                  description="Patient's condition over time"
                  date="Updated 2 hours ago"
                />
                {/* <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={{
                    labels: ["Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Mar 1", "Mar 2"],
                    datasets: {
                      label: "Completed Tasks",
                      data: [3, 5, 2, 4, 7, 6, 5],
                    },
                  }}
                /> */}
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <PatientInfoCard />
                {/* <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid> */}
                {/* <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  /> */}
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DiagnosisResultsCard />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <TreatmentPlanCard />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ImageUploadCard />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SJSTENDashboard;
