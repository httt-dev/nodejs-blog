const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/httt_education_dev",
            {}
        );
        console.log("Connect ok");
    } catch (error) {
        console.log("Connect fail");
    }
}

module.exports = { connect };
