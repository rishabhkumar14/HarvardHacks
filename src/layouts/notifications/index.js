/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2025 Creative Tim (https://www.creative-tim.com)
=========================================================
*/

import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  // Patient data state
  const [patientData, setPatientData] = useState({
    id: "PT-20252403",
    name: "John Doe",
    age: 42,
    gender: "Male",
    admissionDate: "2025-03-01",
  });

  // Diagnostic results state
  const [diagnosticResults, setDiagnosticResults] = useState({
    diagnosis: "Stevens-Johnson Syndrome",
    confidence: 65,
    severity: "Moderate",
    scorten: 2,
    aldenScore: 6,
    riskLevel: "Medium",
    progression: "Stable",
  });

  // Key symptoms state
  const [keySymptoms, setKeySymptoms] = useState([
    { symptom: "Skin Detachment", severity: "Moderate", area: "10%" },
    { symptom: "Mucosal Involvement", severity: "Severe", area: "Multiple sites" },
    { symptom: "Fever", severity: "Mild", value: "38.2°C" },
    { symptom: "Eye Involvement", severity: "Moderate", details: "Conjunctivitis" },
  ]);

  // Potential triggers state
  const [potentialTriggers, setPotentialTriggers] = useState([
    { medication: "Carbamazepine", likelihood: "High", timeCourse: "Started 14 days prior" },
    { medication: "Allopurinol", likelihood: "Medium", timeCourse: "Started 21 days prior" },
  ]);

  // Treatment recommendations state
  const [treatmentRecommendations, setTreatmentRecommendations] = useState([
    { type: "Immediate", action: "Discontinue suspected medications", priority: "High" },
    { type: "Supportive", action: "Fluid and electrolyte management", priority: "High" },
    {
      type: "Wound Care",
      action: "Sterile environment with antiseptic solutions",
      priority: "High",
    },
    { type: "Medication", action: "Consider IVIG therapy", priority: "Medium" },
  ]);

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "low":
      case "mild":
        return "success";
      case "medium":
      case "moderate":
        return "warning";
      case "high":
      case "severe":
        return "error";
      default:
        return "info";
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        {/* Patient Information Header */}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3} display="flex" justifyContent="space-between" alignItems="center">
                <MDBox>
                  <MDTypography variant="h5" fontWeight="medium">
                    Patient: {patientData.name}
                  </MDTypography>
                  <MDTypography variant="body2" color="text">
                    ID: {patientData.id} | {patientData.age} years, {patientData.gender} | Admitted:{" "}
                    {patientData.admissionDate}
                  </MDTypography>
                </MDBox>
                <MDButton variant="gradient" color="info">
                  View Full History
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Diagnosis Summary */}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5" mb={2}>
                  Diagnosis Summary
                </MDTypography>
                <MDAlert color="info" mb={2}>
                  <MDTypography variant="h6" fontWeight="medium" color="white">
                    {diagnosticResults.diagnosis} detected with {diagnosticResults.confidence}%
                    confidence
                  </MDTypography>
                </MDAlert>

                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={1}>
                      <MDTypography variant="button" fontWeight="bold">
                        Severity Assessment
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center">
                      <MDTypography variant="caption" color="text" mr={1}>
                        {diagnosticResults.severity}
                      </MDTypography>
                      <MDBox width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={diagnosticResults.confidence}
                          color={getSeverityColor(diagnosticResults.severity)}
                        />
                      </MDBox>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={1}>
                      <MDTypography variant="button" fontWeight="bold">
                        Disease Progression
                      </MDTypography>
                    </MDBox>
                    <Chip
                      label={diagnosticResults.progression}
                      color={diagnosticResults.progression === "Stable" ? "success" : "warning"}
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <MDBox textAlign="center" p={1} bgcolor="#f8f9fa" borderRadius="lg">
                      <MDTypography variant="h6">{diagnosticResults.scorten}</MDTypography>
                      <MDTypography variant="caption" color="text">
                        SCORTEN
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <MDBox textAlign="center" p={1} bgcolor="#f8f9fa" borderRadius="lg">
                      <MDTypography variant="h6">{diagnosticResults.aldenScore}</MDTypography>
                      <MDTypography variant="caption" color="text">
                        ALDEN Score
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <MDBox textAlign="center" p={1} bgcolor="#f8f9fa" borderRadius="lg">
                      <MDTypography
                        variant="h6"
                        color={getSeverityColor(diagnosticResults.riskLevel)}
                      >
                        {diagnosticResults.riskLevel}
                      </MDTypography>
                      <MDTypography variant="caption" color="text">
                        Risk Level
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <MDBox textAlign="center" p={1} bgcolor="#f8f9fa" borderRadius="lg">
                      <MDTypography variant="h6">10%</MDTypography>
                      <MDTypography variant="caption" color="text">
                        BSA Affected
                      </MDTypography>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h4" mb={2}>
                  Key Symptoms
                </MDTypography>

                <Table>
                  <TableBody>
                    {keySymptoms.map((symptom, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <MDTypography variant="button" fontWeight="medium">
                            {symptom.symptom}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={symptom.severity}
                            color={getSeverityColor(symptom.severity)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <MDTypography variant="caption" color="text">
                            {symptom.area || symptom.value || symptom.details}
                          </MDTypography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Medication Triggers and Treatment */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5" mb={2}>
                  Potential Medication Triggers
                </MDTypography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {potentialTriggers.map((trigger, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <MDTypography variant="button" fontWeight="medium" color="error">
                              {trigger.medication}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={trigger.likelihood}
                              color={getSeverityColor(trigger.likelihood)}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="caption" color="text">
                              {trigger.timeCourse}
                            </MDTypography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5" mb={2}>
                  Treatment Recommendations
                </MDTypography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {treatmentRecommendations.map((treatment, index) => (
                        <TableRow key={index}>
                          <TableCell width="20%">
                            <MDTypography variant="caption" fontWeight="medium">
                              {treatment.type}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="button">{treatment.action}</MDTypography>
                          </TableCell>
                          <TableCell width="20%">
                            <Chip
                              label={treatment.priority}
                              color={getSeverityColor(treatment.priority)}
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <MDBox mt={2} display="flex" justifyContent="flex-end">
                  <MDButton variant="gradient" color="success">
                    Generate Treatment Plan
                  </MDButton>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
