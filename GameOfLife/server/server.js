var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
const Grass = require('./grass');
const GrassEater = require('./grassEater');

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
}

matrix = matrixGenerator(20, 12, 8, 4, 3, 9)

io.sockets.emit('send matrix', matrix)

grassArr = []
GrassEaterArr = []


 Grass = require("./Grass")
 GrassEater = require("./GrassEater")

 function createObject(matrix) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y, 1);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    var grEater = new GrassEater(x, y, 2);
                    grassEaterArr.push(grEater)

                }
                if (matrix)[y][x]== 3) {
                        var man = new Man(x,y,3);
                        matrixGenerator.push(man)
                }
                else if (matrix[y][x] == 4) {
                        var saviorArr = new savior(x, y, 2);
                        saviorArr.push(savior)
    
                    }
            }