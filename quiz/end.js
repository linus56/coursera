const x=document.getElementById('btn');
const y=document.getElementById('username')
const score=localStorage.getItem('maxscore');
const score_shoe=document.getElementById('score');
score_shoe.innerText=score;

let array=JSON.parse(localStorage.getItem('highscore'));
if(!array){
   localStorage.setItem('highscore',JSON.stringify([]));
   array=JSON.parse(localStorage.getItem('highscore'));
}
y.addEventListener('keyup',()=>{
   // if(x.nodeValue.length>=3)

    x.disabled=false;    
}
);
savedata=(e)=>{
    e.preventDefault();
    const save={
        'score':score,
        'username':y.value,
    }
   // array.push(save);
    x.disabled=true;
    /*array.sort((a,b)=>{
        return a.score>b.score;
    }*/
    let pos=binary_sort(array,score);
   
    if(pos==-1) array.unshift(save);
  else if(pos==-2) array.push(save);
    else array.splice(pos,0,save);

    localStorage.setItem('highscore',JSON.stringify(array));
    document.location.assign("table.html");
};
binary_sort=(a,value)=>{
    let i=0,j=a.length;
    if(j==0) return -2;
    
    if(a[0].score>value) return -1;
    if(i==j) return -2;
    if(a[j-1].score<value) return -2;
    while(i<=j){
        let mid=Math.floor((i+j)/2);
        if(a[mid].score<=value&&a[mid+1].score>=value) return mid+1;
        else if(a[mid].score>value) j=mid-1;
        else j=mid+1;
    }

};