const next = document.getElementById('next')
const previous = document.getElementById('previous')
const image = document.getElementById('image')
const images = document.getElementById('images')

 let count = 0

 let array = [
    './image/a.jpg',
    './image/b.jpg',
    './image/c.jpg',
    './image/d.jpg',
    './image/e.jpg',
    './image/f.jpg',
    './image/j.jpg',
    './image/h.jpg',
 ]

next.addEventListener('click', ()=> {
    if(count === array.length - 1){
        count = 0
        image.src = array[count]
    } else {
        count++
        image.src = array[count]
    }
})

previous.addEventListener('click', ()=> {
    if(count === 0){
        count = array.length - 1
        image.src = array[count]
    } else {
        count--
        image.src = array[count]
    }
})