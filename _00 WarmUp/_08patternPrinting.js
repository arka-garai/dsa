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
// rectangle pattern
/* 
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
*/ 
let b = 4
let l = 7
for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j < l; j++) {
    row += " * ";
  }
  console.log(row);
}
//hollow rectangle
/* 0  1  2  3  4  5  6
0  *  *  *  *  *  *  *
1  *                 *
2  *                 *
3  *  *  *  *  *  *  *
*/ 
// let b = 4;
// let l = 7;
for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j < l; j++) {
    if(i == 0 || i == b-1 || j == 0 || j == l-1) {
      row += " * ";
    }else{
      row += "   ";
    }
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
// left sided right angled character triangle pattern
/* 
A
A B
A B C
A B C D
A B C D E*/
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += ` ${String.fromCharCode(65 + j)} ` ;
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

//butterfly pattern
/* n = 4
  0 1 2 3 4 5 6 7   stars = i + 1      spaces =  2 * (n - (i + 1))  stars = i + 1
0 * - - - - - - *     1 star             6 (2 x 3)spaces             1 star
1 * * - - - - * *     2 star             4 (2 x 2)spaces             2 star
2 * * * - - * * *     3 star             2 (2 x 1)spaces             3 star
3 * * * * * * * *     4 star             0 (2 x 0)spaces             4 star
  * * * * * * * *
  * * * - - * * *
  * * - - - - * *
  * - - - - - - *

 */
//upper half
for (let i = 0; i < n; i++) {
  let row = "";
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row += " * ";
  }
  //adding empty spaces
  for (let j = 0; j < 2 * (n - (i + 1)); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row += " * ";
  }
  console.log(row);
}
//lower half
for (let i = n-1; i >= 0; i--) {
  let row = "";
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row += " * ";
  }
  //adding empty spaces
  for (let j = 0; j < 2 * (n - (i + 1)); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row += " * ";
  }
  console.log(row);
}

//solid rhombus
/*
n=5                                  (n - (i + 1))             (n)
i = 0 _  _  _  _  *  *  *  *  *      (5 - (0 + 1)) 4 spaces    5 stars
i = 1 _  _  _  *  *  *  *  *
i = 2 _  _  *  *  *  *  *
i = 3 _  *  *  *  *  *
i = 4 *  *  *  *  *

*/
for (let i = 0; i < n; i++) {
  let row = "";
  //adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < n; k++) {
    row += " * ";
  }
  console.log(row);
}

//hollow rhombus
/* 
             *  *  *  *  *
          *           *
       *           *
    *           *
 *  *  *  *  *
*/
 
for (let i = 0; i < n; i++) {
  let row = "";
  //adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < n; k++) {
    if(i == 0 || i == n-1 || k == 0 || k == n-1) {
      row += " * ";
    }else{
      row += "   ";
    }
  }
  console.log(row);
}

//diamond
/* 
0 _  _  _  _  *                      spaces = n - (i + 1)  stars = 2 * i + 1
1 _  _  _  *  *  *
2 _  _  *  *  *  *  *
3 _  *  *  *  *  *  *  *
4 *  *  *  *  *  *  *  *  *
  *  *  *  *  *  *  *  *  *
     *  *  *  *  *  *  *
        *  *  *  *  *
           *  *  *
              *
*/
//upper part
for (let i = 0; i < n; i++) {
  let row = "";
  //adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < 2 * i + 1; k++) {
      row += " * ";   
  }
  console.log(row);
}
//lower part
for (let i = n-1; i >= 0; i--) {
  let row = "";
  //adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row += "   ";
  }
  //adding stars
  for (let k = 0; k < 2 * i + 1; k++) {
      row += " * ";   
  }
  console.log(row);
}