// Default Price of First Class and Economy Seats
const firstClassPrice = 150;
const economyPrice = 100;

// Subtotal Calculation
function subTotalCalculation() {
    const totalFirstSeats = document.getElementById('first-seat-numbers').value
    const totalEconomySeats = document.getElementById('economy-seat-numbers').value
    const subTotal = totalFirstSeats * firstClassPrice + totalEconomySeats * economyPrice
    return subTotal;
}

// Tax Calculation
function taxCalculation() {
    const subTotal = subTotalCalculation()
    const tax = subTotal * 0.10
    return tax;
}

// Grand Total Calculation
function grandTotalCalculation() {
    const subTotal = subTotalCalculation()
    const tax = taxCalculation()
    const grandTotal = subTotal + tax
    return grandTotal;
}

// set flight seat count handler
function seatCountHandler(id, isIncrement) {
    const getSeatNumber = document.getElementById(id + '-seat-numbers')
    let seatNumbers = parseFloat(getSeatNumber.value)
    
    if (isIncrement == true) {
        seatNumbers++
    }
    if (isIncrement == false && seatNumbers > 0) {
        seatNumbers--
    }

    // set subtotal, tax, grand total
    document.getElementById(id + '-seat-numbers').value = seatNumbers
    // Set subtotal
    const subTotal = subTotalCalculation()
    document.getElementById('sub-total').innerText = subTotal;
    // set tax
    const tax = taxCalculation()
    document.getElementById('tax').innerText = tax;
    // set grand total
    const grandTotal = grandTotalCalculation()
    document.getElementById('grand-total').innerText = grandTotal;
}

// First Class Increment Handler
document.getElementById('first-increment-handler').addEventListener('click', function () {
    seatCountHandler('first', true)
})
// First Class Decrement Handler
document.getElementById('first-decrement-handler').addEventListener('click', function () {
    seatCountHandler('first', false)
})
// Economy Increment Handler
document.getElementById('economy-increment-handler').addEventListener('click', function () {
    seatCountHandler('economy', true)
})
// Economy Decrement Handler
document.getElementById('economy-decrement-handler').addEventListener('click', function () {
    seatCountHandler('economy', false)
})


// get flight passenger data
function getPassengerValue(getId, initialId){
    document.getElementById(initialId).innerText = document.getElementById(getId).value;
}
// get total values
function getTotalValue(getId, initialId){
    document.getElementById(initialId).innerText = document.getElementById(getId).innerText
}

// Set Booking Information to Popup Section
function bookingInfoPopup() {
    
    getPassengerValue('flying-from', 'flyingFrom')
    getPassengerValue('flying-to', 'flyingTo')
    getPassengerValue('departure', 'departure-date')
    getPassengerValue('return', 'return-date')
    getPassengerValue('first-seat-numbers', 'firstClassNum')
    getPassengerValue('economy-seat-numbers', 'economyNum')
    getTotalValue('sub-total', 'subTotal')
    getTotalValue('grand-total', 'total')


    // const flyingFrom = document.getElementById('flying-from').value
    // document.getElementById('flyingFrom').innerText = flyingFrom;

    // const flyingTo = document.getElementById('flying-to').value
    // document.getElementById('flyingTo').innerText = flyingTo;

    // const departure = document.getElementById('departure').value
    // document.getElementById('departure-date').innerText = departure;

    // const returnDate = document.getElementById('return').value
    // document.getElementById('return-date').innerText = returnDate;

    // const firstClassNum = document.getElementById('first-seat-numbers').value
    // document.getElementById('firstClassNum').innerText = firstClassNum;

    // const economyNum = document.getElementById('economy-seat-numbers').value
    // document.getElementById('economyNum').innerText = economyNum;

    // const subTotal = document.getElementById('sub-total').innerText
    // document.getElementById('subTotal').innerText = subTotal;

    // const total = document.getElementById('grand-total').innerText
    // document.getElementById('total').innerText = total;
}

// Popup Click Event ( if click "Book Now" button showing popup with booking information )
document.getElementById('bookNow-btn').addEventListener('click', function(){
    document.querySelector('.book-now').classList.add('popupEffect')
    bookingInfoPopup()

})

// if click "X" button popup will close
document.getElementById('close-popup').addEventListener('click', function(){
    document.querySelector('.book-now').classList.remove('popupEffect')
})