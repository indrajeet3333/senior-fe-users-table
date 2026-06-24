# Front-End Engineering Exercise — Users Table

Welcome, and thanks for taking the time. This is a focused, hands-on coding exercise
for the **Senior Front-End Engineer** role. You'll build a small but realistic feature
in React + TypeScript while we pair with you.

- **Time box:** ~75 minutes of coding.
- **Format:** live, paired session — please think out loud and ask questions.
- **Stack:** React 18 + TypeScript + Vite (already set up).

We care more about *how* you work — the decisions you make and how you reason about
them.

---

## The task

Build a **Users table**. The starting point is `src/App.tsx`, which already renders the
static page chrome (a search box, a sort control, the table header, and a pagination
footer). The same problem statement is repeated as a comment at the top of that file.

1. **Fetch** the list of users from this endpoint using `fetch`:

   ```
   https://dummyjson.com/users
   ```
2. **Render** the users in a table with exactly these columns:

   | Column id           | Header          |
   | ------------------- | --------------- |
   | `name`            | Full Name       |
   | `email`           | Email Address   |
   | `phone`           | Phone Number    |
   | `company_address` | Company Address |
3. Implement the following, all **in-memory** (client-side — no extra requests once the
   data is loaded):

   - **Global search** — a single search input that filters rows across *all* columns
     shown in the table.
   - **Sorting** — let the user sort the table by a column.
   - **Pagination** — page through the results, with a selectable page size
     (the placeholder UI suggests 10 / 25 / 50).

That's the whole brief. Part of the exercise is working out how the data maps onto the
table — take a few minutes to inspect what the endpoint actually returns before you wire
it up.

---

## Ground rules

- **Vanilla React + TypeScript only** for the table logic. Please do **not** reach for a
  table / data-grid library (TanStack Table, AG Grid, MUI DataGrid, etc.) or a general
  utility library (lodash, etc.) for the sorting / filtering / pagination / search — we
  want to see *you* implement that logic. React and its built-in hooks are of course fine.
- **Styling is not the point.** Some CSS is provided in `src/App.css`. Make it readable;
  don't spend your time making it pretty.
- **Prioritize and narrate.** If you won't finish everything, tell us what you'd do next
  and why. Clarifying questions are welcome at any point.

---

A partial-but-clean, well-reasoned solution beats a rushed, complete-but-messy one.
Good luck — and enjoy it.
