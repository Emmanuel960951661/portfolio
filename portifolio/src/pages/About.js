import { useState, useEffect } from "react";


const skills = [
  "Full Stack Website Developer",
  "Frontend Developer",
  "HTML, CSS & JavaScript",
  "React & Node.js",
  "Database & API Integration"
];

export default function About() {
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      padding: "40px" 
    }}>
      

      <img 
        src="profile.png" 
        alt="Amanuel profile" 
        style={{ 
          borderRadius: "50%", 
          width: "150px", 
          height: "150px", 
          marginBottom: "20px", 
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)" 
        }} 
      />

   
      <h1>Hi, I'm <span style={{ color: "#007bff" }}>Amanuel </span></h1>
      
   
      <h2 style={{ color: "#c6cbc7ff", transition: "0.9s" }}>
        {skills[index]}
      </h2>

      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px" }}>
        Passionate about building modern, responsive, and user-friendly websites. 
        I specialize in both frontend and backend development, delivering complete solutions.
      </p>

    
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
        <span style={{ background: "#8a8a8aff", padding: "10px 20px", borderRadius: "20px" }}>⚡ HTML</span>
        <span style={{ background: "#787878ff", padding: "10px 20px", borderRadius: "20px" }}>🎨 CSS</span>
        <span style={{ background: "#b69f9fff", padding: "10px 20px", borderRadius: "20px" }}>⚛️ React</span>
        <span style={{ background: "#cacaa6ff", padding: "10px 20px", borderRadius: "20px" }}>🟢 Node.js</span>
        <span style={{ background: "#8a938fff", padding: "10px 20px", borderRadius: "20px" }}>🗄️ MongoDB</span>
      </div>
    </div>
  );
}
