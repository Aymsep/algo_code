function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    console.log(ps);
  }
dot_product([1, 2, 3],[1, 2, 3])

function isOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        if (dot_product(vectors[i], vectors[j]) !== 0) {
          return false;
        }
      }
    }
    return true;
  }
console.log(isOrthogonal([8,5]))