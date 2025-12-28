// star pattern
/*  

 *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  * 
 
 */
let n = 5
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += " * ";
    }
    console.log(row);
}

// left sided right angled star triangle pattern
/* 

 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  * 
 
*/
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i+1 ; j++) {
    row += " * ";
  }
  console.log(row);
}

// left sided right angled number triangle pattern
/*  
 1
 1  2
 1  2  3
 1  2  3  4
 1  2  3  4  5 */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i+1 ; j++) {
    row += ` ${j+1} `;
  }
  console.log(row);
}

// left sided right angled number triangle pattern
/*  
 1
 2  2
 3  3  3
 4  4  4  4
 5  5  5  5  5 */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i+1 ; j++) {
    row += ` ${i+1} `;
  }
  console.log(row);
}

// inverted left sided right angled number triangle pattern
/* 
 1  2  3  4  5
 1  2  3  4
 1  2  3
 1  2
 1 */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n-i ; j++) {
    row += ` ${j+1} `;
  }
  console.log(row);
}
// inverted left sided right angled star triangle pattern
/*

 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *
 
*/
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += " * ";
  }
  console.log(row);
}

//right sided right angled star triangle pattern
/* 
n = 5               spaces = n - ( stars )   stars = i + 1
i = 0  _  _  _  _  *    4 spaces                 1 star     
i = 1  _  _  _  *  *    3 spaces                 2 star
i = 2  _  _  *  *  *    2 spaces                 3 star 
i = 3  _  *  *  *  *    1 spaces                 4 star
i = 4  *  *  *  *  *    0 spaces                 5 star

 */
for (let i = 0; i < n; i++) {
  let row = "";
  //adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row += " * ";
  }
  console.log(row);
}

// left sided right angled binary triangle pattern
/* 
 1
 1  0
 1  0  1
 1  0  1  0
 1  0  1  0  1
  */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    if(j % 2 == 0 ){
      row += " 1 ";
    }else{
      row += " 0 ";
    }
  }
  console.log(row);
}
//m2
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += ` ${toggle} `;

    //switch the toggle
    if(toggle == 1 ){
      toggle = 0;
    }else{
      toggle = 1;
    }
  }
  console.log(row);
}

// left sided right angled binary triangle pattern
/* 
 1
 0  1
 0  1  0
 1  0  1  0
 1  0  1  0  1

*/
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += ` ${toggle} `;

    //switch the toggle
    if(toggle == 1 ){
      toggle = 0;
    }else{
      toggle = 1;
    }
  }
  console.log(row);
}

