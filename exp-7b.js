const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } 
  })
);

const USERNAME = "admin";
const PASSWORD = "12345";

app.get("/", (req, res) => {
  if (req.session.user) {
    res.send(`
      <h2>Welcome, ${req.session.user}!</h2>
      <p>You are logged in.</p>
      <a href="/logout">Logout</a>
    `);
  } else {
    res.send(`
      <h2>Login Page</h2>
      <form method="POST" action="/login">
        <label>Username:</label>
        <input type="text" name="username" required><br><br>
        <label>Password:</label>
        <input type="password" name="password" required><br><br>
        <button type="submit">Login</button>
      </form>
    `);
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    req.session.user = username;
    res.redirect("/");
  } else {
    res.send("<h3>Invalid credentials. <a href='/'>Try again</a></h3>");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send("Error logging out.");
    }
    res.clearCookie("connect.sid");
    res.send("<h3>You have been logged out. <a href='/'>Login again</a></h3>");
  });
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
