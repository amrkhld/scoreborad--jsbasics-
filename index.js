let homeScore = 0
let guestScore = 0

function addScore(team, score) {
    if (team === 'home') {
        homeScore += score
        document.getElementById("home-score").textContent = homeScore
    } else if (team === 'guest') {
        guestScore += score
        document.getElementById("guest-score").textContent = guestScore
    }

    isWinning()
}

function newGame() {
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-score").textContent = guestScore

    isWinning()
}

function isWinning() {
    if (homeScore > guestScore) {
        document.getElementById("winning-team").textContent = "Leading Team: HOME!"
    } else if (guestScore > homeScore) {
        document.getElementById("winning-team").textContent = "Leading Team: GUEST!"
    } else if (homeScore === guestScore) {
        document.getElementById("winning-team").textContent = "Leading Team: DRAW!"
    }
}