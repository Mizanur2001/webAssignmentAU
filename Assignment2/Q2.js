const tableData = document.getElementById('tableData')
let element=""
const funcGenTable = (number) => {
    for (let i = 1; i < 11; i++) {
        element = element.concat(`<span>${i} X ${number} = ${i * number}</span><br>`);
    }
    tableData.innerHTML = element
}