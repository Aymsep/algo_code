function ln(arr1,arr2){
    const a = new Set([...arr1,...arr2])
    const sum = [...a].reduce((total,item)=>{
        return total + item
    },0)
    console.log(a)
    console.log(sum) 
}
ln([1,2,3,3],[1,2,3,5,4])

function sm(arr1, arr2) {
    const a = [...arr1,...arr2]
    let set = new Set(a)
    let nwarr = a.filter((item,index) => a.indexOf(item) !== index);
    let sum = nwarr.reduce((sum, item) => sum + item)
    console.log(sum)

    
}
sm([1,2,3,4,5,1,3],[1,2,3])