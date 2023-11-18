let LivingCreature = require('./LivingCreature')

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 8
    }


    move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}


    


    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 2

            let grEat = new GrassEater(newX, newY)
            grassEaterArr.push(grEat)



        }
    }

    eat() {
        var grassCells = super.chooseCell(1);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]

        if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

            

            matrix[newY][newX] = matrix[this.y][this.x];

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            this.energy++;

            if (this.energy >= 12) {
                console.log(this.energy);
                this.mul()
            }



        } else {
            this.move()
        }
    }

    move() {
        
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}
    

    die() {
        matrix[this.y][this.x] = 0;

    }





}
