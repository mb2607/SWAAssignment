function Controller(view, model) {
    "use strict";
    this.show = function(){
        return model.show();
    }
    
    this.add = function(input){
        model.add(input);
    }
    
    this.deleteByName = function(input){
        model.deleteByName(input);
    }
}
