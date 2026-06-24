/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~Problem Statement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Build a table of users with the `columns` defined below, plus in-memory
  global search, sorting, and pagination.

  Loading the data - read carefully:
    - The bulk users endpoint is OFF-LIMITS. Do NOT call
      https://dummyjson.com/users.
    - Load each user with the provided `fetchUser(id)` helper - it is the only
      fetch path. Load exactly the ids in `USER_IDS`, as efficiently as you
      reasonably can.
    - IMPORTANT: `fetchUser` does NOT return the user's `id`. You still have to
      show the id in the first column - so track which id you requested and
      attach it yourself.
    - Some ids in `USER_IDS` are invalid - the table must still display every
      user that loads successfully.

  Global Search - search across all columns shown in the table.
*/

import React from "react";
import "./App.css";

// Builds the URL for a single user. (The bulk /users endpoint is off-limits.)
const USER_URL = (id: number) => `https://dummyjson.com/users/${id}`;

// Load exactly these users. Heads up: some of these ids are invalid.
const USER_IDS = [
  3, 7, 12, 9999, 1, 19, 25, 4, 250, 14,
  22, 8, 30, 11, 999, 5, 17, 28, 2, 23,
  9, 26, 15, 6, 20, 13, 27, 10, 24, 18,
];

// DO NOT MODIFY this METHOD. Use it as it is
// Load a single user. This is the only sanctioned fetch path - use it as-is.
// IMPORTANT: the returned object does NOT include `id` (the API does not give
// you back the id you asked for). You must attach the id yourself.
async function fetchUser(id: number) {
  const res = await fetch(USER_URL(id));
  if (!res.ok) throw new Error(`Failed to load user ${id} (HTTP ${res.status})`);
  const user = await res.json();
  delete user.id;
  return user;
}

const columns = [
  {
    id: "id",
    name: "ID",
  },
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
