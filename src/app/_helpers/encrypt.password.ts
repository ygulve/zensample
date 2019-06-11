import * as CryptoJS from 'crypto-js';

// custom validator to check that two fields match
export function EncryptPassword(password: string, userId:string) {
     //Encryption logic
     var iv = CryptoJS.enc.Utf8.parse(userId);
     var encryptedpwd = CryptoJS.AES.encrypt(password, userId, {
       keySize: 128 / 8,
       iv: iv,
       mode: CryptoJS.mode.CBC,
       padding: CryptoJS.pad.Pkcs7
     });
     
     return encryptedpwd;
}


export function DecryptPassword(password: string, userId:string) {

    //Decryption logic
        var key = CryptoJS.enc.Utf8.parse(userId);
        var iv = CryptoJS.enc.Utf8.parse(userId);
        var decrypted = CryptoJS.AES.decrypt(iv, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    
        return decrypted.toString(CryptoJS.enc.Utf8);
}



      