const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sql = require('mssql');
const sqlConfig = {
    user:'preethacp',
    password:'Rf6PVyj7B8!PNcT',
    server:'preethacp.database.windows.net',
    database:'MobileHour'
};




app.get('/products', (req, res) => {
    console.log('Request data is ', req);
    res.status(200);
    sql.connect(sqlConfig, (err) => {
        if(err) {
            console.log('There was an error connecting to database', err);
            return;
        }
        const request = new sql.Request();
        request   .query('select * from product', (err, data) => {
            if(err) {
                console.log('There was an error connecting to database', err);
                return; 
            }
            res.send(data.recordset);

        })
    })
})

app.listen(8080, () => {
    console.log('Listening to port 8080');
})

