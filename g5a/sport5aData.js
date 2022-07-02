const firebaseConfig = {
    apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
    authDomain: "teachingrecord-6b575.firebaseapp.com",
    databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
    projectId: "teachingrecord-6b575",
    storageBucket: "teachingrecord-6b575.appspot.com",
    messagingSenderId: "1097574891233",
    appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
  };
  
  firebase.initializeApp(firebaseConfig);

  var my5aAll = firebase.database().ref('sport5AData');

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('myName');
    var id = getElementVal('myID');
    var sex = getElementVal('mySex');
    var grade = getElementVal('myGrade');
    //October
    var speaking = getElementVal('mySoct');
    var writing = getElementVal('myWoct');
    var listening = getElementVal('myLoct');
    var reading = getElementVal('myRoct');
    var average = getElementVal('myAoct');
    var rank = getElementVal('myKoct');
    window.location.reload();
    saveData(name,id,sex,grade,speaking,writing,listening,
      reading,average,rank);

  }
const saveData = (name,id,sex,grade,speaking,writing,listening,
  reading,average,rank) => {
    var newData = my5aAll.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        grade: grade,
        speaking: speaking,
        writing: writing,
        listening: listening,
        reading: reading,
        average: average,
        rank: rank,
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody1').innerHTML="";
  studentN0=0;
  firebase.database().ref('sport5AData').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var id = CurrentRecord.val().id;
        var sex = CurrentRecord.val().sex;
        var grade = CurrentRecord.val().grade;
        var speaking = CurrentRecord.val().speaking;
        var writing = CurrentRecord.val().writing;
        var listening = CurrentRecord.val().listening;
        var reading = CurrentRecord.val().reading;
        var average = CurrentRecord.val().average;
        var rank = CurrentRecord.val().rank;

        addItemsToTable(name,id,sex,grade,speaking,writing,listening,
          reading,average,rank);
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var stdList = [];
function addItemsToTable(name,id,sex,grade,speaking,writing,listening,
  reading,average,rank){
  var tbody = document.getElementById('tbody1');
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
  var td9 = document.createElement('td');
  var td10 = document.createElement('td');
  //November
  var td11 = document.createElement('td');
  var td12 = document.createElement('td');
  var td13 = document.createElement('td');
  var td14 = document.createElement('td');
  var td15 = document.createElement('td');
  var td16 = document.createElement('td');
  var td17 = document.createElement('td');
  var td18 = document.createElement('td');
  var td19 = document.createElement('td');
  var td20 = document.createElement('td');
  var td21 = document.createElement('td');
  var input1 = document.createElement('input');
  var input2 = document.createElement('input');


  stdList.push([name,id,sex,grade,speaking,writing,listening,
    reading,average,rank]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = name;
  td2.innerHTML = id;
  td3.innerHTML = sex;
  td4.innerHTML = grade;
  td5.innerHTML = speaking;
  td6.innerHTML = writing;
  td7.innerHTML = listening;
  td8.innerHTML = reading;
  td9.innerHTML = average;
  td10.innerHTML = rank;

  td4.appendChild(input1);
  input1.className = "myInput";
  input1.id = "getInput"
  td5.appendChild(input2);
  input2.className = "myInput1";
  input2.id = "getInput1"

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td10);
  //November
  trow.appendChild(td11);
  trow.appendChild(td12);
  trow.appendChild(td13);
  trow.appendChild(td14);
  trow.appendChild(td15);
  trow.appendChild(td16);
  trow.appendChild(td17);
  trow.appendChild(td18);
  trow.appendChild(td19);
  trow.appendChild(td20);
  trow.appendChild(td21);



  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;

  tbody.appendChild(trow);
}


var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Mspeaking = document.getElementById('mySoct');
var Mwriting = document.getElementById('myWoct');
var Mlistening = document.getElementById('myLoct');
var Mreadiing = document.getElementById('myRoct');
var Maverage = document.getElementById('myAoct');
var Mrank = document.getElementById('myKoct');

var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');
var BtnClearBox = document.getElementById('myClearBox');
var BtnClearAll = document.getElementById('myClearAll');



function Fillbox(index){
  if(index==null){
    BtnSubmit.style.display='inline-block';
    BtnClearAll.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
    BtnClearBox.style.display='none';
  }
  else{
    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    Mgrade.value = stdList[index][3];
    Mspeaking.value = stdList[index][4];
    Mwriting.value = stdList[index][5];
    Mlistening.value = stdList[index][6];
    Mreadiing.value = stdList[index][7];
    Maverage.value = stdList[index][8];
    Mrank.value = stdList[index][9];
    //November
    MspeakingNov.value = stdList[index][10];
    MwritingNov.value = stdList[index][11];
    MlisteningNov.value = stdList[index][12];
    MreadiingNov.value = stdList[index][13];
    MaverageNov.value = stdList[index][14];
    MrankNov.value = stdList[index][15];
    //December
    MspeakingDec.value = stdList[index][16];
    MwritingDec.value = stdList[index][17];
    MlisteningDec.value = stdList[index][18];
    MreadiingDec.value = stdList[index][19];
    MaverageDec.value = stdList[index][20];


    BtnClearAll.style.display='none';
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';
    BtnClearBox.style.display='inline-block';


  }
}

function AddStd(){
  firebase.database().ref("sport5AData/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,

  }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("sport5AData/"+Mid.value).update(
    {
      name: Mname.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,

    }, 
  )
  selectAllData();
  window.location.reload();

}
function DelStd(){
  firebase.database().ref("sport5AData/"+Mid.value).remove().then(
    function(){
      selectAllData();
      window.location.reload();
   
    }
  )


}
function DelStdAll(){
  firebase.database().ref("sport5AData").remove();

      window.location.reload();
}

//Save to excel
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5aOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}
//Clear text in Box
function clearBox(){
document.getElementById('mySoct').value = "";
document.getElementById('myWoct').value = "";
document.getElementById('myLoct').value = "";
document.getElementById('myRoct').value = "";
document.getElementById('myAoct').value = "";
document.getElementById('myKoct').value = "";
document.getElementById('myScoreoct').value = "";
//November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


}
function clearAll(){
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('mySoct').value = "";
  document.getElementById('myWoct').value = "";
  document.getElementById('myLoct').value = "";
  document.getElementById('myRoct').value = "";
  document.getElementById('myAoct').value = "";
  document.getElementById('myKoct').value = "";
  document.getElementById('myScoreoct').value = "";
  //November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


}

//Sorting without change N0
$('th:not(:first-child)').click(function(){
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc){rows = rows.reverse()}
  for (var i = 0; i < rows.length; i++){
      $(rows[i]).find('td:first').text(i + 1);
      table.append(rows[i]);
  }
})
function comparer(index) {
  return function(a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

//Hiden Calliborate
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
