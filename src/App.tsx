/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~Problem Statement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Call the api endpoint specified by `USERS_URL` using fetch to get a list of users
  Based on the user details, we want to display the user details in a table with given 
  `columns` on line 6.
  We want to implement in-memory filtering, pagination and sorting for this table
  Global Search - Search on all columns available in the table
*/

import React from "react";
import "./App.css";

const USERS_URL = "https://dummyjson.com/users";

const columns = [
  {
    id: "name",
    name: "Full Name",
  },
  {
    id: "email",
    name: "Email Address",
  },
  {
    id: "phone",
    name: "Phone Number",
  },
  {
    id: "company_address",
    name: "Company Address",
  },
];

function App() {
  console.log("Happy Coding!");
  return (
    <>
      <div className="app">
        <div className="app_section">
          <h1>User Details</h1>
        </div>
        <div className="sort_and_filter_section">
          <input className="app_section--input" placeholder="Global Search" />
          <div id="rows_filter">
            Sort By&nbsp;
            <select name="rows" id="rows_per_page">
              {columns.map((column, index) => (
                <option key={index} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="app_section">
          <table className="users-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th className="users-table--header-item" key={column.id}>
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <div className="pagination">
          <div id="rows_filter">
            Rows per page&nbsp;
            <select name="rows" id="rows_per_page">
              <option value="10">10</option>
              <option value="10">25</option>
              <option value="10">50</option>
            </select>
          </div>
          <div id="page_filter">
            Users 1 - 10 of 209
            <button id="prev_page">{`<`}</button>
            <span id="page_number">1</span>
            <button id="next_page">{`>`}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
