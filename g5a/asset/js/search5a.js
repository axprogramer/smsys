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

//December
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody4 td").closest("tr").length;
        var show = document.getElementById("TotalSsDec");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Dec");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody4 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFDec");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Dec");
        show3.innerHTML = noOfOccurance;

    }

})

//January
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody5 td").closest("tr").length;
        var show = document.getElementById("TotalSsJan");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Jan");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody5 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFJan");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Jan");
        show3.innerHTML = noOfOccurance;

    }

})


//February
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody6 td").closest("tr").length;
        var show = document.getElementById("TotalSsFeb");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Feb");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody6 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFeb");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Feb");
        show3.innerHTML = noOfOccurance;

    }

})

//1st Semester
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody7 td").closest("tr").length;
        var show = document.getElementById("TotalSsFirSem");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2FirSem");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody7 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFirSem");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2FirSem");
        show3.innerHTML = noOfOccurance;

    }

})

//1st Semester Result
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody8 td").closest("tr").length;
        var show = document.getElementById("TotalSsFirSemRe");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2FirSemRe");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody8 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFirSemRe");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2FirSemRe");
        show3.innerHTML = noOfOccurance;

    }

})

//1st Semester Result
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody9 td").closest("tr").length;
        var show = document.getElementById("TotalSsMarch");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2March");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody9 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFMarch");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2March");
        show3.innerHTML = noOfOccurance;

    }

})
