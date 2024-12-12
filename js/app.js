// Ambil elemen tombol Submit
const submitButton = document.getElementById('submit');

// Tambahkan event listener pada tombol Submit
submitButton.addEventListener('click', () => {
    const selectedGejala = [
        document.getElementById('gejala1').checked,
        document.getElementById('gejala2').checked,
        document.getElementById('gejala3').checked,
        document.getElementById('gejala4').checked,
        document.getElementById('gejala5').checked,
        document.getElementById('gejala6').checked,
        document.getElementById('gejala7').checked,
        document.getElementById('gejala8').checked,
        document.getElementById('gejala9').checked,
        document.getElementById('gejala10').checked,
        document.getElementById('gejala11').checked,
        document.getElementById('gejala12').checked,
        document.getElementById('gejala13').checked,
        document.getElementById('gejala14').checked,
        document.getElementById('gejala15').checked,
        document.getElementById('gejala16').checked,
        document.getElementById('gejala17').checked,
        document.getElementById('gejala18').checked,
        document.getElementById('gejala19').checked
    ];

    // Probabilitas prior (P(A))
    const prior = {
        manik: 0.3,  // Probabilitas awal untuk gangguan manik
        depresi: 0.3, // Probabilitas awal untuk gangguan depresi
        bipolar: 0.5  // Probabilitas awal untuk gangguan bipolar
    };

    // Probabilitas gejala berdasarkan gangguan (likelihood P(B|A))
    const probabilities = {
        manik: { gejala1: 0.63, gejala2: 0.63, gejala3: 0.38, gejala4: 0.25, gejala5: 0.50, gejala6: 0.63, gejala7: 0.63, gejala8: 0.38, gejala9: 0.0, gejala10: 0.0, gejala11: 0.0, gejala12: 0.0, gejala13: 0.0, gejala14: 0.0, gejala15: 0.0, gejala16: 0.0, gejala17: 0.0, gejala18: 0.0, gejala19: 0.0 },
        depresi: { gejala9: 0.50, gejala10: 0.42, gejala11: 0.50, gejala12: 0.42, gejala13: 0.33, gejala14: 0.42, gejala15: 0.50, gejala16: 0.42, gejala17: 0.50, gejala18: 0.42, gejala19: 0.50, gejala2: 0.50 },
        bipolar: { gejala1: 0.32, gejala2: 0.42, gejala3: 0.37, gejala4: 0.32, gejala5: 0.32, gejala6: 0.42, gejala7: 0.16, gejala8: 0.26, gejala9: 0.47, gejala10: 0.21, gejala11: 0.32, gejala12: 0.37, gejala13: 0.26, gejala14: 0.32, gejala15: 0.42, gejala16: 0.47, gejala17: 0.16, gejala18: 0.47, gejala19: 0.47 }
    };

    // Probabilitas evidence (P(B))
    let evidence = 0;
    selectedGejala.forEach((isChecked, index) => {
        const gejalaKey = `gejala${index + 1}`;
        if (isChecked) {
            evidence += 
                (probabilities.manik[gejalaKey] || 0) * prior.manik +
                (probabilities.depresi[gejalaKey] || 0) * prior.depresi +
                (probabilities.bipolar[gejalaKey] || 0) * prior.bipolar;
        }
    });

    // Hitung probabilitas posterior (P(A|B)) untuk setiap gangguan
    let manikPosterior = prior.manik;
    let depresiPosterior = prior.depresi;
    let bipolarPosterior = prior.bipolar;

    selectedGejala.forEach((isChecked, index) => {
        const gejalaKey = `gejala${index + 1}`;
        if (isChecked) {
            manikPosterior *= probabilities.manik[gejalaKey] || 0;
            depresiPosterior *= probabilities.depresi[gejalaKey] || 0;
            bipolarPosterior *= probabilities.bipolar[gejalaKey] || 0;
        }
    });

    // Normalisasi posterior agar total menjadi 1
    const totalPosterior = manikPosterior + depresiPosterior + bipolarPosterior;
    manikPosterior = (manikPosterior / totalPosterior) * 100;
    depresiPosterior = (depresiPosterior / totalPosterior) * 100;
    bipolarPosterior = (bipolarPosterior / totalPosterior) * 100;

    // Redirect ke halaman hasil dengan query string
    const queryParams = new URLSearchParams({
        manik: manikPosterior.toFixed(2),
        depresi: depresiPosterior.toFixed(2),
        bipolar: bipolarPosterior.toFixed(2)
    }).toString();

    window.location.href = `hasil.html?${queryParams}`;
});
