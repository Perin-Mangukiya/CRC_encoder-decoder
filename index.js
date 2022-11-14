let data = "";
let key = "";
let codeword = "";

function handleClickEncode() {
  data = document.getElementById("dataword").value;
  key = document.getElementById("key").value;

  encodeData();
  document.getElementById("output").style.display="table";  
}

function handleClickDecode() {
  codeword = document.getElementById("codeword").value;
  key = document.getElementById("decodeKey").value;

  decodeData();
  document.getElementById("output").style.display="table";
}

function xor1(a, b) {
  let result = "";

  let n = b.length;

  for (let i = 1; i < n; i++) {
    if (a[i] == b[i]) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

// Performs Modulo-2 division
function mod2div(divident, divisor) {
  let pick = divisor.length;

  let tmp = divident.substr(0, pick);

  let n = divident.length;
  let str = "";
  while (pick < n) {
    if (tmp[0] == "1") {
      tmp = xor1(divisor, tmp) + divident[pick];
    } else {
      for (let i = 0; i < pick; i++) {
        str = str.concat("0");
      }
      tmp = xor1(str, tmp) + divident[pick];
    }

    pick += 1;
  }

  if (tmp[0] == "1") {
    tmp = xor1(divisor, tmp);
  } else {
    for (let i = 0; i < pick; i++) {
      str = str.concat("0");
    }
    tmp = xor1(str, tmp);
  }
  return tmp;
}

function decodeData() {
  let remainder = mod2div(codeword, key);
  data = codeword.substring(0, codeword.length - remainder.length);

  console.log("decode syndrome " + remainder);
  document.getElementById("decode-remainder").innerHTML = "Remainder after decoding";
  document.getElementById("decode-remainder-ans").innerHTML = remainder;

  document.getElementById("Dataword").innerHTML = "Dataword";
  document.getElementById("Dataword-ans").innerHTML = data;

  document.getElementById("size-dataword").innerHTML = "Size of Dataword";
  document.getElementById("size-dataword-ans").innerHTML = data.length;

  document.getElementById("Dataword").innerHTML = "Dataword";
  document.getElementById("Dataword-ans").innerHTML = data;

  document.getElementById("size-dataword").innerHTML = "Size of Dataword";
  document.getElementById("size-dataword-ans").innerHTML = data.length;


  document.getElementById("Codeword").innerHTML = "Codeword";
  document.getElementById("Codeword-ans").innerHTML = codeword;

  document.getElementById("size-codeword").innerHTML = "Size of Codeword";
  document.getElementById("size-codeword-ans").innerHTML = codeword.length;

  document.getElementById("size-remainder").innerHTML = "Size of Remainder";
  document.getElementById("size-remainder-ans").innerHTML = remainder.length;

  document.getElementById("size-divisor").innerHTML = "Size of Divisor";
  document.getElementById("size-divisor-ans").innerHTML = key.length;

  document.getElementById("degree").innerHTML = "Degree of Codeword Polynomial";
  document.getElementById("degree-ans").innerHTML = codeword.length-1;

}

// module.exports.encodeData =

function encodeData() {
  let l_key = key.length - 1;

  let str = "";
  for (let i = 0; i < l_key; i++) {
    str = str.concat("0");
  }
  let appended_data = data.concat(str);
  console.log("appended data " + appended_data);
  let remainder = mod2div(appended_data, key);
  document.getElementById("encode-remainder").innerHTML = "Remainder after encoding";
  document.getElementById("encode-remainder-ans").innerHTML = remainder;
  console.log("encode syndrome " + remainder);

  codeword = data + remainder;



  document.getElementById("Dataword").innerHTML = "Dataword";
  document.getElementById("Dataword-ans").innerHTML = data;

  document.getElementById("size-dataword").innerHTML = "Size of Dataword";
  document.getElementById("size-dataword-ans").innerHTML = data.length;


  document.getElementById("Codeword").innerHTML = "Codeword";
  document.getElementById("Codeword-ans").innerHTML = codeword;

  document.getElementById("size-codeword").innerHTML = "Size of Codeword";
  document.getElementById("size-codeword-ans").innerHTML = codeword.length;

  document.getElementById("size-remainder").innerHTML = "Size of Remainder";
  document.getElementById("size-remainder-ans").innerHTML = remainder.length;

  document.getElementById("size-divisor").innerHTML = "Size of Divisor";
  document.getElementById("size-divisor-ans").innerHTML = key.length;

  document.getElementById("degree").innerHTML = "Degree of Dataword Polynomial";
  document.getElementById("degree-ans").innerHTML = data.length-1;
}
