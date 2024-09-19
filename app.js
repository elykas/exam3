"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const filterButton = document.getElementById("filter-button");
const twoPercentInput = document.getElementById("twoPercent");
const threePercentInput = document.getElementById("threePercent");
const pointsInput = document.getElementById("points");
const twoPercentLabel = document.getElementById("twoPercent-label");
const threePercentLabel = document.getElementById("threePercent-label");
const pointsLabel = document.getElementById("points-label");
function filterPlayers(filterData) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = 'https://nbaserver-q21u.onrender.com/api/filter';
        try {
            const response = yield fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filterData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            renderPlayers(data);
            return data;
        }
        catch (error) {
            console.error('Error fetching filtered players:', error);
            throw error;
        }
    });
}
const createCard = (div, player) => {
    const nameElement = document.createElement("p");
    nameElement.textContent = player.playerName;
    nameElement.classList.add("text-card");
    div.appendChild(nameElement);
    const threePercentElement = document.createElement("p");
    threePercentElement.textContent = `Three Percent: ${player.threePercent.toString()}`;
    threePercentElement.classList.add("text-card");
    div.appendChild(threePercentElement);
    const twoPercentPointElement = document.createElement("p");
    twoPercentPointElement.textContent = `Two Percent: ${player.twoPercent.toString()}`;
    twoPercentPointElement.classList.add("text-card");
    div.appendChild(twoPercentPointElement);
    const pointsElement = document.createElement("p");
    pointsElement.textContent = `Points : ${player.points.toString()}`;
    pointsElement.classList.add("text-card");
    div.appendChild(pointsElement);
};
const addToCardPlayer = (player) => {
    const playerGuardCard = document.getElementById("pointGuard-card");
    const shootingGuardCard = document.getElementById("shootingGuard-card");
    const smallForwardCard = document.getElementById("smallForward-Card");
    const powerForwardCard = document.getElementById("powerForward-card");
    const centerCard = document.getElementById("center-card");
    switch (player.position) {
        case 'PG':
            createCard(playerGuardCard, player);
            break;
        case 'SG':
            createCard(shootingGuardCard, player);
            break;
        case 'SF':
            createCard(smallForwardCard, player);
            break;
        case 'PF':
            createCard(powerForwardCard, player);
            break;
        case 'C':
            createCard(centerCard, player);
            break;
        default:
            "";
            break;
    }
};
const renderPlayers = (players) => {
    const playerTable = document.getElementById("player-table");
    if (!playerTable) {
        console.error("Table body not found");
        return;
    }
    playerTable.textContent = "";
    players.forEach((player, index) => {
        const row = document.createElement("tr");
        const playerCell = document.createElement("td");
        playerCell.textContent = player.playerName;
        playerCell.classList.add("table-data");
        row.appendChild(playerCell);
        const positionCell = document.createElement("td");
        positionCell.textContent = player.position;
        positionCell.classList.add("table-data");
        row.appendChild(positionCell);
        const pointsCell = document.createElement("td");
        pointsCell.textContent = player.points.toString();
        pointsCell.classList.add("table-data");
        row.appendChild(pointsCell);
        const twoPercentCell = document.createElement("td");
        twoPercentCell.textContent = player.twoPercent.toString();
        twoPercentCell.classList.add("table-data");
        row.appendChild(twoPercentCell);
        const threePercentCell = document.createElement("td");
        threePercentCell.textContent = player.threePercent.toString();
        threePercentCell.classList.add("table-data");
        row.appendChild(threePercentCell);
        const actionCell = document.createElement("td");
        actionCell.classList.add("action-cell");
        const createButton = document.createElement("button");
        createButton.classList.add("add-button");
        createButton.textContent = `Add ${player.playerName} to current Team`;
        createButton.classList.add("table-button");
        createButton.addEventListener("click", () => addToCardPlayer(player));
        actionCell.appendChild(createButton);
        row.appendChild(actionCell);
        playerTable.appendChild(row);
    });
};
const filter = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const position = document.getElementById("position").value;
    const twoPercent = +document.getElementById("twoPercent").value;
    const threePercent = +document.getElementById("threePercent").value;
    const points = +document.getElementById("points").value;
    const newBody = {
        position,
        twoPercent,
        threePercent,
        points
    };
    const filteredList = yield filterPlayers(newBody);
    return filteredList;
});
const labelChange = (input, label) => {
    label.innerText = input.value;
};
filterButton.addEventListener("click", filter);
pointsInput.addEventListener("change", () => {
    labelChange(pointsInput, pointsLabel);
});
twoPercentInput.addEventListener("change", () => {
    labelChange(twoPercentInput, twoPercentLabel);
});
threePercentInput.addEventListener("change", () => {
    labelChange(threePercentInput, threePercentLabel);
});
