document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang kita butuhkan
    const openLetterButton = document.getElementById('openLetterButton');
    const envelope = document.getElementById('envelope');
    const card = document.querySelector('.card');
    const backgroundMusic = document.getElementById('backgroundMusic');

    const questionSection = document.getElementById('questionSection');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const giftContent = document.getElementById('giftContent');
    const closeModal = document.getElementById('closeModal');

    // 1. Logika untuk membuka surat
    if (openLetterButton) {
        openLetterButton.addEventListener('click', () => {
            // Sembunyikan amplop/tombol awal
            if (envelope) {
                envelope.style.display = 'none';
            }
            // Tampilkan kartu ucapan
            if (card) {
                card.classList.remove('hidden');
            }
            // Putar musik latar
            if (backgroundMusic) {
                backgroundMusic.loop = true;
                backgroundMusic.play().catch(error => {
                    // Browser modern mungkin memblokir autoplay, ini adalah fallback
                    console.log("Pemutaran musik otomatis diblokir oleh browser.", error);
                });
            }
        });
    }

    // Sembunyikan konten hadiah di awal
    if (giftContent) {
        giftContent.style.display = 'none';
    }

    // 2. Logika untuk tombol "Nggak ah" yang bergerak
    if (noButton) {
        const moveButton = () => {
            const buttonRect = noButton.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect();

            // Buat posisi acak baru di dalam layar
            const newTop = Math.random() * (bodyRect.height - buttonRect.height);
            const newLeft = Math.random() * (bodyRect.width - buttonRect.width);

            // Tombol harus 'absolute' agar bisa dipindah posisinya
            noButton.style.position = 'absolute';
            noButton.style.top = `${newTop}px`;
            noButton.style.left = `${newLeft}px`;
        };

        noButton.addEventListener('mouseover', moveButton);
        
        // Tambahkan event 'touchstart' untuk support di HP (layar sentuh)
        noButton.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Mencegah tombol ter-klik
            moveButton();
        });
    }

    // 3. Logika untuk tombol "Mau dong!"
    if (yesButton) {
        yesButton.addEventListener('click', () => {
            // Tampilkan konten hadiah sebagai Pop-up
            if (giftContent) {
                giftContent.classList.remove('hidden');
                giftContent.style.display = 'flex'; // Gunakan flex agar rata tengah
            }

            // Jalankan efek konfeti!
            if (typeof confetti === 'function') {
                const duration = 5 * 1000;
                const animationEnd = Date.now() + duration;
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                const interval = setInterval(function() {
                    const timeLeft = animationEnd - Date.now();
                    if (timeLeft <= 0) return clearInterval(interval);

                    const particleCount = 50 * (timeLeft / duration);
                    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
                }, 250);
            }
        });
    }

    // 4. Logika untuk menutup Pop-up
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (giftContent) {
                giftContent.style.display = 'none';
            }
        });
    }

    // Tutup pop-up jika user klik di luar kotak putih (di area gelap)
    window.addEventListener('click', (e) => {
        if (e.target === giftContent) {
            giftContent.style.display = 'none';
        }
    });
});