import { demoCatalog, getDemoIndustry } from './demos'

export const services = [
  { slug: 'mulai-digital', title: 'Mulai Digital', price: 'Mulai Rp990 ribu', desc: 'Fondasi digital praktis untuk bisnis yang ingin lebih mudah ditemukan, dihubungi, dan dikelola.' },
  { slug: 'landing-page', title: 'Landing Page', price: 'Mulai Rp1,5 juta', desc: 'Halaman fokus conversion untuk campaign, promosi, produk, event, atau satu penawaran spesifik.' },
  { slug: 'company-profile', title: 'Company Profile', price: 'Mulai Rp3,5 juta', desc: 'Website profesional untuk meningkatkan kredibilitas dan menjelaskan bisnis secara lengkap.' },
  { slug: 'toko-online', title: 'Toko Online', price: 'Mulai Rp8 juta', desc: 'Katalog, pemesanan, dan alur penjualan online yang disesuaikan dengan kebutuhan bisnis lokal.' },
  { slug: 'sistem-bisnis', title: 'Sistem Bisnis', price: 'Estimasi mulai Rp15 juta', desc: 'Rapikan operasional, data, stok, pelanggan, laporan, dan workflow internal dalam satu sistem.' },
  { slug: 'custom-development', title: 'Custom Development', price: 'Estimasi mulai Rp20 juta', desc: 'Web app, mobile app, portal, API, dan sistem khusus yang mengikuti proses bisnis Anda.' },
  { slug: 'managed-website', title: 'Managed Website', price: 'Mulai Rp790 ribu/tahun', desc: 'Technical care agar website tetap terpantau, aman, dan terjaga setelah go-live.' },
]

export const problems = [
  ['Bisnis terlihat lebih profesional', 'Company Profile', 'Bangun kehadiran digital yang meningkatkan kredibilitas bisnis.'],
  ['Dapatkan lebih banyak calon pelanggan', 'Landing Page', 'Buat halaman khusus untuk campaign dan conversion.'],
  ['Mulai jualan secara online', 'Toko Online', 'Tampilkan produk dan mudahkan pelanggan melakukan pemesanan.'],
  ['Operasional bisnis masih manual', 'Sistem Bisnis', 'Rapikan proses internal, data, laporan, dan workflow.'],
  ['Punya kebutuhan sistem khusus', 'Custom Development', 'Bangun aplikasi sesuai alur kerja bisnis Anda.'],
]

// Compatibility projection for the current homepage and /demo UI.
// Phase 4/6 will consume demoCatalog objects directly.
export const demos = demoCatalog.map((demo) => [
  getDemoIndustry(demo.industry)?.name ?? demo.industry,
  demo.description,
])

