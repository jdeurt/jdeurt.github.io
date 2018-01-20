window.onload = function() {

    document.getElementById("formatter").onclick = function() {
        var input = {}, output = {};
        input.element = document.getElementById("input");
        input.text = input.element.value;
        output.element = document.getElementById("output");
        
        var char_starting = input.text.charAt(0), char_ending;
        if(char_starting === "{")
            char_ending = "}";
        else if(char_starting === "[")
            char_ending = "]";
        else return;
        
        output.text = input.text.replace(char_starting, char_starting+"**newline****tab**").replace(new RegExp(char_ending+"$"), "**newline**"+char_ending);
        
        output.text = output.text.replace(/**newline**/g, "\n").replace(/**tab**/g, "\t");
        
        output.element.value = output.text;
        console.log(output.text;)
    }

}
