function getHowManyPlayerSelected() {
    const ol = document.getElementById('player-list');
    return ol;
}

document.getElementById("card-container").addEventListener('click', function (event) {

    if (event.target.tagName === 'BUTTON') {
        // event.target is nothing but a button
        // that's why assign this value into a variable
        // and the variabel name is button
        const button = event.target;
        const playerName = button.parentElement.firstElementChild.innerText;
        // create li element
        const li = document.createElement('li');
        li.innerText = playerName;
        li.style.fontSize = '25px';
        const ol = getHowManyPlayerSelected();
        const playerNumber = ol.childNodes.length;
        if (playerNumber >= 5) {
            alert("your can't added more than 5 players");
            return;
        }
        else {
            // here i set <li> into <ol> tag
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