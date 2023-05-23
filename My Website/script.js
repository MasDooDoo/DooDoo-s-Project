function process(){
    var total = 0;
    var package =  document.getElementById("package").value;

    if (package == "bellen"){
        total += 7999000;
    } 
    else if (package == "canyon"){
        total += 8000000;
    }
    else if (package == "condo"){
        total += 369999;
    }
    else if (package == "batukan"){
        total += 300450;
    }
    else if (package == "median"){
        total += 400500;
    }

    console.log(package);
    console.log(total);
    document.getElementById("total").innerHTML = total.toLocaleString('en-us');
}