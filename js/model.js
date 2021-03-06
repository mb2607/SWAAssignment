function Model() {
    "use strict";
    
    var storeFruits;
    var fruits = [
        ["Banana", 10, "New York"],    
        ["Apple", 15, "London"],     
        ["Orange", 16, "Rome"],     
        ["Lemon", 40, "New York"],     
        ["Pineapple", 25, "London"],
        ["Grape", 36, "Rome"]  
    ];
    
    
    this.add = function(fruit, price, origin)
    {
         if (!isNaN(fruit) || !isNaN(origin) || isNaN(price) ) 
             {
                if (!isNaN(fruit))
                    {return alert('The name must be a string')}
                    if (isNaN(price))
                    {return alert('The price must be a number')}
                      if (isNaN(origin))
                    {return alert('The origin must be a string')}
                 
             }
             
        var valueToPush = new Array();
        valueToPush[0] = fruit;
        valueToPush[1] = price;
        valueToPush[2] = origin;
        fruits.push(valueToPush);       
    }
    
    this.deleteByName = function(fruit)
    {
        if(fruits.length != 1){
            fruits.forEach(function(array){
            array.forEach(function(member) {
                if(fruit === member) {
                    fruits.splice(fruits.indexOf(array),1);
                } 
                });
            }); 
        }        

    }
    
    this.edit = function(fruit, price, origin)
    {
        if(fruit != undefined || price != undefined || origin != undefined) {
            
        }
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
        if(this.storeFruits != undefined)
            fruits = this.storeFruits;
    }
    
    this.searchToEdit = function(item) {
        var temp = [];
        fruits.forEach(function(array){
           array.forEach(function(member){
               if(item === member) {
                temp.push(array[0]);
                temp.push(array[1]);
                temp.push(array[2]);
               }
           }); 
        });
        return temp;
    }

}
