  //November
function myPrintSeTwo(){
    document.getElementById('tbody12').innerHTML="";
    document.getElementById('tbody12Save').innerHTML="";
    stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var grade = CurrentRecord.val().grade;
          // var my2Se = CurrentRecord.val().my2Se;
          // var my2Sa = CurrentRecord.val().my2Sa;
          // var my2SR = CurrentRecord.val().my2SR;
          // var my2SM = CurrentRecord.val().my2SM;
                                
          // addItemsToSeTwo(name,sex,grade,my2Se,my2Sa,my2SR,my2SM);
          addClassTwo();
        }
      );
      GetData11(AllRecordsPrint);
      GetData11Save(AllRecordsPrint);

    });
  }
  function GetData11(datas) {
    let tbody = document.getElementById("tbody12");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my2Se = data.val().my2Se;
      var my2Sa = data.val().my2Sa;
      var my2SR = data.val().my2SR;
      var my2SM = data.val().my2SM;
  
      students.push({
        name,
        sex,
        grade,
        my2Se,
        my2Sa,
        my2SR,
        my2SM,
      });
    });
  
    students.sort((a, b) => b.my2Sa - a.my2Sa);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].my2Sa;
      let studentsWithRank = students.filter(
        (student) => student.my2Sa === avg
      );
      for (let student of studentsWithRank) {
        student.Rank = i + 1;
      }
      i += studentsWithRank.length - 1;
    }
  
    students.forEach((student) => {
      No++;
        var mention = "";
        var my = parseFloat(student.my2Sa);
        if(my <=5){
            mention = "Poor"
        }else if(my <=6.4){
            mention = "Faily Good";
        }else if(my <=7.9){
            mention = "Good";
        }else if(my <=9.4){
            mention = "Very Good";
        }else if(my <=10){
            mention = "Excellent";
        }
        console.log(student.my1Sa);
      let tr = `
              <td>${No}</td>
              <td>${student.name}</td>
              <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my2Se}</td>
              <td>${student.my2Sa}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
  function GetData11Save(datas) {
    let tbody = document.getElementById("tbody12Save");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my2Se = data.val().my2Se;
      var my2Sa = data.val().my2Sa;
      var my2SR = data.val().my2SR;
      var my2SM = data.val().my2SM;
      var myKh = data.val().myKh;
      students.push({
        name,
        sex,
        grade,
        my2Se,
        my2Sa,
        my2SR,
        my2SM,
        myKh,
      });
    });
  
    // students.sort((a, b) => b.my2Sa - a.my2Sa);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].my2Sa;
      let studentsWithRank = students.filter(
        (student) => student.my2Sa === avg
      );
      for (let student of studentsWithRank) {
        student.Rank = i + 1;
      }
      i += studentsWithRank.length - 1;
    }
  
    students.forEach((student) => {
      No++;
        var mention = "";
        var my = parseFloat(student.my2Sa);
        if(my <=5){
            mention = "Poor"
        }else if(my <=6.4){
            mention = "Faily Good";
        }else if(my <=7.9){
            mention = "Good";
        }else if(my <=9.4){
            mention = "Very Good";
        }else if(my <=10){
            mention = "Excellent";
        }
        console.log(student.my1Sa);
      let tr = `
              <td>${No}</td>
              <td>${student.myKh}</td>
              <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my2Se}</td>
              <td>${student.my2Sa}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
      `;
      tbody.innerHTML += tr;
    });
  }

  // var stdNumber;
  // var stdListPrint = [];
  // function addItemsToSeTwo(name,sex,grade,my2Se,my2Sa,my2SR,my2SM){
  //   var tbody = document.getElementById('tbody12');
  //   var trow = document.createElement('tr');
  //   var td0 = document.createElement('td');
  //   var td1 = document.createElement('td');
  //   var td2 = document.createElement('td');
  //   var td3 = document.createElement('td');
  //   var td4 = document.createElement('td');
  //   var td5 = document.createElement('td');
  //   var td6 = document.createElement('td');
  //   var td7 = document.createElement('td');
  
  //   stdListPrint.push([name,sex,grade,my2Se,my2Sa,my2SR,my2SM]);
  //   td0.innerHTML = ++stdNumber;
  //   td1.innerHTML = name;
  //   td2.innerHTML = sex;
  //   td3.innerHTML = grade;
  //   td4.innerHTML = my2Se;
  //   td5.innerHTML = my2Sa;
  //   td6.innerHTML = my2SR;
  //   var my = parseFloat(my2Sa);
  //   if(my <=5){
  //     td7.innerHTML = "Poor"
  // }else if(my <=6.4){
  //     td7.innerHTML = "Faily Good"
  // }else if(my <=7.9){
  //     td7.innerHTML = "Good"
  // }else if(my <=9.4){
  //     td7.innerHTML = "Very Good"
  // }else if(my <=10){
  //     td7.innerHTML = "Excellent"
  // }
  
  //   trow.appendChild(td0);
  //   trow.appendChild(td1);
  //   trow.appendChild(td2);
  //   trow.appendChild(td3);
  //   trow.appendChild(td4);
  //   trow.appendChild(td5);
  //   trow.appendChild(td6);
  //   trow.appendChild(td7);

  //   tbody.appendChild(trow);
  //   $(function() {
  //     //Get all total values, sort and remove duplicates
  //     let totalList = $('.myScoreTwo')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreTwo').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });

  // }
  function mySeTwo() {
    var newstr = document.getElementById("mySeTwoPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassTwo(){
    var els = document.querySelectorAll("#mySeTwoT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreTwo"); //To add class on top of existing ones
    }
  }
  function saveTwo(type, fn, dl) {
    var elt = document.getElementById('mySeTwoTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5B 2nd Semester.' + (type || 'xlsx')));
  }
