const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const getColumnWidth = (field) => {
  const widthMap = {
    CustomerId: {
      xs: 100,
      sm: 120,
      md: 100,
      lg: 200,
      xl: 180,
    },
    FirstName: {
      xs: 100,
      sm: 120,
      md: 120,
      lg: 200,
      xl: 200,
    },
    LastName: {
      xs: 100,
      sm: 130,
      md: 130,
      lg: 200,
      xl: 200,
    },
    Email: {
      xs: 100,
      sm: 180,
      md: 180,
      lg: 200,
      xl: 200,
    },
    PhoneNumber: {
      xs: 100,
      sm: 150,
      md: 150,
      lg: 200,
      xl: 200,
    },
    Address: {
      xs: 100,
      sm: 140,
      md: 140,
      lg: 150,
      xl: 250,
    },
    Actions: {
      xs: 80,
      sm: 90,
      md: 90,
      lg: 100,
      xl: 100,
    },
    id: {
      xs: 23,
      sm: 90,
      md: 90,
      lg: 80,
      xl: 80,
    },
    name: {
      xs: 23,
      sm: 90,
      md: 90,
      lg: 100,
      xl: 100,
    },
    email: {
      xs: 23,
      sm: 90,
      md: 90,
      lg: 100,
      xl: 100,
    },
  };

  const screenWidth = window.innerWidth;

  if (screenWidth < breakpoints.sm) {
    return widthMap[field]?.xs || 100;
  } else if (screenWidth < breakpoints.md) {
    return widthMap[field]?.sm || 100;
  } else if (screenWidth < breakpoints.lg) {
    return widthMap[field]?.md || 100;
  } else if (screenWidth < breakpoints.xl) {
    return widthMap[field]?.lg || 100;
  } else {
    return widthMap[field]?.xl || 100;
  }
};
