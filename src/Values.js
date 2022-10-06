const Values = {
  // BASE_URL: "https://backend.estetix.ro",
  // BASE_URL: "http://backend.wpmhs.com",
  // BASE_URL: "http://localhost:5000",
  BASE_URL: "http://backendupdate.estetix.ro",
  consfig: {
    headers: {
      token: JSON.parse(localStorage.getItem("login"))?.value.token || "token",
    },
  },
  API_KEY: "AIzaSyB1eT2au8g1uYrJv5b9GE_QngM6-vmzVys",
};

export default Values;
