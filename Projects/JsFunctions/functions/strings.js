const reverse = (x) => x.split("").reverse().join("");
const checkPalindrome = (x) => reverse(x) == x;
const encrypt = (s, cipher) => {
    var encrypted_word = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'"
    for (const i in s) {
        var index = alphabet.indexOf(i)
        encrypted_word += cipher[index]
    }
    return encrypted_word
}
const decrypt = (s, cipher) => {
    var decrypted_word = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'"
    for (const i in s) {
        var index = cipher.indexOf(i)
        decrypted_word += alphabet[index]
    }
    return decrypted_word
}