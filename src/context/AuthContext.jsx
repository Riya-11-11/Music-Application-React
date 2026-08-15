import React, { createContext, useState } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

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

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || []; //localstorage s data laane k liye use krte h

    const alreadyExist = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!alreadyExist)
      return {
        success: false,
        message: "Invalid email or password!",
      };

    setUser(alreadyExist);

    localStorage.setItem("currentUser", JSON.stringify(user)); // reload krne s detail nhi jaayega

     return {
    success: true,
    message: "User logged in successfully!",
  };

  };

 
  return (
    <AuthContextData.Provider value={{ registerUser, loginUser, user}}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
