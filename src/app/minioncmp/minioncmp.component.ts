import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
@Component({
  selector: 'app-minioncmp',
  templateUrl: './minioncmp.component.html',
  styleUrls: ['./minioncmp.component.css']
})
export class MinioncmpComponent implements OnInit {

  oldConvo: string[] = ["Bello ar! ka am yok a minion! "]
  translation: any = ""
  msg: string = ""

  constructor(private pirateService: TranslateService) { }

  ngOnInit(): void { 
  }

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
        (await this.pirateService.getMinionTranslation(msg)).subscribe((data: any) => {

          if (this.pirateService.yodaErrMsg == "") {
            this.translation = data.contents.translated
            this.oldConvo.push(data.contents.translated)
          }
          else {
            this.oldConvo.push("ka am con a banana, yikai. Bye")
          }

        }, err => {

          console.log("Message from err")
          this.translation = "Sleepy, I am 😴💤"
          this.oldConvo.push("ka am con a banana, yikai. Bye ")

        })
      } else {

        this.oldConvo.push("ka am con a banana, yikai. Bye ")

      }
      
    }

  }
}


