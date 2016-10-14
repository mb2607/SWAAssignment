function View() {
    "use strict";
    
    var table = document.getElementById('fruitsTable');
    
    var updateFullTable = function(){
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
    
    this.fillTable = function(controller){
        updateFullTable();
    }
    
    buttonSearch.onclick = function() {
        var item = document.getElementById('search').value;
        controller.search(item);
        updateFullTable();
    }
    
    buttonClearSearch.onclick = function() {
        controller.clearSearch();
        updateFullTable();
    }
    
    buttonAdd.onclick=function(){
        
        addNodeToTable();
    }
        
    buttonDelete.onclick=function(){
        var textInput = document.getElementById('textDelete').value;
        if(textInput != '')
            controller.deleteByName(textInput);
        updateFullTable(); 
    }
        
    buttonEdit.onclick=function(){
        var textInput = document.getElementById('textInput').value;
        var editInput = document.getElementById('editInput').value;

        controller.edit(textInput, editInput);
        alert('you are about to change ' + textInput + ' into ' + editInput);

        var fruits = controller.show();

        updateFullTable(); 
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

        updateFullTable();
    }
    
    buttonGraph.onclick = function(){
        var fruits = controller.show()
        var results = [];
        var tempGraph;
                for(var i=0; i < fruits.length; i++){
               tempGraph = {name: fruits[i][0], count: fruits[i][1], color: getRandomColor()};
                results.push(tempGraph);
                    

        }
          var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);
  // Start at the top
  var currentAngle = -0.5 * Math.PI;
  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    // center=100,100, radius=100
    // from current angle, clockwise by slice's angle
    cx.arc(100, 100, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(100, 100);
    cx.fillStyle = result.color;
    cx.fill();
  });
    }
        
        function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    
    this.validateInput = function(){
        
    }
      
  }

