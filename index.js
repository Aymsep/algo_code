function ln(sen){
    let sentence_length = sen.length;
    let word_num = Array.from(sen.split(" ")).length
    let vowel = Array.from(sen)
    let vowel_total = 0
    let count_vowel = vowel.forEach(item => {
        let arr = ['a','e','i','o','u','y']
        if(arr.includes(item)){
            vowel_total += 1 
        }

    })
    return [sentence_length, word_num, vowel_total]
}
console.log(ln('lfdjsl fldsjf flkdsjf lkjfsd') )