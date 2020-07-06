$(document).ready(function(){
    $('#one').click(function(){
        document.forms.display.value += 1; /* "+" says we can enter 1 multiple times*/
    });
        $('#two').click(function(){
            document.forms.display.value += 2; /* "+" says we can enter 1 multiple times*/
        });
        $('#three').click(function(){
            document.forms.display.value += 3; /* "+" says we can enter 1 multiple times*/
        });
        $('#four').click(function(){
            document.forms.display.value += 4; /* "+" says we can enter 1 multiple times*/
        });
        $('#five').click(function(){
            document.forms.display.value += 5; /* "+" says we can enter 1 multiple times*/
        });
        $('#six').click(function(){
            document.forms.display.value += 6; /* "+" says we can enter 1 multiple times*/
        });
        $('#seven').click(function(){
            document.forms.display.value += 7; /* "+" says we can enter 1 multiple times*/
        });
        $('#eight').click(function(){
            document.forms.display.value += 8; /* "+" says we can enter 1 multiple times*/
        });
        $('#nine').click(function(){
            document.forms.display.value += 9; /* "+" says we can enter 1 multiple times*/
        });
        $('#zero').click(function(){
            document.forms.display.value += 0; /* "+" says we can enter 1 multiple times*/
        });
       
        $('#plus').click(function(){
            document.forms.display.value += '+'; /* "+" says we can enter 1 multiple times*/
        });
        $('#minus').click(function(){
            document.forms.display.value += '-'; /* "+" says we can enter 1 multiple times*/
        });
        $('#multiply').click(function(){
            document.forms.display.value += '*'; /* "+" says we can enter 1 multiple times*/
        });
        $('#divide').click(function(){
            document.forms.display.value += '/'; /* "+" says we can enter 1 multiple times*/
        });
        $('#open').click(function(){
            document.forms.display.value += '('; /* "+" says we can enter 1 multiple times*/
        });
        $('#close').click(function(){
            document.forms.display.value += ')'; /* "+" says we can enter 1 multiple times*/
        });
        $('#clear').click(function(){
            document.forms.display.value += 'C'; /* "+" says we can enter 1 multiple times*/
        });
        $('#dot').click(function(){
            document.forms.display.value += '.'; /* "+" says we can enter 1 multiple times*/
        });
        $('#equal').click(function(){
           if(display.value == ""){
               alert("Please enter any numbers to calculate");
           }else{
               document.forms.display.value = eval( document.forms.display.value);
           }
        });
        $('#clear').click(function(){
            document.forms.display.value = "";
        });

})