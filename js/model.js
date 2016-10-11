function Model() {
    "use strict";

    var fruits = [
        ["Fruit", "Price", "Origin"],
        ["Banana", 10, "New York"],    
        ["Apple", 15, "London"],     
        ["Orange", 16, "Rome"],     
        ["Lemon", 40, "New York"],     
        ["Pineapple", 25, "London"],    
        ["Grape", 36, "Rome"]  
    ];
    
    
    
    
    this.add = function(fruit, price, origin)
    {
        var valueToPush = new Array();
        valueToPush[0] = fruit;
        valueToPush[1] = price;
        valueToPush[2] = origin;
        fruits.push(valueToPush);       
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
