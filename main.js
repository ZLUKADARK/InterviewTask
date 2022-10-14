var array = [6, 2, 3, 1, 7, 4, 8, 5]

//Сортировка пузырьком
function SortArray(){ 
    for (let n = 0;  n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++ ){
            if (array[i] > array[i + 1]){
                bigger = array[i]
                array[i] = array[i + 1]
                array[i + 1] = bigger 
            }
        }
    }   
}

function DrawArray() {
    SortArray()
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}