const input = document.querySelector('input');
const displayTeam= document.getElementById('displayTeam');
const errorMsg= document.getElementById('error-msg');
const spinner = document.getElementById('spinner');
const searchPlayer = () => {
  if(input.value == ''){
    const h1 = document.createElement('h1');
    h1.innerHTML=`Nothing Found!`;
    h1.className = 'bg-danger p-4';
    errorMsg.textContent = '';
    errorMsg.appendChild(h1);
    console.log('empty')
  }
  else if(input.value.length > 0){
    spinner.style.display = 'block'
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input.value}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        showTeams(data.teams)
      }
      )
    }
  }
  
  const showTeams = (teams) =>{
  spinner.style.display = 'none'
  teams.forEach(team => {
    const div = document.createElement('div');
    div.className = 'col-lg-4 col-md-6 col-sm-6';
    div.innerHTML = `
    <div class="card px-4 py-3 shadow-sm" style="width: calc();">
    <img src="${team.strTeamBadge}" class="card-img-top mx-auto" max-width="100px"  alt="...">
    <div class="card-body">
    <h5 class="card-title">${team.strLeague}</h5>
    <p class="card-text">${team.strDescriptionEN.slice(0,70)}</p>
    <h5>Country : ${team.strCountry}</h5>
    <h5>Stedium : ${team.strStadium}</h5>
    </div>
    </div>
    `
    // displayTeam.textContent = '';
    displayTeam.appendChild(div);
    console.log(team)
    input.value = ''
    // displayTeam.textContent = ''
  })
  
}

