
const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const department = document.getElementById("department").value;
    const address = document.getElementById("address").value.trim();

    const genderInput = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!name || !regno || !email || !phone ||
        !dob || !department || !address || !genderInput) {
        result.textContent = "Please fill in all fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        result.textContent = "Please enter a valid 10-digit phone number.";
        return;
    }

    if (new Date(dob) > new Date()) {
        result.textContent = "Date of birth cannot be in the future.";
        return;
    }

    const gender = genderInput.value;

    result.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Registration Successful!";

    const details = document.createElement("div");
    details.className = "success";

    const fields = [
        ["Student Name", name],
        ["Register Number", regno],
        ["Email", email],
        ["Phone", phone],
        ["Date of Birth", dob],
        ["Department", department],
        ["Gender", gender],
        ["Address", address]
    ];

    fields.forEach(function (field) {
        const line = document.createElement("p");
        const label = document.createElement("strong");

        label.textContent = field[0] + ": ";
        line.append(label, document.createTextNode(field[1]));
        details.appendChild(line);
    });

    result.append(heading, details);
    form.reset();
});

form.addEventListener("reset", function () {
    result.replaceChildren();
});