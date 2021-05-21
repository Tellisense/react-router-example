import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
// import { useUser } from '../context/UserProvider'
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

const PasswordRequestPage = () => {
  const classes = useStyles();
  // const user = useUser()
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',

  })


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    // make the api call
    try {
      const { data } = await axios.post('http://localhost:1337/auth/forgot-password', {
        email: formData.email,
        url:
          'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password'
      });
      console.log(`password Request response:`, data)
      // user.setCurrentUser(data.user.email)
      // localStorage.setItem('token', data.jwt);
      // setFormData({
      //   email: '',
      //   password: ''
      // })
      history.push("/email-sent");

    } catch (ex) {
      console.log(ex)
    }


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
          Request Password Change
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Your Email"
            name="email"
            type="email"
            value={FormData.email}
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>

            <Grid item>
              <Link href="/login" variant="body2">
                {"remember your password? Log In"}
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


export default PasswordRequestPage