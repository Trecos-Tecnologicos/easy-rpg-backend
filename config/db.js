const {default: mongoose} = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb+srv://dev:V45nHqnCEdCXeIl4@ordem-database.mwdyuto.mongodb.net/ordem_database?retryWrites=true&w=majority&appName=ordem-database')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}