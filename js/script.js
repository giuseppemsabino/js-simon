
    document.addEventListener('DOMContentLoaded', function () {
        const countdownElement = document.querySelector('.countDown');
        const randomNumberElements = [
          document.getElementById('randomNumber1'),
          document.getElementById('randomNumber2'),
          document.getElementById('randomNumber3'),
          document.getElementById('randomNumber4'),
          document.getElementById('randomNumber5')
        ];
        const inputElements = [
          document.getElementById('input1'),
          document.getElementById('input2'),
          document.getElementById('input3'),
          document.getElementById('input4'),
          document.getElementById('input5')
        ];
        const goButton = document.getElementById('goButton');
        const correctNumberElement = document.getElementById('correctNumber');
        
        let randomNumbers = [];
        let timer = 30;
      
        // Funzione per generare numeri casuali e visualizzarli nei tag <p>
        function generateRandomNumbers() {
          randomNumbers = [];
          randomNumberElements.forEach((element, index) => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            randomNumbers.push(randomNumber);
            element.textContent = randomNumber;
          });
        }
      
        // Funzione per avviare il conto alla rovescia
        function startCountdown() {
          const countdown = setInterval(() => {
            countdownElement.textContent = timer;
            timer--;
      
            if (timer < 0) {
              clearInterval(countdown);
              countdownElement.textContent = "Tempo scaduto!";
              hideNumbersShowInputs();
            }
          }, 1000);
        }
      
        
      
        // Generazione dei numeri casuali all'inizio
        generateRandomNumbers();
        
        // Inizia il conto alla rovescia
        startCountdown();
      
        // Aggiungi il listener per il bottone "Conferma"
        goButton.addEventListener('click', checkUserInputs);
      });
      
