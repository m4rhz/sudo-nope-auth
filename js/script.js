const runawayBtn = document.getElementById('runaway-btn');
const btnContainer = document.querySelector('.button-container');
const terminalLog = document.getElementById('terminal-log');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

let dodgeCount = 0;
let isHacked = false;

const insults = [
    "[SERVER] Terlalu lambat! Kursor lu berat ya?",
    "[SERVER] Niat mau login nggak sih?",
    "[SERVER] Bahkan siput lebih cepat dari respon lu.",
    "[SERVER] Alert: Mendeteksi pergerakan mouse yang sangat amatir.",
    "[SERVER] Error 404: Skill nge-klik tidak ditemukan.",
    "[SERVER] Mau masuk sistem? Kejar dulu tombolnya wkwk.",
    "[SERVER] Klik aku jika kau bisa~"
];

function addLog(message, type = 'comment') {
    const time = new Date().toLocaleTimeString('id-ID', { hour12: false });
    const logEl = document.createElement('div');
    logEl.className = `log-line ${type}`;
    logEl.textContent = `[${time}] ${message}`;

    terminalLog.appendChild(logEl);
    terminalLog.scrollTop = terminalLog.scrollHeight;
}

// FUNGSI RAHASIA: Pengecek Developer Backdoor
function checkBackdoor() {
    if (usernameInput.value.toLowerCase() === 'aqil' && passwordInput.value === 'sudo') {
        if (!isHacked) {
            isHacked = true;
            addLog("CRITICAL OVERRIDE: Kredensial superuser terdeteksi. Menonaktifkan protokol pertahanan.", "success");

            runawayBtn.textContent = "[ ROOT ACCESS ]";
            runawayBtn.style.backgroundColor = "var(--green)";
            runawayBtn.style.color = "#000";
            runawayBtn.style.boxShadow = "0 0 15px var(--green)";

            runawayBtn.style.left = '50%';
            runawayBtn.style.top = '50%';
            runawayBtn.style.transform = 'translate(-50%, -50%)';
        }
    } else {
        if (isHacked) {
            isHacked = false;
            addLog("SYSTEM RESTORED: Superuser keluar. Protokol pertahanan diaktifkan kembali.", "warning");

            runawayBtn.textContent = "Execute Login";
            runawayBtn.style.backgroundColor = "var(--purple)";
            runawayBtn.style.color = "var(--fg)";
            runawayBtn.style.boxShadow = "none";
        }
    }
}

usernameInput.addEventListener('input', checkBackdoor);
passwordInput.addEventListener('input', checkBackdoor);

// Fitur: Tombol yang lari menghindar
runawayBtn.addEventListener('mouseover', () => {
    if (isHacked) return;

    const containerRect = btnContainer.getBoundingClientRect();
    const btnRect = runawayBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    runawayBtn.style.left = `${randomX}px`;
    runawayBtn.style.top = `${randomY}px`;
    runawayBtn.style.transform = 'none';

    dodgeCount++;

    if (dodgeCount % 3 === 0) {
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        addLog(randomInsult, 'warning');
    }
});

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    if (val.toLowerCase() === 'admin' || val === '12345') {
        addLog("CRITICAL: Password pasaran terdeteksi. Sistem menertawakan pilihan keamanan Anda.", "error");
    }
});

// Fitur: Anti-Cheat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (document.activeElement === usernameInput || document.activeElement === passwordInput || document.activeElement === runawayBtn) {
            if (isHacked) {
                runawayBtn.click();
                return;
            }

            addLog("SECURITY: Usaha bypass pakai tombol 'Enter' terdeteksi. Ditolak! Klik pakai mouse kalau berani.", "error");

            document.querySelector('.window-container').style.transform = 'translateX(10px)';
            setTimeout(() => {
                document.querySelector('.window-container').style.transform = 'translateX(-10px)';
                setTimeout(() => {
                    document.querySelector('.window-container').style.transform = 'translateX(0)';
                }, 100);
            }, 100);
        }
    }
});

// Fitur: Reaksi saat tombol diklik & Transisi Final
runawayBtn.addEventListener('click', () => {
    if (isHacked) {
        addLog("ACCESS GRANTED: Inisiasi protokol bypass...", "success");
        runawayBtn.textContent = "UNLOCKING...";

        // Eksekusi Efek Pintu Terbelah
        setTimeout(() => {
            document.querySelector('.window-container').classList.add('unlocked');

            document.querySelector('.status-bar').style.opacity = '0';
            document.querySelector('.status-bar').style.transition = 'opacity 0.5s ease';

            document.getElementById('success-screen').classList.add('active');
        }, 1000);

    } else {
        addLog("ACCESS DENIED: Oke, lu berhasil nge-klik. Tapi boong, gua tetep nggak mau ngasih akses.", "error");
        runawayBtn.textContent = "Coba Lagi";

        setTimeout(() => {
            runawayBtn.style.left = '50%';
            runawayBtn.style.top = '50%';
            runawayBtn.style.transform = 'translate(-50%, -50%)';
            dodgeCount = 0;
        }, 2000);
    }
});
