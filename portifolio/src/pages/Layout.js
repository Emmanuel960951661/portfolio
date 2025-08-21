import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav
        style={{
          padding: "8px 20px",
          display: "flex",          
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#424340ff"
        }}
      >
      
        <div>
          <img
            src="/logo.png"          
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",   
              objectFit: "cover"
            }}
          />
        </div>

        
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "20px"
          }}
        >
          <li style={{ fontSize: 20 }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgba(255, 252, 174, 0.88)" }}
            >
              Home
            </Link>
          </li>
          <li style={{ fontSize: 20 }}>
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "rgba(255, 252, 174, 0.88)" }}
            >
              About
            </Link>
          </li>
          <li style={{ fontSize: 20 }}>
            <Link
              to="/ContactMe"
              style={{ textDecoration: "none", color: "rgba(255, 252, 174, 0.88)" }}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
