// Get user from localStorage
const getUserFromLS = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("qittWaitlistUser") || "null");
  }
  return null;
};

// Add user to localStorage
const addUserToLS = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("qittWaitlistUser", JSON.stringify(user));
  }
};

export { getUserFromLS, addUserToLS };
