function ln(sen){
    let sentence_length = sen.trim().split(' ').join('').length;
    let vowel = Array.from(sen)
    let vowel_total = 0
    let count_vowel = vowel.forEach(item => {
        let arr = ['a','e','i','o','u','y']
        if(arr.includes(item)){
            vowel_total += 1 
        }

    })
    return [sentence_length, vowel_total]
    
}
console.log(ln("fasdfasdf fasdf sda fasd dfsa."))