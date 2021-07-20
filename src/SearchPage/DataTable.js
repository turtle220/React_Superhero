import React from 'react'
import { useSelector } from 'react-redux'

import Spinner from '../Spinner'
import './index.css'

export default function DataTable() {
  const results = useSelector((state) => state.search.value)

  const toggle = (btnID, eIDs) => {
    // Get the button that triggered this
    const theButton = document.getElementById(btnID)
    const theSubRow = document.getElementById(eIDs)
    // If the button is not expanded...
    if (theButton.getAttribute('aria-expanded') === 'false') {
      // Loop through the rows and show them
      theSubRow.classList.add('shown')
      theSubRow.classList.remove('hidden')
      // Now set the button to expanded
      theButton.setAttribute('aria-expanded', 'true')
      // Otherwise button is not expanded...
    } else {
      theSubRow.classList.add('hidden')
      theSubRow.classList.remove('shown')
      // Now set the button to collapsed
      theButton.setAttribute('aria-expanded', 'false')
    }
  }

  return (
    <table className='cell'>
      <thead>
        <tr>
          <th>
            <span className='visually-hidden'>Toggle</span>
          </th>
          <th>Name</th>
          <th>Place-of-birth</th>
          <th>Publisher</th>
          <th>Work</th>
          <th>Image</th>
        </tr>
      </thead>

      {results && results.length > 0 ? (
        results.map((result, key) => {
          return (
            <tbody>
              <Spinner load={false} />
              <tr>
                <td style={{ verticalAlign: 'middle' }}>
                  <button
                    style={{ cursor: 'pointer' }}
                    type='button'
                    id={key}
                    onClick={() => {
                      return toggle(key, result.name + result.id)
                    }}
                    aria-expanded='false'
                    aria-controls='MS01b'
                    aria-label='3 more from'
                    aria-labelledby='btnMSb lblMSb'>
                    <svg
                      xmlns='\http://www.w3.org/2000/svg"'
                      viewBox='0 0 80 80'
                      focusable='false'>
                      <path d='M70.3 13.8L40 66.3 9.7 13.8z'></path>
                    </svg>
                  </button>
                </td>
                <td style={{ verticalAlign: 'middle' }} id={key}>
                  {result.name}
                </td>
                <td style={{ verticalAlign: 'middle', width: '25%' }}>
                  {result.biography['place-of-birth']}
                </td>
                <td style={{ verticalAlign: 'middle', width: '8%' }}>
                  {result.biography['publisher']}
                </td>
                <td style={{ verticalAlign: 'middle' }}>{result.work.base}</td>
                <td style={{ verticalAlign: 'middle' }}>
                  <img
                    style={{ width: '70px', height: '70px' }}
                    src={result.image.url}
                    alt=''
                  />
                </td>
              </tr>
              <tr id={result.name + result.id} className='hidden'>
                <div className='sub-row' style={{ display: 'flex' }}>
                  <div style={{ width: '30%' }}>
                    <h3>PowerStats</h3>
                    <p>
                      Combat: {result.powerstats.combat}
                      <br />
                    </p>
                    <p>
                      Durability: {result.powerstats.durability}
                      <br />
                    </p>
                    <p>
                      Intelligence: {result.powerstats.intelligence}
                      <br />
                    </p>
                    <p>
                      Power: {result.powerstats.power}
                      <br />
                    </p>
                    <p>
                      Speed: {result.powerstats.speed}
                      <br />
                    </p>
                    <p>
                      Strength: {result.powerstats.strength}
                      <br />
                    </p>
                  </div>
                  <div>
                    <h3>Appearance</h3>
                    <p>
                      eye-color: {result.appearance['eye-color']} <br />
                    </p>
                    <p>
                      gender: {result.appearance.gender}
                      <br />
                    </p>
                    <p>
                      hair-color: {result.appearance['hair-color']} <br />
                    </p>
                    <p>
                      height: {result.appearance.height} <br />
                    </p>
                    <p>
                      Weight: {result.appearance.Weight} <br />
                    </p>
                  </div>
                </div>
              </tr>
            </tbody>
          )
        })
      ) : (
        <tbody style={{ height: '150px', border: '1px solid #8f8f8f' }}>
          <Spinner load={false} />
          <tr>
            <td></td>
            <td></td>
            <td
              style={{
                paddingTop: '3%',
                fontFamily: 'bold',
                fontSize: '30px',
                textAlign: 'right'
              }}>
              NO DATA
            </td>
          </tr>
        </tbody>
      )}
    </table>
  )
}
