function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  };
  
  createDaysOfTheWeek();
  
  function creatArrayDaysList() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
  let dezDays =  document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index +=1) {
    
    let days = dezDaysList[index]; 
    let itemListDays = document.createElement('li');  
    itemListDays.innerHTML = days;
    
    if(days === 24 || days === 31) {
        itemListDays.className = 'day holiday';
    } else if (days === 4 || days === 11 || days === 18 ) {
        itemListDays.className += 'day friday';
    } else if (days === 25 ) {   
        itemListDays.className = 'day friday holiday';   
    } else {
        itemListDays.className = 'day';
    }
      dezDays.appendChild(itemListDays);
      
  }
}

creatArrayDaysList();

function creatButton(string) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = 'Feriados';
    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(button);


}
creatButton();

window.onload = function() {

let button = document.querySelector('#btn-holiday');
let holidays = document.querySelectorAll('.holiday');

button.addEventListener('click', function() {
for (let index = 0; index < holidays.length; index += 1) {
  holidays[index].style.backgroundColor = 'white';
}

});




}
  
  // Escreva seu código abaixo.