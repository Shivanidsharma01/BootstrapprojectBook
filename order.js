function printpage(){
    window.print();
}

function update(){

    var select = document.getElementById('formGroupExampleInput4');
    var price = select.options[select.selectedIndex].value;

    var second_number = (document. getElementById("formGroupExampleInput5"). value);

    var result = price * second_number;
    document.getElementById("formGroupExampleInput7").value = result;

}

