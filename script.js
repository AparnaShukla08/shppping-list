const addbtn= document.getElementById('add-btn'); 
const resetbtn= document.getElementById('reset-btn');
const display = document.getElementById('display');

addbtn.addEventListener('click', function(){
    const display = document.querySelector('.display');
    
    const userinput= document.getElementById('input').value; //getting user input
    const displayinput= document.getElementById('display-added');
    if(userinput!==""){
        display.style.opacity=1;
        const li = document.createElement('li'); //creating a new element
        li.innerHTML=userinput;
        displayinput.appendChild(li);
        document.getElementById('input').value='';
        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
        })
    } else{
        alert('Please enter items to proceed.')
    }

})
resetbtn.addEventListener('click', function(){
    document.getElementById('display-added').innerHTML=" ";
    const display = document.querySelector('.display');
    display.style.opacity=0;
})
