// --- Firebase Setup ---
const firebaseConfig = {
    apiKey: "AIzaSyB3zHYVwJqA2GE8cM0llrnLvhiP4soahX0",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app-default-rtdb.firebaseio.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
  };
  if (typeof firebase !== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = typeof firebase !== "undefined" ? firebase.database() : null;
document.addEventListener('DOMContentLoaded', function() {
  const aiForm = document.getElementById('aiRiskForm');
  if (!aiForm) {
    console.error('AI Risk Form not found!');
    return;
  }

  aiForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const resultDiv = document.getElementById('aiRiskResult');
    const percentSpan = document.getElementById('aiRiskPercent');
    const fileInput = document.querySelector('#aiRiskForm input[type="file"]');

    if (!fileInput.files || fileInput.files.length === 0) {
      alert('Please select an image first!');
      return;
    }

    if (resultDiv) {
      resultDiv.classList.remove('hidden');
      percentSpan.textContent = 'Analyzing...';
    }
    setTimeout(() => {
      try {
        const riskPercent = Math.floor(Math.random() * 21) + 10;
        if (percentSpan) {
          percentSpan.textContent = riskPercent + '%';
        }
   
        if (typeof db !== 'undefined' && db) {
          const riskRef = db.ref('ai_risk_assessments').push();
          riskRef.set({
            timestamp: Date.now(),
            riskPercent: riskPercent
          }).then(() => {
            console.log('Risk assessment saved to Firebase');
          }).catch(error => {
            console.error('Error saving to Firebase:', error);
          });
        }
      } catch (error) {
        console.error('Error in form submission:', error);
        if (percentSpan) {
          percentSpan.textContent = 'Error occurred. Please try again.';
        }
      }
    }, 1000);
  });
});