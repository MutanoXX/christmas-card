// Funcoes para criar efeito de neve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '*';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
  document.getElementById('snow').appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 5000);
}

const snowToggle = document.getElementById('snow-toggle');
let snowInterval;

function toggleSnow() {
  if (snowToggle.checked) {
    snowInterval = setInterval(createSnowflake, 100);
  } else {
    clearInterval(snowInterval);
  }
}

toggleSnow();
snowToggle.addEventListener('change', toggleSnow);

const fontSizeInput = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');

fontSizeInput.addEventListener('input', (e) => {
  fontSizeValue.textContent = e.target.value + 'px';
  document.getElementById('greeting').style.fontSize = e.target.value + 'px';
});

const colorPicker = document.getElementById('color-picker');
const bgColorPicker = document.getElementById('bg-color-picker');
const textColorPicker = document.getElementById('text-color-picker');
const cardElement = document.querySelector('.card');
const greetingElement = document.getElementById('greeting');
const messageElement = document.getElementById('message');

colorPicker.addEventListener('input', (e) => {
  greetingElement.style.color = e.target.value;
});

bgColorPicker.addEventListener('input', (e) => {
  cardElement.style.backgroundColor = e.target.value;
});

textColorPicker.addEventListener('input', (e) => {
  messageElement.style.color = e.target.value;
});

const greetingInput = document.getElementById('greeting-input');
const messageInput = document.getElementById('message-input');

greetingInput.addEventListener('input', (e) => {
  greetingElement.textContent = e.target.value;
});

messageInput.addEventListener('input', (e) => {
  messageElement.textContent = e.target.value;
});

const applyBtn = document.getElementById('apply-btn');
const resetBtn = document.getElementById('reset-btn');

applyBtn.addEventListener('click', () => {
  const customizations = {
    greeting: greetingElement.textContent,
    message: messageElement.textContent,
    primaryColor: colorPicker.value,
    bgColor: bgColorPicker.value,
    textColor: textColorPicker.value,
    fontSize: fontSizeInput.value,
    snowEnabled: snowToggle.checked
  };
  localStorage.setItem('christmasCardCustomizations', JSON.stringify(customizations));
  alert('Personalizacoes salvas com sucesso!');
});

resetBtn.addEventListener('click', () => {
  greetingInput.value = 'Feliz Natal!';
  messageInput.value = 'Uma noite magica cheia de alegria e amor!';
  colorPicker.value = '#d32f2f';
  bgColorPicker.value = '#0d47a1';
  textColorPicker.value = '#ffffff';
  fontSizeInput.value = '48';
  snowToggle.checked = true;
  
  greetingElement.textContent = 'Feliz Natal!';
  messageElement.textContent = 'Uma noite magica cheia de alegria e amor!';
  greetingElement.style.color = '#d32f2f';
  cardElement.style.backgroundColor = '';
  messageElement.style.color = '#333';
  greetingElement.style.fontSize = '48px';
  fontSizeValue.textContent = '48px';
  
  toggleSnow();
  localStorage.removeItem('christmasCardCustomizations');
  alert('Tudo resetado!');
});

window.addEventListener('load', () => {
  const saved = localStorage.getItem('christmasCardCustomizations');
  if (saved) {
    const customizations = JSON.parse(saved);
    greetingInput.value = customizations.greeting;
    messageInput.value = customizations.message;
    colorPicker.value = customizations.primaryColor;
    bgColorPicker.value = customizations.bgColor;
    textColorPicker.value = customizations.textColor;
    fontSizeInput.value = customizations.fontSize;
    snowToggle.checked = customizations.snowEnabled;
    
    greetingElement.textContent = customizations.greeting;
    messageElement.textContent = customizations.message;
    greetingElement.style.color = customizations.primaryColor;
    cardElement.style.backgroundColor = customizations.bgColor;
    messageElement.style.color = customizations.textColor;
    greetingElement.style.fontSize = customizations.fontSize + 'px';
    fontSizeValue.textContent = customizations.fontSize + 'px';
    toggleSnow();
  }
});

applyBtn.addEventListener('click', function() {
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 100);
});

resetBtn.addEventListener('click', function() {
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 100);
});

console.log('Cartao de Natal Interativo Carregado!');
