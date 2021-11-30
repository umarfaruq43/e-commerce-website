module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
        "very-dark-blue": " hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": " hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        lightbox: "hsl(0, 0%, 0%)",
        "lightbox-fade": "hsla(0, 0%, 0%, .3)",
      },
      container: {
        center: true,
        lg: "max-width:768px",
        xl: "max-width:768px",
      },
      minHeight: {
        0: "0",
        square: "18rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["responsive", "hover", "focus", "group-hover"],
      width: ["responsive", "hover", "focus", "group-hover"],
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
      cursor: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