export const pricingCategories = [
  {
    slug: 'mulai-digital', name: 'Mulai Digital', kicker: 'Fondasi Digital',
    intro: 'Paket setup praktis untuk bisnis lokal yang ingin merapikan komunikasi, kehadiran online, dan pencatatan pelanggan tanpa langsung membangun website atau sistem besar.',
    priceMode: 'fixed',
    packages: [
      {
        name:'Starter', price:'Rp990 ribu', audience:'Untuk bisnis yang ingin membangun fondasi digital dasar dengan cepat.',
        features:['Konsultasi digital awal','Setup komunikasi pelanggan','Google Business Profile','Database pelanggan dasar','1 digital form sesuai kebutuhan','Training online 30 menit','Technical support 14 hari']
      },
      {
        name:'Business', price:'Rp1,9 juta', audience:'Untuk bisnis yang ingin fondasi digital sekaligus pencatatan operasional dasar yang lebih rapi.', recommended:true,
        features:['Semua fitur Starter','Setup database pelanggan lebih lengkap','Penjualan & pencatatan kas dasar','Dashboard ringkas','Template invoice digital','Hingga 3 digital form','Training online 1 jam','Technical support 30 hari']
      },
    ],
    compare: [
      ['Konsultasi Digital','✓','✓'],
      ['Komunikasi Pelanggan','✓','✓'],
      ['Google Business Profile','✓','✓'],
      ['Database Pelanggan','Dasar','Lebih lengkap'],
      ['Digital Form','1 form','Hingga 3 form'],
      ['Penjualan & Kas','—','✓'],
      ['Dashboard Ringkas','—','✓'],
      ['Invoice Digital','—','✓'],
      ['Training','30 menit','1 jam'],
      ['Technical Support','14 hari','30 hari'],
    ],
    note: 'Paket Mulai Digital tidak menggunakan spreadsheet sebagai value utama. Tools dipilih berdasarkan kebutuhan setup dan kemudahan penggunaan client.'
  },
  {
    slug:'landing-page', name:'Landing Page', kicker:'Website Conversion',
    intro:'Untuk campaign, iklan, event, produk, jasa, atau satu penawaran yang membutuhkan halaman dengan fokus CTA yang jelas.',
    priceMode: 'fixed',
    packages:[
      {name:'Starter',price:'Rp1,5 juta',audience:'Untuk promosi sederhana dan cepat go-live.',features:['1 landing page hingga ±4 section inti','Responsive desktop & mobile','CTA WhatsApp/kontak','Basic contact form','SEO dasar & social preview','Domain .com 1 tahun','Managed hosting 2 GB','SSL & deployment','Basic Technical Care 12 bulan']},
      {name:'Business',price:'Rp2,75 juta',audience:'Untuk bisnis yang membutuhkan landing page lebih lengkap untuk campaign.',recommended:true,features:['Semua fitur Starter','Hingga ±8 section','Custom design','Form inquiry lebih lengkap','Analytics setup','Optimasi conversion dasar','Managed hosting 5 GB','Basic Technical Care 12 bulan']},
      {name:'Premium',price:'Rp4 juta',audience:'Untuk campaign prioritas dengan visual, struktur, atau integrasi lebih tinggi.',features:['Semua fitur Business','Hingga ±12 section','Premium custom design','Custom interaction sesuai scope','Integrasi tambahan sesuai scope','Optimasi SEO on-page lebih lengkap','Managed hosting 10 GB','Basic Technical Care 12 bulan']},
    ],
    compare:[
      ['Jumlah section','±4','±8','±12'],['Desain','Custom ringan','Custom','Premium custom'],['Responsive','✓','✓','✓'],['CTA WhatsApp','✓','✓','✓'],['Contact form','Basic','Lengkap','Lengkap'],['Analytics','—','✓','✓'],['Integrasi tambahan','—','Opsional','Sesuai scope'],['Domain .com 1 tahun','✓','✓','✓'],['Managed hosting','2 GB','5 GB','10 GB'],['SSL','✓','✓','✓'],['Basic Technical Care','12 bulan','12 bulan','12 bulan'],['Business Email','Add-on','Add-on','Add-on']
    ]
  },
  {
    slug:'company-profile', name:'Company Profile', kicker:'Website Kredibilitas',
    intro:'Untuk bisnis yang membutuhkan website profesional multi-halaman agar profil, layanan, pengalaman, dan kontak lebih meyakinkan.',
    priceMode: 'fixed',
    packages:[
      {name:'Basic',price:'Rp3,5 juta',regularPrice:'Rp4 juta',priceNote:'harga promo',audience:'Untuk bisnis lokal yang membutuhkan company profile profesional dengan struktur inti.',features:['Website multi-halaman inti','Home, Tentang, Layanan, Kontak','Responsive design','WhatsApp & inquiry','Portfolio/project section dasar','SEO dasar','Domain .com 1 tahun','Managed hosting 5 GB','SSL & deployment','Basic Technical Care 12 bulan']},
      {name:'Business',price:'Rp8,5 juta',audience:'Untuk perusahaan yang membutuhkan struktur, konten, dan pengelolaan lebih lengkap.',recommended:true,features:['Semua fitur Basic','Struktur halaman lebih lengkap','Portfolio/project showcase lengkap','CMS sesuai scope','Analytics setup','SEO on-page lebih lengkap','Managed hosting 10 GB','Basic Technical Care 12 bulan']},
      {name:'Premium',price:'Rp12,5 juta',audience:'Untuk perusahaan dengan kebutuhan presentasi, interaksi, dan integrasi lebih kompleks.',features:['Semua fitur Business','Premium custom UI/interaction','Struktur konten kompleks','Integrasi sesuai scope','Advanced showcase','Managed hosting 20 GB','Prioritas refinement','Basic Technical Care 12 bulan']},
    ],
    compare:[
      ['Multi-halaman','Inti','Lebih lengkap','Kompleks'],['Custom Design','✓','✓','Premium'],['Portfolio/Project Showcase','Dasar','Lengkap','Advanced'],['CMS','Opsional','Sesuai scope','Sesuai scope'],['Analytics','—','✓','✓'],['Integrasi','—','Opsional','Sesuai scope'],['Domain .com 1 tahun','✓','✓','✓'],['Managed hosting','5 GB','10 GB','20 GB'],['SSL','✓','✓','✓'],['Basic Technical Care','12 bulan','12 bulan','12 bulan'],['Business Email','Add-on','Add-on','Add-on']
    ]
  },
  {
    slug:'toko-online', name:'Toko Online', kicker:'Digital Commerce',
    intro:'Untuk bisnis yang ingin punya katalog dan alur pemesanan sendiri—mulai dari CTA WhatsApp hingga checkout dan payment gateway sesuai kebutuhan.',
    priceMode: 'fixed',
    packages:[
      {name:'Starter',price:'Rp8 juta',audience:'Untuk bisnis yang ingin katalog online dan order sederhana melalui WhatsApp.',features:['Katalog & detail produk','Kategori produk','CTA order ke WhatsApp','Dashboard pengelolaan dasar','Responsive design','Domain .com 1 tahun','Managed hosting 10 GB','SSL & deployment','Basic Technical Care 12 bulan']},
      {name:'Business',price:'Rp15 juta',audience:'Untuk toko yang membutuhkan checkout dan pengelolaan order lebih lengkap.',recommended:true,features:['Semua fitur Starter','Cart & checkout','Manajemen order','Payment gateway sesuai provider','Promo/voucher sesuai scope','Analytics setup','Managed hosting 20 GB','Basic Technical Care 12 bulan']},
      {name:'Premium',price:'Rp25 juta',audience:'Untuk commerce dengan workflow, membership, atau integrasi lebih kompleks.',features:['Semua fitur Business','Custom workflow order','Role/admin tambahan sesuai scope','Integrasi sistem/API','Fitur commerce custom','Managed hosting 40 GB','Prioritas testing & support','Basic Technical Care 12 bulan']},
    ],
    compare:[
      ['Katalog produk','✓','✓','✓'],['Order via WhatsApp','✓','✓','✓'],['Cart & checkout','—','✓','✓'],['Payment gateway','—','Sesuai provider','Sesuai provider'],['Manajemen order','Dasar','✓','Advanced'],['Promo/voucher','—','Sesuai scope','✓'],['Integrasi API','—','Opsional','Sesuai scope'],['Domain .com 1 tahun','✓','✓','✓'],['Managed hosting','10 GB','20 GB','40 GB'],['SSL','✓','✓','✓'],['Basic Technical Care','12 bulan','12 bulan','12 bulan'],['Business Email','Add-on','Add-on','Add-on']
    ],
    note: 'Starter sengaja tidak mewajibkan payment gateway. Untuk banyak bisnis lokal, katalog + CTA WhatsApp adalah alur paling sederhana untuk mulai.'
  },
  {
    slug:'sistem-bisnis', name:'Sistem Bisnis', kicker:'Operasional & Automation',
    intro:'Untuk digitalisasi proses internal, dashboard, role, laporan, dan workflow. Angka di bawah adalah estimasi awal; quotation final dibuat setelah discovery.',
    priceMode: 'estimate',
    packages:[
      {name:'Starter',price:'Estimasi mulai Rp15 juta',audience:'Untuk satu proses atau modul inti yang ingin didigitalisasi.',features:['Discovery kebutuhan','1 scope/modul utama','User & role dasar','Database','Dashboard dasar','Testing & deployment','Training/handover']},
      {name:'Business',price:'Estimasi mulai Rp35 juta',audience:'Untuk beberapa proses bisnis yang saling terhubung.',recommended:true,features:['Semua fitur Starter','Multi-modul sesuai scope','Role & permission lebih lengkap','Dashboard/reporting','Workflow automation','Integrasi sesuai scope','Support implementasi']},
      {name:'Enterprise',price:'Custom quotation',audience:'Untuk kebutuhan organisasi yang kompleks, lintas unit, atau integrasi enterprise.',features:['Discovery mendalam','Multi-modul kompleks','Integrasi sistem','Advanced reporting','Workflow & approval','Dokumentasi sesuai scope','Deployment/support terencana']},
    ],
    compare:[['Discovery','✓','✓','Mendalam'],['Modul','1 utama','Multi-modul','Kompleks'],['Role & permission','Dasar','Lengkap','Advanced'],['Dashboard/reporting','Dasar','✓','Advanced'],['Automation','Opsional','✓','✓'],['Integrasi','—','Sesuai scope','Kompleks'],['Harga final','Setelah discovery','Setelah discovery','Quotation']]
  },
  {
    slug:'custom-development', name:'Custom Development', kicker:'Software Sesuai Kebutuhan',
    intro:'Untuk web app, mobile app, portal, API, integrasi, atau produk digital yang tidak cocok menggunakan solusi siap pakai. Harga final ditentukan setelah discovery.',
    priceMode: 'estimate',
    packages:[
      {name:'Starter / MVP',price:'Estimasi mulai Rp20 juta',audience:'Untuk MVP atau aplikasi dengan scope terfokus.',features:['Requirement discovery','UI/UX sesuai scope','Core application','Database & authentication','Testing','Deployment','Handover']},
      {name:'Business',price:'Estimasi mulai Rp50 juta',audience:'Untuk aplikasi bisnis dengan workflow, role, dan integrasi lebih lengkap.',recommended:true,features:['Semua fitur Starter','Multi-role/workflow','Dashboard/reporting','API/integrasi','QA lebih lengkap','Dokumentasi sesuai scope','Support implementasi']},
      {name:'Enterprise',price:'Custom quotation',audience:'Untuk platform kompleks, integrasi luas, atau kebutuhan enterprise.',features:['Discovery & architecture','Web/mobile/API sesuai kebutuhan','Integrasi enterprise','Security & deployment planning','Dokumentasi','Milestone delivery','Support sesuai scope/SLA']},
    ],
    compare:[['Discovery','✓','✓','Mendalam'],['UI/UX','Sesuai scope','✓','✓'],['Multi-role/workflow','Terbatas','✓','✓'],['API/integrasi','Opsional','✓','Advanced'],['Platform','Terfokus','Lebih lengkap','Sesuai kebutuhan'],['Harga final','Setelah discovery','Setelah discovery','Quotation']]
  }
]

