document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseInfo = button.nextElementSibling;

            if (courseInfo.classList.contains('active')) {
                courseInfo.classList.remove('active');
                button.textContent = 'Read More'; // Change text to "Read More"
            } else {
                // Optionally, close other course-info sections if needed
                document.querySelectorAll('.course-info.active').forEach(info => {
                    info.classList.remove('active');
                    info.previousElementSibling.textContent = 'Read More'; // Reset other buttons' text
                });
                courseInfo.classList.add('active');
                button.textContent = 'Read Less'; // Change text to "Read Less"
            }
        });
    });
});
