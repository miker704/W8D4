class Clock {

    constructor() {
        this.currentTime = new Date();
        this.hours = this.currentTime.getHours();
        this.minutes = this.currentTime.getMinutes();
        this.seconds = this.currentTime.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    };

    printTime() {
        let timeNow = [this.hours, this.minutes, this.seconds].join(":");
        console.log(timeNow);
    };

    _tick() {
        this._incrementSeconds();
        this.printTime();
    };

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
        console.log()
    };

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    };

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    };

    timeformat() {
        
    }

}

const clock = new Clock();