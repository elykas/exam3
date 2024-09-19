const filterButton = document.getElementById("filter-button") as HTMLFormElement;
const twoPercentInput = document.getElementById("twoPercent") as HTMLInputElement;
const threePercentInput = document.getElementById("threePercent") as HTMLInputElement;
const pointsInput = document.getElementById("points") as HTMLInputElement;
const twoPercentLabel = document.getElementById("twoPercent-label") as HTMLSpanElement;
const threePercentLabel = document.getElementById("threePercent-label") as HTMLSpanElement;
const pointsLabel = document.getElementById("points-label") as HTMLSpanElement;

interface Players {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
    playerName: string;
  }
  
  interface FilterRequest {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
  }
  
  async function filterPlayers(filterData: FilterRequest): Promise<Players[]> {
    const baseUrl = 'https://nbaserver-q21u.onrender.com/api/filter';
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: Players[] = await response.json();
      renderPlayers(data)
      return data;
    } catch (error) {
      console.error('Error fetching filtered players:', error);
      throw error;
    }
  }

  const createCard = (div:HTMLDivElement,player:Players) =>{

    const nameElement = document.createElement("p");
    nameElement.textContent = player.playerName
    nameElement.classList.add("text-card");
    div.appendChild(nameElement)

    const threePercentElement = document.createElement("p");
    threePercentElement.textContent = `Three Percent: ${player.threePercent.toString()}`
    threePercentElement.classList.add("text-card");
    div.appendChild(threePercentElement);

    const twoPercentPointElement = document.createElement("p");
    twoPercentPointElement.textContent = `Two Percent: ${player.twoPercent.toString()}`
    twoPercentPointElement.classList.add("text-card");
    div.appendChild(twoPercentPointElement);


    const pointsElement = document.createElement("p");
    pointsElement.textContent = `Points : ${player.points.toString()}`
    pointsElement.classList.add("text-card");
    div.appendChild(pointsElement)
}

  const addToCardPlayer = (player:Players) => {

    const playerGuardCard = document.getElementById("pointGuard-card")as HTMLDivElement;
    const shootingGuardCard = document.getElementById("shootingGuard-card")as HTMLDivElement;
    const smallForwardCard = document.getElementById("smallForward-Card")as HTMLDivElement;
    const powerForwardCard = document.getElementById("powerForward-card")as HTMLDivElement;
    const centerCard = document.getElementById("center-card")as HTMLDivElement;

      switch(player.position){
          case 'PG':
               createCard(playerGuardCard,player)
                break
                case 'SG':
                createCard(shootingGuardCard,player)
                break   
                case 'SF':
                createCard(smallForwardCard,player)
                break
                case 'PF':
                createCard(powerForwardCard,player)
                break
                case 'C':
                createCard(centerCard,player)
                break
                default:
                    "";
                    break;
        }      

  }

  const renderPlayers = (players: Players[]) => {
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
      playerCell.classList.add("table-data")
      row.appendChild(playerCell);
  
      const positionCell = document.createElement("td");
      positionCell.textContent = player.position;
      positionCell.classList.add("table-data")
      row.appendChild(positionCell);
  
      const pointsCell = document.createElement("td");
      pointsCell.textContent = player.points.toString();
      pointsCell.classList.add("table-data")
      row.appendChild(pointsCell);
  
      const twoPercentCell = document.createElement("td");
      twoPercentCell.textContent = player.twoPercent.toString();
      twoPercentCell.classList.add("table-data")
      row.appendChild(twoPercentCell);
  
      const threePercentCell = document.createElement("td");
      threePercentCell.textContent = player.threePercent.toString();
      threePercentCell.classList.add("table-data")
      row.appendChild(threePercentCell);
  
      const actionCell = document.createElement("td");
      actionCell.classList.add("action-cell")
  
      const createButton = document.createElement("button");
      createButton.classList.add("add-button")
      createButton.textContent = `Add ${player.playerName} to current Team`;
      createButton.classList.add("table-button");
      createButton.addEventListener("click", () => addToCardPlayer(player));
      actionCell.appendChild(createButton);
  
      row.appendChild(actionCell);
      playerTable.appendChild(row);
    });
  };

const filter = async(e:Event):Promise<Players[]> => {

    e.preventDefault();

    const position:string =  (document.getElementById("position") as HTMLSelectElement).value; 
    const twoPercent: number = +(document.getElementById("twoPercent") as HTMLInputElement).value;
    const threePercent:number = +(document.getElementById("threePercent") as HTMLInputElement).value;
    const points:number = +(document.getElementById("points") as HTMLInputElement).value;

    const newBody:FilterRequest = {
        position,
        twoPercent,
        threePercent,
        points
    }

   const filteredList:Players[] = await filterPlayers(newBody)
   
   return filteredList
}


const labelChange:(input:HTMLInputElement,label:HTMLSpanElement) => void  = (input:HTMLInputElement,label:HTMLSpanElement)=>{
    label.innerText = input.value;
}

filterButton.addEventListener("click", filter)
pointsInput.addEventListener("change",() => {
    labelChange(pointsInput,pointsLabel)
})
twoPercentInput.addEventListener("change",() => {
    labelChange(twoPercentInput,twoPercentLabel)
})
threePercentInput.addEventListener("change",() => {
    labelChange(threePercentInput,threePercentLabel)
})










 