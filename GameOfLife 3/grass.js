class Grass extends LivingCrerature {  
    mul(){
    
    let emptyCells = this.chooseCell(0)
    let newCell = random(emptyCells)
    
    if(newCell ){
    let newX = newCell[0]
    let newY = newCell[1]
    
    matrix[newY][newX] = 2
    
    let grEat= new GrassEater(newX, newY)
    grassEaterArr.push(grEat)  
 }
}
}
    
