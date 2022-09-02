const Values = {
  BASE_URL: "https://backend.estetix.ro",
  // BASE_URL: "http://backend.wpmhs.com",
  consfig: {
    headers: {
      token: JSON.parse(localStorage.getItem("login"))?.value.token || "token",
    },
  },
};

export default Values;
