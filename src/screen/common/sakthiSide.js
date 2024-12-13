import React, { useState, useEffect } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, IconButton, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import CustomMenuItem from "../common/CustomMenu";
import menuItems from "./sakthiMenu";
import sidebarStyles from "../../Styles/ComponentStyles/SideStyles";
import Logo from "../../image/logo.png";
import "../../Styles/Side.css";

const SideBar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSmallCollapsed, setIsSmallCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 565) {
        setIsSmallCollapsed(true);
      } else if (window.innerWidth < 650) {
        setIsSmallCollapsed(true);
      } else {
        setIsSmallCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeOtherSubmenus = (key) => {
    setOpenSubmenus((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((submenuKey) => {
        if (submenuKey !== key) {
          newState[submenuKey] = false;
        }
      });
      return newState;
    });
  };

  const toggleSidebar = () => {
    if (window.innerWidth < 650) {
      setIsSmallCollapsed((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  const classes = sidebarStyles(theme);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Overlay for small screens */}
      {window.innerWidth < 650 && !isSmallCollapsed && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSmallCollapsed(true)}
        />
      )}
      {/* Sidebar Header */}
      <Box sx={classes.sidebarContainer}>
        <Sidebar
          collapsed={window.innerWidth < 650 ? isSmallCollapsed : isCollapsed}
        >
          <Box sx={classes.sidebarHeader}>
            {!(window.innerWidth < 650 ? isSmallCollapsed : isCollapsed) && (
              <img src={Logo} alt="Logo" style={classes.logo} />
            )}
            <IconButton style={classes.toggle} onClick={toggleSidebar}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/* Scrollable Menu */}
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
            style={{
              ...classes.scrollableMenu,
              ...(isCollapsed || isSmallCollapsed
                ? classes.menuContainerClosed
                : {}),
            }}
          >
            <Menu iconShape="square">
              {menuItems.map((menuItem) => {
                const isParentActive =
                  selected === menuItem.url ||
                  (menuItem.submenu &&
                    menuItem.submenu.some(
                      (submenu) => submenu.url === selected
                    ));
                return (
                  <React.Fragment key={menuItem.key}>
                    {/* Top-Level Menu Item */}
                    <Link
                      to={menuItem.url || "#"}
                      style={classes.menuLinkStyle}
                    >
                      <CustomMenuItem
                        icon={menuItem.icon}
                        isCollapsed={
                          window.innerWidth < 650
                            ? isSmallCollapsed
                            : isCollapsed
                        }
                        isActive={isParentActive}
                        onClick={() => {
                          if (menuItem.url) setSelected(menuItem.url);
                          if (menuItem.submenu) {
                            toggleSubmenu(menuItem.key);
                            closeOtherSubmenus(menuItem.key);
                          }
                        }}
                      >
                        {!(window.innerWidth < 650
                          ? isSmallCollapsed
                          : isCollapsed) && menuItem.label}
                      </CustomMenuItem>
                    </Link>
                    {/* Submenu Items */}
                    {menuItem.submenu &&
                      openSubmenus[menuItem.key] &&
                      !(window.innerWidth < 650
                        ? isSmallCollapsed
                        : isCollapsed) && (
                        <Box sx={classes.submenuBox}>
                          {menuItem.submenu.map((submenuItem, idx) => (
                            <Link
                              to={submenuItem.url}
                              key={`${menuItem.key}-${idx}`}
                              style={classes.menuLinkStyle}
                            >
                              <CustomMenuItem
                                icon={submenuItem.icon}
                                isActive={selected === submenuItem.url}
                                onClick={() => setSelected(submenuItem.url)}
                              >
                                {submenuItem.name}
                              </CustomMenuItem>
                            </Link>
                          ))}
                        </Box>
                      )}
                  </React.Fragment>
                );
              })}
            </Menu>
          </PerfectScrollbar>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default SideBar;
