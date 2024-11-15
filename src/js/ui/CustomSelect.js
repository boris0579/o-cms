class CustomSelect {
    constructor(selectElement) {
        this.select = selectElement;
        this.selected = this.select.querySelector("[data-select-selected]");
        this.options = this.select.querySelector("[data-select-options]");
        this.optionItems = this.select.querySelectorAll("[data-select-option]");
        this._addEventListeners();
    }

    _addEventListeners() {
        this.selected.addEventListener("click", () => this.toggleOptions());
        document.addEventListener("click", (event) => {
            if (!this.select.contains(event.target)) {
                this.closeOptions();
            }
        });
        this.optionItems.forEach(option => {
            option.addEventListener("click", () => this.selectOption(option));
        });
    }

    toggleOptions() {
        this.select.classList.toggle("select--open");
        this.selected.classList.toggle("select__selected--active");
    }

    closeOptions() {
        this.select.classList.remove("select--open");
        this.selected.classList.remove("select__selected--active");
    }

    selectOption(option) {
        this.selected.textContent = option.textContent;
        this.selected.dataset.value = option.dataset.value;
        this.closeOptions();
    }
}

// Экспорт класса CustomSelect
export default CustomSelect;
