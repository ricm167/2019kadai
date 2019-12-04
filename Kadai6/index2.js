const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

console.log('1')
try{
    console.log(JSON.parse(str1))
} catch (err) {
    console.log('error')
    console.log(err)
    //""で正しく囲まれていないという理由でパースできない
}
console.log('2')
try{
    console.log(JSON.parse(str2))
} catch (err) {
    console.log('error')
    console.log(err)
    //''がJSONに適さない理由でパースできない
}
console.log('3')
try{
    console.log(JSON.parse(str3))
} catch (err) {
    console.log('error')
    console.log(err)
    //パースできている
}
console.log('4')
try{
    console.log(JSON.parse(str4))
} catch (err) {
  console.log('error')
    console.log(err)
  //定義されていないためパースできない
}
console.log('5')
try{
    console.log(JSON.parse(str5))
} catch (err) {
  console.log('error')
    console.log(err)    //パースできている
}
console.log('6')
try{
    console.log(JSON.parse(str6))
} catch (err) {
  console.log('error')
    console.log(err)    //''がJSONに適さないためパースできない
}