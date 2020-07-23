console.log('client side is up')

const form = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const id = search.value

    fetch('http://localhost:3000/rajaongkir?id=' + id).then((response)=>{
    response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.province_id
                messageTwo.textContent = data.province
            }
        
        })   
    })
})