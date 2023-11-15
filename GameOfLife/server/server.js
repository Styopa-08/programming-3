var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, menCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([]);
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0);
            }
    }

    //Grass
    for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);

            if (matrix[y][x] == 0) {
                    matrix[y][x] = 1
            }
    }

    //GrassEater

    for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);

            if (matrix[y][x] == 0) {
                    matrix[y][x] = 2
            }
    }

    for (let i = 0; i < predatorCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);

            if (matrix[y][x] == 0) {
                    matrix[y][x] = 3
            }
    }

    for (let i = 0; i < menCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);

            if (matrix[y][x] == 0) {
                    matrix[y][x] = 9
            }
    }


    return matrix;
}


let matrix = matrixGenerator(20, 12, 8, 4, 3, 9);