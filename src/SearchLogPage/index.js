import React, { useEffect, useState } from 'react'
import BackImage from '../Image/button-back.svg'
import './index.css'

export default function SearchLog() {

  return (
    <>
    <div style={{paddingTop: '3%', paddingLeft: '3%'}}>
      <button onClick={() => window.location.replace("/")} className='back-button'>
        <div style={{display: 'flex'}}>
          <img src={BackImage} alt='' /> 
          <p style={{color:'white', paddingLeft: '15%'}}>Back</p>
        </div>
      </button>
    </div>
      <h1 style={{ textAlign: 'center' }}>
        Search History
      </h1>
      <div className='limiter'>
      <div className='container-table'>
        <div style={{width: '600px'}}>
          <div className='table-verb'>
            <div className='table-thead'>
              <table>
                <thead>
                  <tr className='row-head'>
                    <th className='column' style={{width: '23%', paddingLeft: '5%'}}>No</th>
                    <th className='column' style={{width: '22%'}}>Search Name</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='table-body'>
              <table>
                <tbody>
                {localStorage.getItem('inputName') &&
                  localStorage
                    .getItem('inputName')
                    .split(',')
                    .map((res, key) => {
                      return (
                        <tr>
                          <td style={{paddingLeft: '5%'}}>{key}</td>
                          <td style={{paddingLeft: '20%'}}>{res}</td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
