const x=document.getElementById('select');
arr.forEach(value =>{
    const y=document.createElement('option');
const text=document.createTextNode(value.category);
y.appendChild(text);
y.value=value.id;
x.appendChild(y);
});
const v=Array.from(x);
v.forEach(opt=>{
    opt.addEventListener('click',()=>{
       document.getElementById('sel').classList.add('hidden');
       document.getElementById('loader').classList.remove('hidden');

        fe(opt.value);
    })
})