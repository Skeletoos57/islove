document.getElementById("principalButton").addEventListener("click", () => {

    if (document.getElementById("firstName").value == "" && document.getElementById("secondName").value == "" || document.getElementById("firstName").value == "" || document.getElementById("secondName").value == "") {
        alert("Llena todos los campos");
    }else{
        if (document.getElementById("firstName").value == document.getElementById("secondName").value) {
            alert("¡No pueden los 2 nombres iguales! (aclara apellido en todo caso)")
        }else{
            var message = document.getElementById("message");
            start();
        }
    }

})

function start() {

    document.getElementById("principalButton").style.display = "none";
    document.getElementById("space").style.display = "none";

    var stop = Math.floor(Math.random()*100);

    var i = 1;

    var interval = setInterval(function() {

        var response = document.getElementById("response");
        var num = Math.floor(Math.random()*100);

        if (num == stop) {
            response.innerHTML = `
                <h2>${num}%</h2>
            `
            analyzeResults(num);
            clearInterval(interval);
        }else{
            response.innerHTML = `
                <h2>${num}%</h2>
            `
            message.innerHTML = animateCalculate(i);
            if (i >= 5) {
                i = 1;
            }else{
                i++;
            }
            var num = Math.floor(Math.random()*100);
        }

    }, 50)

}

function analyzeResults(num) {

    if (num == 99 && num == 100) {
        message.innerHTML = `
            <h2 style="color: yellow;">¡¡¡PAREJA DEL SIGLO!!!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 99) {
        message.innerHTML = `
            <h2 style="color: yellow;">¡Pareja I D E A L!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 95) {
        message.innerHTML = `
            <h2 style="color: yellow;">¡Pareja PERFECTA!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 90) {
        message.innerHTML = `
            <h2 style="color: orange;">¡Estan hechos para estar JUNTOS!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 80) {
        message.innerHTML = `
            <h2 style="color: red;">¡Es probable!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 60) {
        message.innerHTML = `
            <h2 style="color: white;">¿Amigos?</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 40) {
        message.innerHTML = `
            <h2 style="color: gray;">¡Solo amigos!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else if (num >= 20) {
        message.innerHTML = `
            <h2 style="color: black;">Nop... ¡Imposible!</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }else{
        message.innerHTML = `
            <h2 style="color: black;">NI LO SUEÑES.</h2>
        `
        document.getElementById("principalButton").style.display = "inline";
        document.getElementById("space").style.display = "none";
    }

}

function animateCalculate(n) {
    switch (n) {
        case 1:
            return `<h2>Calculando |</h2>`;
            break;
        case 2:
            return `<h2>Calculando /</h2>`;
            break;
        case 3:
            return `<h2>Calculando -</h2>`;
            break;
        case 4:
            return `<h2>Calculando \</h2>`;
            break;
        default:
            return `<h2>Calculando |</h2>`;
            break;
        }
}
