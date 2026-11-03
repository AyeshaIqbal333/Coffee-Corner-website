// Task 1 and 5 - Form validation and age verification
const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthYearText = document.getElementById("birth-year").value.trim();
    const formMessage = document.getElementById("form-message");
    const discountMessage = document.getElementById("discount-message");

    if (username !== "" && email !== "") {
        formMessage.textContent = "Thank you for visiting, " + username + "! We will contact you at " + email + ".";
    } else {
        formMessage.textContent = "Please enter your name and email.";
    }

    const birthYear = parseInt(birthYearText);

    if (!isNaN(birthYear)) {
        const age = 2026 - birthYear;

        if ((age >= 13 && age <= 25) || age >= 60) {
            discountMessage.textContent = "You are " + age + " years old and qualify for a special discount.";
        } else {
            discountMessage.textContent = "You are " + age + " years old. Regular prices apply.";
        }
    } else {
        discountMessage.textContent = "Please enter a valid birth year.";
    }
});

// Task 2 - Table row highlighting
const menuRows = document.querySelectorAll(".menu-row");

menuRows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f3d9bd";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});

// Task 3 - Light and Dark Mode
const themeButton = document.getElementById("theme-btn");
const sections = document.querySelectorAll("section");
const headings = document.querySelectorAll("h2, h3");
const links = document.querySelectorAll("section a");
let darkMode = false;

themeButton.addEventListener("click", function() {
    if (darkMode == false) {
        document.body.style.backgroundColor = "#1f1f1f";
        document.body.style.color = "white";

        sections.forEach(function(section) {
            section.style.backgroundColor = "#2f2f2f";
            section.style.color = "white";
        });

        headings.forEach(function(heading) {
            heading.style.color = "#f5eee6";
        });

        links.forEach(function(link) {
            link.style.color = "#ffd9b3";
        });

        darkMode = true;
    } else {
        document.body.style.backgroundColor = "#f5eee6";
        document.body.style.color = "black";

        sections.forEach(function(section) {
            section.style.backgroundColor = "white";
            section.style.color = "black";
        });

        headings.forEach(function(heading) {
            heading.style.color = "#6b4226";
        });

        links.forEach(function(link) {
            link.style.color = "";
        });

        darkMode = false;
    }
});

// Task 4 - Order total calculator
const orderItems = document.querySelectorAll(".order-item");
const totalText = document.getElementById("total");

function updateTotal() {
    let total = 0;

    orderItems.forEach(function(item) {
        if (item.checked) {
            total = total + parseInt(item.value);
        }
    });

    totalText.textContent = "Total: Rs. " + total;
}

orderItems.forEach(function(item) {
    item.addEventListener("change", updateTotal);
});

// Task 6 - Read More / Read Less
const readMoreButton = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreButton.addEventListener("click", function() {
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});

// Task 7 - Menu category filter
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.getAttribute("data-filter");

        menuRows.forEach(function(row) {
            const rowCategory = row.getAttribute("data-category");

            if (selectedCategory === "all" || selectedCategory === rowCategory) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    });
});

// Task 8 - Opening status
const currentHour = new Date().getHours();
const shopStatus = document.getElementById("shop-status");

if (currentHour >= 8 && currentHour < 20) {
    shopStatus.textContent = "We are Open!";
    shopStatus.style.color = "lightgreen";
} else {
    shopStatus.textContent = "Closed - Open at 8 AM";
    shopStatus.style.color = "red";
}

// Task 9 - Character counter
const specialNotes = document.getElementById("special-notes");
const charCount = document.getElementById("char-count");

specialNotes.addEventListener("input", function() {
    const remaining = 100 - specialNotes.value.length;
    charCount.textContent = remaining + " characters remaining";
});