export const managedPlans = [
  {name:'Basic',price:'Rp790 ribu/tahun',desc:'Untuk landing page atau website sederhana dengan kebutuhan technical care dasar.',features:['Managed hosting hingga 5 GB','SSL & konfigurasi teknis','Backup terjadwal','Monitoring availability dasar','Update teknis sesuai scope','Technical support']},
  {name:'Plus',price:'Rp1,29 juta/tahun',desc:'Untuk website bisnis yang membutuhkan resource dan monitoring lebih aktif.',recommended:true,features:['Managed hosting hingga 10 GB','Semua fitur Basic','Backup lebih rutin','Monitoring lebih lengkap','Recovery support','Prioritas technical support']},
  {name:'Pro',price:'Rp1,99 juta/tahun',desc:'Untuk website prioritas atau commerce dengan kebutuhan resource dan technical care lebih tinggi.',features:['Managed hosting hingga 20 GB','Semua fitur Plus','Monitoring lebih intensif','Prioritas penanganan','Review teknis berkala','Support teknis prioritas']}
]

export const pricingPolicy = {
  websiteYearOne: [
    'Domain .com 1 tahun sesuai paket',
    'Managed cloud hosting sesuai resource paket',
    'SSL certificate',
    'Deployment & konfigurasi dasar',
    'Basic Technical Care 12 bulan',
  ],
  renewal: [
    'Mulai tahun kedua, website dapat dilanjutkan dengan Managed Website Plan yang sesuai kebutuhan',
    'Biaya domain renewal mengikuti harga registrar/TLD dan ditagihkan terpisah agar transparan',
    'Lisensi pihak ketiga, email provider, payment gateway, atau layanan eksternal tidak termasuk kecuali disebutkan di proposal',
  ],
  maintenanceBoundary: 'Technical maintenance mencakup aspek teknis website. Update konten rutin, desain materi baru, penambahan fitur, dan input data berkala bukan bagian technical maintenance.',
}

export const pricingAddOns = [
  {name:'Business Email Setup', price:'Sesuai provider & jumlah akun', note:'Setup Google Workspace/Zoho atau provider lain. Biaya lisensi provider dibayar terpisah.'},
  {name:'Domain Tambahan / TLD Khusus', price:'Sesuai registrar', note:'Untuk .id, .co.id, atau domain tambahan.'},
  {name:'Copywriting / Content Assistance', price:'Custom quotation', note:'Untuk kebutuhan penulisan atau penyusunan konten di luar scope paket.'},
  {name:'Integrasi Pihak Ketiga', price:'Custom quotation', note:'API, booking, CRM, payment, automation, dan integrasi lainnya.'},
  {name:'Data / Product Entry', price:'Custom quotation', note:'Untuk input katalog, migrasi data, atau bulk content setup.'},
  {name:'Content Update Berkala', price:'Custom quotation', note:'Layanan terpisah dari technical maintenance.'},
]

