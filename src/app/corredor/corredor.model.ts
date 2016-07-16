export class Corredor{
    id:number;
    name: string;
    hours: number;
    minutes: number;
    seconds: number;
    centiSeconds: number;

    constructor(name){
        this.name = name;
        this.id = Math.random()*100;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.centiSeconds = 0;
    }

    getTimeInSeconds(){
        let secs = 0;
        if(this.hours){
            secs += this.hours * 60 * 60; 
        }
        return secs + this.minutes*60+this.seconds;
    }


}

interface Time{
    
}