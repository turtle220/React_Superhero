import React from "react";

const columns = [
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    id: "lastName",
    accessor: (d) => d.lastName
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Status",
    accessor: "status"
  },

  {
    Header: "Visits",
    accessor: "visits"
  }
];

export default React.memo(columns);
