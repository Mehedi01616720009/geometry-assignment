// set random color as backgroun when hover the card
const geoCards = document.getElementsByClassName('geo_card');
for (const geoCard of geoCards) {
    geoCard.addEventListener('mouseenter', function() {
        geoCard.style.backgroundColor = getRandomColor();
    });

    geoCard.addEventListener('mouseleave', function() {
        geoCard.style.backgroundColor = '#FFFFFF';
    });
}

// result convert centimeter square to meter square
// const converterBtns = document.getElementsByClassName('result_converter');

// for (const converterBtn of converterBtns) {
//     converterBtn.addEventListener('click', function() {
//         const centimeterSquareString = converterBtn.parentNode.querySelector('.result_item_value').innerText;
//         const centimeterSquareValue = parseFloat(centimeterSquareString);

//         const meterSquareValue = centimeterSquareToMeterSquare(centimeterSquareValue);

//         converterBtn.parentNode.querySelector('.result_item_value').innerText = meterSquareValue;
//         converterBtn.parentNode.querySelector('.result_item_unit').innerHTML = 'm<sup>2</sup>';

//         converterBtn.setAttribute('disabled', true);
        
//         converterBtn.classList.remove('bg-cyan-500');
//         converterBtn.classList.add('bg-gray-500');
//     });
// }

const resultList = document.getElementById('result-list');

resultList.addEventListener('click', function(event) {
    const eventClass = event.target.getAttribute('class');
    
    if (event.target.classList.contains('result_converter')) {
        const centimeterSquareString = event.target.parentNode.querySelector('.result_item_value').innerText;
        const centimeterSquareValue = parseFloat(centimeterSquareString);

        const meterSquareValue = centimeterSquareToMeterSquare(centimeterSquareValue);

        event.target.parentNode.querySelector('.result_item_value').innerText = meterSquareValue;
        event.target.parentNode.querySelector('.result_item_unit').innerHTML = 'm<sup>2</sup>';

        event.target.setAttribute('disabled', true);
        
        event.target.classList.remove('bg-cyan-500');
        event.target.classList.add('bg-gray-500');
    }
});

// toggle get input field
const valueEditBtns = document.getElementsByClassName('value_edit');
for (const valueEditBtn of valueEditBtns) {
    valueEditBtn.addEventListener('click', function() {
        const getValueBox = valueEditBtn.parentElement.parentElement.querySelector('.get_value_box');
        getValueBox.classList.toggle('active');
    });
}

const setValueBtns = document.getElementsByClassName('geo_card_set_value_btn');
for (const setValueBtn of setValueBtns) {
    setValueBtn.addEventListener('click', function() {
        const getValueBox = setValueBtn.parentNode;
        getValueBox.classList.remove('active');
    });
}

// area calculate
const triggeredBtns = document.getElementsByClassName('triggered_btn');
for (const triggeredBtn of triggeredBtns) {
    triggeredBtn.addEventListener('click', function() {
        const getBtnId = triggeredBtn.getAttribute('id');

        inputs = triggeredBtn.parentNode.querySelectorAll('.geo_card_get_value');
        inputValues = [];
        for(const input of inputs) {
            if (input.value === '' || isNaN(parseFloat(input.value))) {
                alert('input must required by only number');
                break;
            } else {
                inputValues.push(parseFloat(input.value));
                input.value = '';
            }

        }

        if (!isNaN(inputValues[0]) && !isNaN(inputValues[1])) {
            switch (getBtnId) {
                case 'triangle-area':
                    const triangleArea = areaCalculateOne(inputValues[0], inputValues[1]);
                    const triangleItem = createListElement(triangleArea, 'triangle-title');
                    resultList.appendChild(triangleItem);
                    break;
    
                case 'rectangle-area':
                    const rectangleArea = areaCalculateTwo(inputValues[0], inputValues[1]);
                    const rectangleItem = createListElement(rectangleArea, 'rectangle-title');
                    resultList.appendChild(rectangleItem);
                    break;
                
                case 'parallelogram-area':
                    const parallelogramArea = areaCalculateTwo(inputValues[0], inputValues[1]);
                    const parallelogramItem = createListElement(parallelogramArea, 'parallelogram-title');
                    resultList.appendChild(parallelogramItem);
                    break;
    
                case 'rhombus-area':
                    const rhombusArea = areaCalculateOne(inputValues[0], inputValues[1]);
                    const rhombusItem = createListElement(rhombusArea, 'rhombus-title');
                    resultList.appendChild(rhombusItem);
                    break;
    
                case 'pentagon-area':
                    const pentagonArea = areaCalculateOne(inputValues[0], inputValues[1]);
                    const pentagonItem = createListElement(pentagonArea, 'pentagon-title');
                    resultList.appendChild(pentagonItem);
                    break;
                
                case 'ellipse-area':
                    const ellipseArea = areaCalculateEllipse(inputValues[0], inputValues[1]);
                    const ellipseItem = createListElement(ellipseArea, 'ellipse-title');
                    resultList.appendChild(ellipseItem);
                    break;
            }
        } else {
            alert('input must required by only number');
        }
    });
}