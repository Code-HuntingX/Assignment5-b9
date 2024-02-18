
function clickForBuyTicket(){
    document.getElementById('ph-poribohon').scrollIntoView();
}
let abailabeSeat = 40;
let seat = 0;
let perSeat = 550;
let total = 0;
const allSeats = document.getElementsByClassName('kbd-lg')
for( const seats of allSeats){
    seats.addEventListener('click',function(){
        
        if(seat >= 4){
            return alert('ok')
            
        }
       
       seat += 1;
       abailabeSeat -= 1;
       setInnerText('seat', seat);
       setInnerText('abailable-seat', abailabeSeat);
       let seatNumber = seats.textContent;
       total += 550;
       billing(seatNumber, perSeat, total);
       console.log(total)
    //    disableBtn(seatNumber)
    clickOnces(seatNumber);
       setBg(seatNumber);
       disableBtn(seatNumber);
       


    //    coupon 
    couponNew(seat);
    })
}


function setInnerText(id, value){
    const selectedSeat = document.getElementById(id).innerText = value;
}

function setBg(id){
    const setid = document.getElementById(id);
    setid.classList.add('bg-green-600');

}
function removeBg(id){
    const setid = document.getElementById(id);
    setid.classList.remove('bg-green-600');

}

function disableBtn(id){
    const setid = document.getElementById(id);
    setid.setAttribute('disabled', 'true');

}

function clickOnces(id){
    let click = document.getElementById(id);
    click.addEventListener('click', function(){
        this.removeEventListener('click', arguments.callee);
        console.log('ok boss')
    })
}
