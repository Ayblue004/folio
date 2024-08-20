import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'folio';
  bgNum: number = 1;
  bgLink: string = 'bg' + this.bgNum.toString()

  ngOnInit(): void {
    setInterval(()=>{
      if(this.bgNum < 8){
        this.bgNum = this.bgNum + 1
        this.bgLink = 'bg' + this.bgNum.toString()
      }else{
        this.bgNum = 1
        this.bgLink = 'bg' + this.bgNum.toString()
      }
    }, 5000)
  }

}
