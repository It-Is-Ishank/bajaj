const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Hello World");
});

app.post('/bhfl', (req, res) => {
    try {
        const { data } = req.body;
    var odd_numbers = [];
    var even_numbers = [];
    var alphabets = [];

    data.forEach(str => {
        if (str.length === 1 && str.match(/[a-z]/i)) {
            alphabets.push(str.toUpperCase());
        } else {
            var num = parseInt(str);
            if (num % 2 == 0) {
                even_numbers.push(num);
            } else {
                odd_numbers.push(num);
            }
        }
    });

    return res.json({
        "is_success": true,
        "user_id": "ishank_kapur_17062003",
        "roll_number": "2110992086",
        "email": "ishank2086.be21@chitkara.edu.in",
        odd_numbers,
        even_numbers,
        alphabets
    });
    } catch (error) {
        res.status(500).json({
            is_success : false,
            error : error
        })
    }
});

const PORT = 3000; 
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
