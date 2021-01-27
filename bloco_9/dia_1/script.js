const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    let timeout = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), timeout);
}


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo