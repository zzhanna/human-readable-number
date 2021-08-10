module.exports = function toReadable(number) {
    const edinicy = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    const desytki = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    const dopolnit = ['', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let result = '';
    let ed, des, sot;
    if (number === 0) {
        return `zero`;
    }
    sot = Math.trunc(number / 100);
    if (sot === 0) result = '';
    if (sot > 0) {
        result = result + (edinicy[sot] + ' hundred');
    }
    ed = number % 10;
    des = ((number % 100) - ed) / 10;
    if (des === 1 && (ed > 0 && ed <= 9)) {
        result = result + dopolnit[ed];
    } else {
        result = result + desytki[des] + edinicy[ed];
    }
    return result.trim();
}
