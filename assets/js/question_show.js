function calculate(){

    var result_div = document.getElementById("show_result");
    if(!checkResultCSS(result_div)){
        setResultContent(result_div);
    }

    //Make the calculate function 
    //...


    //Set the result as a string 

    var result = "VGBL"; // for test 
    setFinalResult(result);

    
}

function setResultContent(div){
     var question_div = document.getElementById("show_questions");
    //  var question_div_heigth = question_div.offsetHeight;
    div.style.width = "250px";
    // div.style.height = question_div_heigth+"px";
    div.style.marginLeft = "50px";
    div.style.backgroundColor = "#d8d8d8";
    div.style.border = "1px solid #000";
    div.style.borderRadius = "10px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.padding = "0 5px";
    // div.style.alignItems = "center";


    var p = document.createElement("p");
    p.innerHTML = "O tipo de previdência recomendado para você é:";
    p.style.fontSize = "14pt";
    p.style.margin = "50px 0 15px 10px";
    div.appendChild(p);

    var result_div = document.createElement("div");
    var result = document.createElement("p");
    result.setAttribute("id","final_result");
    result.style.color = "#fff";
    result.style.fontSize = "14pt";
    result.style.margin = "0";
    result.style.padding = "7px";
    result_div.style.borderRadius = "8px";
    result_div.style.backgroundColor = "#AFABAB";
    result_div.style.border = "1px solid #000";
    result_div.style.textAlign = "center";
    result_div.appendChild(result);
    
    div.appendChild(result_div);
}

function checkResultCSS(div){
    return div.style.width == "250px";
}

function setFinalResult(result){
    document.getElementById("final_result").innerHTML = result;
}

function createQuestionDiv(){
    var div = document.createElement("div");
    div.setAttribute("class","question");
    return div;
}

function createQuestionText(question){
    var p = document.createElement("p");
    p.innerHTML = question;
    return p;
}

function createInputText(name){
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name",name);
    return input;
}

function createInputRadio(options){
    for(var i = 0 ; i<options.length;i++){
        // var radio =
    }
}