const express = require('express')
    , app = express()
    , dotenv = require('dotenv')
    , cors = require('cors')
    , router = require('./routes/index')

app.use( cors() );
app.use( express.json() );

app.use(express.urlencoded({ extended: true }) );
app.use('', router);

dotenv.config();
const port = process.env.PORT || 7010
    , env = process.env.NODE_ENV || "development";

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to playground TODO-List"
    });
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => { console.log(`Listening on port ${port}`)})