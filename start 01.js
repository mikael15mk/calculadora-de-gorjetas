
function calculateTip(event){
  event.preventDefault()
  let bill = document.getElementById('bill').value
  let serviçeQual = document.getElementById('serviceQual').value
  let people = document.getElementById('people').value
  if(bill == '' || serviçeQual == 0){
    alert('preencha os campos abaixos')
    return
  }
  if(people == "" || people <= 1){
    people = 1
    document.getElementById('each').style.display = 'none'
  }else{
    document.getElementById('each').style.display = 'block'
  }
  let total1 = (bill * serviçeQual) / people
  total1 = total1.toFixed(2)
  document.getElementById('tips').innerHTML = total1
  document.getElementById('total').style.display = "block"
  document.getElementById('marca').style.display = 'none'

}

document.getElementById('total').style.display = "none"
document.getElementById('each').style.display = "none"
document.getElementById('forms').addEventListener('submit',calculateTip)