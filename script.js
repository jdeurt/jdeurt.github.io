window.onload = function() {

    document.getElementById("formatter").onclick = function() {
        var invalid = false;
        var input = {}, output = {};
        input.element = document.getElementById("input");
        input.text = input.element.value;
        output.element = document.getElementById("output");
        
        var char_starting = input.text.charAt(0), char_ending;
        if(char_starting === "{")
            char_ending = "}";
        else if(char_starting === "[")
            char_ending = "]";
        else invalid = true;
        
        output.text = input.text.replace(char_starting, char_starting+"\n\t").replace(new RegExp(char_ending+"$"), "\n"+char_ending);
        
        output.element.value = output.text;
    }

}
