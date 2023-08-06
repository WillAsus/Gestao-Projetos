const buttonClass = document.querySelector('.button')
const FormClass = document.querySelector('.devFormClass')
const buttonMemberClass = document.querySelector('.addMemberClass')
const buttonIconX = document.querySelector('.classIcon-x')

buttonClass.addEventListener('click', function(){
  FormClass.style.transform = 'scale(1)';
  buttonMemberClass.style.transform = 'scale(1)';

})

buttonIconX.addEventListener('click', function(){
  FormClass.style.transform = 'scale(0)';
  buttonMemberClass.style.transform = 'scale(0)'; 

})

function addMember(){
  const nome = document.getElementById('nome').value
  const profissao = document.getElementById('profissao').value
  const experiencia = document.getElementById('experiencia').value


 const confirmation = confirm("Salvar " + nome + " como novo membro da equipe?")
 
 if (confirmation) {
  const nomeId = document.getElementById('nomeId')
  const profissaoId = document.getElementById('profissaoId')
  const experienciaId = document.getElementById('experienciaId')
  
  const nomeItem = document.createElement('li')
  const profissaoItem = document.createElement('li')
  const experienciaItem = document.createElement('li')

  nomeItem.innerText = nome
  profissaoItem.innerText = profissao
  experienciaItem.innerText = experiencia
  nomeId.appendChild(nomeItem)
  profissaoId.appendChild(profissaoItem)
  experienciaId.appendChild(experienciaItem)

  document.getElementById('nome').value = ''
  document.getElementById('profissao').value = ''
  document.getElementById('experiencia').value = ''
 }
}