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
let side = 40;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let manArr = [];

function setup() {
        frameRate(5);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        }  else if(matrix[y][x] == 3){
                                let pred = new Predator(x,y);
                                predatorArr.push(pred);
                        } else if (matrix[y][x] == 9){
                                let man = new Man(x,y);
                                manArr.push(man)
                        }
                }
        }

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ('red')
                        } else if(matrix[y][x] == 9){
                                fill ("black")
                        }
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)
                }
        }

        for (let i in grassArray) {
                grassArray[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for(let i in predatorArr){
                predatorArr[i].eat()
        }
        for(let i in manArr){
                manArr[i].eat()
        }

}

function setup() {
        createCanvas(7 * side, 13 * side);
        background("#acacac");
    }

    function nkarel(matrix) {
        console.log(matrix);
        
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side)
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
        }
    }
    
    }
    setInterval(
        function () {
        socket.on('send matrix', nkarel)
        },1000
    )