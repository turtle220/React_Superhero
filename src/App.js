import React from "react";
import axios from "axios";

import "./styles.css";
import ReactTable from "./ReactTable";
import makeData from "./Utils/makeData";
import { columns } from "./Utils/helpers";

export default function App() {
  const data = makeData(20);
  const superToken = '218078420318941'
  const superHeroAPI = `https://superheroapi.com/api/${superToken}/1`

  React.useEffect(() => {
    axios.get(superHeroAPI).then((response) => {
      // setPost(response.data);
      console.log('------superHeorAPI', response)
    });
  }, []);

  return (
    <>
      <ReactTable
        data={data}
        columns={columns}
        className="-striped -highlight"
        getTdProps={({ column, row }) => {
          return {
            onClick: (e) => {
              if (column.Header !== "") {
                alert(
                  `Hello ${row.original.firstName} ${row.original.lastName}`
                );
              }
            }
          };
        }}
        SubComponent={({ row }) => {
          return (
            <div style={{ padding: "20px" }}>
              <em>You can put any component you want here.</em>
              <br />
              <br />
              <div style={{ color: "blue" }}>
                Name: {row.original.firstName} {row.original.lastName}
              </div>
            </div>
          );
        }}
      />
    </>
  );
}
