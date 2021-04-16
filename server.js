const app = require('./app');
const express = require('express');
const path = require('path');

app.use(express.static(`${__dirname}/client/dist`));

require('./config')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/dist/index.html`));
});

app.listen(process.env.PORT, () =>
    console.log(`Server has been started on ${process.env.PORT}`)
);
