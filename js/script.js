let button = document.querySelector('.Button_change')
let inp = document.querySelectorAll('input#blue')
let inp_all = document.querySelectorAll('input')
let h1 = document.querySelectorAll('h1')
let active = document.querySelector('active')
let img = document.querySelectorAll('.img img')
let p = document.querySelectorAll('.pool p')
let a = document.querySelector('#one')
let b = document.querySelector('#two')
let g = document.querySelector('#four')


button.onclick = () => {
    inp.forEach(el => {
        h1.forEach(elem => {
            if (el.value === '') {
                el.style.border = '2px solid red'
                el.parentNode.previousSibling.previousSibling.style.color = 'red'
                el.nextSibling.nextSibling.firstChild.classList.add('active_err')
            }
            else {
                el.style.borderColor = 'green'
                el.parentNode.previousSibling.previousSibling.style.color = 'blue'
                el.nextSibling.nextSibling.firstChild.classList.remove('active_err')

            }
        })
    })
    let toggle = document.querySelectorAll('.active_err')
    g.innerHTML = `Error: ${toggle.length} / ${inp_all.length}`
    a.innerHTML = `All: ${inp_all.length}`
    let Success = document.querySelectorAll('#oppa')
    b.innerHTML = `Success: ${Success.length} / ${inp_all.length}`

    let j = 0
    inp_all.forEach(all => {
        if (all.style.border !== '2px solid red') {
            j++
            console.log(j);
        }
    })
}
