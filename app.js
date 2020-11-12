var crypto = require("crypto");

function encryptV2(value) {
    var cipher = crypto.createCipher('aes-256-cbc', 'passphrase',);
    var encrypted = cipher.update(value, 'utf8', 'base64') + cipher.final('base64');
    return encrypted;
}

function decryptV2(encrypted) {
     var decipher = crypto.createDecipher('aes-256-cbc', 'passphrase');
    var plain = decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8');

    return plain;
}



var deneme =  encryptV2('Hello World');
console.log(deneme);
console.log(decryptV2(deneme));