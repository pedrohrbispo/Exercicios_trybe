// Adiciona as opções dos estados no 'select'
let select = document.querySelector('#states-of-brasil');
let statesOfBrasil = {
' ' : ' ',
'AC': 'Acre',
'AL': 'Alagoas',
'AP': 'Amapá',
'AM': 'Amazonas',
'BA': 'Bahia',
'CE': 'Ceará',
'DF': 'Distrito Federal',
'ES': 'Espírito Santo',
'GO': 'Goías',
'MA': 'Maranhão',
'MT': 'Mato Grosso',
'MS': 'Mato Grosso do Sul',
'MG': 'Minas Gerais',
'PA': 'Pará',
'PB': 'Paraíba',
'PR': 'Paraná',
'PE': 'Pernambuco',
'PI': 'Piauí',
'RJ': 'Rio de Janeiro',
'RN': 'Rio Grande do Norte',
'RS': 'Rio Grande do Sul',
'RO': 'Rondônia',
'RR': 'Roraíma',
'SC': 'Santa Catarina',
'SP': 'São Paulo',
'SE': 'Sergipe',
'TO': 'Tocantins'
};
for (let key in statesOfBrasil) {
    let options = document.createElement('option');
    options.value = key;
    options.innerHTML = statesOfBrasil[key];
    select.appendChild(options);
}
window.onload = function() {
 let buttomOfSubimition = document.querySelector('#submit-button');
 buttomOfSubimition.addEventListener('click',function(event) {
//validação da data
event.preventDefault();
let date = document.querySelector('#contract-date').value;
let day = date[8] + date[9];
let month = date[5] + date[6];
let year = date[0] + date[1] + date[2] + date[3];
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);
  if(isDayValid(day) && isMonthValid(month) && isYearValid(year)) {
    let div = putTheCurriculumInTheDiv();  
    let body = document.querySelector('body');
    body.appendChild(div);
  }
  else {
      alert('Data inválida');
  }

 });  
 let resetButton = document.querySelector('#reset-button');
 resetButton.addEventListener('click', function() {
     //limpar a div do curriculo
     deleteDiv();
 });
}
//função que verifica se o dia é valido
function isDayValid(day) {
    return (day > 0 && day <= 31);
}
function isMonthValid(month) {
    return (month > 0 && month <= 12);
}
function isYearValid(year) {
    return year > 0;
}
function putTheCurriculumInTheDiv() {
    let arrayIds = ['full-name', 'email', 'cpf', 'address', 'city', 'states-of-brasil', 'house', 'apartment', 'curriculum-summary', 'role', 'role-description', 'contract-date'];
    const urlParametersString = window.location.search;
    const urlParams = new URLSearchParams(urlParametersString);
    let div = createDiv();
    for (let index = 0; index <= arrayIds.length; index += 1) {
        div.innerHTML += urlParams.get(arrayIds[index]);
        div.innerHTML += '<br>';
    }
    return div;
}
function createDiv() {
    let div =  document.createElement('div');
    div.id = 'curriculumWrited';
    return div;
}
function deleteDiv() {
    let curriculumDiv = document.querySelector('#curriculumWrited');
    curriculumDiv.remove();
}