export const serviceDetails = {
  'mulai-digital': {
    title:'Mulai Digital', eyebrow:'Fondasi Digital untuk Bisnis Lokal', price:'Mulai Rp990 ribu',
    hero:'Mulai digital dengan fondasi yang benar—tanpa harus langsung rumit.',
    lead:'Kami membantu menyiapkan kanal, profil, komunikasi, dan proses digital dasar agar bisnis Anda lebih mudah ditemukan dan dihubungi.',
    pains:['Bisnis sulit ditemukan secara online','Informasi bisnis tersebar di banyak tempat','Komunikasi pelanggan belum tertata','Belum tahu harus mulai digital dari mana'],
    outcomes:[['Lebih mudah ditemukan','Profil bisnis dan informasi utama disiapkan dengan lebih rapi.'],['Lebih mudah dihubungi','Kanal komunikasi pelanggan dibuat lebih jelas.'],['Fondasi siap berkembang','Setup awal dibuat agar nantinya mudah ditingkatkan ke website atau sistem.']],
    audience:['UMKM dan bisnis lokal yang baru mulai digital','Bisnis yang mengandalkan WhatsApp dan media sosial','Usaha yang ingin merapikan kehadiran online','Tim kecil yang membutuhkan setup praktis'],
    deliverables:['Konsultasi digital awal','Setup komunikasi pelanggan','Google Business Profile','Digital form sesuai paket','Database pelanggan','Penjualan/kas/dashboard/invoice pada paket Business','Training dan support'],
    process:['Discovery singkat','Audit kondisi digital','Setup & konfigurasi','Review bersama','Training','Support awal'],
    timeline:'Umumnya beberapa hari kerja, bergantung pada kesiapan akun, data, dan scope setup.',
    needs:['Informasi bisnis','Logo dan identitas brand jika ada','Nomor/kontak bisnis','Akses akun yang relevan'],
    faq:[['Apakah paket ini menggunakan spreadsheet sebagai layanan utama?','Tidak. Mulai Digital difokuskan pada outcome bisnis dan setup praktis. Tools dipilih sesuai kebutuhan, bukan dijual sebagai spreadsheet.'],['Apakah saya harus punya website dulu?','Tidak. Mulai Digital justru cocok untuk bisnis yang ingin membangun fondasi sebelum masuk ke website atau sistem yang lebih kompleks.'],['Apakah paket ini termasuk pembuatan website?','Tidak secara otomatis. Website tersedia sebagai layanan Landing Page, Company Profile, atau Toko Online.'],['Apakah tim saya akan diajarkan menggunakannya?','Ya, training disesuaikan dengan paket yang dipilih.']]
  },
  'landing-page': {
    title:'Landing Page', eyebrow:'Website untuk Campaign & Conversion', price:'Mulai Rp1,5 juta',
    hero:'Satu halaman yang fokus membawa pengunjung menuju tindakan.',
    lead:'Landing Page InfitechDigi dirancang untuk menjelaskan penawaran dengan cepat, membangun kepercayaan, dan mengarahkan calon pelanggan ke WhatsApp, form, atau CTA utama.',
    pains:['Iklan mengarah hanya ke Instagram atau WhatsApp','Calon pelanggan harus bertanya informasi yang sama berulang kali','Penawaran belum terlihat profesional','Campaign belum punya halaman khusus untuk conversion'],
    outcomes:[['Penawaran lebih jelas','Semua informasi penting disusun dalam alur yang mudah dipahami.'],['CTA lebih terarah','Pengunjung diarahkan ke WhatsApp, form, atau tindakan utama.'],['Lebih siap untuk campaign','Punya destination khusus untuk Meta Ads, promosi, event, atau launching.']],
    audience:['Bisnis yang menjalankan Meta Ads','Produk/jasa dengan satu penawaran utama','Event dan campaign','Bisnis lokal yang belum membutuhkan website multi-halaman'],
    deliverables:['Custom landing page','Responsive desktop & mobile','CTA WhatsApp/kontak','Form sesuai paket','SEO dasar & social preview','Domain, hosting, SSL dan deployment sesuai paket'],
    process:['Discovery & tujuan conversion','Pengumpulan konten','Struktur & design','Development','Review','Go-live & technical care'],
    timeline:'Umumnya 5–10 hari kerja untuk scope standar setelah materi utama lengkap.',
    needs:['Logo/brand','Informasi penawaran','Foto atau aset utama','CTA/kontak','Referensi bila ada'],
    demo:true,
    faq:[['Apakah cocok untuk Meta Ads?','Ya. Landing Page dapat menjadi destination khusus campaign sehingga informasi dan CTA lebih terarah.'],['Apakah domain dan hosting termasuk?','Paket website mencakup domain dan hosting tahun pertama sesuai ketentuan paket.'],['Bisa memakai domain yang sudah ada?','Bisa selama akses pengelolaan domain tersedia.'],['Apakah maintenance termasuk update konten?','Tidak. Technical maintenance berfokus pada aspek teknis; update konten rutin bukan layanan maintenance.']]
  },
  'company-profile': {
    title:'Company Profile', eyebrow:'Website untuk Kredibilitas Bisnis', price:'Mulai Rp3,5 juta',
    hero:'Tampilkan bisnis Anda dengan lebih profesional dan meyakinkan.',
    lead:'Company Profile menyatukan profil perusahaan, layanan, pengalaman, portfolio, dan kontak dalam website yang dirancang sesuai identitas bisnis.',
    pains:['Calon pelanggan sulit memverifikasi bisnis','Informasi perusahaan tersebar di media sosial dan dokumen','Kompetitor terlihat lebih profesional secara online','Sales masih mengirim profil bisnis secara manual'],
    outcomes:[['Kredibilitas lebih kuat','Bisnis memiliki pusat informasi resmi yang dapat dibagikan kapan saja.'],['Layanan lebih mudah dipahami','Struktur konten membantu calon pelanggan memahami apa yang Anda tawarkan.'],['Mendukung sales','Website menjadi aset yang bisa digunakan saat outreach, proposal, dan follow-up.']],
    audience:['Kontraktor dan perusahaan jasa','Travel dan hospitality','Konsultan dan professional services','Distributor, supplier, dan perusahaan lokal'],
    deliverables:['Website multi-halaman','Home, Tentang, Layanan, Kontak','Portfolio/project showcase sesuai paket','Responsive design','WhatsApp & inquiry','SEO dasar, domain, hosting, SSL dan deployment'],
    process:['Discovery bisnis','Content architecture','UI/UX design','Development','Content setup & review','Go-live','Technical care'],
    timeline:'Umumnya 2–4 minggu, tergantung jumlah halaman, materi, revisi, dan fitur.',
    needs:['Company profile/material bisnis','Logo & brand guideline jika ada','Foto/project assets','Daftar layanan','Kontak dan legal/company information'],
    demo:true,
    faq:[['Apakah saya harus menyediakan semua tulisan?','Materi utama tetap berasal dari bisnis Anda. Kami membantu menyusun struktur dan presentasinya sesuai scope.'],['Apakah bisa menampilkan project/portfolio?','Bisa dan merupakan salah satu elemen penting untuk bisnis yang mengandalkan kredibilitas.'],['Apakah ada CMS?','Dapat tersedia sesuai paket dan scope yang disepakati.']]
  },
  'toko-online': {
    title:'Toko Online', eyebrow:'Commerce untuk Bisnis Lokal', price:'Mulai Rp8 juta',
    hero:'Buat pelanggan lebih mudah melihat produk dan melakukan pemesanan.',
    lead:'Mulai dari katalog dengan CTA WhatsApp hingga checkout dan payment gateway—alur toko disesuaikan dengan cara bisnis Anda benar-benar berjualan.',
    pains:['Produk hanya tersedia di chat atau feed media sosial','Pelanggan sulit melihat katalog lengkap','Order masih tercampur dengan chat lain','Bisnis membutuhkan kanal penjualan milik sendiri'],
    outcomes:[['Katalog lebih rapi','Produk, kategori, harga, dan detail dapat ditemukan dengan mudah.'],['Alur order lebih jelas','Pelanggan diarahkan dari produk ke proses pemesanan yang sesuai.'],['Siap berkembang','Fitur commerce dapat ditingkatkan sesuai kebutuhan bisnis.']],
    audience:['Retail dan brand lokal','Kuliner dengan produk terstruktur','Distributor/reseller','Bisnis yang ingin punya kanal penjualan sendiri'],
    deliverables:['Katalog & detail produk','Kategori dan navigasi','Order via WhatsApp atau checkout sesuai paket','Dashboard pengelolaan','Payment gateway sesuai paket/scope (tidak wajib di Starter)','Responsive, domain, hosting, SSL dan deployment'],
    journey:['Temukan produk','Lihat detail','Pilih / masukkan keranjang','Order via WhatsApp atau checkout','Pembayaran sesuai alur','Pesanan diproses'],
    process:['Discovery alur penjualan','Struktur katalog','UI/UX','Development','Setup produk awal sesuai scope','Testing transaksi','Go-live'],
    timeline:'Umumnya 3–6 minggu, tergantung jumlah fitur, integrasi, dan kesiapan data produk.',
    needs:['Data/kategori produk','Foto produk','Harga & informasi produk','Alur order yang diinginkan','Informasi pembayaran/pengiriman bila relevan'],
    demo:true,
    faq:[['Apakah paket awal wajib memakai payment gateway?','Tidak. Untuk kebutuhan sederhana, pemesanan dapat diarahkan ke WhatsApp. Payment gateway digunakan bila memang dibutuhkan.'],['Apakah ada batas produk?','Jumlah produk dan proses input disesuaikan dengan scope paket/proyek.'],['Apakah saya bisa mengelola produk?','Dashboard pengelolaan tersedia sesuai scope yang disepakati.']]
  },
  'sistem-bisnis': {
    title:'Sistem Bisnis', eyebrow:'Operasional, Dashboard & Automation', price:'Estimasi mulai Rp15 juta',
    hero:'Ubah proses manual menjadi workflow yang lebih terstruktur.',
    lead:'Kami memetakan proses bisnis terlebih dahulu, lalu membangun modul, dashboard, role, dan integrasi yang benar-benar diperlukan.',
    pains:['Data tersebar di banyak file dan chat','Laporan membutuhkan rekap manual','Proses approval sulit dipantau','Stok, pelanggan, atau operasional tidak terhubung'],
    outcomes:[['Satu alur kerja lebih jelas','Proses dirancang berdasarkan siapa melakukan apa dan kapan.'],['Data lebih terstruktur','Informasi penting tersimpan dalam sistem yang dapat dicari dan dilaporkan.'],['Keputusan lebih cepat','Dashboard dan reporting membantu melihat kondisi operasional.']],
    audience:['Bisnis dengan proses operasional berulang','Perusahaan yang mulai kewalahan dengan spreadsheet','Tim yang membutuhkan role dan approval','Organisasi yang membutuhkan dashboard internal'],
    deliverables:['Discovery & process mapping','Modul sesuai scope','User, role & permission','Database','Dashboard/reporting','Workflow automation dan integrasi sesuai paket'],
    workflow:['Proses saat ini dipetakan','Bottleneck diidentifikasi','Workflow target dirancang','Modul dibangun','User melakukan testing','Implementasi & training'],
    process:['Discovery','Requirement & process mapping','Prototype/UI','Development bertahap','Testing/UAT','Deployment','Training & support'],
    timeline:'Ditentukan setelah discovery. Sistem sederhana dapat berlangsung beberapa minggu; multi-modul membutuhkan fase implementasi yang lebih panjang.',
    needs:['PIC bisnis','Contoh proses/form/laporan saat ini','Daftar user/role','Kebutuhan laporan','Akses integrasi bila ada'],
    faq:[['Apakah Sistem Bisnis sama dengan ERP?','ERP adalah salah satu bentuk sistem bisnis. Kami menggunakan istilah Sistem Bisnis agar fokus pada proses yang benar-benar Anda perlukan, bukan memaksakan modul yang tidak dibutuhkan.'],['Apakah harus mengganti semua proses sekaligus?','Tidak. Implementasi dapat dimulai dari proses/modul prioritas lalu dikembangkan bertahap.'],['Bagaimana harga final ditentukan?','Harga final bergantung pada modul, workflow, role, integrasi, data, dan kompleksitas implementasi.']]
  },
  'custom-development': {
    title:'Custom Development', eyebrow:'Web App, Mobile App & Integration', price:'Estimasi mulai Rp20 juta',
    hero:'Ketika software siap pakai tidak mengikuti cara bisnis Anda bekerja.',
    lead:'InfitechDigi membangun aplikasi khusus berdasarkan requirement: web app, mobile app, portal, dashboard, API, dan integrasi sistem.',
    pains:['Software yang ada tidak cocok dengan workflow','Membutuhkan portal atau aplikasi dengan logic khusus','Beberapa sistem perlu diintegrasikan','Punya ide produk digital yang membutuhkan MVP'],
    outcomes:[['Dibangun sesuai kebutuhan','Scope dan architecture mengikuti requirement, bukan template produk.'],['Bisa diintegrasikan','API dan sistem pihak ketiga dapat dihubungkan sesuai feasibility.'],['Bertahap dan terukur','Pengembangan dapat dimulai dari MVP lalu berkembang berdasarkan prioritas.']],
    audience:['Perusahaan dengan kebutuhan software khusus','Startup/produk digital yang membutuhkan MVP','Organisasi dengan portal internal/eksternal','Bisnis yang membutuhkan integrasi sistem'],
    deliverables:['Discovery requirement','UI/UX sesuai scope','Web/mobile/API sesuai kebutuhan','Authentication & role','Database & integration','Testing, deployment dan dokumentasi sesuai scope'],
    capabilities:['Web Application','Mobile Application','Dashboard & Portal','API & System Integration','Workflow Automation','MVP / Product Development'],
    process:['Discovery','Requirement & scope','Architecture/UI/UX','Development sprint','QA/UAT','Deployment','Handover & support'],
    timeline:'Ditentukan setelah requirement dan scope utama dipahami. Proyek custom biasanya dibagi ke milestone.',
    needs:['Problem statement','PIC/decision maker','Workflow atau requirement awal','Prioritas MVP','Integrasi/dependency yang diketahui'],
    faq:[['Apakah bisa mulai dari MVP?','Bisa. Untuk ide produk atau scope besar, MVP membantu memprioritaskan fitur inti terlebih dahulu.'],['Apakah source code diberikan?','Kepemilikan dan handover source code mengikuti kesepakatan proyek/kontrak.'],['Apakah bisa melanjutkan sistem existing?','Bisa dievaluasi terlebih dahulu dari sisi teknologi, akses source, kualitas codebase, dan scope perubahan.']]
  },
  'managed-website': {
    title:'Managed Website', eyebrow:'Technical Care Setelah Go-Live', price:'Mulai Rp790 ribu/tahun',
    hero:'Website yang sudah online tetap perlu dijaga.',
    lead:'Managed Website Plan membantu menjaga aspek teknis website setelah periode awal: monitoring, backup, konfigurasi, dan support teknis sesuai level layanan.',
    pains:['Tidak ada yang memantau website setelah launch','Takut website bermasalah saat dibutuhkan','Tidak ingin mengurus hosting dan konfigurasi teknis sendiri','Membutuhkan satu kontak untuk technical support'],
    outcomes:[['Lebih tenang','Ada technical care untuk membantu menjaga website.'],['Lebih terpantau','Pengecekan dan monitoring dilakukan sesuai level plan.'],['Lebih praktis','Hosting, SSL, backup, dan kebutuhan teknis tidak harus ditangani sendiri.']],
    audience:['Client website InfitechDigi setelah periode awal','Bisnis yang ingin website dikelola secara teknis','Website company profile/landing page/toko online sesuai eligibility'],
    deliverables:['Technical monitoring','Backup sesuai plan/infrastruktur','SSL & konfigurasi','Technical maintenance','Support teknis','Review teknis sesuai plan'],
    process:['Review kondisi website','Pilih plan','Aktivasi monitoring/care','Maintenance berkala','Technical support','Renewal tahunan'],
    timeline:'Aktivasi dilakukan setelah scope dan kondisi website dikonfirmasi.',
    needs:['Akses website/hosting bila website existing','Informasi domain','Kontak PIC'],
    faq:[['Apakah termasuk update konten rutin?','Tidak. Managed Website berfokus pada technical maintenance, bukan jasa update konten rutin.'],['Apakah wajib setelah tahun pertama?','Tidak harus, tetapi website tetap membutuhkan hosting, domain renewal, dan pengelolaan teknis agar tetap berjalan.'],['Bisa untuk website yang bukan dibuat InfitechDigi?','Dapat dievaluasi terlebih dahulu untuk memastikan teknologi dan aksesnya dapat kami kelola.']]
  }
}


