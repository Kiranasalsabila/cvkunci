document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('#mainContent > .section');
  let storedPassword = localStorage.getItem('password') || 'default123';

  function showSection(targetId) {
    sections.forEach(section => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });
  }

  function askForPassword() {
    const inputPassword = prompt('Masukkan password untuk mengakses situs:');
    if (inputPassword === '/setingg') {
      const newPassword = prompt('Masukkan password baru:');
      if (newPassword) {
        storedPassword = newPassword;
        localStorage.setItem('password', newPassword);
        alert('Password berhasil diubah!');
      } else {
        alert('Password tidak boleh kosong!');
      }
    } else if (inputPassword !== storedPassword) {
      alert('Password salah! Mengakses situs tidak diizinkan.');
      document.body.innerHTML = ''; // Hapus konten jika salah password
    }
  }

  // Proteksi password
  askForPassword();

  // Event listener untuk navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');
      showSection(targetId);
    });
  });

  // Menampilkan bagian default
  showSection('convertTxtToVcf');

  // Event listener untuk input file TXT dan penentuan nama file VCF
  document.getElementById('txtFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
      const reader = new FileReader();
      reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('txtContentBox').value = content;

        // Jika input nama VCF kosong, gunakan nama file TXT
        const vcfInput = document.getElementById('vcfFilenameInput');
        if (!vcfInput.value.trim()) {
          vcfInput.value = fileNameWithoutExtension;
        }
      };
      reader.readAsText(file);
    }
  });

  // Konversi TXT ke VCF
  document.getElementById('convertTxtToVcfButton').addEventListener('click', function() {
    const txtContent = document.getElementById('txtContentBox').value.trim();
    const adminName = document.getElementById('adminNameInput').value.trim() || 'Admin';
    const navyName = document.getElementById('navyNameInput').value.trim() || 'Navy';
    const anggotaName = document.getElementById('anggotaNameInput').value