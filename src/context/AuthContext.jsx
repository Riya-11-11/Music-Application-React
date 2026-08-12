import React, { createContext } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]"); // to see that localstorage k data m is users ka name store h to wo de do nhi to blank array return
    
    const alreadyExist = users.find((user) => {
      return user.email === newUser.email;
    }); //to check us email s already account register h ya nhi

    if (alreadyExist) {
      return {
        success: false, //flag
        message: "User Already Exists!",
      };
    }

    const updateUser = [...users, newUser]; // users wali s jo arr localstorage jo mil rha h use copy kr do

    localStorage.setItem("users", JSON.stringify(updateUser));

    return {
      success: true,
      message: "User Created Successfully!",
    }; //to show on UI
  };

  return (
    <AuthContextData.Provider value={{registerUser}}>{children}</AuthContextData.Provider>
  );
};

export default AuthContext;
