'use strict';

function getScore(m_score1, m_score2) {
    var score = "";
    if (m_score1 === m_score2) {
        score = equalScore(m_score1);
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        score = lateGameScore(m_score1, m_score2);
    } else {
        score = unequalOrNonLateGameScore(m_score1, score, m_score2);
    }
    return score;
}

function unequalOrNonLateGameScore(m_score1, score, m_score2) {
    var tempScore = 0;
    var i = 1;
    tempScore = m_score1;
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }
    i = 2;
    if (i === 1) { tempScore = m_score1; }
    else {
        score += "-";
        tempScore = m_score2;
    }
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }
    
    return score;
}

function lateGameScore(m_score1, m_score2) {
    var minusResult = m_score1 - m_score2;
    if (minusResult === 1) { return "Advantage player1"; }
    else if (minusResult === -1) { return "Advantage player2"; }
    else if (minusResult >= 2) { return "Win for player1"; }
    else { return "Win for player2"; }
}

function equalScore(score) {
    const equalScores = ["Love-All", "Fifteen-All", "Thirty-All"];

    return equalScores[score] ?? "Deuce";
}

module.exports = getScore;
