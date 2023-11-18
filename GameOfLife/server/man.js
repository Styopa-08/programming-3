let LivingCreature = require('./livingCreature')
class manArr{
    constructor(x, y) {
        super((x,y))
        this.energy = 10
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char1) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }


        return found

    }
    eat() {
        let foods = this.chooseCell(2)
        let food = random(foods)

        if (food) {
            console.log("udelllll")
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 9

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 12) {
                this.mul()
            }



        } else {
            this.move()
        }
    }
    move() {
        console.log("aaaaaa")
        this.energy--

        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 9
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY


            if (this.energy <= 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0

        for (let i in manArr) {
            if (this.x == manArr[i].x && this.y == manArr[i].y) {
                manArr.splice(i, 1)
            }
        }
    }
}

