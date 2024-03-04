document.addEventListener("DOMContentLoaded", function() {
        const openModalButtons = document.querySelectorAll(".open-modal");
        const closeModalButtons = document.querySelectorAll(".close-modal");
        const modal = document.querySelector(".modal");
      
        openModalButtons.forEach(button => {
          button.addEventListener("click", () => {
            modal.classList.add("active");
          });
        });
      
        closeModalButtons.forEach(button => {
          button.addEventListener("click", () => {
            modal.classList.remove("active");
          });
        });
      });
      