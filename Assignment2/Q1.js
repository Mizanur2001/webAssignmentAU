const displayedText = document.getElementById('displayedText')

const funcCheck = (age, ns) => {
    if (age >= 18 && ns.toLowerCase() == 'indian') {
        displayedText.innerText = 'Eligible for Voting'
    }
    else{
        displayedText.innerText = 'Not Eligible for Voting'
    }
}