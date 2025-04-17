import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Button section component to reduce repetition
const ButtonSection = ({
  title,
  color,
}: {
  title: string;
  color: "primary" | "secondary" | "success" | "error" | "warning" | "info";
}) => (
  <Box mb={4}>
    <Typography
      variant="subtitle1"
      gutterBottom
      sx={{ color: `${color}.main` }}
    >
      {title}
    </Typography>
    <Stack spacing={3}>
      {/* Filled Buttons */}
      <Box>
        <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
          Filled:
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="caption" sx={{ width: 100 }}>
              Enabled:
            </Typography>
            <Button variant="contained" color={color} size="large">
              Large
            </Button>
            <Button variant="contained" color={color} size="medium">
              Medium
            </Button>
            <Button variant="contained" color={color} size="small">
              Small
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="caption" sx={{ width: 100 }}>
              Disabled:
            </Typography>
            <Button variant="contained" color={color} size="large" disabled>
              Large
            </Button>
            <Button variant="contained" color={color} size="medium" disabled>
              Medium
            </Button>
            <Button variant="contained" color={color} size="small" disabled>
              Small
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Outlined Buttons - Only for Primary */}
      {color === "primary" && (
        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Outlined:
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" sx={{ width: 100 }}>
                Enabled:
              </Typography>
              <Button variant="outlined" color={color} size="large">
                Large
              </Button>
              <Button variant="outlined" color={color} size="medium">
                Medium
              </Button>
              <Button variant="outlined" color={color} size="small">
                Small
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" sx={{ width: 100 }}>
                Disabled:
              </Typography>
              <Button variant="outlined" color={color} size="large" disabled>
                Large
              </Button>
              <Button variant="outlined" color={color} size="medium" disabled>
                Medium
              </Button>
              <Button variant="outlined" color={color} size="small" disabled>
                Small
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}

      {/* Text Buttons - Only for Primary */}
      {color === "primary" && (
        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Text:
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" sx={{ width: 100 }}>
                Enabled:
              </Typography>
              <Button variant="text" color={color} size="large">
                Large
              </Button>
              <Button variant="text" color={color} size="medium">
                Medium
              </Button>
              <Button variant="text" color={color} size="small">
                Small
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" sx={{ width: 100 }}>
                Disabled:
              </Typography>
              <Button variant="text" color={color} size="large" disabled>
                Large
              </Button>
              <Button variant="text" color={color} size="medium" disabled>
                Medium
              </Button>
              <Button variant="text" color={color} size="small" disabled>
                Small
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Stack>
  </Box>
);

export default function StyleGuide() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
        color: "text.primary",
        "& > .MuiStack-root": {
          maxWidth: "none",
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        🎨 Style Guide
      </Typography>

      <Stack spacing={2} mt={4} sx={{ width: "100%" }}>
        {/* Buttons Section */}
        <Accordion
          defaultExpanded
          sx={{
            bgcolor: "#0A0A0A !important",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            "&:before": {
              display: "none",
            },
            "& .MuiAccordion-region": {
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
            "& .MuiAccordionSummary-root": {
              bgcolor: "#0A0A0A !important",
            },
            "& .MuiAccordionDetails-root": {
              bgcolor: "#0A0A0A !important",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
              borderRadius: "8px",
              "&.Mui-expanded": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            <Typography variant="h5">Buttons</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={4}>
              <ButtonSection title="Primary Buttons" color="primary" />
              <ButtonSection title="Secondary Buttons" color="secondary" />
              <ButtonSection title="Success Buttons" color="success" />
              <ButtonSection title="Error Buttons" color="error" />
              <ButtonSection title="Warning Buttons" color="warning" />
              <ButtonSection title="Info Buttons" color="info" />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Chips Section */}
        <Accordion
          defaultExpanded
          sx={{
            bgcolor: "#0A0A0A !important",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            "&:before": {
              display: "none",
            },
            "& .MuiAccordion-region": {
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
            "& .MuiAccordionSummary-root": {
              bgcolor: "#0A0A0A !important",
            },
            "& .MuiAccordionDetails-root": {
              bgcolor: "#0A0A0A !important",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
              borderRadius: "8px",
              "&.Mui-expanded": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            <Typography variant="h5">Chips</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={2}>
              <Chip label="Info" color="info" />
              <Chip label="Warning" color="warning" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Background Layers Section */}
        <Accordion
          defaultExpanded
          sx={{
            bgcolor: "#0A0A0A !important",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            "&:before": {
              display: "none",
            },
            "& .MuiAccordion-region": {
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
            "& .MuiAccordionSummary-root": {
              bgcolor: "#0A0A0A !important",
            },
            "& .MuiAccordionDetails-root": {
              bgcolor: "#0A0A0A !important",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
              borderRadius: "8px",
              "&.Mui-expanded": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            <Typography variant="h5">Background Layers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={2}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "background.paper" }}>
                Paper background
              </Paper>
              <Box p={2} bgcolor="background.default" border="1px dashed #444">
                Default background
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
}
