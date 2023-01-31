const st_1 = [3, 1, 7, 9]
const st_2 = [2, 4, 1, 9, 3]
let se = [...st_1, ...st_2]
let duplicate_num = []
let nono_dup = []
let n = false
for(let i = 0; i < st_1.length; i++) {
  for(let j = st_2.length; j >= 0 ; j--) {
    if(st_1[i]==st_2[j]) {
      duplicate_num.push(st_2[j])
      break;
    }
  }
}




for(let i = 0; i < se.length; i++) {
  flag = false
  for(let j =0; j < duplicate_num.length; j++) {
    if(se[i]==duplicate_num[j]){
      flag = true
      break;
    }
  }
  if(!flag){
    nono_dup.push(se[i])
  }
}


