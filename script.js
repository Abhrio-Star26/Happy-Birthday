  const initialBox = document.getElementById('initial-box');
        const congratsText = document.getElementById('congrats-text');
        const container = document.querySelector('.container');

        initialBox.addEventListener('click', () => {
            // Add animation class to the box
            initialBox.classList.add('animate');
            
            // Show congratulations text briefly
            congratsText.classList.remove('hidden');
            
            // After animation (2s), hide the box and reveal the container
            setTimeout(() => {
                initialBox.style.display = 'none';
                container.classList.remove('hidden');
                container.classList.add('fade-in');
            }, 2000); // Matches the animation duration
        });