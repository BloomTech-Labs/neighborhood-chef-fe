import React from "react";
import chefIcon from "@iconify/icons-whh/chef";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const AuthHeader = () => {
  const { push } = useHistory();
  return (
    <div
      style={{
        background: "#FCFCFC",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.06)",
        height: "10vh",
        width: "100vw",
      }}
    >
      <div>
        <Link to="/">
          <div className="left-side-header">
            <span style={{ color: "#58D473", marginRight: "5px" }}>
              <Icon width="1.1em" icon={chefIcon} />
            </span>
            <span>Neighborhood Chef</span>
          </div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Link to="/">
          <Typography>Community</Typography>
        </Link>
        <Link to="/">
          <Typography>About Us</Typography>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.6rem",
          marginRight: "3%",
        }}
      >
        <Link to="/login">Login</Link>
        <button
          style={{
            background: "#58D473",
            color: "white",
            borderRadius: "10px",
            padding: "15px 30px",
            marginLeft: "60px",
            fontSize: "1.6rem",
            outline: "none",
            border: "none",
          }}
          onClick={() => push("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default AuthHeader;
