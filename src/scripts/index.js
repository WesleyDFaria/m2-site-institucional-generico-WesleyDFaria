function handleModal() {
   const buttonHeader = document.querySelector(".container__header__btn")
   const buttonFaq = document.querySelector(".faq__btn__left") 
   const modalContainer = document.querySelector(".modalController")

   buttonHeader.addEventListener("click" , () =>{
    modalContainer.showModal()
    closeModal()
   })
   buttonFaq.addEventListener("click" , () =>{
    modalContainer.showModal()
    closeModal()
   })
}

function closeModal() {
    const btnCloseModal = document.querySelector(".closeModal") 
    const modalContainer = document.querySelector(".modalController")

    btnCloseModal.addEventListener("click" , () => {
        modalContainer.close()
    })
}
handleModal()