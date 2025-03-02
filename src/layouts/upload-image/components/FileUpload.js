import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Alert from "@mui/material/Alert";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// You can use the same pattern image as in SJSDiagnosisSection
const patternImage = "assets/images/illustrations/pattern-tree.svg";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUploadComplete(false);
      setErrorMessage("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setUploadComplete(false);
      setErrorMessage("");
    }
  };

  const handleUpload = () => {
    if (!file) {
      setErrorMessage("Please select a file to upload");
      return;
    }

    // Simulate the upload process
    setTimeout(() => {
      setUploadComplete(true);
    }, 1500);

    console.log("Uploading file:", file);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <MDBox
        position="relative"
        sx={{
          background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
          borderRadius: "0.75rem 0.75rem 0 0",
          py: 2,
          px: 2,
        }}
      >
        <MDBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          opacity={0.2}
          sx={{
            backgroundImage: `url(${patternImage})`,
            backgroundSize: "cover",
          }}
        />
        <MDTypography variant="h6" fontWeight="medium" color="white" position="relative">
          Upload SJS Image Files
        </MDTypography>
      </MDBox>

      <MDBox p={3} sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {errorMessage && (
          <MDBox mb={2}>
            <Alert severity="warning" onClose={() => setErrorMessage("")}>
              {errorMessage}
            </Alert>
          </MDBox>
        )}

        <MDBox
          sx={{
            border: isDragging
              ? "2px dashed #1A73E8"
              : uploadComplete
              ? "2px solid #4CAF50"
              : "2px dashed #d3d3d3",
            borderRadius: "8px",
            p: 3,
            textAlign: "center",
            backgroundColor: isDragging ? "rgba(26, 115, 232, 0.08)" : "#f8f9fa",
            cursor: "pointer",
            transition: "all 0.3s",
            mb: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-upload").click()}
        >
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
          />

          {!file ? (
            <>
              <CloudUploadIcon
                fontSize="large"
                sx={{
                  fontSize: 60,
                  color: isDragging ? "#1A73E8" : "#bdbdbd",
                  mb: 2,
                }}
              />
              <MDTypography variant="body1" color="text" fontWeight="medium">
                Drag and drop your SJS image here
              </MDTypography>
              <MDTypography variant="body2" color="text" sx={{ mt: 1, opacity: 0.7 }}>
                or click to browse files
              </MDTypography>
            </>
          ) : (
            <>
              <Icon
                sx={{
                  fontSize: 48,
                  color: uploadComplete ? "#4CAF50" : "#1A73E8",
                  mb: 2,
                }}
              >
                {uploadComplete ? "check_circle" : "insert_drive_file"}
              </Icon>
              <MDTypography variant="body1" color="text" fontWeight="medium">
                {file.name}
              </MDTypography>
              <MDTypography variant="body2" color="text" sx={{ mt: 0.5 }}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </MDTypography>
              {uploadComplete && (
                <MDTypography variant="body2" color="success" sx={{ mt: 1 }}>
                  Upload complete!
                </MDTypography>
              )}
            </>
          )}
        </MDBox>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="info"
              fullWidth
              onClick={() => {
                setFile(null);
                setUploadComplete(false);
                setErrorMessage("");
              }}
              disabled={!file}
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={6}>
            <MDButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={handleUpload}
              disabled={!file || uploadComplete}
            >
              {uploadComplete ? "Uploaded" : "Upload"}
            </MDButton>
          </Grid>
        </Grid>

        <MDBox mt={3}>
          <MDTypography variant="caption" color="text">
            Supported formats: JPG, PNG, TIFF • Max file size: 10MB
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default FileUpload;
