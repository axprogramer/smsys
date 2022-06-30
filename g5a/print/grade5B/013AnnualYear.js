//October
function myPrintYear(){
    document.getElementById('tbody15').innerHTML="";
    var stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var my1SaY = CurrentRecord.val().my1SaY;
          var my2SaY = CurrentRecord.val().my2SaY;
          var myAaY = CurrentRecord.val().myAaY;
          var myKy = CurrentRecord.val().myKy;
          var myMy = CurrentRecord.val().myMy;
          var myOy = CurrentRecord.val().myOy;
      
          var my1Sa = CurrentRecord.val().my1Sa;
          var my2Sa = CurrentRecord.val().my2Sa;
      

          addClassYear();
            var stdListPrint = [];
            var tbody = document.getElementById('tbody15');
            var trow = document.createElement('tr');
            var td0 = document.createElement('td');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            var td6 = document.createElement('td');
            var td7 = document.createElement('td');
            var td8 = document.createElement('td');
            stdListPrint.push([name,sex,my1SaY,my2SaY,
              myAaY,myKy,myMy,myOy,my1Sa,my2Sa]);
              var last = parseInt(my1Sa) + parseInt(my2Sa);
              var finall = parseInt(last) / 2;
              var my = parseFloat(finall);
              if(my < 5){
                td7.innerHTML = "Poor";
              }else if(my == 5){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.1){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.2){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.3){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.4){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.5){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.6){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.7){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.8){
                td7.innerHTML = "Faily Good";
              }else if(my == 5.9){
                td7.innerHTML = "Faily Good";
              }else if(my == 6){
                td7.innerHTML = "Faily Good";
              }else if(my == 6.1){
                td7.innerHTML = "Faily Good";
              }else if(my == 6.2){
                td7.innerHTML = "Faily Good";
              }else if(my == 6.3){
                td7.innerHTML = "Faily Good";
              }else if(my == 6.4){
                td7.innerHTML = "Faily Good";
              }
              else if(my == 6.5){
                td7.innerHTML = "Good";
              }else if(my == 6.6){
                td7.innerHTML = "Good";
              }else if(my == 6.7){
                td7.innerHTML = "Good";
              }else if(my == 6.8){
                td7.innerHTML = "Good";
              }else if(my == 6.9){
                td7.innerHTML = "Good";
              }else if(my == 7){
                td7.innerHTML = "Good";
              }else if(my == 7.1){
                td7.innerHTML = "Good";
              }else if(my == 7.2){
                td7.innerHTML = "Good";
              }else if(my == 7.3){
                td7.innerHTML = "Good";
              }else if(my == 7.4){
                td7.innerHTML = "Good";
              }else if(my == 7.5){
                td7.innerHTML = "Good";
              }else if(my == 7.6){
                td7.innerHTML = "Good";
              }else if(my == 7.7){
                td7.innerHTML = "Good";
              }else if(my == 7.8){
                td7.innerHTML = "Good";
              }else if(my == 7.9){
                td7.innerHTML = "Good";
              }
              else if(my == 8){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.1){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.2){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.3){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.4){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.5){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.6){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.7){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.8){
                td7.innerHTML = "Vary Good";
              }else if(my == 8.9){
                td7.innerHTML = "Vary Good";
              }else if(my == 9){
                td7.innerHTML = "Vary Good";
              }else if(my == 9.1){
                td7.innerHTML = "Vary Good";
              }else if(my == 9.2){
                td7.innerHTML = "Vary Good";
              }else if(my == 9.3){
                td7.innerHTML = "Vary Good";
              }else if(my == 9.4){
                td7.innerHTML = "Vary Good";
              }
              else if(my == 9.5){
                td7.innerHTML = "Excellent";
              }else if(my == 9.6){
                td7.innerHTML = "Excellent";
              }else if(my == 9.7){
                td7.innerHTML = "Excellent";
              }else if(my == 9.8){
                td7.innerHTML = "Excellent";
              }else if(my == 9.9){
                td7.innerHTML = "Excellent";
              }else if(my == 10){
                td7.innerHTML = "Excellent";
              }
            
            td0.innerHTML = ++stdNumber;
            td1.innerHTML = name;
            td2.innerHTML = sex;
            td3.innerHTML = my1Sa;
            td4.innerHTML = my2Sa;
            td5.innerHTML = finall;
            td8.innerHTML = myOy;
          
            trow.appendChild(td0);
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            trow.appendChild(td6);
            trow.appendChild(td7);
            trow.appendChild(td8);
            tbody.appendChild(trow);
        
            $(function() {
              //Get all total values, sort and remove duplicates
              let totalList = $('.myScoreYear')
                .map(function() {return $(this).text()})
                .get()
                .sort(function(a,b){return a - b })
                .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
              //Assign rank
              totalList.forEach((v, i) => {
                $('.myScoreYear').filter(function() {return $(this).text() == v;}).next().text(i + 1);
              })
            });
        


        }
      );
    });
  }
  
  function myYear() {
    var newstr = document.getElementById("myYearPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassYear(){
    var els = document.querySelectorAll("#myAnnualT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreYear"); //To add class on top of existing ones
    }
  }
  function saveYear(type, fn, dl) {
    var elt = document.getElementById('myAnnualT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A Annual Year.' + (type || 'xlsx')));
  }
