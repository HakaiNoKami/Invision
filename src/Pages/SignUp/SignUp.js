import React, { useState } from "react";
import { Grid, Typography, TextField, Link, Button } from "@material-ui/core";
import Carousel from "../../Components/Carousel";
import Divider from "../../Components/Divider";
import "./SignUp.scss";

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

const SignUp = () => {
  const [name, setName] = useState({ value: "", error: false, message: "" });
  const [email, setEmail] = useState({ value: "", error: false, message: "" });
  const [password, setPassword] = useState({ value: "", error: false, message: "" });

  const formChange = (event) => {
    let value = event.target.value;
    switch (event.target.name) {
      case "name":
        !value || value.length > 2 ? setName({ value, error: false, message: "" }) : setName({ ...name, value });
        break;
      case "email":
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !value || emailRegex.test(value)
          ? setEmail({ value, error: false, message: "" })
          : setEmail({ value, error: true, message: "O e-mail está incorreto" });
        break;
      case "password":
        !value || value.length >= 6
          ? setPassword({ value, error: false, message: "" })
          : setPassword({ value, error: true, message: "A senha não pode ter menos de 6 caracteres" });
        break;
      default:
        break;
    }
  };

  const onSignUp = (event) => {
    event.preventDefault();

    if (!name.value) setName({ ...name, error: true, message: "Este campo não pode ser vazio" });

    if (!email.value) setEmail({ ...email, error: true, message: "Este campo não pode ser vazio" });

    if (!password.value) setPassword({ ...password, error: true, message: "Este campo não pode ser vazio" });

    if (!name.value || !email.value || !password.value) return;
  };

  return (
    <Grid container className="sign-up">
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
          Getting Started
        </Typography>
        <form onSubmit={onSignUp} onChange={formChange}>
          <div className="form-group">
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={name.value}
              error={name.error}
              helperText={name.message}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Users Name or Email"
              name="email"
              fullWidth
              value={email.value}
              error={email.error}
              helperText={email.message}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Create Password"
              name="password"
              type="password"
              fullWidth
              value={password.value}
              error={password.error}
              helperText={password.message}
            />
          </div>
          <div className="form-group">
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </div>
          <Divider text="or" />
          <Button variant="contained" startIcon={<GoogleIcon />} className="google-button">
            Sign up with Google
          </Button>
        </form>
        <Typography variant="body1" align="center" className="sign-up-link">
          By signing up, you agree to <b>Invision </b>
          <br />
          <Link href="#" color="inherit">
            Terms of Conditions
          </Link>
          <> and </>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
        </Typography>
        <Typography variant="body1" align="center" className="sign-up-link">
          Already on <b>Invision? </b>
          <Link href="/" color="inherit">
            Log in
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUp;