// Phase 2 — service-detail sales content. Kept in the same source of truth so
// every service page can use a consistent structure without hardcoding copy
// inside the Vue template.
const serviceDetailPolish = {
  'mulai-digital': {
    promise:'Cocok untuk bisnis yang ingin mulai rapi dulu, tanpa membeli sistem yang belum dibutuhkan.',
    experience:[
      ['Kehadiran digital lebih rapi','Informasi bisnis, kanal komunikasi, dan profil online disusun agar pelanggan tidak bingung mencari Anda.'],
      ['Data pelanggan mulai tertata','Mulai mengumpulkan data pelanggan secara lebih terstruktur sebagai fondasi follow-up dan operasional.'],
      ['Tim siap menggunakan','Setup tidak berhenti pada konfigurasi. Ada training dan support awal sesuai paket.']
    ],
    scopeNotes:['Fokus pada setup dan fondasi digital praktis.','Tools dipilih berdasarkan kebutuhan, bukan dipaksakan sebagai produk tertentu.','Website, toko online, atau sistem custom berada pada layanan terpisah.'],
    processDetail:[
      ['Discovery singkat','Memahami kondisi bisnis, kanal yang sudah digunakan, dan prioritas digital paling mendesak.'],
      ['Audit kondisi digital','Menentukan apa yang perlu dirapikan, dibuat, atau cukup dipertahankan.'],
      ['Setup & konfigurasi','Menyiapkan kanal, profil, form, database, atau kebutuhan paket yang disepakati.'],
      ['Review bersama','Memastikan setup sesuai cara bisnis Anda bekerja.'],
      ['Training','Menjelaskan penggunaan kepada PIC/tim.'],
      ['Support awal','Mendampingi masa awal penggunaan sesuai paket.']
    ],
    pricingNote:'Mulai dari paket yang paling sederhana. Naik paket hanya jika kebutuhan operasional memang memerlukannya.',
    cta:'Rapikan Fondasi Digital Saya',
    finalLead:'Ceritakan bagaimana bisnis Anda menerima pelanggan hari ini. Kami bantu menentukan setup digital awal yang paling masuk akal.'
  },
  'landing-page': {
    promise:'Satu halaman, satu tujuan utama, dan alur yang membantu calon pelanggan mengambil tindakan.',
    experience:[
      ['Pesan lebih cepat dipahami','Headline, benefit, proof, penawaran, dan CTA disusun dalam urutan yang mendukung keputusan.'],
      ['Siap dipakai untuk campaign','Halaman dapat dijadikan destination untuk Meta Ads, promosi, launching, event, atau penawaran spesifik.'],
      ['Tidak berhenti di tampilan','CTA WhatsApp/form, responsive layout, social preview, dan kebutuhan teknis go-live sudah masuk scope paket.']
    ],
    scopeNotes:['Landing Page berfokus pada satu penawaran atau objective utama.','Materi utama dan klaim bisnis tetap berasal dari Anda.','Jumlah section, form, tracking, dan integrasi mengikuti paket/scope.'],
    processDetail:[
      ['Tujuan conversion','Menentukan siapa target visitor, penawaran, dan tindakan utama yang ingin dicapai.'],
      ['Content structure','Menyusun alur informasi dari headline sampai CTA.'],
      ['Visual direction','Menyesuaikan desain dengan brand, market, dan karakter campaign.'],
      ['Development','Membangun halaman responsive dan komponen conversion yang disepakati.'],
      ['Review & testing','Memeriksa copy, link, form, responsivitas, dan pengalaman pengguna.'],
      ['Go-live','Deploy ke domain, setup teknis dasar, dan technical care sesuai paket.']
    ],
    afterLaunch:{title:'Siap digunakan untuk campaign dan iterasi berikutnya.',body:'Setelah go-live, halaman dapat dipakai sebagai destination campaign. Technical care awal mengikuti paket; kebutuhan perubahan campaign atau pengembangan fitur dibahas terpisah.',note:'Technical maintenance tidak termasuk jasa update konten/campaign rutin.'},
    pricingNote:'Pilih paket berdasarkan kompleksitas penawaran, kebutuhan form/integrasi, dan level pengelolaan setelah go-live.',
    cta:'Bahas Landing Page Saya',
    finalLead:'Ceritakan produk, jasa, atau campaign yang ingin Anda dorong. Kami bantu menyusun scope halaman dan CTA yang tepat.'
  },
  'company-profile': {
    promise:'Website resmi yang membuat bisnis lebih mudah diverifikasi, dipahami, dan dipercaya.',
    experience:[
      ['Pusat informasi resmi','Profil, layanan, project, legal/company info, dan kontak tersaji dalam satu alamat yang mudah dibagikan.'],
      ['Mendukung proses sales','Sales atau owner tidak perlu selalu menjelaskan bisnis dari nol melalui chat atau PDF.'],
      ['Identitas lebih konsisten','Struktur dan visual website disesuaikan dengan karakter brand, bukan template generik yang sama untuk semua bisnis.']
    ],
    scopeNotes:['Struktur halaman disesuaikan dengan kebutuhan bisnis, bukan dipaksakan sama.','Konten faktual, project, sertifikasi, dan klaim bisnis harus berasal dari data yang dapat dipertanggungjawabkan.','CMS, bilingual, integrasi, dan fitur khusus mengikuti paket/scope.'],
    processDetail:[
      ['Discovery bisnis','Memahami layanan, target market, positioning, dan kredibilitas yang perlu ditonjolkan.'],
      ['Content architecture','Menentukan sitemap dan urutan informasi yang paling mudah dipahami calon client.'],
      ['UI/UX direction','Membuat arah visual sesuai brand dan karakter industri.'],
      ['Development','Membangun halaman responsive dan komponen yang diperlukan.'],
      ['Content setup','Memasukkan materi yang sudah disepakati dan melakukan review bersama.'],
      ['Go-live','Deployment, technical setup, dan pengecekan akhir.'],
      ['Technical care','Pendampingan teknis awal sesuai paket.']
    ],
    afterLaunch:{title:'Website menjadi aset sales yang dapat terus dipakai.',body:'Gunakan website saat outreach, proposal, Google Business Profile, media sosial, dan follow-up calon client. Setelah technical care awal berakhir, Managed Website Plan dapat dilanjutkan.',note:'Pengelolaan teknis tidak sama dengan jasa update artikel, project, atau konten rutin.'},
    pricingNote:'Pilih level berdasarkan jumlah halaman, kebutuhan showcase/project, CMS, fitur, dan kompleksitas presentasi bisnis.',
    cta:'Bahas Website Company Profile',
    finalLead:'Kirimkan profil bisnis atau materi yang sudah Anda punya. Kami bantu menentukan struktur website yang paling tepat untuk membangun kredibilitas.'
  },
  'toko-online': {
    promise:'Mulai dari katalog + WhatsApp atau naik ke checkout terintegrasi sesuai cara bisnis Anda berjualan.',
    experience:[
      ['Produk lebih mudah ditemukan','Kategori, pencarian/navigasi, detail, harga, dan informasi produk disusun lebih jelas.'],
      ['Order mengikuti kondisi bisnis','Tidak semua toko harus langsung memakai payment gateway. Alur bisa dimulai dari WhatsApp bila itu paling realistis.'],
      ['Bisa berkembang bertahap','Checkout, pembayaran, pengiriman, dashboard, atau integrasi dapat ditambahkan sesuai kebutuhan dan kesiapan operasional.']
    ],
    scopeNotes:['Jumlah produk awal, variasi, kategori, dan input data mengikuti scope proyek.','Payment gateway tidak wajib untuk paket awal.','Biaya layanan pihak ketiga, payment gateway, shipping API, atau subscription eksternal tidak otomatis termasuk harga development.'],
    processDetail:[
      ['Pemetaan penjualan','Memahami bagaimana pelanggan memilih, bertanya, membayar, dan bagaimana tim memproses order.'],
      ['Struktur katalog','Menentukan kategori, atribut produk, detail, dan navigasi.'],
      ['UI/UX commerce','Mendesain pengalaman browse sampai order yang mudah dipahami.'],
      ['Development','Membangun katalog, dashboard, checkout/WhatsApp flow, dan fitur sesuai scope.'],
      ['Setup & testing','Mengisi data awal sesuai scope dan mengetes alur order/transaksi.'],
      ['Go-live','Deployment dan pengecekan operasional sebelum digunakan pelanggan.']
    ],
    afterLaunch:{title:'Mulai berjualan dengan alur yang sesuai operasional Anda.',body:'Setelah go-live, tim dapat mengelola katalog sesuai fitur yang disepakati. Technical care awal mengikuti paket dan dapat dilanjutkan melalui Managed Website Plan.',note:'Input produk/konten rutin dan operasional toko harian bukan bagian technical maintenance.'},
    pricingNote:'Harga dipengaruhi oleh katalog, variasi produk, checkout, payment, shipping, dashboard, integrasi, dan kebutuhan migrasi data.',
    cta:'Bahas Toko Online Saya',
    finalLead:'Ceritakan bagaimana pelanggan memesan hari ini. Kami bantu memilih apakah cukup dengan katalog + WhatsApp atau perlu checkout yang lebih lengkap.'
  },
  'sistem-bisnis': {
    promise:'Mulai dari proses prioritas, bukan langsung mengganti seluruh operasional dengan sistem besar.',
    experience:[
      ['Workflow berdasarkan proses nyata','Kami memetakan siapa melakukan apa, data apa yang dibutuhkan, dan titik approval sebelum menentukan modul.'],
      ['Role & data lebih terkontrol','Akses dan tanggung jawab dapat dipisahkan berdasarkan peran pengguna sesuai scope.'],
      ['Implementasi dapat bertahap','Prioritaskan proses yang paling berdampak lalu kembangkan modul berikutnya setelah alur utama stabil.']
    ],
    scopeNotes:['Estimasi awal bukan quotation final.','Harga sangat dipengaruhi modul, workflow, role, laporan, migrasi data, integrasi, dan dependency.','Discovery/process mapping menjadi dasar sebelum scope dan milestone dikunci.'],
    processDetail:[
      ['Discovery proses','Menggali proses saat ini, kendala, user, data, dan kebutuhan laporan.'],
      ['Process mapping','Memetakan current state dan target workflow agar scope tidak sekadar daftar fitur.'],
      ['Prototype & requirement','Menyepakati modul, role, alur, dan prioritas implementasi.'],
      ['Development bertahap','Membangun fitur berdasarkan milestone yang disepakati.'],
      ['UAT','User menguji alur dan requirement utama sebelum implementasi.'],
      ['Deployment & training','Menyiapkan sistem, akses user, dan penggunaan awal.'],
      ['Iteration/support','Perbaikan atau pengembangan berikutnya berdasarkan scope dan hasil penggunaan.']
    ],
    pricingNote:'Gunakan harga “estimasi mulai” hanya sebagai orientasi awal. Quotation final diberikan setelah discovery dan scope cukup jelas.',
    cta:'Diskusikan Proses Bisnis Saya',
    finalLead:'Bawa contoh form, spreadsheet, laporan, atau alur kerja yang sekarang digunakan. Dari sana kita dapat menentukan modul prioritas yang paling bernilai.'
  },
  'custom-development': {
    promise:'Software khusus dibangun karena ada requirement khusus—bukan sekadar karena ingin aplikasi custom.',
    experience:[
      ['Scope dimulai dari problem','Kami mengurai kebutuhan, user, workflow, dan dependency sebelum memilih bentuk solusi.'],
      ['MVP bila lebih masuk akal','Untuk produk atau scope besar, fitur inti dapat diprioritaskan agar validasi dan delivery lebih terukur.'],
      ['Integrasi diperiksa sejak awal','API, sistem existing, autentikasi, data, dan dependency pihak ketiga dievaluasi sebelum dikunci dalam scope.']
    ],
    scopeNotes:['Estimasi awal bukan quotation final.','Timeline dan harga dipengaruhi kompleksitas logic, platform, integrasi, data, security, dan requirement non-fungsional.','Hak akses, source code, deployment, dokumentasi, dan support dituangkan dalam proposal/kontrak proyek.'],
    processDetail:[
      ['Discovery','Memahami problem, objective, user, constraint, dan dependency.'],
      ['Requirement & scope','Mendefinisikan MVP/full scope, acceptance criteria, dan milestone.'],
      ['Architecture & UI/UX','Menentukan pendekatan teknis dan pengalaman pengguna sesuai kebutuhan.'],
      ['Development sprint','Membangun fitur secara bertahap dengan review milestone.'],
      ['QA & UAT','Menguji fungsi utama, edge case, dan penerimaan user.'],
      ['Deployment','Menyiapkan environment dan go-live sesuai scope.'],
      ['Handover/support','Dokumentasi, source/handover, dan support mengikuti kesepakatan proyek.']
    ],
    pricingNote:'Quotation diberikan setelah requirement cukup matang. Untuk ide yang masih luas, discovery/MVP membantu mengendalikan scope.',
    cta:'Bahas Kebutuhan Aplikasi',
    finalLead:'Ceritakan problem dan siapa yang akan menggunakan aplikasinya. Kami bantu menentukan apakah perlu custom development, integrasi, atau solusi yang lebih sederhana.'
  },
  'managed-website': {
    promise:'Technical care untuk menjaga website tetap berjalan tanpa menjadikan Anda harus mengurus sisi teknis sehari-hari.',
    experience:[
      ['Satu kontak untuk kebutuhan teknis','Tidak perlu mencari pihak berbeda untuk hosting, SSL, backup, dan isu teknis yang masih berada dalam scope.'],
      ['Perawatan lebih terencana','Monitoring, backup, dan review teknis mengikuti level plan yang dipilih.'],
      ['Batas layanan jelas','Technical care difokuskan pada kesehatan teknis website, bukan berubah menjadi jasa pengelolaan konten tanpa batas.']
    ],
    scopeNotes:['Domain renewal dan biaya pihak ketiga mengikuti ketentuan masing-masing layanan.','Technical maintenance tidak termasuk update konten rutin.','Website existing dari pihak lain perlu technical review sebelum dapat diterima dalam plan.'],
    processDetail:[
      ['Technical review','Memeriksa teknologi, akses, hosting, dan kondisi website.'],
      ['Pilih plan','Menyesuaikan level care dengan kebutuhan website.'],
      ['Aktivasi','Menyiapkan akses, monitoring, backup, dan konfigurasi yang disepakati.'],
      ['Maintenance','Menjalankan technical care sesuai periode dan level plan.'],
      ['Support','Menangani pertanyaan atau issue teknis yang termasuk scope.'],
      ['Renewal','Review kebutuhan dan perpanjangan plan tahunan.']
    ],
    pricingNote:'Plan dipilih berdasarkan kebutuhan monitoring, backup, support, dan level website. Update konten rutin dihitung terpisah bila layanan tersebut disepakati.',
    cta:'Pilih Technical Care',
    finalLead:'Beritahu jenis website dan kondisi hosting Anda. Kami bantu menilai plan technical care yang paling sesuai.'
  }
}

