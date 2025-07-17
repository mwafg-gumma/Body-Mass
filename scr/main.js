

// Main JavaScript file for the web application
// Wait for DOM to load        
document.addEventListener("DOMContentLoaded", function() {
    // BMI calculator
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let btn = document.getElementById("calculate-btn");
    let result = document.getElementById("result-message");

    if (btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            // Parse the input values
            let weightValue = parseFloat(weight.value);
            let heightValue = parseFloat(height.value);

            // Validate inputs
            if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
                result.innerHTML = "Please enter valid positive numbers for weight and height.";
                return;
            }

            // Calculate BMI
            let bmi = weightValue / (heightValue * heightValue);
            bmi = bmi.toFixed(2); // Round to two decimal places

            // Display the result
            result.innerHTML = `Your BMI is ${bmi}.`;
        });
    }

    // for footer copyright
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.innerHTML = `Copyright by Mwafg gomma &copy; ${new Date().getFullYear()}`;
    }
});