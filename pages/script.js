const sketchpad = document.querySelector('.sketchpad');
const radioButtons = document.querySelectorAll('input[name="sizes"]');
let sketchpadSize=256;
sketchpad.classList.add('sketchpad1');
for (let i=0;i<sketchpadSize;i++)
{
    
    const box = document.createElement('div');
    sketchpad.appendChild(box);
    box.style.backgroundColor='red';
     sketchpad.classList.add('sketchpad1');
}


function checkRadioBox ()
{
    radioButtons[0].addEventListener('click' ,  function () 
    {
     sketchpadSize=256;
     sketchpad.innerHTML= "";
     for (let i=0;i<sketchpadSize;i++)
{
    
    const box = document.createElement('div');
    sketchpad.appendChild(box);
    box.style.backgroundColor='red';
    sketchpad.classList.remove('sketchpad2');
     sketchpad.classList.remove('sketchpad3');
     sketchpad.classList.add('sketchpad1');
}
     
    })
    radioButtons[1].addEventListener('click' ,  function () 
    {
     sketchpadSize=1024;
     sketchpad.innerHTML= "";
     for (let i=0;i<sketchpadSize;i++)
{
    
    const box = document.createElement('div');
    sketchpad.appendChild(box);
    box.style.backgroundColor='red';
    sketchpad.classList.remove('sketchpad1');
    sketchpad.classList.remove('sketchpad3');
    sketchpad.classList.add('sketchpad2');
}
     
    })
    radioButtons[2].addEventListener('click' ,  function () 
    {
    sketchpadSize=4096;
    sketchpad.innerHTML= "";
    for (let i=0;i<sketchpadSize;i++)
{
    
    const box = document.createElement('div');
    sketchpad.appendChild(box);
    box.style.backgroundColor='red';
    sketchpad.classList.remove('sketchpad1'); 
    sketchpad.classList.remove('sketchpad2'); 
    sketchpad.classList.add('sketchpad3'); 
}
    })
}

checkRadioBox()

