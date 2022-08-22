document.getElementById("card-container").addEventListener('click', function (event) {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        const ol = document.getElementById('player-list');
        const playerName = event.target.parentElement.firstElementChild.innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.style.fontSize = '25px';
        if (ol.childNodes.length > 4) {
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

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerBudget = parseInt(document.getElementById('per-player-budget').value);
    const ol = document.getElementById('player-list');
    const totalExpenses = perPlayerBudget * ol.childNodes.length;
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = totalExpenses;
})