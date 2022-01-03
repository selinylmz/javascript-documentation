const coder_name="Selin";
const message=`Merhaba, ${coder_name}`; //Template Literals (Sablon dizileri)
console.log(message);

const unit_price=100; //birim fiyat
const unit=3;//adet
const currency_unit="TL"//para birimi
const total_price=`Toplam fiyat ${unit_price*unit}${currency_unit} `;
console.log(total_price);

//Shorthand Property Names(Kisayol obje anahtari isimleri)
const name="Mehmet";
const ages=35;
//const user_object={name:name,ages:age}; //eger degisken isimleri ayniysa shorthand yazilir.
const user_object={name,age};
console.log(user_object);

//Arrow Functions 
console.log(total(3,5)); 
function total(number1,number2){ //function keywordu ile tanimlarsak usstte de cagirabilirz ama arrow function tanimlandiktan sonra cagirilir.
    return number1+number2;
}

const totalArrow=(number1,number2)=>number1+number2;
console.log(totalArrow(3,5));