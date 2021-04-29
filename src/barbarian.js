export const barberian = (sword) => {
    document.querySelector('#root').addEventListener('click', (e) => console.log('Жмурика я самый слабый'))
    let firstDiv = document.querySelector('#root')
    sword.map(item => {
        if (item) {
            let newDiv = document.createElement("div")
            newDiv.innerHTML = "<h1>Сейчас я буду тебя резать</h1>"
            newDiv.classList.add('sytyl')
            document.body.insertBefore(newDiv, firstDiv)
        }
    })
}