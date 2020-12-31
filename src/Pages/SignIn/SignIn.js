import React, { useState } from "react";
import { Grid, Typography, TextField, Link, Button } from "@material-ui/core";
import Carousel from "../../Components/Carousel";
import Divider from "../../Components/Divider";
import "./SignIn.scss";

// Images
import CarouselImage from "../../Images/Carousel.png";

// Icons
import GoogleIcon from "../../Components/GoogleIcon";

const carouselData = [
  {
    image: CarouselImage,
    subtitle: "Marcenas mattis egestas",
    description: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: CarouselImage,
    subtitle: "Marcenas mattis egestas",
    description: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: CarouselImage,
    subtitle: "Marcenas mattis egestas",
    description: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
  {
    image: CarouselImage,
    subtitle: "Marcenas mattis egestas",
    description: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
  },
];

const SignIn = () => {
  const [email, setEmail] = useState({ value: "", error: false, message: "" });
  const [password, setPassword] = useState({ value: "", error: false, message: "" });

  const handleFormChange = (event) => {
    let value = event.target.value;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (event.target.name) {
      case "email":
        !value.trim() || emailRegex.test(value)
          ? setEmail({ value, error: false, message: "" })
          : setEmail({ value, error: true, message: "O e-mail está incorreto" });
        break;
      case "password":
        !value.trim() || value.length > 6
          ? setPassword({ value, error: false, message: "" })
          : setPassword({ ...password, value });
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!email.value) setEmail({ ...email, error: true, message: "Este campo não pode ser vazio" });

    if (!password.value) setPassword({ ...password, error: true, message: "Este campo não pode ser vazio" });

    if (!email.value || !password.value) return;

    setEmail({ value: "", error: false, message: "" });
    setPassword({ value: "", error: false, message: "" });
  };

  return (
    <Grid container className="sign-in">
      <Grid item xs={12} md={6} className="carousel">
        <div className="carousel-item">
          <Carousel list={carouselData} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="form">
        <Typography variant="h6" align="right">
          Invision
        </Typography>
        <Typography variant="subtitle1" align="center">
          Welcome to Invision
        </Typography>
        <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
          <div className="form-group">
            <TextField
              label="Users Name or Email"
              name="email"
              fullWidth
              value={email.value}
              error={email.error}
              helperText={email.message}
              inputProps={{"data-testid": "email"}}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              name="password"
              type="password"
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
            <Button variant="contained" type="submit" data-testid="button-submit">
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

export default SignIn;
