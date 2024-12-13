import React from "react";
import { styled } from "@mui/material";
const CustomMenuItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "isCollapsed" && prop !== "isActive",
})(({ isCollapsed, isActive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "flex-start",
  height: "50px",
  marginBottom: "10px",
  textDecoration: "none",
  color: isActive ? "#1d7f41" : "#333",
  backgroundColor: isActive ? "white" : "white",
  boxSizing: "border-box",
  cursor: "pointer",
  padding: isCollapsed ? "0" : "0px 5px",
  boxShadow: isCollapsed ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  borderLeft: isActive ? "4px solid #1d7f41" : "4px solid transparent",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: isCollapsed ? "transparent" : "#F0F0F0",
    boxShadow: isCollapsed ? "none" : "0px 6px 8px rgba(0, 0, 0, 0.2)",
  },
  "&:active": {
    backgroundColor: isCollapsed ? "transparent" : "#E0E0E0",
    boxShadow: isCollapsed ? "none" : "inset 0px 4px 6px rgba(0, 0, 0, 0.15)",
  },
  "& .MuiSvgIcon-root": {
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  },
  "& .menuText": {
    display: isCollapsed ? "none" : "inline",
  },
}));
// Custom MenuItem
const CustomMenuItemComponent = ({
  icon,
  isCollapsed,
  isActive,
  children,
  onClick,
}) => {
  return (
    <CustomMenuItem
      isCollapsed={isCollapsed}
      isActive={isActive}
      onClick={onClick}
    >
      {icon && <div style={{ marginRight: "10px" }}>{icon}</div>}
      <span className="menuText">{children}</span>
    </CustomMenuItem>
  );
};
export default CustomMenuItemComponent;
