function Model() {
    "use strict";

    var fruits = ['Banana', 'Apple', 'Lemon'];
    
    
    this.add = function(fruit)
    {
        fruits.push(fruit);        
    }
    
    this.deleteByName = function(fruit)
    {
        fruits.splice(fruits.indexOf(fruit), 1);
    }
    
    this.edit = function(oldFruit, newFruit)
    {
        fruits[fruits.indexOf(oldFruit)] = newFruit;
    }
    
    this.show = function()
    {
        return fruits;
    }

}
