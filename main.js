var shadow = document.querySelector('#shadow');
var range = document.querySelector('#myRange');
var range1 = document.querySelector('#myRange1');
var range2 = document.querySelector('#myRange2');
var range3 = document.querySelector('#myRange3');
var textbox = document.querySelector('#textbox');
var gridtextbox = document.querySelector('#gridtextbox');
var data1 = range.value;
var data2 = range1.value;
var data3 = range2.value;
var data4 = range3.value;
range.addEventListener('change', function () {
    data1 = range.value;
    shadow.style.boxShadow = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    textbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    gridtextbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    console.log(data1);
});
range1.addEventListener('change', function () {
    data2 = range1.value;
    shadow.style.boxShadow = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    textbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    gridtextbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    console.log(data2);
});
range2.addEventListener('change', function () {
    data3 = range2.value;
    shadow.style.boxShadow = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    textbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    gridtextbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    console.log(data3);
});
range3.addEventListener('change', function () {
    data4 = range3.value;
    shadow.style.boxShadow = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    textbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    gridtextbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
    console.log(data4);
});
shadow.style.boxShadow = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
textbox.textContent = data1 + "px " + data2 + "px " + data3 + "px " + data4 + "px rgba(0,0, 0, 0.5)";
