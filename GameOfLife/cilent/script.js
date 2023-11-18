
let side = 40;

///creature arrays


function setup() {
        frameRate(5);

        createCanvas(20 * side, 20 * side);


}

function nkarel(matrix) {
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


}

    setInterval(
        function () {
        socket.on('send matrix', nkarel)
        },1000
    )
    