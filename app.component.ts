import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 6";
  timeLeft: number = 3610;
  interval;
  remainingMin: String = "00";
  remainingSec: String = "00";
  remainingHr: String = "00";
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 1;

        if (this.timeLeft / 3600 > 0) {
          let hour: number = this.timeLeft / 3600;
          let displayHRStr: String = parseInt(hour.toString()).toString();
          this.remainingHr = hour < 10 ? "0" + displayHRStr : displayHRStr;
        }

        let minutes: number = this.timeLeft / 60;
        let displayMinStr: String = parseInt(
          (minutes % 60).toString()
        ).toString();
        this.remainingMin =
          minutes % 60 < 10 ? "0" + displayMinStr : displayMinStr;

        let seconds: number = this.timeLeft % 60;
        let displaySecStr: String = parseInt(seconds.toString()).toString();
        this.remainingSec = seconds < 10 ? "0" + displaySecStr : displaySecStr;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
