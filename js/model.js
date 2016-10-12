function Model() {
    "use strict";
    
    var storeFruits;
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
        if(fruits.length>2)
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
    
    this.search = function(item) {
        var temp = [["Fruit","Price", "Origin"]];
        this.storeFruits = fruits;
        var foundItem = false;
        fruits.forEach(function(array) {
           array.forEach(function(member) {
             if(item === member) {
                foundItem = true;
                temp.push(array);
             }  
           }); 
        });
        fruits = temp;

        if(!foundItem)
            fruits = this.storeFruits;
    }
    
    this.clearSearch = function() {
        fruits = this.storeFruits;
    }

}
