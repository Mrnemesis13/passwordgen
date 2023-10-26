const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
  { name: 'Mantis', id: 'mantis' },
  
  
]

let activeMember = 0
const images = document.getElementById("images")
const menu = document.getElementById("menu")
const memberName = document.getElementById("member_name")
const navigation = document.getElementById("navigation")

function changeStatusButton(){
  const prev = document.getElementById("button_prev")
  const isFirst = activeMember == 0
  prev.disabled = isFirst

  const next =document.getElementById("button_next")
  const isLast = activeMember == members.length - 1
  next.disabled =isLast
}

function changeMember(memberId){
  activeMember = memberId
  const member = members[activeMember]

  images.style.transform = `translateY(${-100 * activeMember }vh)`
  

  memberName.classList = member.id 
  
  changeName(member.name)

changeStatusButton()


}


function navigationMember(direction) {
  changeMember(activeMember+direction)
}

function changeMenu(){
  menu.classList.toggle("active")
  navigation.classList.toggle("active")
}

function setMember(memberId) {
  changeMember(memberId);
  changeMenu()
}