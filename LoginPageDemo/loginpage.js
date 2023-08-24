function previewData() {
    let name = document.getElementById('name').value
    let uname = document.getElementById('uname').value
    let dob = document.getElementById('dob').value
    let email = document.getElementById('email').value

    document.querySelector('.name').innerHTML = name
    document.querySelector('.uname').innerHTML = uname
    document.querySelector('.dob').innerHTML = dob
    document.querySelector('.email').innerHTML = email
}