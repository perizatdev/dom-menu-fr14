// console.log(document.getElementsByTagName('h1')) тег аркылуу чакыруу
// console.log(document.getElementsByClassName('p'))класть названия аркылуу чакыруу

// console.log(document.getElementById('input'))айдиси аркылуу чакыруу

// let h1= document.querySelector('h1')
// let p=document.querySelector('.hello')
// let p=document.querySelector('#input')
// console.log(id)
// console.log(h1)
// console.log(p)
// let h1ClassName=document.querySelector('.h1')-sobytie
// console.log(h1ClassName)
//
// let h1TegName=document.querySelector('h1')
// console.log(h1TegName)
//
// let p=document.querySelectorAll('.block .title')
// console.log(p)
//
// let id=document.querySelector('#input')
// console.log(id)

// let btn=document.querySelector('.btn')
// let h1=document.querySelector('.text')
// let name=['Perizat', 'Egen', 'Peri','Peku']
//
// btn.addEventListener('click',()=>{
//     h1.innerHTML=name[Math.floor(Math.random()*name.length)]
// })
// innerHTML текстерге доступ алат
// value-путтун ичиндеги текст

// let h1=document.querySelectorAll(h1)
// let names=['Perizat','Aziza','Alisher','Aitemir','Kalysbek','baiaman','Abdumubin']
// h1.forEach(el,idx)=>{
//    return el.innerHTML+=[idx+1+':']+names[idx]
// }


// let block=document.querySelectorAll('.block')
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'pink',
//     'white',
//     'black'
// ];
// block.forEach(el=>{
//     el.addEventListener('click',()=>{
//         el.style.background=colors[Math.floor(Math.random()*colors.length)]
//     })
// })

// const btn=document.querySelector('.btn'),
//     input=document.querySelector('.input'),
//     name=document.querySelector('.name');
//
// btn.addEventListener('click',()=>{
//     name.textContent += input.value
//     input.value=''
// })

const btn=document.querySelector('.menu-btn'),
    openBtn=document.querySelector('.open-btn'),
    closeBtn=document.querySelector('.close-btn'),
    menu=document.querySelector('.menu');
btn.addEventListener('click',()=>{
   if ( menu.style.display==='none'){
       menu.style.display='block'
       menu.style.display='flex'
       openBtn.style.display='none'
       closeBtn.style.display='block'

   }else{
       menu.style.display='none'
       openBtn.style.display='block'
       closeBtn.style.display='none'

   }

})


const modalBtn=document.querySelector('.modal-window'),
    windowModal=document.querySelector('.window'),
    modalClose=document.querySelector('.modal-close');

modalBtn.addEventListener('click',()=>{
    windowModal.style.display='block'
    windowModal.style.display='flex'
    console.log('text')
})
modalClose.addEventListener('click',()=>{
    windowModal.style.display='none'
})

// console.log(modalBtn.className)
// console.log(modalBtn.classList)
// modalBtn.classList.add('btnAdd') жаны соз кошуп берет
// modalBtn.classList.remove('modal-window') очуруп берет
// modalBtn.classList.replace('btnAdd','btnReplace') атын башкага оргортуп берет
// modalBtn.classList.toggle('btnToggle')жаны созду кошуп же очуруп берет add=remove

const btnOne=document.querySelector('.modal-btn-one'),
    btnTwo=document.querySelector('.modal-btn-two'),
    btnThree=document.querySelector('.modal-btn-three'),
    img=document.querySelector('.modal-img')

btnOne.addEventListener('click',()=>{
    img.classList.add('modal-img')
    img.classList.remove('modal-img-two')
    img.classList.remove('modal-img-three')
    btnOne.style.background='#04CE25'
    btnTwo.style.background='#D9D9D9'
    btnThree.style.background='#D9D9D9'
})

btnTwo.addEventListener('click',()=>{
    img.classList.add('modal-img-two')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-three')
    btnOne.style.background='#D9D9D9'
    btnTwo.style.background='#04CE25'
    btnThree.style.background='#D9D9D9'
})

btnThree.addEventListener('click',()=>{
    img.classList.add('modal-img-three')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-two')
    btnOne.style.background='#04CE25'
    btnThree.style.background='#D9D9D9'
    btnTwo.style.background='#D9D9D9'
})

// const modalInput=document.querySelector('.modal-input'),
//     modalOk=document.querySelector('.modal-ok'),
//     modalName=document.querySelector('.modal-name')
//
// modalOk.addEventListener('click',()=>{
//     modalName.textContent+=modalInput.value
//     modalInput.value=''
// })







