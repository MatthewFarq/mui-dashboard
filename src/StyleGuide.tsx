import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Paper,
  Divider,
} from "@mui/material";

export default function StyleGuide() {
  return (
    <Box
      p={4}
      bgcolor="background.default"
      minHeight="100vh"
      color="text.primary"
    >
      <Typography variant="h4" gutterBottom>
        🎨 Style Guide
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        Buttons
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Typography variant="h6" gutterBottom>
        Chips
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Chip label="Info" color="info" />
        <Chip label="Warning" color="warning" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
      </Stack>

      <Typography variant="h6" gutterBottom>
        Background Layers
      </Typography>
      <Stack direction="row" spacing={2}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: "background.paper" }}>
          Paper background
        </Paper>
        <Box p={2} bgcolor="background.default" border="1px dashed #444">
          Default background
        </Box>
      </Stack>
    </Box>
  );
}
