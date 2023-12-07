export const priceSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: "#d9d9d9",
      boxShadow: state.isFocused ? "transparent" : "none",
      width: "125px",
      height: "48px",
      "&:hover": {
        borderColor: "#d9d9d9",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
      "&:hover": {
        backgroundColor: state.isFocused ? "transparent" : "#transparent",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      width: "224px",
    }),
  };