document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const giftContent = document.getElementById('giftContent');
    const questionSection = document.getElementById('questionSection');

    // noButton.addEventListener('mouseover', () => {
    //     // Dapatkan ukuran window dan tombol
    //     const buttonRect = noButton.getBoundingClientRect();
    //     const bodyRect = document.body.getBoundingClientRect();
    //
    //     // Buat posisi acak baru, pastikan tetap di dalam layar
    //     const newTop = Math.random() * (bodyRect.height - buttonRect.height);
    //     const newLeft = Math.random() * (bodyRect.width - buttonRect.width);
    //
    //     noButton.style.top = `${newTop}px`;
    //     noButton.style.left = `${newLeft}px`;
    // });

    yesButton.addEventListener('click', () => {
        // Sembunyikan bagian pertanyaan dan tombol
        questionSection.style.display = 'none';
        
        // Tampilkan konten hadiah
        giftContent.classList.remove('hidden');
        giftContent.style.display = 'block'; // Pastikan terlihat

        // Efek confetti!
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Tembakkan confetti dari sisi kiri dan kanan
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    });
});
