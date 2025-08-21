import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opinion: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your opinion!");
 
    setFormData({ name: "", email: "", opinion: "" }); 
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        

        <div style={{ marginBottom: "15px" }}>
          <label>Add Your Opinion:</label><br />
          <textarea
            name="opinion"
            placeholder="Write your opinion here..."
            rows="4"
            value={formData.opinion}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
