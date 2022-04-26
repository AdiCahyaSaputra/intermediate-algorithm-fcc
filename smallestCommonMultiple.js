function smallestCommons(arr) {
  // urutin descending biat tydac bingung
  let [max, min] = arr.sort((min, max) => max - min);
  let kpk = max;
    
  // increment terus si max nya sampai si min == max
  for(let i = min; i < max; i++) {
    // bisa habis dibagi antar kedua dua nya dari batas min sampai max (0 - 5)
    // jika masih ada di antara min - max yang tidak habis dibagi (max % min !== 0) maka increment max nya dan reset min nya lalu lanjutin loop nya
    if(kpk % i !== 0) {
      kpk += max; // increment max nya 
      i = min - 1; // reset ke 0
    } else if(i == max) { // i == max atau loop nya sudah mencapai batas max yg ditentukan (berarti kpk nya udh ketemu)
      return kpk;
    }
  }
  
  return kpk;
  
}

/**
*
* Smallest Multiple Commons
* n = n, n+n, (n+n)+n, ...
* x = x, x+x, (x+x)+x, ...
*
* if multiple commons of n === multiple commons of x : getSmallestOf(multipleCommons)
*
* 3 = 3, 6, 9, 12, 15 ←
* 5 = 5, 10, 15 ←
*
* → 15 ←
*
**/

console.log(smallestCommons([1, 5]));
// 60


console.log(smallestCommons([5, 1]));
// 60

console.log(smallestCommons([2, 10]));
// 2520

console.log(smallestCommons([1, 13]));
// 360360

console.log(smallestCommons([23, 18]));
// 6056820
