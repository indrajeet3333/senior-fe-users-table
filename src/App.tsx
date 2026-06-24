/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~Problem Statement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Build a table of users with the `columns` defined below, plus in-memory
  global search, sorting, and pagination.

  Loading the data - read carefully:
    - The bulk users endpoint is OFF-LIMITS. Do NOT call
      https://dummyjson.com/users.
    - You may only fetch ONE user at a time, by id, via `USER_URL(id)`
      (e.g. https://dummyjson.com/users/1).
    - Load exactly the users listed in `USER_IDS`, as efficiently as you
      reasonably can.
    - Some ids in `USER_IDS` are invalid - the table must still display every
      user that loads successfully.

  Global Search - search across all columns shown in the table.
*/

import React from "react";
import "./App.css";

// Fetch a SINGLE user by id. (The bulk /users endpoint is off-limits.)
const USER_URL = (id: number) => `https://dummyjson.com/users/${id}`;

// Load exactly these users. Heads up: some of these ids are invalid.
const USER_IDS = [
  3, 7, 12, 9999, 1, 19, 25, 4, 250, 14,
  22, 8, 30, 11, 999, 5, 17, 28, 2, 23,
  9, 26, 15, 6, 20, 13, 27, 10, 24, 18,
];

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
          <div id="sort_filter">
            Sort By&nbsp;
            <select name="sort_by" id="sort_by">
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
              <option value="25">25</option>
              <option value="50">50</option>
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
