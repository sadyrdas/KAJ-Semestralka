//This code represents Timer with function start, stop, restart and setTime
class Timer {
    constructor(selectedTime = 600) {
      this.totalSeconds = selectedTime;
      this.seconds = selectedTime % 60;
      this.minutes = Math.floor(selectedTime / 60);
      this.intervalId = null;
      this.timerElement = document.getElementById("timer");
    }
  
    start() {
      this.intervalId = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.intervalId);
            return;
          }
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
        let timeString = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
        this.timerElement.textContent = timeString;
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
    }
  
    restart(selectedTime) {
      this.minutes = Math.floor(selectedTime / 60);
      this.seconds = selectedTime % 60;
      let timeString = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
      this.timerElement.textContent = timeString;
      clearInterval(this.intervalId);
    }

    changeTime(selectedTime) {
      this.totalSeconds = selectedTime;
      this.seconds = selectedTime % 60;
      this.minutes = Math.floor(selectedTime / 60);
      let timeString = `${this.minutes
        .toString()
        .padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
      this.timerElement.textContent = timeString;
      clearInterval(this.intervalId);
    }
  }
  
  
  const timeSelect = document.getElementById("time-select");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const restartButton = document.getElementById("restart");
  const saveSettingsButton = document.getElementById("save-settings-button")

  const timer = new Timer(parseInt(timeSelect.value, 10));

  startButton.addEventListener("click", () => timer.start());
  stopButton.addEventListener("click", () => timer.stop());
  restartButton.addEventListener("click", () =>{ 
    const selectedTime = parseInt(timeSelect.value, 10);
    timer.restart(selectedTime)});


  saveSettingsButton.addEventListener("click", () => {
    const selectedTime = parseInt(timeSelect.value, 10);
    timer.changeTime(selectedTime);
  });
  
  


