window.onload = function() {

    document.getElementById("formatter").onclick = function() {
        var input = {}, output = {};
        input.element = document.getElementById("input");
        input.text = input.element.value.trim();
        output.element = document.getElementById("output");
        
        var char_starting = input.text.charAt(0), char_ending;
        if(char_starting === "{")
            char_ending = "}";
        else if(char_starting === "[")
            char_ending = "]";
        else return;
        
        var tabAmount = 0;
        while(input.text.search(/^{|^\[/g) >= 0) {
            var done;
            input.text.match(/{(.*?\n*?.*?)}|\[(.*?\n*?.*?)\]/g).forEach(v => {
                input.text.replace(v, "");
            });
            if(done.length)
                tabAmount++;
            console.log(tabAmount);
        }
        
        output.text = input.text.replace(char_starting, char_starting+"\n\t").replace(new RegExp(char_ending+"$"), "\n"+char_ending);
        output.text = output.text.replace()
        
        output.element.value = output.text;
    }

}
