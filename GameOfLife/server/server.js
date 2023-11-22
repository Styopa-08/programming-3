let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

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


matrix = matrixGenerator(20, 12, 8, 4, 3, 9);



io.sockets.emit('send matrix', matrix)


grassArray = [];
grassEaterArr = [];
predatorArr = [];
manArr = [];


Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")


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
                }
        }
        io.sockets.emit('send matrix', matrix)


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
        console.log("Client connected");

        createObject(matrix);


});