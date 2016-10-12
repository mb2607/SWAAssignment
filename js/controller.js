function Controller(view, model) {
    "use strict";
    this.show = function(){
        return model.show();
    }
    
    this.add = function(fruit, price, origin){
        model.add(fruit, price, origin);
    }
    
    this.deleteByName = function(input){
        model.deleteByName(input);
    }
    
    this.edit = function(input1, input2){
        model.edit(input1, input2);
    }
    
    this.search = function(item) {
        model.search(item);
    }
    
    this.clearSearch = function(){
        model.clearSearch();
    }
}
