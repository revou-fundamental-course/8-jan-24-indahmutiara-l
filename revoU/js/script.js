function toggleContent(type) {
    if (type === 'luas') {
        document.getElementById('luas').style.display = 'block';
        document.getElementById('keliling').style.display = 'none';
    } else if (type === 'keliling') {
        document.getElementById('luas').style.display = 'none';
        document.getElementById('keliling').style.display = 'block';
    }
}

function hitungKeliling() {
    var sisi = document.querySelector('.input-text').value;
    if (isNaN(sisi)) {
        alert('Masukkan angka sebagai panjang sisi.');
        return;
    }
    var keliling = 4 * parseFloat(sisi);
    var resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = 'Keliling Persegi: ' + keliling;
}

function hitungLuas() {
    var sisi = document.getElementById("inputSisi").value;
    if (sisi !== "" && !isNaN(sisi)) {
        var luas = sisi * sisi;
        document.getElementById("resultContainer").innerHTML = "Luas Persegi: " + luas;
    } else {
        alert("Masukkan nilai sisi yang valid");
    }
}
