import axios from "axios";
const value = typeof window !== "undefined";
const hrmsLink = "http://localhost:3001/";
// const link = "https://api.mscorpres.net:3001/hrmslogin/hrSignin"

const mainLink = axios.create({
  baseURL: hrmsLink,
  headers: value
    ? {
        "x-csrf-token": JSON.parse(
          localStorage.getItem("loggedInUser")
        )?.token,
      }
    : "",
});

export { mainLink };
