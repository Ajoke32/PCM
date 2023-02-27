const form = document.getElementById('form');
let aSet =[];
let bSet =[];

const display = document.querySelector('.graphics');

const fillArr = (arr,data)=>{

    if(data) {
        arr.push('\u2205');
        return [...arr,...data.split(',')];
    }
    return false;
}
const appendRow = (table,arr)=>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText ='b/a';
    tr.style.backgroundColor='#edf2fb';
    tr.append(td);
    for(let s of arr){
        let tdArr = document.createElement('td');
        tdArr.innerText = s;
        tr.append(tdArr);
        table.append(tr);
    }
};

const buildTable = (a,b) =>{
    let table = document.createElement('table');
    appendRow(table,a);
    for(let i of b){
     let tr  = document.createElement('tr');
     let tda = document.createElement('td');
     tda.innerText = i;
     tda.style.backgroundColor = '#edf2fb';
     tr.append(tda);
        for(let j of a) {
            let td = document.createElement('td');
            if (Number(i) < Number(j)) {
                td.innerText = '1';
            } else {
                td.innerText = '0';
            }
            tr.append(td);
        }
        table.append(tr);
    }

    let isExist = display.querySelector('table');
    if(isExist){
        isExist.remove();
    }
    display.append(table);
    aSet=[];
    bSet=[];
}


form.onsubmit = (e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(form));
    aSet = fillArr(aSet,formData['a']);
    bSet = fillArr(bSet,formData['b']);
    buildTable(aSet,bSet);
}