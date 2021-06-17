function segitiga() {
  var x = 8;
  var y = 6;
  var a = (Math.pow(x,2));
  var b = (Math.pow(y,2));
  var c = a + b;
  var z = (Math.sqrt(c));
  console.log("Nilai AB : " + x);
  console.log("Nilai BC : " + y);
  console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : " + z +" cm");
}

segitiga()
