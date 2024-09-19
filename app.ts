const filterButton = document.getElementById("filter-button") as HTMLFormElement;


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
  debugger
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

  const addToCardPlayer = (player:Players) => {
    debugger
      switch(player.position){
          case 'playerGuard':
                const playerGuardCard = document.getElementById("pointGuard-card")as HTMLDivElement;
                const namePointGuard = document.createElement("p");
                namePointGuard.textContent = player.playerName
                namePointGuard.classList.add();
                playerGuardCard.appendChild(namePointGuard)

                const threePercentPointGuard = document.createElement("p");
                threePercentPointGuard.textContent = `Three Percent: ${player.threePercent.toString()}`
                threePercentPointGuard.classList.add();
                playerGuardCard.appendChild(threePercentPointGuard);

                const twoPercentPointGuard = document.createElement("p");
                twoPercentPointGuard.textContent = `Two Percent: ${player.twoPercent.toString()}`
                twoPercentPointGuard.classList.add();
                playerGuardCard.appendChild(twoPercentPointGuard);


                const pointsPointGuard = document.createElement("p");
                pointsPointGuard.textContent = `Points : ${player.points.toString()}`
                pointsPointGuard.classList.add();
                playerGuardCard.appendChild(pointsPointGuard)

                case 'shootingGuard':
                const shootingGuardCard = document.getElementById("shootingGuard-card")as HTMLDivElement;
                const nameShootingGuard = document.createElement("p");
                nameShootingGuard.textContent = player.playerName
                nameShootingGuard.classList.add();
                shootingGuardCard.appendChild(nameShootingGuard)

                const threePercentShootingGuard = document.createElement("p");
                threePercentShootingGuard.textContent = `Three Percent: ${player.threePercent.toString()}`
                threePercentShootingGuard.classList.add();
                shootingGuardCard.appendChild(threePercentShootingGuard);

                const twoPercentShootingGuard = document.createElement("p");
                twoPercentShootingGuard.textContent = `Two Percent: ${player.twoPercent.toString()}`
                twoPercentShootingGuard.classList.add();
                shootingGuardCard.appendChild(twoPercentShootingGuard);


                const pointsShootingGuard = document.createElement("p");
                pointsShootingGuard.textContent = `Points : ${player.points.toString()}`
                pointsShootingGuard.classList.add();
                shootingGuardCard.appendChild(pointsShootingGuard)

                case 'playerGuard':
                const smallForwardCard = document.getElementById("smallForward-Card")as HTMLDivElement;

                const namesmallForward = document.createElement("p");
                namesmallForward.textContent = player.playerName
                namesmallForward.classList.add();
                smallForwardCard.appendChild(namesmallForward)

                const threePercentsmallForward = document.createElement("p");
                threePercentsmallForward.textContent = `Three Percent: ${player.threePercent.toString()}`
                threePercentsmallForward.classList.add();
                smallForwardCard.appendChild(threePercentsmallForward);

                const twoPercentsmallForward = document.createElement("p");
                twoPercentsmallForward.textContent = `Two Percent: ${player.twoPercent.toString()}`
                twoPercentsmallForward.classList.add();
                smallForwardCard.appendChild(twoPercentsmallForward);


                const pointssmallForward = document.createElement("p");
                pointssmallForward.textContent = `Points : ${player.points.toString()}`
                pointssmallForward.classList.add();
                smallForwardCard.appendChild(pointssmallForward)

                case 'powerForward':
                const powerForwardCard = document.getElementById("powerForward-card")as HTMLDivElement;

                const namepowerForward = document.createElement("p");
                namepowerForward.textContent = player.playerName
                namepowerForward.classList.add();
                powerForwardCard.appendChild(namepowerForward)

                const threePercentpowerForward = document.createElement("p");
                threePercentpowerForward.textContent = `Three Percent: ${player.threePercent.toString()}`
                threePercentpowerForward.classList.add();
                powerForwardCard.appendChild(threePercentpowerForward);

                const twoPercentpowerForward = document.createElement("p");
                twoPercentpowerForward.textContent = `Two Percent: ${player.twoPercent.toString()}`
                twoPercentpowerForward.classList.add();
                powerForwardCard.appendChild(twoPercentpowerForward);


                const pointspowerForward = document.createElement("p");
                pointspowerForward.textContent = `Points : ${player.points.toString()}`
                pointspowerForward.classList.add();
                powerForwardCard.appendChild(pointspowerForward)

                case 'center':
                const centerCard = document.getElementById("center-card")as HTMLDivElement;

                const namecenter = document.createElement("p");
                namecenter.textContent = player.playerName
                namecenter.classList.add();
                centerCard.appendChild(namecenter)

                const threePercentcenter = document.createElement("p");
                threePercentcenter.textContent = `Three Percent: ${player.threePercent.toString()}`
                threePercentcenter.classList.add();
                centerCard.appendChild(threePercentcenter);

                const twoPercentcenter = document.createElement("p");
                twoPercentcenter.textContent = `Two Percent: ${player.twoPercent.toString()}`
                twoPercentcenter.classList.add();
                centerCard.appendChild(twoPercentcenter);


                const pointscenter = document.createElement("p");
                pointscenter.textContent = `Points : ${player.points.toString()}`
                pointscenter.classList.add();
                centerCard.appendChild(pointscenter)
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
      row.appendChild(playerCell);
  
      const positionCell = document.createElement("td");
      positionCell.textContent = player.position;
      row.appendChild(positionCell);
  
      const pointsCell = document.createElement("td");
      pointsCell.textContent = player.points.toString();
      row.appendChild(pointsCell);
  
      const twoPercentCell = document.createElement("td");
      twoPercentCell.textContent = player.twoPercent.toString();
      row.appendChild(twoPercentCell);
  
      const threePercentCell = document.createElement("td");
      threePercentCell.textContent = player.threePercent.toString();
      row.appendChild(threePercentCell);
  
      const actionCell = document.createElement("td");
  
      const createButton = document.createElement("button");
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


filterButton.addEventListener("click", filter)









 