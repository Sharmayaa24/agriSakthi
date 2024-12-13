export const topbarStyles = {
    searchBar: {
      display: "flex",
      backgroundColor: "white",
      borderRadius: "3px",
      height: "40px",
      border: "1px solid #e0e0e0",
      "&:hover": {
        border: "1px solid #b0b0b0",
      },
      gap: 2,
    },
    searchInput: {
      ml: 2,
      flex: 1,
      "& input": {
        // color: "#cfd2d4",
        caretColor: "#007bff",
      },
      "&:focus-within": {
        outline: "none",
        caretColor: "#007bff",
      },
    },
    searchButton: {
      p: 1,
      color: "#c8c8c8",
    },
    notificationButton: {
      backgroundColor: "#e9ecff",
      borderRadius: "8px",
      width: "40px",
      height: "40px",
      "&:hover": {
        backgroundColor: "#d0d4f5",
      },
    },
    notificationIcon: {
      color: "#7f91ec",
    },
    settingsButton: {
      backgroundColor: "#ffebe7",
      borderRadius: "8px",
      width: "40px",
      height: "40px",
      "&:hover": {
        backgroundColor: "#f5d0d0",
      },
    },
    settingsIcon: {
      color: "#ff9d88",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    profileBox: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#2f4cdd",
      borderRadius: "20px 40px 40px 20px",
      padding: "8px 16px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      maxWidth: "300px",
      overflow: "hidden",
      zIndex: 1,
    },
    profileText: {
      fontWeight: "bold",
      color: "white",
      marginRight: "48px",
      position: "relative",
      zIndex: 2,
      padding: "5px",
    },
    profileImageContainer: {
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #f0f0f0",
      flexShrink: 0,
      zIndex: 2,
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
      clipPath: "circle(50% at center)",
    },
  };
  