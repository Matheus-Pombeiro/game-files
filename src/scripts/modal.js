// Open and close the modal
const modal = (modalOpen, modalClose) => {

    window.addEventListener("load", () => modalOpen.showModal());   // Open the modal

    modalClose.addEventListener("click", () => modalOpen.close());  // Close the modal

};

export default modal;   // Export the modal function