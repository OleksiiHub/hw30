function Accumulator() {
    this.accum = 0;
}

let element = document.getElementById('myElement');
Accumulator.prototype.plusOne = function (plusNum) {
    this.accum += 1;
    element.style.color = 'green';
}

Accumulator.prototype.minusOne = function (minusNum) {
    this.accum -= 1;
    element.style.color = 'red';
}

Accumulator.prototype.clearAccum = function (clearNum) {
    this.accum = 0;
    element.style.color = 'black';
}

Accumulator.prototype.printItems = function () {

    element.textContent = this.accum;

}

const accumulator = new Accumulator()

function plusOne() {
    accumulator.plusOne()
    accumulator.printItems()
}

function minusOne() {
    accumulator.minusOne()
    accumulator.printItems()
}

function clearAccum() {
    accumulator.clearAccum()
    accumulator.printItems()
}