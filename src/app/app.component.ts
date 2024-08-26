import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'folio';
  bgNum: number = 2;
  bgNum2: number = 0;
  bgLink: string = 'bg' + this.bgNum.toString();
  bgLink2: string = 'bg' + this.bgNum2.toString();
  displayed: 1 | 2 = 1;
  opacity: number = 1;

  ngOnInit(): void {

    function fadeOut(ele: string){
      let opacity = 1
      const fade = setInterval(()=>{
        let bg1: any = document.getElementsByClassName(ele)[0];
        if(opacity > 0){
          opacity = opacity - 0.01
          bg1.style.opacity = opacity
        }
      },20)
    }

    function fadeIn(ele: any){
      let opacity = 0
      const fade = setInterval(()=>{
        let bg1: any = document.getElementsByClassName(ele)[0];
        if(opacity < 1){
          opacity = opacity + 0.01
          bg1.style.opacity = opacity
        }
      },20)
    }

    setInterval(()=>{
      if(this.bgNum < 7){
        let img1: any = document.getElementsByClassName('img1')[0];
        let img2:any = document.getElementsByClassName('img2')[0];
        if(this.displayed == 1){
          this.bgNum2 = this.bgNum2 + 1
          this.bgLink2 = 'bg' + this.bgNum2.toString();
          setTimeout(()=>{
            fadeOut('img1')
            fadeIn('img2')
            this.displayed = 2
          }, 5000)
        }else if (this.displayed == 2){
          this.bgNum = this.bgNum + 1
          this.bgLink = 'bg' + this.bgNum.toString();
          setTimeout(()=>{
            fadeOut('img2')
            fadeIn('img1')
            this.displayed = 1
          }, 5000)
        }
      }else{
        this.bgNum = 2;
        this.bgNum2 = 0
      }
    }, 8000)
  }

}
