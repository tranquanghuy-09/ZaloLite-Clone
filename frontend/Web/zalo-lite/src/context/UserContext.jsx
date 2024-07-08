import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  const [cons, setCons] = useState("");
  const [loadDefaultAvt, setLoadDefaultAvt] = useState("https://res.cloudinary.com/du73a0oen/image/upload/v1716221190/Zalo-Lite/vw0enwbq8qhqx1bp7xan.jpg");
  const [group, setGroup] = useState(null);
  return (
    <UserContext.Provider value={{ userID, setUserID, cons, setCons, loadDefaultAvt, setLoadDefaultAvt, group, setGroup}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
