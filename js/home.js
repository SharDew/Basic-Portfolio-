//Initializing click counter
let clickCounter=1
let oldText = document.getElementById('info')
let resumetext="View Resume?"
let buttonDiv = document.getElementById('ag-button')
let yes_button = document.createElement('button')
let no_button = document.createElement('button')
//recreating the text based on number of clicks
function recreate(){
    
    
    
   
    if(clickCounter==1){
        let newText = "B.E. in Computer Science" 
        oldText.innerHTML=`${newText}`
        oldText.addEventListener('click',clicker)
        
    }
    else if(clickCounter==2){
        let   newText="From Universal College Of Engineering."
        oldText.innerHTML=`${newText}`
        oldText.addEventListener('click',clicker) 
    }
    else if(clickCounter==3){
        let   newText="Aspiring to be a Web Devloper."
        oldText.innerHTML=`${newText}`
        oldText.addEventListener('click',clicker) 
    }
    else if(clickCounter==4)
    {
        let   newText="Press 'S' to know more"
        oldText.innerHTML=`${newText}`
        oldText.addEventListener('click',clicker) 
    }
    else{
      oldText.innerHTML="Press 'S' to know more."
    }
    
}
    

//clicker function
function clicker(){
    ++clickCounter
    console.log(clickCounter)
}
//function to open resume on button click.
function resume(){
    window.open("SharvilDewardeResume.pdf",'_blank')
}
//FUNCTION TO CREATE DIV ON BUTTON PRESS
function insert(){
    //create main div
    let educationDiv = document.createElement('div')
    educationDiv.id="education-sec"
    // create shope-div
    let clipDiv = document.createElement('div')
    clipDiv.className="clip-path"
    educationDiv.appendChild(clipDiv)
     // create h1
     let clipText = document.createElement('h1')
     clipText.id="edu-head"
     clipText.textContent="Education"
     educationDiv.appendChild(clipText)
     //add main div to bod
     document.body.appendChild(educationDiv)

     //Re-changing animation text and turning it off
     oldText.innerHTML="My short description is listed below"
     document.querySelector('#about h1').style.animation = 'none';
     yes_button.remove()
     no_button.remove()

}
//windows functions
setTimeout(document.addEventListener('keypress',function(event){
    if(event.key=="s" && clickCounter==5){
        oldText.innerHTML=resumetext
        
        yes_button.className="yes"
        no_button.className = "no"
        yes_button.innerHTML="Yes"
        no_button.innerHTML="No"
        buttonDiv.appendChild(yes_button)
        buttonDiv.appendChild(no_button)

    }
}),2000)

yes_button.addEventListener('click',resume)
no_button.addEventListener('click',insert)
