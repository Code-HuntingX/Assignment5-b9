function reSelect(seat, price, total, totalSeat) {
    const tbody = document.getElementById('tbody');
    const trow = seat + 'trow'
    if (document.getElementById(trow)) {
        document.getElementById(trow).remove();
    }
    if (document.getElementById('trow')) {
        document.getElementById('trow').remove();
    }



    console.log(trow);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const discount = document.getElementById('discountPrice');
    // discount.innerText = 0;
    const inputText = document.getElementById('inputed');
    inputText.value = "";
    showBtn('inputed');
    hiddenBtn('discount');
    showBtn('apply-btn')

    if( totalSeat >= 4){
        enableBtn('apply-btn')

    }else{ disableBtn('apply-btn')}

}





function removeIdfromArray(array, index) {
    // console.log(array, index)
    array.splice(index, 1);

}


