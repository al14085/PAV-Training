function clickBtn1(){
    const text = document.form1.textarea1.value;
    var textArray = text.split(/\r\n|\r|\n/);
    let setArray = new Set(textArray);
    if(text.value !== "undefined" || text.value !== null){  
            // Check browser support
            if (typeof(Storage) !== "undefined") {
                for(var i=0;i<textArray.length;i++){
                // Store
                localStorage.setItem(i, textArray);
                // Retrieve
                document.getElementById("span1").textContent = localStorage.getItem(i);     
                }
            //localStorage.setItem("word",text);
            //document.getElementById("span1.1").textContent = localStorage.getItem("word");
            localStorage.setItem("word2",[...setArray]);
            document.getElementById("span2").innerText = localStorage.getItem("word2");
            } else {
                document.getElementById("span1").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        
    }
}
