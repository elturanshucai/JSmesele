// 1-metndeki bosluqlarin sayini tapin
/*let metn = prompt('Metn daxil edin')
function getSpace(text) {
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == ' ') {
            count++
        }
    }
    return count
}
console.log(getSpace(metn))*/

//2-reqemlerin ortalamasi
/*function average(...array){
    let ortalama
    let cem = 0
    for(let element of array){
        if((typeof element)!="number"){
            console.log('Number tipinde olmayan element var')
            break
        }
        cem+=element
    }
    return ortalama=cem/array.length
}
console.log(average(1,2,3,4,5))*/

//3-cut ededler
/*function oddNumber(...array){
    let odd=[]
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            odd.push(array[i])
        }
    }
    return odd
}
console.log(oddNumber(2,52,652,654,65,353,343,62))*/

//4-ortalamadan boyuk ededler
/*function boyukEdedler(...array){
    let boyukEded=[]
    let ortalama
    let cem=0;
    for(let i=0; i<array.length; i++){
        if((typeof array[i])!="number"){
            console.log('Number tipinde olmayan eded var')
            break
        }
        cem+=array[i]
    }
    ortalama=cem/array.length
    for(let i=0; i<array.length; i++){
        if(array[i]>ortalama){
            boyukEded.push(array[i])
        }
    }
    return boyukEded
}
console.log(boyukEdedler(43,45,2,5,56,7,8))*/

//5-soz
/*function word(text){
    let array=text.split(' ')
    return array.join(',')
}
console.log(word('Elturan Murad Samxal'))*/

//6-tersine soz
/*function reverseWord(text){
    let array=text.split(' ')
    let array2=[]
    for(let i=array.length-1; i>=0; i--){
        array2.push(array[i])
    }
    return array2.join(' ')
}
console.log(reverseWord('Menim iyirmi yasim var'))*/

//7-ortaq sozler
/*function equalWords(text1, text2){
    let array1=text1.split(' ')
    let array2=text2.split(' ')
    let equal=[]
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i]==array2[j]){
                equal.push(array1[i])
            }
        }
    }
    return equal
}
console.log(equalWords('Messi Neymar Suarez Xavi Iniesta', 'Messi Rakitic Xavi Alba'))*/

//8-sozler ve herf
/*function startThisChar(words, char){
    let array=words.split(' ')
    let thisChar=[]
    for(let i=0; i<array.length; i++){
        if(array[i].charAt(0)==char){
            thisChar.push(array[i])
        }
    }
    return thisChar
}
console.log(startThisChar('Messi Marcelo Ronaldo Bale Isco Memphis Morata Costa', 'M'))*/

//9-herf sayi
/*function herfSayi(word){
    word=word.toLowerCase()
    for(let i=0; i<word.length; i++){
        let count=0
        for(let j=0; j<word.length; j++){
            if(word.charAt(i)==word.charAt(j)){
                count ++
            }
        }
        console.log(word.charAt(i)+' '+count)
    }
}
herfSayi('Alma')*/