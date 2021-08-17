import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-yodacmp',
  templateUrl: './yodacmp.component.html',
  styleUrls: ['./yodacmp.component.css']
})
export class YodacmpComponent implements OnInit {
  
  oldConvo: string[] = ["Hi! Baby yoda, I am. Your message into yoda, I will translate. 🥰"]
  translation: any = ""
  msg: string = ""

  constructor(private yodaService: TranslateService) { }

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
      
      if (this.yodaService.reqCount < 5) {
        (await this.yodaService.getYodaTranslation(msg)).subscribe((data: any) => {
          
          if (this.yodaService.yodaErrMsg == "") {
            this.translation = data.contents.translated
            this.oldConvo.push(data.contents.translated)
          }
          else {
            this.oldConvo.push("Sleepy, I am 😴💤")
          }
          
        }, err => {

          console.log("Message from err")
          this.translation = "Sleepy, I am 😴💤"
          this.oldConvo.push("Sleepy, I am. Nap now😴💤, I take. Later, help.")

        })
      } else {

        this.oldConvo.push("Sleepy, I am 😴💤 ")

      }
    
    }

  }
}

