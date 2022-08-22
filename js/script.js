function getHowManyPlayerSelected() {
    const ol = document.getElementById('player-list');
    return ol;
}

document.getElementById("card-container").addEventListener('click', function (event) {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        const playerName = event.target.parentElement.firstElementChild.innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.style.fontSize = '25px';
        const ol = getHowManyPlayerSelected();
        const playerNumber = ol.childNodes.length;
        if (playerNumber > 4) {
            alert('you can not added more player');
            return;
        }
        else {
            ol.appendChild(li);
            button.setAttribute('disabled', true);
            button.style.backgroundColor = '#B3B3B3';
        }
    }
});

function getInputFieldById(id) {
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

function calculateTotalExpenses() {
    const ol = getHowManyPlayerSelected();
    const playerNumber = ol.childNodes.length;
    const perPlayerBudget = getInputFieldById('per-player-budget');
    const totalExpenses = perPlayerBudget * playerNumber;
    return totalExpenses;
}

function setInnerTextByIdAndValue(id, value) {
    if (isNaN(value)) {
        alert('please insert number')
        return;
    }
    document.getElementById(id).innerText = value;
}


// calculate button
document.getElementById('calculate').addEventListener('click', function () {
    const totalExpenses = calculateTotalExpenses();
    setInnerTextByIdAndValue('player-expenses', totalExpenses);
});

function calculateTotalBudget() {
    const totalExpenses = calculateTotalExpenses();
    const managerBudget = getInputFieldById('manager-budget');
    const coachBudget = getInputFieldById('coach-budget');
    const totalBudget = managerBudget + coachBudget + totalExpenses;
    return totalBudget;
}
// calculate total button
document.getElementById('calculate-total').addEventListener('click', function () {
    const totalBudget = calculateTotalBudget();
    setInnerTextByIdAndValue('total-budget', totalBudget);
})