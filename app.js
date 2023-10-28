let calcType = document.getElementById('calcType');
let result = document.getElementById('result');
calcType.addEventListener('change', function () {
    let selectedValue = calcType.value;
    let inputBox1 = document.getElementById('inputBox1');
    let inputBox2 = document.getElementById('inputBox2');
    let inputBox3 = document.getElementById('inputBox3');
    let inputBox4 = document.getElementById('inputBox4');
    if (selectedValue === 'rectangle') {
        inputBox1.style.display = 'flex';
        inputBox2.style.display = 'none';
        inputBox3.style.display = 'none';
        inputBox4.style.display = 'none';
    }

    if (selectedValue === 'trapezium') {
        inputBox1.style.display = 'none';
        inputBox2.style.display = 'flex';
        inputBox3.style.display = 'none';
        inputBox4.style.display = 'none';
    }

    if (selectedValue === 'parallerogram') {
        inputBox1.style.display = 'none';
        inputBox2.style.display = 'none';
        inputBox3.style.display = 'flex';
        inputBox4.style.display = 'none';
    }

    if (selectedValue === 'triangle') {
        inputBox1.style.display = 'none';
        inputBox2.style.display = 'none';
        inputBox3.style.display = 'none';
        inputBox4.style.display = 'flex';
    }
});


document.getElementById('btn').addEventListener('click', function () {
    let selectedValue = document.getElementById('calcType').value;
    let result = document.getElementById('result');

    if (selectedValue === 'rectangle') {
        let length = parseFloat(document.getElementById('length').value);
        let breadth = parseFloat(document.getElementById('breadth').value);
        let area = length * breadth;
        result.textContent = "The Area is " + area;
    } else if (selectedValue === 'trapezium') {
        let base1 = parseFloat(document.getElementById('base1').value);
        let base2 = parseFloat(document.getElementById('base2').value);
        let height = parseFloat(document.getElementById('height').value);
        let area = ((base1 + base2) / 2) * height;
        result.textContent = "The Area is " + area;
    } else if (selectedValue === 'parallelogram') {
        let base = parseFloat(document.getElementById('parallelogramBase').value);
        let height = parseFloat(document.getElementById('parallelogramHeight').value);
        let area = base * height;
        result.textContent = "The Area is " + area;
    } else if (selectedValue === 'triangle') {
        let base = parseFloat(document.getElementById('triangleBase').value);
        let height = parseFloat(document.getElementById('triangleHeight').value);
        let area = (base * height) / 2;
        result.textContent = "The Area is " + area;
    } else {
        result.textContent = "Please select a shape to calculate the area.";
    }
});



