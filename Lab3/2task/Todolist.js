function addItem(){
    const destination = document.getElementById("list")
    const input = document.getElementById("input")
    let text = input.value
    if (text == ""){
        return;
    }
    input.value = "";
    destination.innerHTML += `<div class="listItem"><input class="cbox" type="checkbox" onclick="del_word(this)"><p>${text}<p>
                 <div class = "pic"><img class="del" id = "image" onclick="dele(this);" src="basket.png"  alt="kdsno" width="20px"><div><\div>`;
}
function dele(elements){
    return elements.parentNode.parentNode.remove();
}

function del_word(elements){
    let word = elements.parentNode.childNodes[1];
    if (elements.checked){
        return word.style.textDecoration = "line-through";
    }else{
        word.style.textDecoration = "none";
    }
}
