document.addEventListener('DOMContentLoaded', () => {
    const openLetterButton = document.getElementById('openLetterButton');
    const envelope = document.getElementById('envelope');
    const card = document.querySelector('.card');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const giftContent = document.getElementById('giftContent');
    const questionSection = document.getElementById('questionSection');

    openLetterButton.addEventListener('click', () => {
        // Sembunyikan tombol/amplop dengan animasi
        envelope.style.opacity = '0';
        envelope.style.transition = 'opacity 0.7s ease-out';
        envelope.addEventListener('transitionend', () => {
            envelope.style.display = 'none';
        });

        // Tampilkan kartu dengan animasi
        card.classList.remove('hidden');
        card.classList.add('open-animation');
    });

    // Uncomment baris di bawah untuk mengaktifkan tombol "Nggak ah" yang bergerak
    /* noButton.addEventListener('mouseover', () => {
    // Membuat tombol "Nggak ah" bergerak secara acak saat kursor mendekat
    noButton.addEventListener('mouseover', () => {
        const buttonRect = noButton.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();
        const newTop = Math.random() * (bodyRect.height - buttonRect.height);
        const newLeft = Math.random() * (bodyRect.width - buttonRect.width);

        // Tombol perlu diposisikan secara absolut agar bisa bergerak
        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    }); */
    });

    yesButton.addEventListener('click', () => {
        // Sembunyikan bagian pertanyaan dan tombol
        questionSection.style.display = 'none';
        
        // Tampilkan konten hadiah
        giftContent.classList.remove('hidden');
        giftContent.style.display = 'block'; // Pastikan terlihat
        // Tambahkan animasi fade-out ke bagian pertanyaan
        questionSection.classList.add('fade-out-animation');

        // Efek confetti!
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        // Setelah animasi selesai, tampilkan kejutan
        questionSection.addEventListener('animationend', () => {
            questionSection.style.display = 'none'; // Sembunyikan secara permanen
            giftContent.classList.remove('hidden'); // Tampilkan konten hadiah

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
            // Efek confetti!
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const particleCount = 50 * (timeLeft / duration);
            // Tembakkan confetti dari sisi kiri dan kanan
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
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
        }, { once: true }); // Opsi { once: true } agar event listener hanya berjalan sekali
    });
});
