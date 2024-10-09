const pais_1 = document.querySelector('.pais_1')
const pais_2 = document.querySelector('.pais_2')
const pais_3 = document.querySelector('.pais_3')
const pais_4 = document.querySelector('.pais_4')
const pais_5 = document.querySelector('.pais_5')
const pais_6 = document.querySelector('.pais_6')
const pais_7 = document.querySelector('.pais_7')
const fil_pais_1 = document.querySelector('.fil_pais_1')
const fil_pais_2 = document.querySelector('.fil_pais_2')
const fil_pais_3 = document.querySelector('.fil_pais_3')
const fil_pais_4 = document.querySelector('.fil_pais_4')
const fil_pais_5 = document.querySelector('.fil_pais_5')
const fil_pais_6 = document.querySelector('.fil_pais_6')
const fil_pais_7 = document.querySelector('.fil_pais_7')

fil_pais_5.addEventListener('mouseover', ()=>{
    pais_1.classList.add('mostrar_pais')
})

fil_pais_5.addEventListener('mouseout', ()=>{
    pais_1.classList.remove('mostrar_pais')
})

fil_pais_3.addEventListener('mouseover', ()=>{
    pais_2.classList.add('mostrar_pais')
})

fil_pais_3.addEventListener('mouseout', ()=>{
    pais_2.classList.remove('mostrar_pais')
})

fil_pais_4.addEventListener('mouseover', ()=>{
    pais_3.classList.add('mostrar_pais')
})

fil_pais_4.addEventListener('mouseout', ()=>{
    pais_3.classList.remove('mostrar_pais')
})

fil_pais_7.addEventListener('mouseover', ()=>{
    pais_4.classList.add('mostrar_pais')
})

fil_pais_7.addEventListener('mouseout', ()=>{
    pais_4.classList.remove('mostrar_pais')
})

fil_pais_1.addEventListener('mouseover', ()=>{
    pais_5.classList.add('mostrar_pais')
})

fil_pais_1.addEventListener('mouseout', ()=>{
    pais_5.classList.remove('mostrar_pais')
})

fil_pais_2.addEventListener('mouseover', ()=>{
    pais_6.classList.add('mostrar_pais')
})

fil_pais_2.addEventListener('mouseout', ()=>{
    pais_6.classList.remove('mostrar_pais')
})

fil_pais_6.addEventListener('mouseover', ()=>{
    pais_7.classList.add('mostrar_pais')
})

fil_pais_6.addEventListener('mouseout', ()=>{
    pais_7.classList.remove('mostrar_pais')
})