var inputElement = document.querySelector('.search-tags__input input');
var removeBtn = document.querySelector('.search-tags__removeBtn');
var closeElement = document.querySelector('.tag i');
var searchElement = document.querySelector('.search-tags__input');

var tags = [];

function reCreateContent() {
    searchElement.innerHTML = '';
    for(var i = 0; i < tags.length; i++){
        searchElement.innerHTML += `<div class="tag">
                                    ${tags[i]}                             
                                    <i class="far fa-times-circle" onclick="removeTag(${i})"></i>               
                                    </div>`
    }

    searchElement.appendChild(inputElement);
    inputElement.focus();
}

inputElement.addEventListener('keydown',function(e){
    if( e.keyCode === 13  ){
        if(inputElement.value.trim() === ''){
            inputElement.value = ''
        }else {
            tags.push(inputElement.value.trim());
            reCreateContent();
            inputElement.value = '';
        }
    }
})

function removeTag(i){
    tags.splice(i,1);
    reCreateContent();
}


removeBtn.addEventListener('click', function(){
    tags = [];
    reCreateContent();
})