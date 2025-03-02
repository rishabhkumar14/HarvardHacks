import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import SJSImage from "assets/images/collage.jpg";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// You might need to import your own background image or use a placeholder
// If you have a pattern image available in your assets, use that path
// For this example, we'll assume the pattern is available at this path:
const patternImage = "assets/images/illustrations/pattern-tree.svg";

// Project-specific components
const InfoCard = ({ title, description }) => {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
        color: "white",
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
      <MDBox p={3} position="relative" zIndex={1}>
        <MDTypography variant="h5" fontWeight="medium" mb={1} color="white">
          {title}
        </MDTypography>
        <MDTypography variant="body2" color="white" fontSize="0.85rem" opacity={0.8}>
          {description}
        </MDTypography>
      </MDBox>
    </Card>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Modified ImageDisplayCard component to make the image the entire background
const ImageDisplayCard = () => {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${SJSImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MDBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgcolor="rgba(0,0,0,0.5)"
      />
      {/* <MDBox p={2} textAlign="center" position="relative" zIndex={1}>
        <MDTypography variant="h6" fontWeight="medium" mb={2} color="white">
          Sample SJS Image
        </MDTypography>
      </MDBox> */}
    </Card>
  );
};

// Modified StartDiagnosisCard component with blue theme and doctor icon
const StartDiagnosisCard = ({ onClick }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
      onClick={onClick}
    >
      <MDBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.3}
        sx={{
          backgroundImage: `url(${patternImage})`,
          backgroundSize: "cover",
        }}
      />
      <MDBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={3}
        height="100%"
        position="relative"
        zIndex={1}
      >
        <MDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor="info"
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
          mb={2}
        >
          <Icon fontSize="default">medical_services</Icon>
        </MDBox>
        <MDTypography variant="h5" fontWeight="medium" color="white" textAlign="center">
          Start Diagnosis
        </MDTypography>
      </MDBox>
    </Card>
  );
};

StartDiagnosisCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ChatWindow = ({ isActive }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Initialize chat with time period question when activated
  React.useEffect(() => {
    if (isActive && messages.length === 0) {
      setMessages([
        {
          sender: "system",
          text: "How long has the patient been experiencing symptoms related to Stevens-Johnson syndrome? (e.g., days, weeks, months)",
        },
      ]);
    }
  }, [isActive, messages.length]);

  const handleSend = () => {
    if (inputText.trim()) {
      // Add user message to chat
      setMessages([...messages, { sender: "user", text: inputText }]);

      // Move to next step
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      // Determine next system message based on current step
      setTimeout(() => {
        if (nextStep === 1) {
          // After first question about duration, ask about image type
          setMessages((prev) => [
            ...prev,
            {
              sender: "system",
              text: "What type of image will you be uploading? (regular or fluorescent)",
            },
          ]);
        } else {
          // For subsequent steps
          setMessages((prev) => [
            ...prev,
            {
              sender: "system",
              text: "Thank you for your response. Our AI is analyzing the provided information about Stevens-Johnson syndrome.",
            },
          ]);
        }
      }, 1000);

      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card sx={{ position: "relative" }}>
      {!isActive && (
        <MDBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={2}
          sx={{
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MDTypography variant="body1" color="white">
            Click &quot;Start Diagnosis&quot; to begin the session
          </MDTypography>
        </MDBox>
      )}
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          AI Diagnostic Assistant
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox
          sx={{
            height: "250px",
            overflowY: "auto",
            border: "1px solid #eee",
            borderRadius: "8px",
            p: 2,
            mb: 2,
          }}
        >
          {messages.map((msg, index) => (
            <MDBox
              key={index}
              sx={{
                textAlign: msg.sender === "user" ? "right" : "left",
                mb: 1,
              }}
            >
              <MDTypography
                variant="body2"
                sx={{
                  display: "inline-block",
                  backgroundColor: msg.sender === "user" ? "#e3f2fd" : "#f5f5f5",
                  borderRadius: "8px",
                  p: 1,
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </MDTypography>
            </MDBox>
          ))}
        </MDBox>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="Type your answer here..."
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={!isActive}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSend}
              disabled={!isActive}
              sx={{ height: "56px" }}
            >
              <Icon>send</Icon>
            </Button>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
};

ChatWindow.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

const SJSDiagnosisSection = () => {
  const [diagnosisStarted, setDiagnosisStarted] = useState(false);

  const handleStartDiagnosis = () => {
    setDiagnosisStarted(true);
  };

  return (
    <Grid container spacing={3}>
      {/* First row with 3 cards */}
      <Grid item xs={12} xl={6}>
        <InfoCard
          title="SJS Diagnosis AI Assistant"
          description="This project focuses on utilizing external eye photographs from both acute and chronic stages of Stevens-Johnson syndrome (SJS), which is a severe immune-related adverse event often triggered by medications or infections. The primary objective is to develop a machine learning algorithm to identify the severity of corneal involvement in SJS accurately."
        />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <ImageDisplayCard />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <StartDiagnosisCard onClick={handleStartDiagnosis} />
      </Grid>

      {/* Second row with chat window */}
      <Grid item xs={12}>
        <ChatWindow isActive={diagnosisStarted} />
      </Grid>
    </Grid>
  );
};

export default SJSDiagnosisSection;
