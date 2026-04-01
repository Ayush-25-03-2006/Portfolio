import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Dashboard.css";
import image from "./Images/photo_ayush.jpg";

function Dashboard() {
  const text = "Interested In Backend Development";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="dashboard">
      <h2>Hi 👋</h2>
      <h1>I am Ayush</h1>

      {/* Typing Text */}
      <h3 className="typing">{displayText}</h3>

      <p>Java | React | Spring Boot</p>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/ayush-kumar-43051728b/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin />
        </a>
      </div>

      <img src={image} alt="Ayush" className="profile-img" />
    </div>
  );
}

export default Dashboard;
