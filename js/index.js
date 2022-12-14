function genQR(){

    // Google chart API URL
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
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

    clearUI();
    
    createSaveBtn();

    let btnDownload = document.getElementById('save-link');

    btnDownload.addEventListener('click', () => {
    saveAs(img.src, "myQRcode.png");
});
}

function createSaveBtn(){
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'downloadqr';
    link.innerHTML = 'Save Image';
        
    document.getElementById('generated').appendChild(link);
};


const clearUI = () => {
    const saveLink = document.getElementById('save-link');
    if(saveLink) saveLink.remove();
};