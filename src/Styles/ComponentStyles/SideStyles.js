const sidebarStyles = (theme) => ({
  sidebarContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  "& .pro-menu-item.active": {
    backgroundColor: "#ffffff !important",
    color: "#0056D2 !important",
    borderLeft: "4px solid #1d7f41 !important",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #e0e0e0",
    zIndex: 1,
  },
  logo: {
    width: "80px",
    height: "72px",
    marginLeft: "60px",
    overflowY: "hidden",
    marginTop: "2px",
  },
  toggle: {
    marginBottom: "10px",
  },
  menuContainer: {
    padding: "10px 20px",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    transition: "margin 0.3s ease",
  },
  menuContainerClosed: {
    marginLeft: "20px",
  },
  submenuBox: {
    marginLeft: "15px",
    paddingLeft: "10px",
    borderLeft: "1px solid #e0e0e0",
  },
  scrollableMenu: {
    height: "calc(100vh - 64px)",
    paddingBottom: "30px",
  },
  menuLinkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
});

export default sidebarStyles;
