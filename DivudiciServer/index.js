const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;

const { API_VERSION } = require("./config");

//mongoose.set("useFindAndModify", false);

mongoose.connect("mongodb+srv://TeamMancos:TeamMancos@cluster0.rcbjt.mongodb.net/Restaruarante",
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

        if (err) {

            throw err;

        } else {
            app.listen(port, () => {
                console.log("Se ha conectado a la base de datos por medio del URL http://localhost:3977/api/v1/");
            });
        }
    }
);