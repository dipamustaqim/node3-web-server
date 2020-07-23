const form = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const id = search.value
    messageOne.textContent = "loading...."
    messageTwo.textContent = ""

    fetch('/rajaongkir?id=' + id).then((response)=>{
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