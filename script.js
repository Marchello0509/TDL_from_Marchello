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

htmlEl.btnPin.addEventListener('click', () => {
    const inpName = htmlEl.inpName.value
    const inpText = htmlEl.inpText.value

    const newBlock = document.createElement('div')
    newBlock.className = 'main_forblock2_block2_forbl2'

    newBlock.innerHTML = `
        <div class="main_forblock2_block2_forbl2_bl2">
            <button class="main_forblock2_block2_forbl2_bl2_btn2">
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
})
