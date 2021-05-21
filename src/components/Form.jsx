import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    marginBottom: '2rem',
  },
  paper: {
    width: '100%',
    // backgroundColor: 'inherit'
  }

}));

export default function Form({ renderApi, setCounter, counter }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    appetizer: '',
    drink: '',
    mainCourse: '',
    dessert: '',
    email: ''
  })



  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:1337/orders', {
        data: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      renderApi()
      setFormData({
        appetizer: '',
        drink: '',
        mainCourse: '',
        dessert: '',
        email: ''
      })
      console.log(`formData response:`, data)

    } catch (ex) {
      console.log(ex)
    }
  }



  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Paper className={classes.paper}>
        <TextField type="text" name="appetizer" placeholder="Appetizer" value={formData.appetizer} onChange={handleChange} id="appetizer" label="Appetizer" variant="outlined" />
        <TextField type="text" name="drink" placeholder="drink" value={formData.drink} onChange={handleChange} id="drink" label="Drink" variant="outlined" />
        <TextField type="text" name="mainCourse" placeholder="Main Course" value={formData.mainCourse} onChange={handleChange} id="main-course" label="Main Course" variant="outlined" />
        <TextField type="text" name="dessert" placeholder="dessert" value={formData.dessert} onChange={handleChange} id="dessert" label="Dessert" variant="outlined" />
        <TextField type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} id="email" label="Email" variant="outlined" />
        <Button type="submit" variant="contained" color="secondary">
          Submit
</Button>
      </Paper>

    </form>
  );
}