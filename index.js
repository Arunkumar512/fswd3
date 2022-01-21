const body=document.querySelector("body")
const choice_container=document.querySelector("div.choice")
const rock=document.querySelector("img#rock")
const paper=document.querySelector("img#paper")
const scissor=document.querySelector("img#scissor")

const random=()=>{
    const val = (Math.floor((Math.random().toFixed(1) * 3)))
const game = (user_choice)=>{
    
}

    switch (user_choice){
case 0:
  return "rock"
case 1:
  return "paper"
case 2:
  return "scissor"
default:
  return "paper"
    }
}
rock.addEventListener('click', () => {
    console.log(game('rock'))
})
paper.addEventListener('click', (e) => {
    console.log(game('paper'))
})
scissor.addEventListener('click', (e) => {
    console.log(game('scissor'))
})
