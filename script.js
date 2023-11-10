const htmlEl = {
    inpName: document.querySelector('#inpName'),
    inpText: document.querySelector('#inpText'),
    btnPin: document.querySelector('#btnPin'),
    block2: document.querySelector('#block2'),
    block3: document.querySelector('#block3'),
    block4: document.querySelector('#block4'),
    btnDelete: document.querySelector('#btnDelete'),
    btnNext: document.querySelector('#btnNext')
}

console.log(htmlEl)
let noteCounter = 0

const addBtnsDelete = () => { 
    let btnsDelete =  document.querySelectorAll('.btnDelete')
    console.log(btnsDelete) 
    btnsDelete.forEach(btn => { 
        btn.addEventListener('click', () => { 
            let cardId = btn.getAttribute("cardId")
            let currentCard = document.querySelector(`#card${cardId}`)
            currentCard.remove()

            noteCounter -=1
            if (noteCounter < 3) {
                htmlEl.btnPin.disabled = false;
                htmlEl.btnPin.style.backgroundColor = '#ffffff'
                htmlEl.btnPin.style.color = '#000000'
                htmlEl.btnPin.style.cursor = 'pointer'
                btnPin.style.transitionDuration = '0.6s';
            }

            btnPin.addEventListener('mouseover', function() {
                if (noteCounter < 3) {
                  htmlEl.btnPin.style.backgroundColor = '#8B8B8B'
                  htmlEl.btnPin.style.color = '#ffffff'
                  htmlEl.btnPin.style.transitionDuration = '0.6s'
                  htmlEl.htmlEl.btnPin.style.cursor = 'pointer'
                }
            })

            btnPin.addEventListener('mouseout', function() {
                if (noteCounter < 3) {
                  htmlEl.btnPin.style.backgroundColor = '#ffffff'
                  htmlEl.btnPin.style.color = '#000000'
                  htmlEl.btnPin.style.transitionDuration = '0.6s'
                }
            })
        })
    })
}

htmlEl.btnPin.addEventListener('click', () => {
    const newId = `${Math.round(Math.random()*(1000-500)+500)}-${Math.round(Math.random()*(500-300)+500)}`
    console.log(newId)
    const inpName = htmlEl.inpName.value
    const inpText = htmlEl.inpText.value

    const newBlock = document.createElement('div')
    newBlock.className = 'main_forblock2_block2_forbl2'

    newBlock.innerHTML = `
        <div id="card${newId}" class="main_forblock2_block2_forbl2_bl2">
            <button  cardId="${newId}" class="btnDelete main_forblock2_block2_forbl2_bl2_btn2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7 7L25 25" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 25L25 7" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <p class="main_forblock2_block2_forbl2_bl2_p1">Name list:</p>
            <p class="main_forblock2_block2_forbl2_bl2_p2">${inpName}</p>
            <p class="main_forblock2_block2_forbl2_bl2_p3">Text list:</p>
            <p class="main_forblock2_block2_forbl2_bl2_p4">${inpText}</p>
            <button id="btnNext" class="main_forblock2_block2_forbl2_bl2_btn">Next</button>
        </div>
    `

    htmlEl.block2.appendChild(newBlock)
    
    addBtnsDelete()

    const nextButton = newBlock.querySelector('#btnNext')
    nextButton.addEventListener('click', () => {
    htmlEl.block2.removeChild(newBlock)
    htmlEl.block3.appendChild(newBlock)
    const inProgressNextButton = newBlock.querySelector('#btnNext')
    inProgressNextButton.addEventListener('click', () => {
            htmlEl.block3.removeChild(newBlock)
            htmlEl.block4.appendChild(newBlock)
        })
    })

    noteCounter++
    if (noteCounter === 3) {
        htmlEl.btnPin.disabled = true; 
        htmlEl.btnPin.style.backgroundColor = 'red'
        htmlEl.btnPin.style.color = 'white'
        htmlEl.btnPin.style.cursor = 'default'
    }
})