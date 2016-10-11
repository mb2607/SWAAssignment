function Model() {
    "use strict";

    var fruits = ['Banana','Apple','Leomn'];
    
    
    
    this.add = function(fruit)
    {
     this.fruits.push(fruit);   
    }
    
    this.deleteByName = function(fruit){
                
        this.fruits.splice(this.fruits.indexOf(fruit), 1);
    }
    
    
    this.edit = function(oldFruit, newFruit)
    {
        this.fruits[this.fruits.indexOf(oldFruit)] = newFruit;
    }
    
    this.show = function()
    {
        return this.fruits;
    }

}
