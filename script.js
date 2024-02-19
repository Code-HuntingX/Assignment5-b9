
function clickForBuyTicket() {
    document.getElementById('ph-poribohon').scrollIntoView();
}
let abailabeSeat = 40;
let seat = 0;
let perSeat = 550;
let total = 0;
let setNum = [];

let grandPrice = document.getElementById('grand-total');
const allSeats = document.getElementsByClassName('kbd-lg')
for (const seats of allSeats) {
    seats.addEventListener('click', function () {
        let seatNumber = seats.textContent;
        let i = setNum.length - 1;

        if (!setNum.includes(seatNumber)) {
            if (seat >= 4) {
                return alert('you select maxium of seat')
    
            }
            setNum.push(seatNumber);
            seat += 1;
            abailabeSeat -= 1;
            setInnerText('seat', seat);
            setInnerText('abailable-seat', abailabeSeat);

            total += 550;
            grandPrice.innerText = total;
            billing(seatNumber, perSeat, total);
            //    disableBtn(seatNumber)
            clickOnces(seatNumber);
            setBg(seatNumber);

            //    coupon 
            couponNew(seat);
            nextBtn(seat);

        }
    })
}


function setInnerText(id, value) {
    const selectedSeat = document.getElementById(id).innerText = value;
}

function setBg(id) {
    const setid = document.getElementById(id);
    setid.classList.add('bg-green-600');

}
function removeBg(id) {
    const setid = document.getElementById(id);
    setid.classList.remove('bg-green-600');

}

function disableBtn(id) {
    const setid = document.getElementById(id);
    setid.classList.add('hidden');

}



function clickOnces(id) {
    let click = document.getElementById(id);
    click.addEventListener('click', function () {
        this.removeEventListener('click', arguments.callee);
    })
}
