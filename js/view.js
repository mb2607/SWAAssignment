function View() {
    "use strict";
    
    var table = document.getElementById('fruitsTable');
 
    
    this.fillTable = function(controller){
        
        var fruits = controller.show();
        
        for(var i=0; i < fruits.length; i++){
            var tr = table.appendChild(document.createElement('tr'));
            var td = tr.appendChild(document.createElement('td'));
            td.appendChild(document.createTextNode(fruits[i]));
            tr.appendChild(td);
            table.appendChild(tr);
        } 
    }
    
    
        buttonAdd.onclick=function(){
            var textInput = document.getElementById('textInput').value;
            var oldLength = controller.show().length;

            controller.add(textInput);
            
             var newLength = controller.show().length;
            alert('old = '+ oldLength + ' new = ' + newLength);
            
            var fruits = controller.show();
        for(var i=oldLength; i < newLength; i++){
            var tr = table.appendChild(document.createElement('tr'));
            var td = tr.appendChild(document.createElement('td'));
            td.appendChild(document.createTextNode(fruits[i]));
            tr.appendChild(td);
            table.appendChild(tr);
        } 
        }
        
        buttonDelete.onclick=function(){
            var textInput = document.getElementById('textInput').value;
            var oldLength = controller.show().length;

            controller.deleteByName(textInput);
            
             var newLength = controller.show().length;
            alert('old = '+ oldLength + ' new = ' + newLength);
            
            var fruits = controller.show();
            
            $("#fruitsTable tr").remove(); 

        for(var i=0; i < fruits.length; i++){
            var tr = table.appendChild(document.createElement('tr'));
            var td = tr.appendChild(document.createElement('td'));
            td.appendChild(document.createTextNode(fruits[i]));
            tr.appendChild(td);
            table.appendChild(tr);
        } 
        }
        
        buttonEdit.onclick=function(){
            var textInput = document.getElementById('textInput').value;
            var editInput = document.getElementById('editInput').value;

            controller.edit(textInput, editInput);
            alert('you are about to change: ' + textInput + ' into: ' + editInput);
            
            var fruits = controller.show();
            
            $("#fruitsTable tr").remove(); 

        for(var i=0; i < fruits.length; i++){
            var tr = table.appendChild(document.createElement('tr'));
            var td = tr.appendChild(document.createElement('td'));
            td.appendChild(document.createTextNode(fruits[i]));
            tr.appendChild(td);
            table.appendChild(tr);
        } 
        }
    
 
    
       
    
    
}