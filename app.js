let currentRole = "";



function openMenu(){

    document
    .getElementById("menuOverlay")
    .style.display = "flex";

}



function closeMenu(){

    document
    .getElementById("menuOverlay")
    .style.display = "none";

}




function openAdmin(){

    document
    .getElementById("adminPopup")
    .style.display = "flex";

}



function closeAdmin(){

    document
    .getElementById("adminPopup")
    .style.display = "none";

}




function openLogin(role){

    closeAdmin();


    currentRole = role;


    document
    .getElementById("loginTitle")
    .innerText = role;


    document
    .getElementById("loginPopup")
    .style.display = "flex";

}




function closeLogin(){

    document
    .getElementById("loginPopup")
    .style.display = "none";

}




function doLogin(){


    const email =

    document
    .getElementById("emailInput")
    .value;



    const password =

    document
    .getElementById("passwordInput")
    .value;





    if(

        currentRole==="Cashier Login"

        &&

        email==="cashier@virean.com"

        &&

        password==="123456"

    ){



window.location.href =
"cashier.html";


return;
    }






    if(

        currentRole==="Owner Login"

        &&

        email==="owner@virean.com"

        &&

        password==="123456"

    ){




window.location.href =
"owner.html";


return;
    }





    alert("email atau password salah");

}
function openLanguage(){

    document
    .getElementById("languagePopup")
    .style.display = "flex";

}




function saveLanguage(){


    let selected =

    document
    .querySelector(
    'input[name="lang"]:checked'
    ).value;




    if(selected==="id"){

        document
        .querySelector(".hero p")
        .innerText =
        "Bakery • Coffee • Dessert";


        document
        .getElementById("languageText")
        .innerText =
        "Bahasa";
    }




    if(selected==="en"){

        document
        .getElementById("languageText")
        .innerText =
        "Language";
    }




    if(selected==="cn"){

        document
        .getElementById("languageText")
        .innerText =
        "语言";
    }




    if(selected==="jp"){

        document
        .getElementById("languageText")
        .innerText =
        "言語";
    }




    if(selected==="kr"){

        document
        .getElementById("languageText")
        .innerText =
        "언어";
    }





    document
    .getElementById("languagePopup")
    .style.display="none";

}
function openForgot(){

    document
    .getElementById("forgotPopup")
    .style.display = "flex";

}




function closeForgot(){

    document
    .getElementById("forgotPopup")
    .style.display = "none";

}




function sendPassword(){


    const email =

    document
    .getElementById("forgotEmail")
    .value;





    if(email===""){

        alert("isi email dulu");

        return;
    }





    alert(
        "password berhasil dikirim ke " 
        + email
    );



    closeForgot();

}