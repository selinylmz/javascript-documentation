const coder_name="Selin";
const message=`Merhaba, ${coder_name}`; //Template Literals (Sablon dizileri)
console.log(message);

const unit_price=100; //birim fiyat
const unit=3;//adet
const currency_unit="TL"//para birimi

const total_price=`Toplam fiyat ${unit_price*unit}${currency_unit} `;

console.log(total_price);