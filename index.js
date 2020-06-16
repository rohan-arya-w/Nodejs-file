const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const savedDir = path.join(__dirname, 'test');

app.get('', (req, res) => {
    res.send('Hello World!')
})

app.get('/file', (req, res) => {
    let presentDay = new Date();
    let date = presentDay.getFullYear() + '-' + (presentDay.getMonth() + 1) + '-' + presentDay.getDate();
    let time = presentDay.getHours() + "-" + presentDay.getMinutes() + "-" + presentDay.getSeconds();
    let name = `${date}-${time}`;
    fs.writeFileSync(`test/${name}.txt`, `Current date-time: Date: ${date} and Time: ${time}`)
    res.send("success")
       
})



app.get('/check', (req, res) => {
    let lst = []
    fs.readdir(savedDir, (err,data) => {
      data.forEach((i) => {
        lst.push(i)
      })  
      res.send(lst)
    })
})


app.listen(3000, () => {
    console.log('check @ http://localhost:3000/')
})