/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "job.html",
    "login.html",
    "register.html",
    "employers.html",
    "jobDetails.html",
    "candidates.html",
    "candidatesDetails.html",
  ],
  theme: {
    extend: {
      colors: {
        Pigment: "#EE2326",
        Black: "#000000",
        "Rusian-Black": "#202020",
        "Brand-Ash": "#999CA6",
        "active-color": "#FF5733",
        "CG-Blue": "#1075A8",
      },
    },
  },
  plugins: [],
};
