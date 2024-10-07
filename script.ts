const toggleButton = document.getElementById('toggle-details') as HTMLButtonElement | null;
const skills = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skills) {
    // Optionally set the initial state of the skills element
    skills.style.display = 'none'; // Uncomment if needed

    toggleButton.addEventListener('click', () => {
        if (skills.style.display === 'none' || skills.style.display === '') {
            skills.style.display = 'block';
        } else {
            skills.style.display = 'none';
        }
    });
} else {
    console.error('Toggle button or skills element not found.');
}
