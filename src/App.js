import React from "react";
import "./styles.css";
import ReactTable from "./ReactTable";
import makeData from "./Utils/makeData";
import { columns } from "./Utils/helpers";

export default function App() {
  const data = makeData(20);

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
