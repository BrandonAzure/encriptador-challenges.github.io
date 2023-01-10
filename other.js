//Attributes
let textArea = document.getElementById("input-text-mobile");
let text = document.getElementById("input-text-mobile").value;
let button = document.getElementById("encrypt-mobile");
let string = "";
let div = document.getElementById("uwu");;
let buttonEncrypt = document.getElementById("encrypt");
var encryptMessage = "";
let buttonDecrypt = document.getElementById("decrypt");
let buttonCopy = document.getElementById("copy");
let buttonEncryptTablet = document.getElementById("encrypt-tablet");
let buttonDecryptTablet = document.getElementById("decrypt-tablet");
let buttonCopyTablet = document.getElementById("button-copy");

var letters = [
    'e',
    'i',
    'a',
    'o',
    'u'
];

var encrypted = [
    "enter",
    "imes",
    "ai",
    "ober",
    "ufat"
]




div.addEventListener("keydown", (ActionEvent) => {
    text = document.getElementById("input-text-mobile").value;
    string = text;
    change();
});

function change() {
    if (string.length + 1 >= 113) {
        document.getElementById("input-text-mobile").style.height = "1715px";
    } else {
        document.getElementById("input-text-mobile").style.height = "933px";
    }
}

buttonEncrypt.addEventListener("click", (ActionEvent) => {
    textArea = document.getElementById("input-text").value;

    if (textArea != "") {
        removeDesktopItems(encrypt(textArea));
    } else {
        addDesktopItems();
    }
});

buttonDecrypt.addEventListener("click", (ActionEvent) => {
    textArea = document.getElementById("input-text").value;

    if (textArea != "") {
        removeDesktopItems(decrypt(textArea));
    } else {
        addDesktopItems();
    }
});

buttonCopy.addEventListener("click", (ActionEvent) => {
    let copy = document.getElementById("changed-id").value;
    navigator.clipboard.writeText(copy);
    document.getElementById("copy").style.fontSize = "15px";
    document.getElementById("logo-copy").style.fontSize = "22px";

});

//Desktop
buttonCopy.addEventListener("mousemove", (ActionEvent) => {
    changeDimensionButton("copy", "logo-copy", "20px", "25px");
});

buttonCopy.addEventListener("mouseout", (ActionEvent) => {
    changeDimensionButton("copy", "logo-copy", "15px", "22px");
});

function changeDimensionButton(idButton, idSpan, fontSizeButon, fontSizeSpan) {
    document.getElementById(idButton).style.fontSize = fontSizeButon;
    document.getElementById(idSpan).style.fontSize = fontSizeSpan;
}

function removeDesktopItems(message) {
    document.getElementById("copy").style.display = "block";
    document.getElementById("message-mod").value = "";
    document.getElementById("alert-desktop").style.display = "none";
    document.getElementById("alert-desktop2").style.display = "none";
    document.getElementById("message-mod").style.backgroundImage = "none";
    document.getElementById("changed-id").style.display = "block";
    document.getElementById("changed-id").value = message;
}

//Tablet

buttonEncryptTablet.addEventListener("click", (ActionEvent) => {
    textArea = document.getElementById("input-tablet").value;

    if (textArea != "") {
        addQuitItems("message-mod-sugerence", "300px",
            "id-tablet", "1240px", "alert-tablet-none", "none",
            "alert-tablet-sugerence", "none", "button-copy",
            "block", "process-encrypt-decrypt", "block");

        document.getElementById("process-encrypt-decrypt").value = encrypt(textArea);
    } else {
        addQuitItems("message-mod-sugerence", "132px",
            "id-tablet", "1068px", "alert-tablet-none",
            "block", "alert-tablet-sugerence", "block",
            "button-copy", "none", "process-encrypt-decrypt",
            "none");
    }
});

