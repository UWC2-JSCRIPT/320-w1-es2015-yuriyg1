// function Timer(seconds) {
//   this.seconds = seconds;
// }

// const Timer = (seconds) => {
//   this.seconds = seconds
// }
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
// Timer.prototype.start = function () {
  start() {
  //   var timerInterval = setInterval(function () {
    const timerInterval = setInterval(() => {
      // if (instance.seconds === 0) {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      } else {
      // instance.seconds -= 1;
        this.seconds -= 1;
        console.log(this.seconds);
      }
    }, 1000);
  }
}

// export default Timer;
module.exports = Timer;