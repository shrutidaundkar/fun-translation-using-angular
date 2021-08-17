import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-piratecmp',
  templateUrl: './piratecmp.component.html',
  styleUrls: ['./piratecmp.component.css']
})
export class PiratecmpComponent implements OnInit {

  oldConvo: string[] = ["Ahoy kid, I'll warrant ye!  I will help ye become a Corsair.  Send message and  I will translate..🏴‍☠️"]
  translation: any = ""
  msg: string = ""

  constructor(private pirateService: TranslateService) { }

  ngOnInit(): void { }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async translate() {

    if (this.msg != "") {

      this.oldConvo.push(this.msg)   
      let msg = this.msg
      this.msg = "";     
      await this.delay(2000);
      
      if (this.pirateService.reqCount < 5) {
        (await this.pirateService.getPirateTranslation(msg)).subscribe((data: any) => {
          
          if (this.pirateService.yodaErrMsg == "") {
            this.translation = data.contents.translated
            this.oldConvo.push(data.contents.translated)
          }
          else {
            this.oldConvo.push("I be busy. Fire the cannons! Fire the cannons! th' Black Pearl be waitin'. Aarrr! Aarrr! Talk later. Bye  ")
          }
          
        }, err => {

          console.log("Message from err")
          this.translation = "I be busy. Fire the cannons! Fire the cannons! th' Black Pearl be waitin'. Aarrr! Aarrr! Talk later. Bye  "
          this.oldConvo.push("I be busy. Fire the cannons! Fire the cannons! th' Black Pearl be waitin'. Aarrr! Aarrr! Talk later. Bye  ")

        })
      } else {

        this.oldConvo.push("I be busy. Fire the cannons! Fire the cannons! th' Black Pearl be waitin'. Aarrr! Aarrr! Talk later. Bye  ")

      }
      
    }

  }
}


