class  LivingCrerature{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiple = 0;
        this.energ = 0
     
            
    }
    chooseCell(character) {
        this.getNewCordinates()
        var found = [];
        for (let i = 0; i < this.directions.length; i++) {
        let x = this.directions[i][0];
        let y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
        found.push(this.directions[i]);
        }
        }
        
        }
      
        
        }
        eat() {
            let foods = this.chooseCell(1, 2)
            let food = random(foods)
            
            if (food) {
            this.energy++
            
            let newX = food[0]
            let newY = food[1]
            
            for (let i in grassArray) {
            if (newX == grassArray[i].x && newY == grassArray[i].y) {
            grassArray.splice(i, 1)
            break;
            }
            }
            
            for (let i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1)
            break;
            }
            }
            
            matrix[newY][newX] = 3
            
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
            mul() {
    
                let emptyCells = this.chooseCell(0)
                let newCell = random(emptyCells)
                
                if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
                
                matrix[newY][newX] = 3
                
                let pred = new grassEater(newX, newY)
                grassEaterArr.push(grassEater)
                
                }
                }   

}