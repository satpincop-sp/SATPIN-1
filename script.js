document.addEventListener("DOMContentLoaded", function () {

    const faqButtons = document.querySelectorAll(".faq-toggle");

    faqButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const currentItem = button.closest(".faq-item");

            const isAlreadyOpen = currentItem.classList.contains("open");

            document.querySelectorAll(".faq-item").forEach(function (item) {

                item.classList.remove("open");

                const btn = item.querySelector(".faq-toggle");

                if (btn) {
                    btn.textContent = "+";
                }

            });

            if (!isAlreadyOpen) {

                currentItem.classList.add("open");

                button.textContent = "×";

            }

        });

    });

});