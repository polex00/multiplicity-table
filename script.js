function makeTable(){
    var table = document.getElementById('table');
    if(!!table){
        table.parentNode.removeChild(table);
    }
    var x = document.getElementById('x-value').value;
    var y = document.getElementById('y-value').value;
    if(x<1 || x>9 || y<1 || y>9){
        alert("X a Y musia mat hodnotu 1-9");
    } else {
        var layer = document.createElement('div');
        layer.id = "layer";

        var close = document.createElement('button');
        close.id = "close";
        close.value = "Close";
        close.innerHTML = "<span id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>";
        
        table = document.createElement('table');
        table.id="table";
        for(let i=0; i<=y; i++){
            var row = document.createElement('row');
            row.className="row";
            for(let j=0; j<=x; j++){
                var col = document.createElement('col');
                col.className="col";
                if(i == 0){
                    if(j != 0){
                        col.innerText="X = " + j;
                    }
                } else if(j == 0){
                    if(i != 0){
                        col.innerText="Y = " + i;
                    }
                } else {
                    col.innerText=i*j;
                }
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        layer.appendChild(table);
        layer.appendChild(close);
    }
    document.getElementById('container').appendChild(layer);
}