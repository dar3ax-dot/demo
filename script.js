const menu = document.getElementById('menu')
const menu_buttton = document.getElementById('menu_button')
const cross = document.getElementById('cross')

cross.style.display='none'
menu_buttton.onclick=function show_menu(){
    
menu.style.display='block'
menu_buttton.style.display='none'
cross.style.display='block'

}

cross.onclick=function hide_menu(){
menu.style.display='none'
menu_buttton.style.display='block'
cross.style.display='none'


    
}

function gotoyt()
{
    window.location.href='https://www.youtube.com/@Dr3aGaming'
}


function gotott(){

    window.location.href='https://www.tiktok.com/@dar3a_ff?is_from_webapp=1&sender_device=pc'
}