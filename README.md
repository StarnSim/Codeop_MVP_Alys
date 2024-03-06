# Saturn's Always Somewhere

This full-stack MVP is a hobby-finding interactive app where the user can search through a Hobby database using a filtered-search function, as well as add new events to the hobby categories.

## Built With

- React (^18.2.0)
- HTML5
- CSS3
- JavaScript (ES6)
- ReactRouter (^6.14.2)
- MySQL (^2.18.1)
- Node.js (20.11.0)
- Express.js (~4.16.1)
- Bootstrap (^5.3.3)

## Setup

### Node.js

- Ensure you have Node.js installed. Saturn's Always Somwhere is developed with Node.js and uses it as the runtime environment. You can check your Node.js version by running `node -v` in your terminal. If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/).

### Dependencies

- Run `npm install` in the project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).


### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`, and adding your password.
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=HOSTNAME
  DB_USER=USERNAME
  DB_NAME=alys_mvp
  DB_PASS=YOURPASSWORD
```

- Run the following commands to your MySQL console: `CREATE DATABASE alys_mvp;` and then `USE alys_mvp;`
- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create three tables in your database: "hobbies," "user," and "events."
- Make sure you understand how the tables are constructed. In your MySQL console, you can run `DESCRIBE tablename;` to see the structure of each table. Please mind that "tablename" in `DESCRIBE tablename` needs to be replaced by the name of the table that you want to describe.

### Development

- Run `npm start` in project directory to start the Express server on port 4000. It's recommended to use `nodemon` for automatic server restarts during development. If you don't have `nodemon` installed, you can install it globally using `npm install -g nodemon`.

- In another terminal, navigate to the `client` directory (`cd client`) and run `npm run dev` to start the client in development mode with hot reloading in port 5173.


