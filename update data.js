https://script.google.com/macros/s/AKfycbzn-R3mFRiiFCClGEzjgwwwiHUrw-ny_ViR0rM8R0Zsy2k4_rqTxIzirFOG9bA4i_Sl/exec



//Pendaftar All
let val1 = sheet.getRange('A2').getValue(); //0
let val2 = sheet.getRange('A3').getValue(); //1
let val3 = sheet.getRange('A4').getValue();
let val4 = sheet.getRange('A5').getValue();

let val5 = sheet.getRange('B2').getValue();
let val6 = sheet.getRange('B3').getValue();
let val7 = sheet.getRange('B4').getValue();
let val8 = sheet.getRange('B5').getValue();

//Volunteer
let val9 = sheet.getRange('A8').getValue();
let val10 = sheet.getRange('A9').getValue();
let val11 = sheet.getRange('A10').getValue();
let val12 = sheet.getRange('A11').getValue();
let val13 = sheet.getRange('A12').getValue();
let val14 = sheet.getRange('A13').getValue();

let val15 = sheet.getRange('B8').getValue();
let val16 = sheet.getRange('B9').getValue();
let val17 = sheet.getRange('B10').getValue();
let val18 = sheet.getRange('B11').getValue();
let val19 = sheet.getRange('B12').getValue();
let val20 = sheet.getRange('B13').getValue();

// let val9all = sheet.getDataRange().getValues();
// let val9all = sheet.getRange('A2:A').getValues();

return [val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, val18, val19, val20, val9all];


//HEADER
//Pendaftar
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');
//Volunteer
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');
let h7 = document.getElementById('h7');
let h8 = document.getElementById('h8');
let h9 = document.getElementById('h9');
let h10 = document.getElementById('h10');

//DATA
//Pendaftar
let data1 = document.getElementById('data1');
let data2 = document.getElementById('data2');
let data3 = document.getElementById('data3');
let data4 = document.getElementById('data4');
let data5 = document.getElementById('data5');
//Volunteer
let data5 = document.getElementById('data5');
let data6 = document.getElementById('data6');
let data7 = document.getElementById('data7');
let data8 = document.getElementById('data8');
let data9 = document.getElementById('data9');
let data10 = document.getElementById('data10');




<tr><td id="h1"></td><td id="data1" class="box"></td></tr>
<tr><td id="h2"></td><td id="data2" class="box"></td></tr>
<tr><td id="h3"></td><td id="data3" class="box"></td></tr>
<tr><td id="h4"></td><td id="data4" class="box"></td></tr>
<tr><td id="h5"></td><td id="data5" class="box"></td></tr>
<tr><td id="h6"></td><td id="data6" class="box"></td></tr>
<tr><td id="h7"></td><td id="data7" class="box"></td></tr>
<tr><td id="h8"></td><td id="data8" class="box"></td></tr>
<tr><td id="h9"></td><td id="data9" class="box"></td></tr>
<tr><td id="h10"></td><td id="data10" class="box"></td></tr>


h1.innerHTML = data[0];
h2.innerHTML = data[1];
h3.innerHTML = data[2];
h4.innerHTML = data[3];

data1.innerHTML = data[4];
data2.innerHTML = data[5];
data3.innerHTML = data[6];
data4.innerHTML = data[7];
data5.innerHTML = data[8];

h9.innerHTML = data[8];
h10.innerHTML = data[9];
h11.innerHTML = data[10];
h12.innerHTML = data[11];
h13.innerHTML = data[12];
h14.innerHTML = data[13];
h15.innerHTML = data[14];
h16.innerHTML = data[15];
h17.innerHTML = data[16];