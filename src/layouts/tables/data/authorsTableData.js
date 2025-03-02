/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice 
* shall be included in all copies or substantial portions of the Software.
*/

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images (patient avatars)
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  // Patient component now displays the patient’s avatar, name, and an ID.
  const Patient = ({ image, name, id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">ID: {id}</MDTypography>
      </MDBox>
    </MDBox>
  );

  // Diagnosis component shows the diagnosis stage and a brief description.
  const Diagnosis = ({ stage, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {stage}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Patient", accessor: "patient", width: "45%", align: "left" },
      { Header: "Diagnosis", accessor: "diagnosis", align: "left" },
      { Header: "Severity", accessor: "severity", align: "center" },
      { Header: "Admission", accessor: "admission", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        patient: <Patient image={team2} name="John Michael" id="P-1001" />,
        diagnosis: <Diagnosis stage="SJS - Mild" description="Initial stage" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Mild" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Alexa Liras" id="P-1002" />,
        diagnosis: <Diagnosis stage="SJS - Moderate" description="Under observation" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Moderate" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team4} name="Laurent Perrier" id="P-1003" />,
        diagnosis: <Diagnosis stage="SJS - Severe" description="ICU required" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Severe" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Michael Levi" id="P-1004" />,
        diagnosis: <Diagnosis stage="SJS - Recovering" description="Improving condition" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Recovering" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Richard Gran" id="P-1005" />,
        diagnosis: <Diagnosis stage="SJS - Critical" description="Emergency intervention" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Critical" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team4} name="Miriam Eric" id="P-1006" />,
        diagnosis: <Diagnosis stage="SJS - Stable" description="Under medication" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Stable" color="primary" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team2} name="John Michael" id="P-1001" />,
        diagnosis: <Diagnosis stage="SJS - Mild" description="Initial stage" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Mild" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Alexa Liras" id="P-1002" />,
        diagnosis: <Diagnosis stage="SJS - Moderate" description="Under observation" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Moderate" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team4} name="Laurent Perrier" id="P-1003" />,
        diagnosis: <Diagnosis stage="SJS - Severe" description="ICU required" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Severe" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Michael Levi" id="P-1004" />,
        diagnosis: <Diagnosis stage="SJS - Recovering" description="Improving condition" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Recovering" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        patient: <Patient image={team3} name="Richard Gran" id="P-1005" />,
        diagnosis: <Diagnosis stage="SJS - Critical" description="Emergency intervention" />,
        severity: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Critical" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        admission: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/23
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
    ],
  };
}
