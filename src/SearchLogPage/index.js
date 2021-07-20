import { NONAME } from 'dns'
import React, { useState } from 'react'
import BackImage from '../Image/button-back.svg'

export default function SearchLog() {
  return (
    <>
      <div style={{ paddingTop: '10%', paddingLeft: '5%' }}>
        <a
          href='/'
          style={{
            textDecoration: 'none',
            display: 'flex',
            fontWeight: 'bold',
            color: '#8f8f8f',
            fontSize: '24px',
            cursor: 'pointer'
          }}>
          <img src={BackImage} alt='' />
          <p style={{ paddingLeft: '1%', color: 'black' }}>Back</p>
        </a>
      </div>
      <h1 style={{ textAlign: 'center', paddingBottom: '3%' }}>
        Search History
      </h1>
      <table style={{ margin: 'auto', width: '40%' }}>
        <thead>
          <tr>
            <th>NO</th>
            <th style={{ textAlign: 'center' }}>Search Name</th>
          </tr>
        </thead>
        {localStorage.getItem('inputName') &&
          localStorage
            .getItem('inputName')
            .split(',')
            .map((res, key) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td style={{textAlign: 'center'}}>{res}</td>
                </tr>
              )
            })}
      </table>
    </>
  )
}
