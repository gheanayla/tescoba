// Probabilitas setiap gejala terhadap masing-masing golongan
const symptomLikelihoods = {
    "gejala1": { manik: 0.63, depresi: 0.0, bipolar: 0.32 }, // Contoh: Merasa sangat bersemangat
    "gejala2": { manik: 0.63, depresi: 0.50, bipolar: 0.42 }, // Contoh: Kehilangan minat
    "gejala3": { manik: 0.38, depresi: 0.0, bipolar: 0.37 }, // Contoh: Suasana hati berubah drastis
    "gejala4": { manik: 0.25, depresi: 0.0, bipolar: 0.32 }, // Contoh: Berbicara sangat cepat
    "gejala5": { manik: 0.50, depresi: 0.0, bipolar: 0.32 }, // Contoh: Sulit tidur
    "gejala6": { manik: 0.63, depresi: 0.0, bipolar: 0.42 }, // Contoh: Kesulitan berkonsentrasi
    "gejala7": { manik: 0.63, depresi: 0.0, bipolar: 0.16 }, // Contoh: Merasa sangat bersemangat
    "gejala8": { manik: 0.38, depresi: 0.0, bipolar: 0.26 }, // Contoh: Kehilangan minat
    "gejala9": { manik: 0.0, depresi: 0.50, bipolar: 0.47 }, // Contoh: Suasana hati berubah drastis
    "gejala10": { manik: 0.0, depresi: 0.42, bipolar: 0.21 }, // Contoh: Berbicara sangat cepat
    "gejala11": { manik: 0.0, depresi: 0.50, bipolar: 0.32 }, // Contoh: Sulit tidur
    "gejala12": { manik: 0.0, depresi: 0.42, bipolar: 0.37 },  // Contoh: Kesulitan berkonsentrasi
    "gejala13": { manik: 0.0, depresi: 0.33, bipolar: 0.26 }, // Contoh: Merasa sangat bersemangat
    "gejala14": { manik: 0.0, depresi: 0.42, bipolar: 0.32 }, // Contoh: Kehilangan minat
    "gejala15": { manik: 0.0, depresi: 0.50, bipolar: 0.42 }, // Contoh: Suasana hati berubah drastis
    "gejala16": { manik: 0.0, depresi: 0.42, bipolar: 0.47 }, // Contoh: Berbicara sangat cepat
    "gejala17": { manik: 0.0, depresi: 0.50, bipolar: 0.16 }, // Contoh: Sulit tidur
    "gejala18": { manik: 0.0, depresi: 0.42, bipolar: 0.47 }, // Contoh: Kesulitan berkonsentrasi
    "gejala19": { manik: 0.0, depresi: 0.50, bipolar: 0.47 }  // Contoh: Kesulitan berkonsentrasi
};


