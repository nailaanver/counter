let counter = 0;

function minus() {
    counter--;
    document.getElementById("count").value = counter;
    document.getElementById("count").style.color = 'red';

}

function plus() {
    counter++;
    document.getElementById("count").value = counter;
    document.getElementById("count").style.color = 'green';
}

function reset() {
    counter=0;
    document.getElementById("count").value = counter;
    document.getElementById("count").style.color = 'black';

}