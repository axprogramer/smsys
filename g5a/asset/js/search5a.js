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
//Count Total st and Female
//October
$(document).ready(function ()
{
    var Sf = "F";
    $("#btnTotalOct").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody2 td").closest("tr").length;
        var show = document.getElementById("TotalSsOct");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Oct");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody2 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFoct");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2oct");
        show3.innerHTML = noOfOccurance;

    }

})

//November
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody3 td").closest("tr").length;
        var show = document.getElementById("TotalSs");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody3 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSF");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2");
        show3.innerHTML = noOfOccurance;

    }

})

