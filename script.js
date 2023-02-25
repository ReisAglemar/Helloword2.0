//função para mostrar as horas

function currentTime() {
    let message = document.querySelector(".secondTitle")
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()

    message.innerHTML = (`Time ${hour}:${minute}`)
    
}