buttonDecryptTablet.addEventListener("click", (ActionEvent) => {
    textArea = document.getElementById("input-tablet").value;
    if (textArea != "") {
        addQuitItems("message-mod-sugerence", "300px",
            "id-tablet", "1240px", "alert-tablet-none", "none",
            "alert-tablet-sugerence", "none", "button-copy",
            "block", "process-encrypt-decrypt", "block");

        document.getElementById("process-encrypt-decrypt").value = decrypt(textArea);
    } else {
        addQuitItems("message-mod-sugerence", "132px",
            "id-tablet", "1068px", "alert-tablet-none",
            "block", "alert-tablet-sugerence", "block",
            "button-copy", "none", "process-encrypt-decrypt",
            "none");
    }
});

buttonCopyTablet.addEventListener("click", (ActionEvent) => {
    let copy = document.getElementById("process-encrypt-decrypt").value;
    navigator.clipboard.writeText(copy);
    changeDimensionButton("button-copy", "logo-copy-tablet", "15px", "22px");
});

buttonCopyTablet.addEventListener("mousemove", (ActionEvent) => {
    changeDimensionButton("button-copy", "logo-copy-tablet", "20px", "25px");

});

buttonCopyTablet.addEventListener("mouseout", (ActionEvent) => {
    changeDimensionButton("button-copy", "logo-copy-tablet", "15px", "22px");
});

function addQuitItems(idTextArea, heightTextArea, idSizePage, heightPage, idAlertTablet, statusAlert, sugerenceTablet, statusSugerence, idButton, statusButton, idTextareaResul, elementResult) {
    document.getElementById(idTextArea).style.height = heightTextArea;
    document.getElementById(idSizePage).style.height = heightPage;
    document.getElementById(idAlertTablet).style.display = statusAlert;
    document.getElementById(sugerenceTablet).style.display = statusSugerence;
    document.getElementById(idButton).style.display = statusButton;
    document.getElementById(idTextareaResul).style.display = elementResult;
}

//Phone 
textArea = document.getElementById("input-text-mobile").value;



function addDesktopItems() {
    document.getElementById("copy").style.display = "none";
    document.getElementById("alert-desktop").style.display = "block";
    document.getElementById("alert-desktop2").style.display = "block";
    document.getElementById("message-mod").style.backgroundImage = "url(/css/Mujer_Con_Lupa.png)";
    document.getElementById("changed-id").style.display = "none";
}




//Functions needed to encrypt and decrypt
function isLetter(character) {
    let abc = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    for (let i = 0; i < abc.length; i++) {
        if (abc[i] == character) {
            return true;
        }
    }


    return false;
}

function saerch(letter) {
    for (let i = 0; i < letters.length; i++) {
        if (letter == letters[i]) {
            return i;
        }
    }

    return -1;
}



function encrypt(message) {
    var encryptedMessage = "";
    var letter = "";
    var index = 0;

    for (var i = 0; i < message.length; i++) {
        letter = message[i];


        if (isLetter(letter) == true) {
            index = saerch(letter);

            if (index >= 0) {
                encryptedMessage += encrypted[index];
            } else {
                encryptedMessage += letter;
            }
        } else {
            encryptedMessage += letter;
        }
    }

    return encryptedMessage;
}


function decrypt(encryptedMessage) {
    let save = "";
    let decryptedMessage = "";
    let letter = "";
    index = 0;
    let repeat = false;

    for (var i = 0; i < encrypted.length; i++) {
        for (var j = 0; j < encryptedMessage.length; j++) {
            letter = encryptedMessage[j];

            if (isLetter(letter) == true) {

                if (j < encryptedMessage.length - 1 && letter == letters[i]) {
                    if (letter == encryptedMessage[j + 1]) {
                        repeat = true;
                    } else {
                        repeat = false;
                    }
                }

                if (letter == encrypted[i].charAt(index) && repeat == false) {
                    save += letter;

                    if (index < (encrypted[i].length - 1)) {
                        index++;
                    } else {
                        save = "";
                        index = 0;
                        decryptedMessage += letters[i];
                    }

                } else {
                    decryptedMessage += save + letter;
                    index = 0;
                    save = "";
                }

            } else {
                decryptedMessage += save + letter;
                save = "";
                index = 0;
            }
        }

        if (save != "") {
            decryptedMessage = decryptedMessage + save;
            save = "";
            index = 0;
        }

        encryptedMessage = decryptedMessage;
        decryptedMessage = "";
    }
    return encryptedMessage;
}


















