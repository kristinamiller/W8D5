class Clock {
  constructor () {
    let date = new Date(); 
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    console.clear();
    this.printTime();
    setInterval(this._tick.bind(this), 1000); 
  }

    
  printTime() {

    if (this.seconds < 10 && this.minutes < 10) {
      console.log(`${this.hours}:0${this.minutes}:0${this.seconds}`);
    }
    else if (this.seconds < 10) {
      console.log(`${this.hours}:${this.minutes}:0${this.seconds}`);
    }
    else if (this.minutes < 10) {
      console.log(`${this.hours}:0${this.minutes}:${this.seconds}`);
    }
    else if (this.hours < 10 ) {
      console.log(`0${this.hours}:${this.minutes}:${this.seconds}`);
    }
    else {
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

  }

  _tick() {

    this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    console.clear();
    this.printTime();
    
    // callback = _tick?
    // delay = 1000
    // args = [1,2,3,4,5,6,7,8,9,0]
  }


}

const clock = new Clock();