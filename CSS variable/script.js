window.onload = function () {
    let inputs = document.querySelectorAll(".controls input");
    
    inputs.forEach(input => {
        input.addEventListener('mousemove', handleUpdate);
        input.addEventListener('change', handleUpdate);
    });

    function handleUpdate() {
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

}