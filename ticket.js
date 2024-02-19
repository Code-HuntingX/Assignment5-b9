
function billing(seat, price, total) {
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr')

    const seats = document.createElement('td');
    seats.innerText = seat;

    const classes = document.createElement('td');
    classes.innerText = 'Economy';

    const prices = document.createElement('td');
    prices.innerText = price;


    tr.appendChild(seats);
    tr.appendChild(classes);
    tr.appendChild(prices);
    tbody.appendChild(tr);

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;

}


function couponNew(value) {
    const btn = document.getElementById('apply-btn')
    const code = document.getElementById('inputed');
    const invalidCoupon = document.getElementById('invalid-coupon');
    let grandPrice = document.getElementById('grand-total');
    btn.addEventListener('click', function () {
        const coupon = code.value;
        if (value === 4 && coupon === 'NEW15') {
            let grandTotal = total - total * 0.15;
            grandPrice.innerText = grandTotal;
            invalidCoupon.innerText = "";
            console.log(value)
            disableBtn('apply-btn');
            return disableBtn('inputed');

        }
        else if (value === 4 && coupon === 'Couple 20') {
            let grandTotal = total - total * 0.2;
            grandPrice.innerText = grandTotal;
            invalidCoupon.innerText = "";
            disableBtn('apply-btn');
            return disableBtn('inputed');
        }
        else if (value !== 4) {
            invalidCoupon.innerText = 'you must select 4 seat for use coupon'
        }
        else if (value === 4) {
            invalidCoupon.innerText = 'coupon invalid or used'
        }

    })
}





