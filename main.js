let output = document.getElementById('output');

document.getElementById('input').addEventListener('change', fuddifyText);
document.getElementById('fuddifyFile').addEventListener('click', fuddifyFile);

function fuddifyText() {
    let input = document.getElementById('input').value;
    output.innerHTML = fuddify(input);
}

function fuddifyFile() {
    fetch('sample.txt').then((rawData) => rawData.text()).then((data) => {
        output.innerHTML = fuddify(data);
    })
}

function fuddify(input) {
    let text = input.split('');
    for (let i = 0; i < text.length; i++) {
        if ((text[i] == 'r') || (text[i] == 'l')) {
            text[i] = 'w';
        } else if ((text[i] == 'R') || (text[i] == 'L')) {
            text[i] = 'W';
        }
    }
    return text.join('');
}