 // Get references to form and card elements
const form = document.getElementById('profileForm');
const profileCard = document.getElementById('profile-card');
const generateBtn = document.getElementById('generateBtn');

    // Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get values from input fields
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const picUrl = document.getElementById('profilePic').value.trim();

      // === Input Validation ===
    if (!name || !email || !age || !picUrl) {
        alert("Please fill in all fields.");
        return;
    }

    if (age < 10 || age > 100) {
        alert("Age must be between 10 and 100.");
        return;
    }

    if (!/^https?:\/\//.test(picUrl)) {
        alert("Profile Picture URL must start with http or https.");
        return;
    }

      // === Insert Valid Values into Profile Card ===
      document.getElementById('cardName').textContent = name;
      document.getElementById('cardEmail').textContent = email;
      document.getElementById('cardAge').textContent = `Age: ${age}`;
      document.getElementById('cardImage').src = picUrl;

      // Show the profile card
      profileCard.style.display = 'block';

      // Disable the button for 5 seconds
      generateBtn.disabled = true;
      setTimeout(() => {
        generateBtn.disabled = false;
      }, 5000);
    });
 
