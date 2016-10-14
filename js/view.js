function View() {
    "use strict";
    
    var table = document.getElementById('fruitsTable');
    
    this.updateFullTable = function(){
         var fruits = controller.show();

        $("#fruitsTable tr").remove();
        
        for(var i=0; i < fruits.length; i++){
            var tr = table.appendChild(document.createElement('tr'));
            for(var j = 0; j < fruits[i].length; j++) {
                var td = tr.appendChild(document.createElement('td'));
                td.appendChild(document.createTextNode(fruits[i][j]));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        } 
    }
    
    var addNodeToTable = function(){
        var textInput = document.getElementById('textInput').value;
        var priceInput = document.getElementById('priceInput').value;
        var originInput = document.getElementById('originInput').value;
        var oldLength = controller.show().length;
                
        controller.add(textInput, priceInput, originInput);
                
        var newLength = controller.show().length;
        var fruits = controller.show();
        //compare old table length to new table length, if different, add node
        for(var i=oldLength; i < newLength; i++){
            var tr = table.appendChild(document.createElement('tr'));
            for(var j= 0; j < fruits[i].length; j++) {
                var td = tr.appendChild(document.createElement('td'));
                td.appendChild(document.createTextNode(fruits[i][j]));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }     
    }
    
    buttonSearch.onclick = function() {
        var item = document.getElementById('search').value;
        controller.search(item);
        view.updateFullTable();
    }
    
    buttonClearSearch.onclick = function() {
        controller.clearSearch();
        view.updateFullTable();
    }
    
    buttonAdd.onclick=function(){
        
        addNodeToTable();
    }
        
    buttonDelete.onclick=function(){
        var textInput = document.getElementById('textDelete').value;
        if(textInput != '')
            controller.deleteByName(textInput);
        view.updateFullTable(); 
    }
        
    buttonEdit.onclick=function(){
        var textInput = document.getElementById('textInput').value;
        var editInput = document.getElementById('editInput').value;

        controller.edit(textInput, editInput);
        alert('you are about to change ' + textInput + ' into ' + editInput);

        var fruits = controller.show();

        view.updateFullTable(); 
    }
    
    buttonEditSearch.onclick = function() {
        var textInput = document.getElementById('editSearchInput').value;
        console.log(textInput);
        var inputs = [];
        inputs = controller.searchToEdit(textInput);
        
        if(inputs[0] != undefined || inputs.length !== 0 && textInput != undefined){
            document.getElementById('editNameInput').value = inputs[0];
            document.getElementById('editPriceInput').value = inputs[1];
            document.getElementById('editOriginInput').value = inputs[2];
            }
    }
    
    buttonEdit.onclick = function(){
        var fruitTodelete = document.getElementById('editSearchInput').value;
        var fruitName = document.getElementById('editNameInput').value;
        var price = document.getElementById('editPriceInput').value;            var origin = document.getElementById('editOriginInput').value;
        
        if(fruitName != "" && price != "" && origin != "") {
            if(fruitName != undefined && price != undefined && origin != undefined)
                   controller.deleteByName(fruitTodelete);
        controller.add(fruitName, price, origin); 
        }

        view.updateFullTable();
    }
    
  }

