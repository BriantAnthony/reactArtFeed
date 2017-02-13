## Purpose
This project is a quick demonstration done with reactJS and redux with a strict time limit of 2 days. Snapshot tests were written using jest to test rendered components.

The user is able to perform the following actions:

- login (demo account setup)
- Fetch random art cards
- Like an art card
- logout

Async strategy:
Redux-thunk was picked over redux-saga for a more expressive approach to actionCreators.

Compared to redux-saga, redux-thunk made writing new features much faster due to having less files to manage.

I attempted to keep consistent reducers, actions, actionCreators, while dealing with slight pattern inconsistencies from the backend (randomArt endpoint nested the response object inside an 'artwork' object instead of the standard 'data' object).

## Running the Project
After cloning the repo, simply:

``` npm install ```

Make sure you have jest installed globally,

``` npm install -g jest ```

Run the project with:

``` npm start ```

The project will run on port 3000

To run tests: 

``` npm test ```

