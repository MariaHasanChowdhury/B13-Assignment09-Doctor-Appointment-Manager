"use client";

import {
createContext,
useContext,
useEffect,
useState,
} from "react";

import api from "@/services/api";

const AuthContext = createContext();

export const useAuth = () =>
useContext(AuthContext);

export default function AuthProvider({
children,
}) {
const [user, setUser] =
useState(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {
const storedUser =
localStorage.getItem("user");


if (storedUser) {
  setUser(
    JSON.parse(storedUser)
  );
}

setLoading(false);


}, []);

const loginUser = (
userData
) => {
localStorage.setItem(
"user",
JSON.stringify(userData)
);


setUser(userData);


};

const updateUser = (
userData
) => {
localStorage.setItem(
"user",
JSON.stringify(userData)
);


setUser(userData);


};

const logoutUser =
async () => {
try {
await api.post(
"/auth/logout"
);


    localStorage.removeItem(
      "user"
    );

    setUser(null);
  } catch (error) {
    console.log(error);
  }
};


return (
<AuthContext.Provider
value={{
user,
loading,
loginUser,
logoutUser,
updateUser,
}}
>
{children}
</AuthContext.Provider>
);
}
