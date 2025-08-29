class ResetButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.cdnfonts.com/css/comic-neue-angular');
        
        .reset-btn {
          font-family: 'Comic Neue Angular', sans serif;
          font-size: 1rem;
          color: white;
          background-color: #f44336;
          border: none;
          border-radius: 5px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }
        .reset-btn:hover {
          background-color: #d32f2f;
        }
      </style>
      <button class="reset-btn">RESET</button>
    `;

    const button = this.querySelector('.reset-btn');
    
    button.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });

      localStorage.clear();

      window.location.reload();
    });
  }
}
customElements.define('reset-button', ResetButton);
