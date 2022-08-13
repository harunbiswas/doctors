const Values = {
  BASE_URL: "http://localhost:5000",
  consfig: {
    headers: {
      token: JSON.parse(localStorage.getItem("login"))?.value.token || "token",
    },
  },
};

export default Values;
