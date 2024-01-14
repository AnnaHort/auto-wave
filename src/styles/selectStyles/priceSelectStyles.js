export const priceSelectStyles = {
    control: (provided, state) => ({
      ...provided,
    padding: "0px 0px 0px 28px",
    borderRadius: "12px",
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
      color: state.isFocused ? "var(--color-primary-black)" : "rgba(18, 20, 23, 0.20)",
      "&:hover": {
        backgroundColor: state.isFocused ? "transparent" : "#transparent",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      width: "224px",
    }),
  };

  //   padding: 0 0 0 24px;
  // text-indent: 40px;