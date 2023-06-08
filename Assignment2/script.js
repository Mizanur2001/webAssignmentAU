let string = ""
const btn = document.querySelectorAll('.btn')
Array.from(btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.getElementById('screen').value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.getElementById('screen').value = string
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('screen').value = string
        }
        console.log(string)
    })
})