function doit(){
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("mail").value);
    console.log(document.getElementById("age").value);
    let radios = document.getElementsByName("opt");
    let selected =Array.from(radios).find(radio => radio.checked);
    console.log(selected.value)
    //TODO --> checkbox value
    //Done__
    let cajas = document.querySelectorAll('input[type="checkbox"]');

    cajas.forEach(function(checkbox){
        if(checkbox.checked){
            console.log(checkbox.value);
        }
    })
}
