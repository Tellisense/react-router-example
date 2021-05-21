import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useUser } from '../context/UserProvider'
import { useHistory } from 'react-router-dom';
import Copyright from '../components/Copyright'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useUser()


  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    username: "",
    email: '',
    password: ''
  })


  const handleChange = e => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // make the api call

    fetch('http://localhost:1337/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        username: registerData.username,
        email: registerData.email,
        password: registerData.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRegisterData({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
        })
        history.replace("/confirm-registration");
      })
      .catch(error => console.log(`this is an errror: `, error))




    // try {
    //   const { data } = await axios.post('http://localhost:1337/auth/local/register', {
    //     firstName: registerData.firstName,
    //     lastName: registerData.lastName,
    //     username: registerData.username,
    //     email: registerData.email,
    //     password: registerData.password
    //   });
    //   console.log(`register data:`, data)

    //   setRegisterData({
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     email: '',
    //     password: ''
    //   })
    //   history.replace("/confirm-registration");

    // } catch (ex) {
    //   console.log(ex)
    // }


    //response of the api call will save user into context

    // route the form to the main
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            value={registerData.firstName}
            autoComplete="firstName"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={registerData.lastName}
            autoComplete="lastName"
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={registerData.username}
            autoComplete="email"
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={FormData.email}
            autoComplete="email"
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={FormData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


export default RegisterPage