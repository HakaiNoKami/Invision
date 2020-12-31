import React, { useState } from "react";
import { Grid, Typography, TextField, Link, Button } from "@material-ui/core";
import Divider from "../../Components/Divider";
import "./Login.scss";

// Images
import CarouselImage from "../../Images/Carousel.png";

// Icons
import GoogleIcon from "../../Components/GoogleIcon";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: false, message: "" });
  const [password, setPassword] = useState({ value: "", error: false, message: "" });

  const formChange = (e) => {
    let value = e.target.value;
    let emailPath = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (e.target.name) {
      case "email":
        !value || emailPath.test(value)
          ? setEmail({ value, error: false, message: "" })
          : setEmail({ value, error: true, message: "O e-mail está incorreto" });
        break;
      case "password":
        setPassword({ ...password, value: value });
        break;
      default:
        break;
    }
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!email.value) {
      setEmail({ ...email, error: true, message: "Este campo não pode ser vazio" });
      return;
    }

    if (!password.value) {
      setPassword({ ...password, error: true, message: "Este campo não pode ser vazio" });
      return;
    }
  };

  return (
    <Grid container className="login">
      <Grid item xs={12} md={6} className="carousel">
        <div className="carousel-item">
          <img src={CarouselImage} alt="Carousel" className="carousel-item-img" />
          <Typography variant="subtitle1" align="center">
            Marcenas mattis egestas
          </Typography>
          <Typography variant="body1" align="center">
            Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="form">
        <Typography variant="h6" align="right">
          Invision
        </Typography>
        <Typography variant="subtitle1" align="center">
          Welcome to Invision
        </Typography>
        <form onSubmit={signIn} onChange={formChange}>
          <div className="form-group">
            <TextField
              label="Users name or Email"
              name="email"
              fullWidth
              value={email.value}
              error={email.error}
              helperText={email.message}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              name="password"
              itemType="password"
              fullWidth
              value={password.value}
              error={password.error}
              helperText={password.message}
            />
            <Link href="#" color="inherit" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          <div className="form-group">
            <Button variant="contained" type="submit">
              Sign in
            </Button>
          </div>
          <Divider text="or" />
          <Button variant="contained" startIcon={<GoogleIcon />} className="google-button">
            Sign in with Google
          </Button>
        </form>
        <Typography variant="body1" align="center" className="sign-up-link">
          New <b>Invision? </b>
          <Link href="/sign-up" color="inherit">
            Create Account
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
