import  React from 'react'

import './index.css'

export default function Spinner({load}) {

  return (
    <>
      {load ? <div className="loading-spinner"></div> : <></> }
    </>
  )
}