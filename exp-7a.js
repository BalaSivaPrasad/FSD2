const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/setcookie", (req, res) => {
  res.cookie("username", "JohnDoe", { maxAge: 60000 }); 
  res.send("✅ Cookie has been created! Go to /getcookie to read it.");
});

app.get("/getcookie", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`🍪 Hello, ${username}! Your cookie value is "${username}".`);
  } else {
    res.send("❌ No cookie found. Please visit /setcookie first.");
  }
});

app.get("/clearcookie", (req, res) => {
  res.clearCookie("username");
  res.send("🧹 Cookie has been cleared!");
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
