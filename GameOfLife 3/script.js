function matrixGenerator(matrixSize, grassCount) {
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

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 1
                 }

                
        }

       

        return matrix;
}

let matrix = matrixGenerator(20, 30);
let side = 40;

///creature arrays
let grassArray = [];

function setup() {
        frameRate(5);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        }
                    
                }
        }

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } 
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)
                }
        }


}

