window.addEventListener('DOMContentLoaded', ()=>{
    const icono_abrir_nav = document.querySelector('.icono_abrir_nav')
    const icono_cerrar_nav = document.querySelector('.icono_cerrar_nav')
    const nav = document.querySelector('.nav')
    
    icono_abrir_nav.addEventListener('click', ()=>{
        nav.classList.add('mostrar_nav')
    })
    icono_cerrar_nav.addEventListener('click', ()=>{
        nav.classList.remove('mostrar_nav')
    })
})

const header_item = document.querySelector('.header_item')
let lastScrollTop = 0;

window.addEventListener('scroll', ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Haciendo scroll hacia abajo
        header_item.classList.add('header_item_fixed');
    };
    if (scrollTop === 0) {
        header_item.classList.remove('header_item_fixed')
    };
    lastScrollTop = scrollTop;
})

const nav_opcion_1 = document.querySelector('.nav_opcion_desktop_1');
const nav_opcion_2 = document.querySelector('.nav_opcion_desktop_2');
const nav_opcion_3 = document.querySelector('.nav_opcion_desktop_3');
const nav_opcion_4 = document.querySelector('.nav_opcion_desktop_4');
const nav_opcion_texto_1 = document.querySelector('.nav_opcion_texto_1');
const nav_opcion_texto_2 = document.querySelector('.nav_opcion_texto_2');
const nav_opcion_texto_3 = document.querySelector('.nav_opcion_texto_3');
const nav_opcion_texto_4 = document.querySelector('.nav_opcion_texto_4');
const icono_nav_1 = document.querySelector('.icono_nav_1');
const icono_nav_2 = document.querySelector('.icono_nav_2');
const icono_nav_3 = document.querySelector('.icono_nav_3');
const icono_nav_4 = document.querySelector('.icono_nav_4');
/* ------------ */
const nav_texto_at_1 = document.querySelector('.nav_texto_at_1')
const nav_texto_at_2 = document.querySelector('.nav_texto_at_2')
const nav_texto_at_3 = document.querySelector('.nav_texto_at_3')
const nav_texto_at_4 = document.querySelector('.nav_texto_at_4')
const nav_icono_at_1 = document.querySelector('.nav_icono_at_1')
const nav_icono_at_2 = document.querySelector('.nav_icono_at_2')
const nav_icono_at_3 = document.querySelector('.nav_icono_at_3')
const nav_icono_at_4 = document.querySelector('.nav_icono_at_4')

const texto_active_fijo = document.querySelector('.texto_active_fijo')
const icon_active_fijo = document.querySelector('.icon_active_fijo')

nav_opcion_1.addEventListener('mouseover', ()=>{
    nav_opcion_texto_2.classList.add('color_active_nav_hover')
    nav_opcion_texto_3.classList.add('color_active_nav_hover')
    nav_opcion_texto_4.classList.add('color_active_nav_hover')
    icono_nav_2.classList.add('icono_nav_hover')
    icono_nav_3.classList.add('icono_nav_hover')
    icono_nav_4.classList.add('icono_nav_hover')

    nav_opcion_texto_1.classList.add('texto_active')
    icono_nav_1.classList.add('icon_active')
})

nav_opcion_1.addEventListener('mouseout', ()=>{
    nav_opcion_texto_2.classList.remove('color_active_nav_hover')
    nav_opcion_texto_3.classList.remove('color_active_nav_hover')
    nav_opcion_texto_4.classList.remove('color_active_nav_hover')
    icono_nav_2.classList.remove('icono_nav_hover')
    icono_nav_3.classList.remove('icono_nav_hover')
    icono_nav_4.classList.remove('icono_nav_hover')

    nav_texto_at_1.classList.remove('texto_active')
    nav_icono_at_1.classList.remove('icon_active')
})

nav_opcion_2.addEventListener('mouseover', ()=>{
    nav_opcion_texto_1.classList.add('color_active_nav_hover')
    nav_opcion_texto_3.classList.add('color_active_nav_hover')
    nav_opcion_texto_4.classList.add('color_active_nav_hover')
    icono_nav_1.classList.add('icono_nav_hover')
    icono_nav_3.classList.add('icono_nav_hover')
    icono_nav_4.classList.add('icono_nav_hover')

    nav_opcion_texto_2.classList.add('texto_active')
    icono_nav_2.classList.add('icon_active')
})

nav_opcion_2.addEventListener('mouseout', ()=>{
    nav_opcion_texto_1.classList.remove('color_active_nav_hover')
    nav_opcion_texto_3.classList.remove('color_active_nav_hover')
    nav_opcion_texto_4.classList.remove('color_active_nav_hover')
    icono_nav_1.classList.remove('icono_nav_hover')
    icono_nav_3.classList.remove('icono_nav_hover')
    icono_nav_4.classList.remove('icono_nav_hover')

    nav_texto_at_2.classList.remove('texto_active')
    nav_icono_at_2.classList.remove('icon_active')
})

nav_opcion_3.addEventListener('mouseover', ()=>{
    nav_opcion_texto_1.classList.add('color_active_nav_hover')
    nav_opcion_texto_2.classList.add('color_active_nav_hover')
    nav_opcion_texto_4.classList.add('color_active_nav_hover')
    icono_nav_1.classList.add('icono_nav_hover')
    icono_nav_2.classList.add('icono_nav_hover')
    icono_nav_4.classList.add('icono_nav_hover')

    nav_opcion_texto_3.classList.add('texto_active')
    icono_nav_3.classList.add('icon_active')
})

nav_opcion_3.addEventListener('mouseout', ()=>{
    nav_opcion_texto_1.classList.remove('color_active_nav_hover')
    nav_opcion_texto_2.classList.remove('color_active_nav_hover')
    nav_opcion_texto_4.classList.remove('color_active_nav_hover')
    icono_nav_1.classList.remove('icono_nav_hover')
    icono_nav_2.classList.remove('icono_nav_hover')
    icono_nav_4.classList.remove('icono_nav_hover')

    nav_texto_at_3.classList.remove('texto_active')
    nav_icono_at_3.classList.remove('icon_active')
})

nav_opcion_4.addEventListener('mouseover', ()=>{
    nav_opcion_texto_1.classList.add('color_active_nav_hover')
    nav_opcion_texto_2.classList.add('color_active_nav_hover')
    nav_opcion_texto_3.classList.add('color_active_nav_hover')
    icono_nav_1.classList.add('icono_nav_hover')
    icono_nav_2.classList.add('icono_nav_hover')
    icono_nav_3.classList.add('icono_nav_hover')

    nav_opcion_texto_4.classList.add('texto_active')
    icono_nav_4.classList.add('icon_active')
})

nav_opcion_4.addEventListener('mouseout', ()=>{
    nav_opcion_texto_1.classList.remove('color_active_nav_hover')
    nav_opcion_texto_2.classList.remove('color_active_nav_hover')
    nav_opcion_texto_3.classList.remove('color_active_nav_hover')
    icono_nav_1.classList.remove('icono_nav_hover')
    icono_nav_2.classList.remove('icono_nav_hover')
    icono_nav_3.classList.remove('icono_nav_hover')

    nav_texto_at_4.classList.remove('texto_active')
    nav_icono_at_4.classList.remove('icon_active')
})

/* ---- */
