$(document).ready(function () {
    var stock1 = 50;
    $("#zapato-1").append(stock1);
    var stock2 = 50;
    $("#zapato-2").append(stock2);
    var stock3 = 50;
    $("#zapato-3").append(stock3);
    var stock4 = 50;
    $("#zapato-4").append(stock4);
    var stock5 = 50;
    $("#zapato-5").append(stock5);
    var stock6 = 50;
    $("#zapato-6").append(stock6);
    var stock7 = 50;
    $("#zapato-7").append(stock7);
    var stock8 = 50;
    $("#zapato-8").append(stock8);
    var stock9 = 50;
    $("#zapato-9").append(stock9);
    var stock10 = 50;
    $("#zapato-10").append(stock10);
    var stock11 = 50;
    $("#zapato-11").append(stock11);
    var stock12 = 50;
    $("#zapato-12").append(stock12);

    $("#collapse1").click(function () {
        $("#collapse1-1").collapse('toggle');
    });
    $("#collapse2").click(function () {
        $("#collapse2-1").collapse('toggle');
    });
    $("#collapse3").click(function () {
        $("#collapse3-1").collapse('toggle');
    });
    $("#collapse4").click(function () {
        $("#collapse4-1").collapse('toggle');
    });
    $("#collapse5").click(function () {
        $("#collapse5-1").collapse('toggle');
    });
    $("#collapse6").click(function () {
        $("#collapse6-1").collapse('toggle');
    });
    $("#collapse7").click(function () {
        $("#collapse7-1").collapse('toggle');
    });
    $("#collapse8").click(function () {
        $("#collapse8-1").collapse('toggle');
    });
    $("#collapse9").click(function () {
        $("#collapse9-1").collapse('toggle');
    });
    $("#collapse10").click(function () {
        $("#collapse10-1").collapse('toggle');
    });
    $("#collapse11").click(function () {
        $("#collapse11-1").collapse('toggle');
    });
    $("#collapse12").click(function () {
        $("#collapse12-1").collapse('toggle');
    });
    $("#collapse13").click(function () {
        $("#collapse13-1").collapse('toggle');
    });
    $("#collapse14").click(function () {
        $("#collapse14-1").collapse('toggle');
    });
    $("#collapse15").click(function () {
        $("#collapse15-1").collapse('toggle');
    });
    $("#collapse16").click(function () {
        $("#collapse16-1").collapse('toggle');
    });
    $("#collapse17").click(function () {
        $("#collapse17-1").collapse('toggle');
    });
    $("#collapse18").click(function () {
        $("#collapse18-1").collapse('toggle');
    });
    $("#collapse19").click(function () {
        $("#collapse19-1").collapse('toggle');
    });
    $("#collapse20").click(function () {
        $("#collapse20-1").collapse('toggle');
    });
    $("#collapse21").click(function () {
        $("#collapse21-1").collapse('toggle');
    });
    $("#collapse22").click(function () {
        $("#collapse22-1").collapse('toggle');
    });
    $("#collapse23").click(function () {
        $("#collapse23-1").collapse('toggle');
    });
    $("#collapse24").click(function () {
        $("#collapse24-1").collapse('toggle');
    });
    $("#collapse25").click(function () {
        $("#collapse25-1").collapse('toggle');
    });
    $("#collapse26").click(function () {
        $("#collapse26-1").collapse('toggle');
    });
    $("#collapse27").click(function () {
        $("#collapse27-1").collapse('toggle');
    });
    $("#collapse28").click(function () {
        $("#collapse28-1").collapse('toggle');
    });
    $("#collapse29").click(function () {
        $("#collapse29-1").collapse('toggle');
    });
    $("#collapse30").click(function () {
        $("#collapse30-1").collapse('toggle');
    });
    $("#collapse31").click(function () {
        $("#collapse31-1").collapse('toggle');
    });
    $("#collapse32").click(function () {
        $("#collapse32-1").collapse('toggle');
    });
    $("#collapse33").click(function () {
        $("#collapse33-1").collapse('toggle');
    });
    $("#collapse34").click(function () {
        $("#collapse34-1").collapse('toggle');
    });
    $("#collapse35").click(function () {
        $("#collapse35-1").collapse('toggle');
    });
    $("#collapse36").click(function () {
        $("#collapse36-1").collapse('toggle');
    });

    $(".card").hover(function () {
        $(this).css("background-color", "#CFD6F4");
        $(this).css("box-shadow", "10px 10px 10px grey");
        $(this).css("border", "4px solid #F5A89D");
        $(this).css("transition", "1s");
    }, function () {
        $(this).css("background-color", "white");
        $(this).css("box-shadow", "2px 2px 2px grey");
        $(this).css("border", "1px solid grey");
    });

    $("#button-1").click(function () {
        stock1 = stock1 - 1;
        if (stock1 == 0) {
            $("#zapato-1").css("color", "red");
        }
        if (stock1 <= -1) {
            stock1 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-1").empty();
            $("#zapato-1").append(stock1);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-2").click(function () {
        stock2 = stock2 - 1;
        if (stock2 == 0) {
            $("#zapato-2").css("color", "red");
        }
        if (stock2 <= -1) {
            stock2 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-2").empty();
            $("#zapato-2").append(stock2);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-3").click(function () {
        stock3 = stock3 - 1;
        if (stock3 == 0) {
            $("#zapato-3").css("color", "red");
        }
        if (stock3 <= -1) {
            stock3 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-3").empty();
            $("#zapato-3").append(stock3);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-4").click(function () {
        stock4 = stock4 - 1;
        if (stock4 == 0) {
            $("#zapato-4").css("color", "red");
        }
        if (stock4 <= -1) {
            stock4 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-4").empty();
            $("#zapato-4").append(stock4);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-5").click(function () {
        stock5 = stock5 - 1;
        if (stock5 == 0) {
            $("#zapato-5").css("color", "red");
        }
        if (stock5 <= -1) {
            stock5 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-5").empty();
            $("#zapato-5").append(stock5);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-6").click(function () {
        stock6 = stock6 - 1;
        if (stock6 == 0) {
            $("#zapato-6").css("color", "red");
        }
        if (stock6 <= -1) {
            stock6 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-6").empty();
            $("#zapato-6").append(stock6);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-7").click(function () {
        stock7 = stock7 - 1;
        if (stock7 == 0) {
            $("#zapato-7").css("color", "red");
        }
        if (stock7 <= -1) {
            stock7 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-7").empty();
            $("#zapato-7").append(stock7);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-8").click(function () {
        stock8 = stock8 - 1;
        if (stock8 == 0) {
            $("#zapato-8").css("color", "red");
        }
        if (stock8 <= -1) {
            stock8 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-8").empty();
            $("#zapato-8").append(stock8);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-9").click(function () {
        stock9 = stock9 - 1;
        if (stock9 == 0) {
            $("#zapato-9").css("color", "red");
        }
        if (stock9 <= -1) {
            stock9 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-9").empty();
            $("#zapato-9").append(stock9);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-10").click(function () {
        stock10 = stock10 - 1;
        if (stock10 == 0) {
            $("#zapato-10").css("color", "red");
        }
        if (stock10 <= -1) {
            stock10 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-10").empty();
            $("#zapato-10").append(stock10);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-11").click(function () {
        stock11 = stock11 - 1;
        if (stock11 == 0) {
            $("#zapato-11").css("color", "red");
        }
        if (stock11 <= -1) {
            stock11 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-11").empty();
            $("#zapato-11").append(stock11);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
    $("#button-12").click(function () {
        stock12 = stock12 - 1;
        if (stock12 == 0) {
            $("#zapato-12").css("color", "red");
        }
        if (stock12 <= -1) {
            stock12 = 0;
            alert("Lo sentimos pero ya no hay unidades disponibles");
        } else {
            $("#zapato-12").empty();
            $("#zapato-12").append(stock12);
            alert("Compra realizada con éxito. ¡Muchas gracias por su compra!");
        }
    });
});