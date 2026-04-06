const addBtn = document.getElementById('add-btn');
const tableBody = document.getElementById('table-body');
let rowCount = 0;

addBtn.addEventListener('click', () => {
    rowCount++;
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" class="ad-input" placeholder="ad"></td>
        <td><input type="text" class="soyad-input" placeholder="familiya"></td>
        <td><input type="number" class="maas-input" placeholder="maas"></td>
        <td>
            <button class="save-btn">yadda saxla</button>
            <button class="delete-btn">sil</button>
        </td>
    `;

    const saveBtn = row.querySelector('.save-btn');
    const deleteBtn = row.querySelector('.delete-btn');
    const inputs = row.querySelectorAll('input');


    inputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                console.log(input.value);
            }
        });
    });

    deleteBtn.addEventListener('click', () => {
        row.remove();
    });

    saveBtn.addEventListener('click', () => {
        let isEmpty = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isEmpty = true;
            }
        });

        if (isEmpty) {
            alert("error:xanani doldurun");
            return;
        }
        console.log(`Ad: ${inputs[0].value} | Soyad: ${inputs[1].value} | Maas: ${inputs[2].value}`);
    });

    tableBody.appendChild(row);
});