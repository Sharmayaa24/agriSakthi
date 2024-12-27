import React from "react";
import {
  Box,
  IconButton,
  Badge,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { topbarStyles } from "../../Styles/ComponentStyles/TopStyles";

const Topbar = () => {
  const toggleFullScreen = () => {
    const root = document.getElementById("root");

    if (!document.fullscreenElement) {
      root.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <Box p={2}>
      <Grid container justifyContent="space-between" alignItems="center">
        {/* SEARCH BAR */}
        <Grid item xs={12} sm={6} md={4} mb={2}></Grid>
        {/* ICONS AND PROFILE */}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
          >
            <IconButton
              sx={topbarStyles.settingsButton1}
              onClick={toggleFullScreen}
            >
              <ZoomOutMapIcon />
            </IconButton>
            {/* Profile Section */}
            <Box display="flex" alignItems="center" gap={2}>
              <Button>
                <Typography variant="body2" color="#686868" fontSize={14}>
                  logout
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
