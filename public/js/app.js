console.log("app.js working");
const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const msg1=document.querySelector('#para-1')
const msg2=document.querySelector('#para-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(search.value);
    const location=search.value;
    const url='http://localhost:3000/weather?address='+location
    msg2.textContent='Loading forecast...'
    msg1.textContent=''
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log('Data:',data);
            if(data.error){
                console.log('my error:',data.error);
                msg2.textContent=data.error;
            }  
            else{
                msg1.textContent=data.location;
                msg2.textContent=data.forecast;
                console.log(data.location);
                console.log(data.forecast);
                // console.log(data);
            } 
        },(error)=>{
            msg2.textContent="Enter valid Location!!"
        })
    })
})







/*fetch('http://localhost:3000/weather?address=!').then((response)=>{
    response.json().then((data)=>{
            console.log(data.location);
            console.log(data.forecast);
            console.log(data);
    },
    (error)=>{
        console.log('myu rorr:',error);
    })
}
)*/