const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const formTemplate = `
<!DOCTYPE html>
<html>
  <head><title>Form Submission</title></head>
  <body>
    <h1>Submit Your Info</h1>
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required><br><br>
      <label>Email:</label>
      <input type="email" name="email" required><br><br>
      <label>Message:</label><br>
      <textarea name="message" rows="4" cols="30"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
`;

const resultTemplate = `
<!DOCTYPE html>
<html>
  <head><title>Result</title></head>
  <body>
    <h1>Submitted Data</h1>
    <p><strong>Name:</strong> <%= name %></p>
    <p><strong>Email:</strong> <%= email %></p>
    <p><strong>Message:</strong> <%= message %></p>
    <a href="/">Go Back</a>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(formTemplate);
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  // Render the inline EJS template
  const ejs = require("ejs");
  const html = ejs.render(resultTemplate, { name, email, message });
  res.send(html);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
