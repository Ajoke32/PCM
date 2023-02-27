const form = document.getElementById('form');
let a =[];
let b =[];
const res = document.getElementById('res');
const err = document.getElementById('err');
const display = document.querySelector('img');


const fillArr = (arr,data)=>{
   if(data) {
      err.innerText ="";
      arr = data.split(',');
      return arr;
   }
   err.innerText ="invalid input";
}


const solve = (sign)=>{
   switch (sign){
      case "\\":{
         display.src="img/diff.png";
         return a.filter(item=>!b.includes(item));
      }
      case "U": {
         display.src="img/union.png";
         return [...a, ...b].filter((item, index, arr) => arr.indexOf(item) === index);
      }
      case "trig":{
         display.src="img/sym-diff.png";
         return [...a.filter(item=>!b.includes(item)),...b.filter(item=>!a.includes(item))];
      }
      case "U-rev":{
         display.src="img/inters.png";
         return a.filter(item=>b.includes(item));
      }
      default:return 'sign not exist';
   }
}

form.onsubmit = (e)=>{
   e.preventDefault();
   let formData = Object.fromEntries(new FormData(form));
   a = fillArr(a,formData['a']);
   b = fillArr(b,formData['b']);
   if(a&&b) {
      let result = solve(formData['op']);
      res.innerText = result.join(', ');
   }
}