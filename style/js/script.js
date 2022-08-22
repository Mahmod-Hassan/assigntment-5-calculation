document.getElementById("card-container").addEventListener('click', function (event) {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        const ol = document.getElementById('player-list');
        const playerName = event.target.parentElement.firstElementChild.innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.style.fontSize = '25px';
        console.log(ol.childElements);
        if (ol.childNodes.length > 5) {
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