Object.entries(serviceDetailPolish).forEach(([slug, polish]) => {
  Object.assign(serviceDetails[slug], polish)
})

export const faqs = [
  ['Apakah harga website sudah termasuk domain dan hosting?', 'Paket website utama mencakup domain dan hosting tahun pertama sesuai ketentuan paket.'],
  ['Apakah website sudah mobile friendly?', 'Ya. Website dirancang responsive untuk desktop, tablet, dan smartphone.'],
  ['Apakah maintenance termasuk update konten?', 'Tidak. Maintenance berfokus pada aspek teknis; update konten rutin bukan bagian technical maintenance.'],
  ['Apakah bisa menggunakan domain yang sudah saya miliki?', 'Bisa selama akses pengelolaan domain tersedia.'],
  ['Apakah bisa request desain?', 'Bisa. Arah visual disesuaikan dengan brand, target pasar, referensi, dan kebutuhan bisnis.'],
  ['Apakah InfitechDigi membuat aplikasi atau sistem internal?', 'Ya. Dashboard, portal, sistem bisnis, integrasi, dan aplikasi khusus dibahas melalui discovery dan konsultasi.'],
]

export const pricing = [
  { name:'Mulai Digital', serviceSlug:'mulai-digital', price:'Mulai Rp990 ribu', desc:'Fondasi digital untuk bisnis yang ingin mulai lebih rapi dan profesional.', badge:'Digital Starter', featured:false, features:['Google Business Profile','Database pelanggan','Training & support awal'], note:'Cocok untuk bisnis yang baru memulai digitalisasi.' },
  { name:'Landing Page', serviceSlug:'landing-page', price:'Mulai Rp1,5 juta', desc:'Halaman fokus untuk campaign, promosi, atau satu penawaran utama.', badge:'Website Conversion', featured:false, features:['Responsive','CTA WhatsApp','Domain & hosting tahun pertama'], note:'Cocok untuk promosi dan campaign.' },
  { name:'Company Profile', serviceSlug:'company-profile', price:'Mulai Rp3,5 juta', desc:'Website profesional untuk memperkuat kredibilitas bisnis.', badge:'Website Kredibilitas', featured:true, features:['Multi-halaman','Portfolio/showcase','Domain & hosting tahun pertama'], note:'Harga promo paket Basic; harga normal Rp4 juta.' },
  { name:'Toko Online', serviceSlug:'toko-online', price:'Mulai Rp8 juta', desc:'Katalog dan alur pemesanan online yang bisa dimulai dari WhatsApp.', badge:'Digital Commerce', featured:false, features:['Katalog produk','CTA/order','Domain & hosting tahun pertama'], note:'Payment gateway tidak wajib untuk paket Starter.' },
  { name:'Sistem Bisnis', serviceSlug:'sistem-bisnis', price:'Estimasi mulai Rp15 juta', desc:'Sistem untuk merapikan proses, data, dashboard, dan operasional bisnis.', badge:'Business System', featured:false, features:['Discovery proses bisnis','Modul sesuai kebutuhan','Testing, deployment & handover'], note:'Harga final ditentukan setelah discovery dan penetapan scope.' },
  { name:'Custom Development', serviceSlug:'custom-development', price:'Estimasi mulai Rp20 juta', desc:'Web app, mobile app, portal, API, integrasi, dan software khusus sesuai kebutuhan bisnis.', badge:'Custom Software', featured:false, features:['Discovery kebutuhan','Web/mobile/API sesuai scope','Testing, deployment & handover'], note:'Harga final ditentukan setelah discovery dan penetapan scope.' },
]
