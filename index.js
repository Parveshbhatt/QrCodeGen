function genQR(){
    // Google chart API URL
    var gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
    var img = document.getElementById("qrimg");
    var text = document.getElementById("qrtext").value;
    var size = document.getElementById("size").value;

    if(text!=="" && size=="100"){
        img.src=gapi+"100x100"+"&chl="+text;
    }
    else if(text!=="" && size=="150"){
        img.src=gapi+"150x150"+"&chl="+text;
    }

    else if(text!="" && size=="200"){
        img.src=gapi+"200x200"+"&chl="+text;
    }
    else if(text!="" && size=="250"){
        img.src=gapi+"250x250"+"&chl="+text;
    }
    else if(text!=="" && size=="300"){
        img.src=gapi+"300x300"+"&chl="+text;
    }
    else{
        alert("Please Enter Text");
    }
}