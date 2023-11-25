var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("../client"));

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


matrix = matrixGenerator(20, 12, 8, 4, 3, 9)

io.sockets.emit('send matrix', matrix)


grassArray = [];
grassEaterArr = [];
predatorArr = [];
manArr = [];
dogArr = [];
saviorArr = [];


Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Savior = require("./savior")
Man = require("./man")
Dog = require("./dog")

function createObject(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y);
                                predatorArr.push(pred);
                        } else if (matrix[y][x] == 9) {
                                let man = new Man(x, y);
                                manArr.push(man)
                        }
                        else if (matrix[y][x] == 9) {
                                let savior = new savior(x, y);
                                saviorArr.push(savior)
                        }
                        else if (matrix[y][x] == 4) {
                                let dog = new dog(x, y);
                                dogArr.push(dog)
                        }
                }
                io.sockets.emit('send matrix', matrix)


        }

}

        function game() {
                for (let i in grassArray) {
                        grassArray[i].mul()
                }

                for (let i in grassEaterArr) {
                        grassEaterArr[i].eat()
                }

                for (let i in predatorArr) {
                        predatorArr[i].eat()
                }
                for (let i in manArr) {
                        manArr[i].eat()
                }
                io.sockets.emit("send matrix", matrix);
        }

        setInterval(game, 1000)





        io.on('connection', function () {

                createObject(matrix);

        });

        let statistics = {
                grass: 0,
                grassEater: 0,
                predator: 0,
                dog: 0,
                savior: 0,
                man: 0,

        }
        setInterval(function () {
                statistics.grass = grassArray.length
                statistics.grassEater = grassEaterArr.length
                statistics.predator = predatorArr.length
                statistics.dog = dogArr.length
                statistics.savior = saviorArr.length
                statistics.man = manArr.length
fs.writeFile("statistics.json",json)
        },1000)
