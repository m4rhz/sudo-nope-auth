# 🛡️ Sudo Nope Auth (Terminal Breach Edition)

> "A highly sophisticated, zero-trust authentication gateway that literally trusts no one. Not even you."

Sistem login interaktif dan sarkastik yang dibangun menggunakan murni HTML, CSS, dan Vanilla JavaScript. Antarmuka ini dirancang menyerupai environment *split-pane* terminal (seperti Tmux/Neovim) dengan tema warna Monokai Classic.

Dibuat sebagai syarat pendaftaran *bootcamp* untuk mendemonstrasikan pemahaman mendalam tentang manipulasi DOM, penanganan *Event Listener*, dan logika *Frontend*, alih-alih menggunakan *tools* keamanan konvensional.

## ✨ Core Features
- **Runaway Button (DOM Physics):** Tombol eksekusi yang secara dinamis menghindari kursor pengguna menggunakan perhitungan koordinat *bounding client* secara *real-time*.
- **Terminal Sarcasm Log:** *Live logger* yang bereaksi terhadap *input* pengguna dan kegagalan interaksi dengan memberikan *feedback* sarkastik.
- **Anti-Bypass Protocol:** *Event listener* yang memblokir percobaan *login* menggunakan tombol `Enter` pada *keyboard*, memaksa interaksi manual.
- **Monokai Split-Pane UI:** Desain antarmuka responsif yang meniru *window multiplexer* murni menggunakan CSS Flexbox.
- **Cinematic Breach Transition:** Transisi CSS *cubic-bezier* yang membelah UI secara visual ketika otorisasi tingkat tinggi (Root) berhasil diberikan.

## 🚀 Tech Stack
- **HTML5:** Struktur semantik.
- **CSS3:** Flexbox, CSS Variables (Monokai Palette), Keyframe Animations, dan Transitions.
- **Vanilla JavaScript:** DOM Manipulation, Event Handling, dan Logika Kondisional.
- **No Frameworks, No Libraries.**

## 🔓 Developer Backdoor (Spoiler Alert)
Karena sistem ini pada dasarnya tidak mengizinkan siapa pun untuk masuk, terdapat protokol *bypass* rahasia untuk keperluan demonstrasi:
1. Masukkan `aqil` pada kolom **username**.
2. Masukkan perintah `sudo` pada kolom **password**.
3. Sistem akan menyerah, menghentikan manipulasi koordinat tombol, dan memberikan akses **[ ROOT ]**.
4. Klik tombol untuk memicu *Cinematic Breach Sequence* dan membuka layar rahasia.

## 📂 File Structure
```text
/
├── index.html        # Main entry point & UI structure
├── css/
│   └── style.css     # Monokai palette, animations, and transitions
├── js/
│   └── script.js     # DOM physics, logging logic, and backdoor protocol
└── README.md         # You are here
```

## 💻 Local Deployment
Cukup clone repository ini dan buka file index.html di browser pilihan Anda. Tidak memerlukan local server atau proses build.

```Bash
git clone https://github.com/m4rhz/sudo-nope-auth.git
cd sudo-nope-auth
```
