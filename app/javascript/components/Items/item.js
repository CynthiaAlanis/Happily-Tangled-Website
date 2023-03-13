import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const ItemLogo = styled.div`
  height: 50px;
`

const ItemName = styled.div`
  padding:20px;
`

const LinkWrapper = styled.div`
  margin: 20px 0;
  height:50px;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
  }
`

const Item = (props) => {
  const {name, image_url, slug} = props.attributes

  return (
    <Card>
      <ItemLogo>
        <img src={image_url} alt={name} width="50"/>
      </ItemLogo>
      <ItemName>
        {name}
      </ItemName>
      <LinkWrapper>
        <Link to={"/" + slug}>View Item</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Item 