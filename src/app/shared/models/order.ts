import { ShoppingCart } from './shopping-cart';

export class Order{
    datePlaced;
    items:any;

    constructor(public userId:string, public shipping:any, shoppingCart:ShoppingCart){
        this.datePlaced = new Date().getTime();

         this.items =  shoppingCart.items.map(item =>{
            return {
              product : {
                title: item.product.title,
                image:item.product.image,
                price:item.product.price
              },
              quantity:item.quantity,
              totalPrice:item.totalPrice
              
            }
          })

    }
}