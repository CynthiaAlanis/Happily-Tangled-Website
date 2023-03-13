import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Item from './Item'
import styled from 'styled-components'


const Home = style.div
`text-align:center;
max-width:1200px;
margin-left:auto;
margin-right:auto;
`
const Header = styled.div
`padding:100px 100px 10px 100px;
h1{
  font-size: 42px;
}
`
const Subheader = styled.div`
font-weight:300;
font-size:25px;
`
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:20px;
width:100%
`
const API_URL = "http://localhost:3000/api/v1/items";
const Items = () =>{
  const [items, setItems] = useState([])

  useEffect(()=> {
// this will get the items from an api
//update items in our state
  axios.get(API_URL)
  .then(resp => setItems(resp.data.data))
  .catch(resp => console.log(resp))
}, [items.length])

const grid = items.map(item =>{
  return (
   <Item 
    key={item.attributes.name}
    attributes={item.attributes}
   />
 )
})

  return (
    <Home>
      <Header>
        <h1>Items Available</h1>
        <Subheader>Reviews</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Items