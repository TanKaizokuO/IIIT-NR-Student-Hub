async function submitForm(event) {
    event.preventDefault(); // Prevent default form submission (page reload)
    
    const form = document.getElementById('calculate');
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      reason: form.chooseOption.value,
    };

    try {
      const response = await fetch("https://backendimg.onrender.com/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        document.getElementById('form-message').innerHTML = '<p style="color: green;">Form submitted successfully!</p>';
      } else {
        document.getElementById('form-message').innerHTML = '<p style="color: red;">Error: ' + result.detail + '</p>';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      document.getElementById('form-message').innerHTML = '<p style="color: red;">Failed to submit the form. Please try again later.</p>';
    }
  }
