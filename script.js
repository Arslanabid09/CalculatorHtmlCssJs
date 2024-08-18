const themeToggle = document.getElementById('toggle');

const storeTheme = localStorage.getItem('theme');

if(storeTheme == 'light'){
    
    document.documentElement.style.setProperty('--bg-color', '#F1EAFF');
    document.documentElement.style.setProperty('--text-color', '#D67BFF');
    document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#D0A2F7');
    themeToggle.checked = true;
}else{

    document.documentElement.style.setProperty('--bg-color', '#040D12');
    document.documentElement.style.setProperty('--text-color', '#93B1A6');
    document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
}
themeToggle.addEventListener('click',function(){
    if(this.checked){
        document.documentElement.style.setProperty('--bg-color', '#F1EAFF');
        document.documentElement.style.setProperty('--text-color', '#D67BFF');
        document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#D0A2F7');
        localStorage.setItem('theme', 'light');
    }
    else{
        document.documentElement.style.setProperty('--bg-color', '#040D12');
        document.documentElement.style.setProperty('--text-color', '#93B1A6');
        document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
        localStorage.setItem('theme', 'dark');
    }
})




let result = document.getElementById('result');
function appendResult(value){
    result.value+=value
    playButtonSound();
}

function backSpace(){
    result.value = result.value.slice(0,-1);
    playButtonSound();
}

function ClearResult(){
    result.value = ''
    playButtonSound();
}

function calculate(){
    playButtonSound();
    try {
        if(result.value==''){
            result.value = "0";
        }
        result.value = eval(result.value)


    } catch (error) {
        result.value = 'Error'
    }
}
function playButtonSound(){
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}