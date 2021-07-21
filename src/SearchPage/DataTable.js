import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Spinner from '../Spinner'
import './index.css'

export default function DataTable() {
  const results = useSelector((state) => state.search.value)
  const [on, setOn] = useState(true)
  const toggle = (btnID, eIDs) => {
    // setOn(on => !on)
    // Get the button that triggered this
    const theButton = document.getElementById(btnID)
    const theSubRow = document.getElementById(eIDs)
    // If the button is not expanded...
    if (theButton.getAttribute('aria-expanded') === 'false') {
      theButton.classList.add('clicked')
      // Loop through the rows and show them
      theSubRow.classList.add('shown')
      theSubRow.classList.remove('hidden')
      // Now set the button to expanded
      theButton.setAttribute('aria-expanded', 'true')
      // Otherwise button is not expanded...
    } else {
      theButton.classList.remove('clicked')

      theSubRow.classList.add('hidden')
      theSubRow.classList.remove('shown')
      // Now set the button to collapsed
      theButton.setAttribute('aria-expanded', 'false')
    }
  }

  return (
    <div className='limiter'>
      <div className='container-table'>
        <div className='wrap-table'>
          <div className='table-verb'>
            <div className='table-thead'>
              <table>
                <thead>
                  <tr className='row-head'>
                    <th className='column' style={{width: '23%', paddingLeft: '5%'}}>Hero Name</th>
                    <th className='column' style={{width: '22%'}}>Place-of-birth</th>
                    <th className='column' style={{width: '13%'}}>Publisher</th>
                    <th className='column' style={{width: '34%'}}>Work</th>
                    <th className='column' style={{width: '18%'}}>Image</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='table-body'>
              <table>
                <tbody>
                  {results && results.length > 0 ? (
                    results.map((result, key) => {
                      console.log(result, '-----result')
                      return (
                        <>
                          <Spinner load={false} />
                          <tr>
                           <td className="expandable-icon">
                              <div
                                className="button"
                                style={{ cursor: 'pointer' }}
                                id={key}
                                onClick={() => {
                                  return toggle(key, result.name + result.id)
                                }}
                                aria-expanded = "false"
                              >
                              </div>
                            </td>
                            <td className='table-td' id={key} style={{width: '20%', paddingLeft:0}}>
                              {result.name}
                            </td>
                            <td className='table-td' style={{paddingLeft: 0, width: '20%'}}>
                              {result.biography['place-of-birth']}
                            </td>
                            <td className='table-td' style={{width: '13%'}}>
                              {result.biography['publisher'] &&
                              result.biography['publisher'] !== 'null'
                                ? result.biography['publisher']
                                : ''}
                            </td>
                            <td className="table-td">
                              {result.work.base}
                            </td>
                            <td className="table-td">
                              <img
                                style={{ width: '70px', height: '70px', borderRadius: '5px' }}
                                src={result.image.url}
                                alt=''
                              />
                            </td>
                          </tr>
                          <tr className="table-td hidden" id={result.name + result.id}>
                            <div
                              className='sub-row'
                              style={{ display: 'flex' }}>
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
                                  eye-color: {result.appearance['eye-color']}{' '}
                                  <br />
                                </p>
                                <p>
                                  gender: {result.appearance.gender}
                                  <br />
                                </p>
                                <p>
                                  hair-color: {result.appearance['hair-color']}{' '}
                                  <br />
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
                        </>
                      )
                    })
                  ) : (
                    // <tbody
                    //   style={{ height: '150px' }}>
                    <tr style={{ height: '150px' }}>
                      <Spinner load={false} />
                      <td
                        style={{
                          fontFamily: 'bold',
                          fontSize: '30px',
                          textAlign: 'center',
                          paddingTop: '3%'
                        }}>
                        NO DATA
                      </td>
                    </tr>
                    // </tbody>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>
    //         <span className='visually-hidden'>Toggle</span>
    //       </th>
    //       <th style={{textAlign: 'center'}}>Name</th>
    //       <th style={{textAlign: 'center'}}>Place-of-birth</th>
    //       <th style={{textAlign: 'center'}}>Publisher</th>
    //       <th style={{textAlign: 'center'}}>Work</th>
    //       <th style={{textAlign: 'center'}}>Image</th>
    //     </tr>
    //   </thead>

    // {results && results.length > 0 ? (
    //   results.map((result, key) => {
    //     console.log(result, '-----result')
    //     return (
    //       <tbody>
    //         <Spinner load={false} />
    //         <tr>
    //           <td style={{ verticalAlign: 'middle' }}>
    //             <button
    //               style={{ cursor: 'pointer' }}
    //               type='button'
    //               id={key}
    //               onClick={() => {
    //                 return toggle(key, result.name + result.id)
    //               }}
    //               aria-expanded='false'
    //               aria-controls='MS01b'
    //               aria-label='3 more from'
    //               aria-labelledby='btnMSb lblMSb'>
    //               <svg
    //                 xmlns='\http://www.w3.org/2000/svg"'
    //                 viewBox='0 0 80 80'
    //                 focusable='false'>
    //                 <path d='M70.3 13.8L40 66.3 9.7 13.8z'></path>
    //               </svg>
    //             </button>
    //           </td>
    //           <td style={{ verticalAlign: 'middle', textAlign: 'center' }} id={key}>
    //             {result.name}
    //           </td>
    //           <td style={{ verticalAlign: 'middle', width: '25%', textAlign: 'center' }}>
    //             {result.biography['place-of-birth']}
    //           </td>x
    //           <td style={{ verticalAlign: 'middle', width: '8%', textAlign: 'center' }}>
    //             {result.biography['publisher'] && result.biography['publisher'] !== "null" ? result.biography['publisher'] : ""}
    //           </td>
    //           <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{result.work.base}</td>
    //           <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
    //             <img
    //               style={{ width: '70px', height: '70px' }}
    //               src={result.image.url}
    //               alt=''
    //             />
    //           </td>
    //         </tr>
    //         <tr id={result.name + result.id} className='hidden'>
    //           <div className='sub-row' style={{ display: 'flex' }}>
    //             <div style={{ width: '30%' }}>
    //               <h3>PowerStats</h3>
    //               <p>
    //                 Combat: {result.powerstats.combat}
    //                 <br />
    //               </p>
    //               <p>
    //                 Durability: {result.powerstats.durability}
    //                 <br />
    //               </p>
    //               <p>
    //                 Intelligence: {result.powerstats.intelligence}
    //                 <br />
    //               </p>
    //               <p>
    //                 Power: {result.powerstats.power}
    //                 <br />
    //               </p>
    //               <p>
    //                 Speed: {result.powerstats.speed}
    //                 <br />
    //               </p>
    //               <p>
    //                 Strength: {result.powerstats.strength}
    //                 <br />
    //               </p>
    //             </div>
    //             <div>
    //               <h3>Appearance</h3>
    //               <p>
    //                 eye-color: {result.appearance['eye-color']} <br />
    //               </p>
    //               <p>
    //                 gender: {result.appearance.gender}
    //                 <br />
    //               </p>
    //               <p>
    //                 hair-color: {result.appearance['hair-color']} <br />
    //               </p>
    //               <p>
    //                 height: {result.appearance.height} <br />
    //               </p>
    //               <p>
    //                 Weight: {result.appearance.Weight} <br />
    //               </p>
    //             </div>
    //           </div>
    //         </tr>
    //       </tbody>
    //     )
    //   })
    // ) : (
    //   <tbody style={{ height: '150px', border: '1px solid #8f8f8f' }}>
    //     <Spinner load={false} />
    //     <tr>
    //       <td></td>
    //       <td></td>
    //       <td
    //         style={{
    //           paddingTop: '3%',
    //           fontFamily: 'bold',
    //           fontSize: '30px',
    //           textAlign: 'right'
    //         }}>
    //         NO DATA
    //       </td>
    //     </tr>
    //   </tbody>
    // )}
    // </table>
  )
}
