const { app } = require("./src/server");
const DB = require("./src/config/dbConnect");

const PORT = 3000;

DB()
.then(() => {
    console.log("Connected to mongoDB");
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
})
.catch((err) => {
    console.log("Error connnecting to mongoDB",err);
});