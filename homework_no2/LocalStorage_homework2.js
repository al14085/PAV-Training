function clickBtn1(){
    var str = document.getElementById("word").value;
    var element1 = document.getElementById("form2");
    var radioNodeList1 = element1.target;
    var target = radioNodeList1.value;
    var element2 = document.getElementById("form3");
    var radioNodeList2 = element2.modifier;
    var modifier = radioNodeList2.value;
    var element3 = document.getElementById("form4");
    var radioNodeList3 = element3.datatype;
    var datatype = radioNodeList3.value;
    var fSnakeToCamel ="";
    var fCamelToSnake ="";
    if(target===""){
        document.getElementById("span1").innerHTML = "Sorry, please check target.";
    }else if(target=="camel"){
        fSnakeToCamel = camelCase(str);
        localStorage.setItem("target", fSnakeToCamel);
        //document.getElementById("span1").textContent = localStorage.getItem("target");
    }else if(target=="snake"){
        fCamelToSnake = snakeCase(str);
        localStorage.setItem("target", fCamelToSnake);
        //document.getElementById("span1").textContent = localStorage.getItem("target");
    }
   
    if(modifier===""|| modifier=="public"){
        modifier="public"
        localStorage.setItem("modifier",modifier);
    }else {
        localStorage.setItem("modifier",modifier);
    }

    if(datatype===""){
        document.getElementById("span1").innerHTML = "Sorry, please check datatype.";
    }else{
        localStorage.setItem("datatype",datatype);
    }
    document.getElementById("span1").textContent = localStorage.getItem("modifier")+" "+localStorage.getItem("datatype")+" "+localStorage.getItem("target");
}


function camelCase(str){
    if(str.match(/[-_]/g)){
        str = str.toLowerCase();
    }
    return str.replace(/[-_](.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
  }

  function snakeCase(str){
    var camel=camelCase(str);
  if(!(str.match(/[-_]/g))){
    camel = str;
  }
  return camel.replace(/[A-Z]/g, function(s){
    return "_" + s.charAt(0).toLowerCase();
  });
}