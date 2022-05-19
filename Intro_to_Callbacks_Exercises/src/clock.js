class Clock {
    constructor () {
        // 1. create a Date object date 
        //objs are from the built in system time functions in js libary
        //2. store the hours, minutes , and seconds
        //3. call print time
        //4. schedule the tick @ 1 second intervals

        // this.currTime = new Date(); // if date is invoked with no params it gives the curr time of instansiation 
        // this one gets the current time right now
        // this.currentTime = new Date.now();

        this.currentTime = new Date();
        this.hours = this.currentTime.getHours();
        this.minutes = this.currentTime.getMinutes();
        this.seconds = this.currentTime.getSeconds();

        this.printTime();

        // setInterval(this._tick.bind(this), 1000);  why this what is this truly doing ?
        // setInterval(this.tick(),1000);

        // setInterval(() => {
            
        // }, );

        setInterval(this.tick.bind(this),1000);
        // does bind basically make its own instance of a function for an object to use? 
        //
    }

    printTime () {
        //format the time is HH::MM::SS
        //use console.log to print it
        let timeRightNow = [this.hours, this.minutes, this.seconds];
        console.log(timeRightNow.join(":"));
    }

    tick () {
        //1.increment the time by one second 
        //2. call print time 

        this.incrementSeconds();
        this.printTime();
    }


    incrementSeconds () {

        this.seconds += 1;

        if (this.seconds >= 60) {
            this.seconds = 0;
            this.incrementMinutes();
        }

    }


    incrementMinutes () {

        this.minutes += 1;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.incrementHours();
        }
    }

    incrementHours () {
        this.hours = (this.hours + 1) % 24;
        // theres 24 hours in a day so we need to reset the number hours if it 
        //meets/exceeds 24

    }



}

const clock = new Clock();
// console.log(clock);

