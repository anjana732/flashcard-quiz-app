import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // replace with ngrok URL if needed

function Notification() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    socket.on("github_update", (data) => {
      setNotification(data);
    });

    return () => {
      socket.off("github_update");
    };
  }, []);

  return (
    <div>
      <h1>Flashcard Quiz App</h1>
      {notification && (
        <div className="notification">
          🔔 {notification.message} from {notification.repo}
        </div>
      )}
    </div>
  );
}

export default Notification;
