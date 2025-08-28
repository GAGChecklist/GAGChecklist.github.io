  const checkboxes = document.querySelectorAll('.item-checkbox');
  const checkedCountElement = document.getElementById('checkedCount');
  const totalCountElement = document.getElementById('totalCount');

  function loadState() {
    const savedState = localStorage.getItem('checklistState');

    if (savedState) {
      const checkedIds = JSON.parse(savedState);
      checkedIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
  }

  function saveState() {
    const checkedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const checkedIds = Array.from(checkedCheckboxes).map(checkbox => checkbox.id);
    localStorage.setItem('checklistState', JSON.stringify(checkedIds));
  }

  function updateCounter() {
    const checkedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const checkedCount = checkedCheckboxes.length;
    checkedCountElement.textContent = checkedCount;

    saveState();
  }

  totalCountElement.textContent = checkboxes.length;

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCounter);
  });

  loadState();
  updateCounter();