<script setup>
import logo from '../assets/infitechdigi-logo.png'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-intro">
        <RouterLink to="/" class="footer-logo" aria-label="InfitechDigi Home">
          <img :src="logo" alt="InfitechDigi — Digital Solution Partner" />
        </RouterLink>
        <p>Website, sistem bisnis, dan solusi digital untuk membantu bisnis tumbuh lebih jauh.</p>
      </div>
      <div>
        <h4>Solusi</h4>
        <RouterLink to="/layanan">Website</RouterLink>
        <RouterLink to="/layanan/sistem-bisnis">Sistem Bisnis</RouterLink>
        <RouterLink to="/layanan/custom-development">Custom Development</RouterLink>
      </div>
      <div>
        <h4>Perusahaan</h4>
        <RouterLink to="/tentang">Tentang</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/demo">Demo</RouterLink>
      </div>
      <div>
        <h4>Hubungi</h4>
        <RouterLink to="/kontak">Konsultasi</RouterLink>
        <RouterLink to="/harga">Harga</RouterLink>
        <a href="mailto:hello@infitechdigi.com">hello@infitechdigi.com</a>
      </div>
    </div>
    <div class="container footer-bottom">© 2026 InfitechDigi. All rights reserved.</div>
  </footer>
</template>
