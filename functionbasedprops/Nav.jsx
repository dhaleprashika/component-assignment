import React from 'react'

const Nav = (props) => {
  return (
  <>
    <h1>{props.data} {props.number} {props.boolean} {props.data2}</h1>
     <h2>{props.pic}</h2>
    </>
  )
}

export default Nav