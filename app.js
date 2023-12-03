// Initialization
const express = require("express");
const app = express();

// Route Initalization
const genRoutes = require("./routes/routes");
const jsRoutes = require("./routes/js-route");
const javaRoutes = require("./routes/java-route");
const pyRoutes = require("./routes/py-route");

// App - Start
const PORT = process.env.PORT || 3000;
app.set("port", PORT);
app.use('/', genRoutes);
app.use('/js', jsRoutes);
app.use('/java', javaRoutes);
app.use('/py', pyRoutes);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));