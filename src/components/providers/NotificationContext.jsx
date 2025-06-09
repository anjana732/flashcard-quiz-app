import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { NotificationContext } from "../context/NotificationContext";

const socket = io("http://localhost:5000"); // or your deployed URL

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("github_update", (data) => {
      setNotification(data);
      setCount((prev) => prev + 1);
    });

    return () => {
      socket.off("github_update");
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, count, setCount }}>
      {children}
    </NotificationContext.Provider>
  );
};
