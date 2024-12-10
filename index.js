let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR(){
    if(qrText.value.length > 0){
        // const bgcolor="255-0-0"
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=000000&bgcolor=FFFFFF&format=png&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
    
}

// function generateQR() {
//     if (qrText.value.length > 0) {
//         const data = qrText.value;
//         const size = "250x250";
//         const bgColor = "ffffff"; // Background color (white in hex)
//         const color = "000000";  // Foreground color (black in hex)
        
//         qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${data}&bgcolor=${bgColor}&color=${color}`;
//         imgBox.classList.add("show-img");
//     } else {
//         qrText.classList.add('error');
//         setTimeout(() => {
//             qrText.classList.remove('error');
//         }, 1000);
//     }
// }
