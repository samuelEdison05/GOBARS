import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  intial:number = 0;
  totalPrice:number=0;
  addTocart:number[]=[];
  FinalCartValue:number=0;



imagesList :{image:string,price:number,name:string,qty:number}[] = [
  {image:'GOBARS_GREEN_BOX_4.png',price:50,name:'Cherry Charm',qty:0},
  {image:'GOBARS_GREEN_STICK_1.png',price:5,name:'Apple Abundance',qty:0},
  {image:'GOBARS_GREY_STICK_2.png',price:5,name:'Peach Passion',qty:0},
{image:'GOBARS_PINK_STICK_3.png',price:5,name:'Banana Bliss box',qty:0},
{image:'GOBARS_PINK_STICK_O_5.png',price:5,name:'Banana Bliss',qty:0},
{image:'GOBARS_RED_BOX_6.png',price:50,name:'Plum Perfection box',qty:0},
{image:'GOBARS_YELLOW_BOX_8.png',price:50,name:'Mango Magic box',qty:0},
{image:'GOBARS_YELLOW_STICK_9.png',price:5,name:'Mango Magic',qty:0}]


minusQty(index:number){
  if(this.imagesList[index].qty>0){
    this.imagesList[index].qty--;
  }
  
}
addQty(index:number){
   this.imagesList[index].qty++;
  }
  
  totalCartsum(){
    this.FinalCartValue = 0; 
    for(let i=0; i<this.imagesList.length; i++){
      this.FinalCartValue += this.imagesList[i].qty * this.imagesList[i].price;
    }
    console.log(this.FinalCartValue);
  }
  //  totalCartsum(){
  //  for(let i=0; i<this.addTocart.length; i++){
  //   this.FinalCartValue +=this.addTocart[i];
  // console.log(this.FinalCartValue)
  //  }
  // }
addToCart(qytF:number,priceF:number)
{

 this.addTocart.push(this.totalPrice = qytF*priceF);
 
  this.totalCartsum();
}
}


 
