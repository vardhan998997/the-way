document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const jobInfo = button.nextElementSibling;

            if (jobInfo.classList.contains('active')) {
                jobInfo.classList.remove('active');
                button.textContent = 'Read More';
            } else {
                // Optionally, close other job-info sections if needed
                document.querySelectorAll('.job-info.active').forEach(info => {
                    info.classList.remove('active');
                    info.previousElementSibling.textContent = 'Read More';
                });
                jobInfo.classList.add('active');
                button.textContent = 'Read Less';
            }
        });
    });
});
