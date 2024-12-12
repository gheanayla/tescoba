// Ambil query string dari URL
const params = new URLSearchParams(window.location.search);

// Ambil nilai persentase dari query string
const manikPercent = params.get('manik');
const depresiPercent = params.get('depresi');
const bipolarPercent = params.get('bipolar');

// Tampilkan hasil di tabel
document.getElementById('result-manik').textContent = `${manikPercent}%`;
document.getElementById('result-depresi').textContent = `${depresiPercent}%`;
document.getElementById('result-bipolar').textContent = `${bipolarPercent}%`;

// Tampilkan solusi
let solutionText = "<h3>Saran untuk Anda:</h3>";
if (manikPercent > depresiPercent && manikPercent > bipolarPercent) {
    solutionText += "<p>Jangan merasa sendirian, ya. Kalau kamu sedang mengalami gejala manik, penting untuk berbicara dengan seseorang yang peduli dan mencari bantuan dari profesional. Dengan perawatan yang tepat, kondisi ini bisa dikelola. Ingat, kamu berharga dan bisa melewati ini!</p>";
} else if (depresiPercent > manikPercent && depresiPercent > bipolarPercent) {
    solutionText += "<p>Kamu jauh lebih kuat dari yang kamu kira, kok. Pelan-pelan aja, setiap langkah kecil itu udah hebat. Kalau lagi berat, coba cerita ke orang yang kamu percaya atau ambil waktu buat dirimu sendiri. Lakukan hal-hal kecil yang bikin senang. Kalau butuh, cari bantuan profesional itu nggak apa-apa, malah bagus. Tenang aja, hari yang lebih baik pasti datang, dan kamu pantas bahagia!</p>";
} else {
    solutionText += "<p>Jangan khawatir, kamu bisa melewati ini. Menghadapi bipolar memang tantangan, tapi kamu bisa belajar mengelola perasaanmu. Jangan ragu cari dukungan dari orang-orang di sekitarmu atau cari bantuan profesional. Jaga rutinitas sehat, seperti tidur cukup dan bergerak aktif. Ingat, kamu berharga dan bisa belajar hidup lebih seimbang dengan waktu. Jangan putus asa, kamu pasti bisa!</p>";
}

document.getElementById('solution').innerHTML = solutionText;
