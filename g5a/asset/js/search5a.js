function tableSearchEng(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputEn");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody1");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[1];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

function tableSearchKh(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputKh");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody1");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[2];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

function clickEng(){
    var inputKh = document.getElementById("myInputKh");
    inputKh.style.display = "none";
    var inputEn = document.getElementById("myInputEn");
    inputEn.style.display = "";

}
function clickKh(){
    var inputKh = document.getElementById("myInputKh");
    inputKh.style.display = "";
    var inputEn = document.getElementById("myInputEn");
    inputEn.style.display = "none";

}
clickEng();