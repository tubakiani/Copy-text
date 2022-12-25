const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click',() =>{
    textarea.select();
    let textValue = textarea.value;
    navigator.clipboard.writeText(textValue);
    copyBtn.innerHTML = 'کپی شد';
    copyBtn.style.backgroundColor = 'gray'
    copyBtn.style.color = '#FFF'
    setTimeout(() => {
        copyBtn.innerHTML = 'کپی کن';
        copyBtn.style.backgroundColor = 'pink'
        copyBtn.style.color = '#000'
    }, 1500);
})