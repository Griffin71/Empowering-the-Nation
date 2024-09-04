function calculateTotal() {
            const checkboxes = document.querySelectorAll('input[name="course"]:checked');
            let total = 0;

            checkboxes.forEach((checkbox) => {
                total += parseFloat(checkbox.value);
            });

            let discount = 0;
            if (checkboxes.length === 2) discount = 0.05;
            if (checkboxes.length === 3) discount = 0.10;
            if (checkboxes.length > 3) discount = 0.15;

            total = total - (total * discount);
            const vat = total * 0.15;
            total += vat;

            document.getElementById('total-fee').innerText = `Total Fee: R${total.toFixed(2)} (including VAT)`;
        }