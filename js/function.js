// generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// cm sqr to meter sqr
function centimeterSquareToMeterSquare(centimeterSquare) {
    const meterSquare = (centimeterSquare / 10000).toFixed(2);;
    return meterSquare;
}

// triangle, rhombus, pentagon area calculate
function areaCalculateOne(valueOne, valueTwo) {
    const areaValue = 0.5 * valueOne * valueTwo;
    return areaValue;
}

// rectangle, parallelogram area calculate
function areaCalculateTwo(valueOne, valueTwo) {
    const areaValue = valueOne * valueTwo;
    return areaValue;
}

// ellipse area calculate
function areaCalculateEllipse(valueOne, valueTwo) {
    const areaValueTemp = Math.PI * valueOne * valueTwo;
    areaValue = areaValueTemp.toFixed(2);
    return areaValue;
}

// create element
function createListElement(area, titleId) {
    const title = document.getElementById(titleId).innerText;

    const li = document.createElement('li');
    li.setAttribute('class', 'result_item grid grid-cols-2 lg:grid-cols-3 gap-1 items-center');

    li.innerHTML = `<div>${title}</div><div><span class="result_item_value">${area}</span><span class="result_item_unit">cm<sup>2</sup></span></div><button class="result_converter bg-cyan-500 px-2 py-1 rounded-md text-white col-span-2 lg:col-span-1">Convert to m<sup>2</sup></button>`;

    return li;
}