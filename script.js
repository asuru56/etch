const body = document.querySelector('body');
const gridContainer = body.querySelector('.gridContainer');


const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function () {
    let k = prompt('Enter the number of squares per side (maximum 100):');
    if (k < 100) {
        location.reload();
        for (let i = 0; i < k; i++) {
            // Create and append grid elements to the .bottom container
            const bottomElement = document.createElement('div');
            bottomElement.className = 'bottom';

            for (let j = 0; j < k; j++) {
                const grid = document.createElement('div');
                grid.className = 'grid';
                bottomElement.appendChild(grid);

                // Attach a hover event listener to each grid element
                grid.addEventListener('mouseenter', function () {
                    // Change the color of the hovered grid element
                    this.style.backgroundColor = 'black';
                });
            }

            gridContainer.appendChild(bottomElement);
        }
    }

});

// Create and append grid elements to the .top container
