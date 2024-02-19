
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
        // console.log(seatNumber)
        let i = setNum.length - 1;

        if (!setNum.includes(seatNumber)) {
            if (seat >= 4) {
                return alert('you select maxium of seat');

            }
            
            setNum.push(seatNumber);
            seat += 1;
            abailabeSeat -= 1;
            setInnerText('seat', seat);
            setInnerText('abailable-seat', abailabeSeat);

            total += 550;
            grandPrice.innerText = total;
            billing(seatNumber, perSeat, total);
            setBg(seatNumber);


           
            
            nextBtn(seat);

            if(seat >= 4){
            enableBtn('apply-btn');
            }

            

        }

        else if (setNum.includes(seatNumber)) {
            const abc = setNum.indexOf(seatNumber)
            const seatValue = setNum[abc];
            console.log(seatValue)
            removeBg(seatValue);
            total -= 550;
            seat -= 1;
            abailabeSeat += 1;
            grandPrice.innerText = total;
            setInnerText('seat', seat);
            setInnerText('abailable-seat', abailabeSeat);
            reSelect(seatNumber, perSeat, total, seat);
            removeIdfromArray(setNum, abc);
          
            
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

function hiddenBtn(id) {
    const setid = document.getElementById(id);
    setid.classList.add('hidden');

}
function showBtn(id) {
    const setid = document.getElementById(id);
    setid.classList.remove('hidden');

}

function disableBtn(id){
    document.getElementById(id).setAttribute('disabled', "true");
}
function enableBtn(id){
    document.getElementById(id).removeAttribute('disabled')
}


