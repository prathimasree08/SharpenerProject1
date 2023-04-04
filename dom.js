/*   //EXAMINE THE DOCUMENT OBJECT


//console.dir(document);
console.dir(document.domain);
console.dir(document.URL);
console.dir(document.title);
//document.title=123;
console.dir(document.doctype);
console.dir(document.head);
console.dir(document.body);
console.dir(document.all);
console.dir(document.all[10]);
//document.all[10].textContent = 'Hello';
//document.all[10].textContent = 'Hi';
console.log(document.forms[0]);
console.log(document.links); 
console.log(document.images); */

// GETELEMENTBYID //


//var headerTitle = document.getElementById('header-title');
var headerTitle = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>'


// GETELEMENTBYCLASSNAME //

/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'Yellow';

for(var i = 0; i <items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
    
}*/

 //  ASSIGNMENT //
headerTitle.style.borderBottom = 'solid 3px #000';
var title=document.getElementById('add');
title.style.color='green';
title.style.fontWeight = 'bold';


     // ASSIGNMENT //
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor="green";
items[2].style.fontWeight='bold';


for(var i = 0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}


//  ASSIGNMENT //

var items = document.getElementsByClassName('list-group-item');
for(var i = 0; i <items.length;i++){
    items[i].style.backgroundColor = 'orange';
}

var li = document.getElementsByTagName('li');
for(var i = 0; i <li.length;i++){
    li[i].style.backgroundColor = 'orange';
}

