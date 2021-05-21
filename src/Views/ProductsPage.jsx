import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([])


  // GET Request Using Axios
  // useEffect(() => {
  //   try {
  //     const apiCall = async () => {
  //       const { data } = await axios.get('http://localhost:1337/products', {
  //         headers: {
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIxNTU0NTM1LCJleHAiOjE2MjQxNDY1MzV9.5lxcAZ3lnVKU-nPw1mCbz0mMwdqJHSC9N9E5xbqS95Q'
  //         }
  //       })
  //       setProducts(data)
  //     }
  //     apiCall()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])


  // POST request Using Axios
  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.post('http://localhost:1337/products', {
          name: "new Name",
          size: "new Size",
          color: "new Color"
        },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIxNTU0NTM1LCJleHAiOjE2MjQxNDY1MzV9.5lxcAZ3lnVKU-nPw1mCbz0mMwdqJHSC9N9E5xbqS95Q'
            }
          })
        setProducts(data)
      }
      apiCall()
    } catch (error) {
      console.log(error)
    }
  }, [])




  // useEffect(() => {
  //   try {
  //     const apiCall = async () => {
  //       const response = await fetch('http://localhost:1337/products', {
  //         method: 'GET',
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIxNTU0NTM1LCJleHAiOjE2MjQxNDY1MzV9.5lxcAZ3lnVKU-nPw1mCbz0mMwdqJHSC9N9E5xbqS95Q'
  //         }
  //       })
  //       const data = await response.json()

  //       setProducts(data)
  //       console.log(data)
  //     }

  //     apiCall()
  //   } catch (error) {
  //     //  toast error
  //     console.log(error)
  //   }
  // }, [])









  return (
    <div>
      <h1 className="text-4xl font-black ">Products Page</h1>
      <ul>
        {/* {products.map((item) => <li key={item.id}>{item.name}</li>)} */}
      </ul>
    </div>
  );

}

export default Products;
