import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Spinner from '../Spinner'

import { SuperAPI } from '../Config'
import './index.css'

export default function DataTable() {
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)
  const search = (inputName) => {
    setSpinner(true)

    axios
      .get(SuperAPI + `/search/${inputName}`)
      .then((response) => {
        let localval = localStorage.getItem('inputName')
        localval = !localval ? inputName : inputName + ',' + localval
        localStorage.setItem('inputName', localval)
        setSpinner(false)

        dispatch({
          type: 'SearchData',
          results: response.data.results
        })
      })
      .catch((error) => {
        console.log(error, 'error')
      })
  }

  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ height: '50px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <input
            type='search'
            list='dataList'
            placeholder='Input Hero Name'
            className='search-box'
            onKeyDown={(e) => {
              if (e.key === 'Enter') search(e.target.value)
            }}
          />
          <datalist id='dataList'>
            {localStorage.getItem('inputName') &&
              localStorage
                .getItem('inputName')
                .split(',')
                .map((res, key) => {
                  if(key <= 10) {
                    return <option value={res} />
                  }
                })}
          </datalist>
        </div>
        <div style={{ width: '15%' }}></div>
        <div>
          <button onClick={() => window.location.replace("/searchlog")} className='search-log'>
            View Search Log
          </button>
        </div>
      </div>
      <Spinner load={spinner} />
    </div>
  )
}
