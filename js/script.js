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

function setInnerTextByIdAndValue(id, number) {
    if (isNaN(number)) {
        alert('please insert number')
        return;
    }
    document.getElementById(id).innerText = number;
    document.getElementById(id).style.color = '#FF5E19';
}


// calculate button
document.getElementById('calculate').addEventListener('click', function () {
    const totalExpenses = calculateTotalExpenses();
    if (totalExpenses <= 0) {
        alert('Please select at least one player');
        return;
    }
    setInnerTextByIdAndValue('player-expenses', totalExpenses);
});


document.getElementById('calculate-total').addEventListener('click', function () {
    // const totalBudget = calculateTotalBudget();
    const totalExpenses = calculateTotalExpenses();
    if (totalExpenses <= 0) {
        alert('please select at least one player')
        return;
    }
    const managerBudget = getInputFieldById('manager-budget');
    const coachBudget = getInputFieldById('coach-budget');
    const totalBudget = managerBudget + coachBudget + totalExpenses;
    setInnerTextByIdAndValue('total-budget', totalBudget);
})