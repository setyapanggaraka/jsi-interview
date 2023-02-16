## 1. Jelaskan apa yang anda ketahui tentang Activity

Activity merupakan salah satu komponen yang ada di Android Studio yang berfungsi untuk menampilkan user interface (UI) dari aplikasi yang akan dibuat, biasanya diletakkan pada “setcontentview”. Bukan hanya menampilkan UI, activity juga digunakan untuk melakukan berbagai kegiatan yang diperlukan di dalam aplikasi tersebut seperti berpindah dari satu tampilan ke tampilan lainnya, menjalankan program lain, dan masih banyak lagi yang dapat dilakukan di dalam sebuah activity. Activity memiliki sirkulasi kehidupan atau yang biasanya disebut “lifecycle”. Dalam proses lifecycle, activity memiliki beberapa tampilan, yaitu:

1. Foreground activity, merupakan tampilan depan yang dapat dilihat pengguna saat menggunakannya
2. Visible activity, merupakan tampilan aplikasi yang dilihat pengguna, tetapi bukan tampilan yang paling depan (foreground activity).
3. Background activity, merupakan tampilan yang disimpan untuk dimunculkan pada saat pengguna memicu event yang akan memunculkan activity.
4. Empty process, bukan merupakan tampilan namun berupa proses yang dapat mengubah tampilan dari aplikasi yang digunakan oleh pengguna seperti Service dan BroadcastReciver. Biasanya proses ini digunakan untuk mengurangi penggunaan memory yang berlebihan, agar proses untuk mengubah tampilan aplikasi tersebut berjalan di background process dan tidak mempengaruhi performa dari handphone.

## 2 Jelaskan apa yang anda ketahui tentang Fragment

Fragment merupakan salah satu komponen pada Android Studio dengan fungsi yang hampir sama seperti activity tetapi memiliki “lifecycle” yang berbeda. Fragment merupakan bagian dari sebuah activity yang mana sebuah fragment tidak akan ada bila tidak ada sebuah activity karena fragment membutuhkan akses dari activity untuk dapat dijalankan.

Kelebihan yang didapatkan bila menggunakan fragment adalah sebagai berikut:

Tidak perlu memasukkan nama file fragment ke dalam “AndroidManifest” yang diperlukan oleh activity.
Fungsi yang berada pada activity dapat langsung digunakan dalam fragment tersebut tanpa harus membuat ulang. Contoh: pada saat back, fragment hanya perlu memanggil fungsi “getactivity

## 3 Sebuah Activity memiliki tahapan siklus hidup, di antaranya : onCreate(), onStart(), onStop(), dan onDestroy(). Jelaskan dengan singkat kapan masing-masing tahap siklus hidup diatas dipanggil.

1. onCreate() dipanggil ketika Activity pertama kali dibuat atau diinisialisasi. Pada tahap ini, biasanya digunakan untuk menginisialisasi variabel, mengatur tampilan, atau memuat data awal dari database atau jaringan.

2. onStart() dipanggil setelah Activity dibuat, tetapi sebelum Activity ditampilkan ke pengguna. Pada tahap ini, biasanya digunakan untuk mempersiapkan tampilan dan memuat data tambahan dari database atau jaringan.

3. onStop() dipanggil ketika Activity tidak lagi terlihat oleh pengguna atau aplikasi tidak lagi berjalan di depan. Pada tahap ini, biasanya digunakan untuk membersihkan sumber daya dan menyimpan data yang masih diperlukan.

4. onDestroy() dipanggil ketika Activity dihancurkan atau ditutup. Pada tahap ini, biasanya digunakan untuk membersihkan sumber daya, seperti membebaskan memori atau menutup koneksi ke database atau jaringan.

## 4 Jelaskan bagaimana cara untuk menyimpan data seperti access token di Android

1. Shared Preference: SharedPreferences adalah sebuah class yang memiliki kemampuan ataupun fungsi untuk menampung data dalam key/value yang berpasangan. Data dalam SharedPreferences nantinya dapat digunakan dalam aktivitas apa saja dalam android studio.

2. SQLite Database: SQLite adalah database SQL opensource yang menyimpan data ke file teks di perangkat. Android hadir dengan implementasi database SQLite bawaan.

3. Internal Storage: Internal Storage adalah cara lain untuk menyimpan data pada perangkat Android. Data disimpan dalam file dan hanya dapat diakses oleh aplikasi yang membuat file tersebut. Internal Storage cocok untuk menyimpan data yang tidak perlu dibagi dengan aplikasi lain.

4. External Storage: External Storage adalah cara untuk menyimpan data di luar perangkat Android, seperti pada kartu SD. External Storage cocok untuk menyimpan data yang besar dan perlu diakses oleh banyak aplikasi.

5. Keystore: Keystore adalah tempat penyimpanan kunci pribadi dan sertifikat digital yang digunakan untuk mengotentikasi permintaan ke server API. Keystore menyediakan cara aman untuk menyimpan data seperti access token.

## 5. Jelaskan dengan singkat kapan terjadinya Application Not Responding (ANR) dan bagaimana kita dapat mencegah terjadi ANR

Application Not Responding (ANR) terjadi ketika aplikasi Android tidak merespons input pengguna selama jangka waktu yang cukup lama, yaitu sekitar 5 detik. Hal ini dapat terjadi karena aplikasi sedang melakukan operasi berat di thread utama, seperti melakukan koneksi jaringan yang lambat, membaca file besar, atau melakukan pengolahan data yang memakan waktu.

Untuk mencegah terjadinya ANR, ada beberapa tindakan yang dapat dilakukan:

1. Gunakan thread yang berbeda untuk operasi berat seperti I/O dan koneksi jaringan. Dengan cara ini, operasi berat tidak akan menghambat thread utama dan membuat aplikasi tetap responsif.

2. Gunakan layanan (service) untuk operasi yang memakan waktu lama seperti pengolahan data atau download. Layanan dapat dijalankan di thread yang berbeda dan akan tetap berjalan ketika aplikasi ditutup atau ketika layar mati.

3. Optimalkan kode Anda agar lebih efisien dan mengurangi penggunaan sumber daya yang tidak perlu. Hindari melakukan pengolahan data yang berlebihan atau melakukan operasi yang tidak perlu.

4. Selalu tes aplikasi Anda secara menyeluruh dan gunakan alat profil untuk memantau kinerja aplikasi dan mengidentifikasi kemungkinan penyebab ANR.

## 6. Jelaskan yang dimaksud dengan proses asynchronous?

Proses asynchronous adalah proses yang berjalan secara independen dari proses utama aplikasi atau program. Proses ini bekerja secara parallel dengan proses utama, sehingga tidak menghambat jalannya proses utama atau memblokir thread utama.

Dalam proses asynchronous, operasi yang memakan waktu lama, seperti pengambilan data dari server atau proses yang memerlukan interaksi pengguna, dilakukan di thread yang berbeda dari thread utama aplikasi. Thread tersebut bekerja secara asinkron, artinya tidak harus menunggu proses sebelumnya selesai sebelum melakukan operasi berikutnya.

Setelah proses asynchronous selesai, hasilnya akan dikirim kembali ke thread utama aplikasi agar dapat ditampilkan kepada pengguna atau digunakan dalam proses selanjutnya.

## 7. Mengapa kita tidak boleh melakukan proses yang panjang di main thread?

Main thread atau UI thread adalah thread utama pada aplikasi Android yang bertanggung jawab untuk menangani interaksi pengguna dan menampilkan tampilan aplikasi ke layar. Ketika pengguna melakukan proses yang memakan waktu lama, seperti koneksi jaringan atau pengolahan data, di main thread, maka thread utama akan terhenti atau "freeze" sampai proses tersebut selesai. Akibatnya, aplikasi akan menjadi tidak responsif dan pengguna mungkin akan mengalami jeda atau bahkan terpaksa menutup aplikasi.

Selain itu, jika proses panjang dilakukan di main thread, maka sumber daya sistem, seperti CPU dan RAM, akan terfokus pada proses tersebut. Hal ini dapat mengurangi performa dan kinerja aplikasi secara keseluruhan, serta menguras daya baterai pada perangkat.

## 8. Jelaskan apa yang anda ketahui tentang komponen Service pada Android, dan bagaimana caranya agar service tetap berjalan walaupun aplikasi sudah dipindahkan ke background

Service adalah salah satu komponen dasar pada platform Android yang memungkinkan sebuah aplikasi dapat berjalan di latar belakang atau tanpa antarmuka pengguna. Service digunakan untuk melakukan tugas yang memerlukan waktu yang lama atau terus menerus, seperti pengambilan data dari server, pemutaran musik, atau pelacakan lokasi pengguna.

Ada dua jenis Service, yaitu:

1. Started Service, digunakan untuk melakukan tugas yang berjalan dalam waktu yang lama. Setelah Service dimulai, Service akan berjalan terus menerus sampai selesai atau dihentikan secara manual.

2. Bound Service, digunakan untuk menghubungkan dua komponen pada aplikasi Android. Bound Service akan terhubung dengan komponen lain, seperti Activity, dan akan berjalan selama komponen tersebut masih terhubung.

Untuk menjaga Service tetap berjalan, bahkan ketika aplikasi berada di latar belakang, dapat dilakukan dengan beberapa cara, yaitu:

1. Menggunakan startForeground(), metode ini akan menempatkan Service pada status foreground, sehingga sistem operasi Android tidak akan membatasi penggunaan sumber daya oleh Service.

2. Menggunakan Foreground Service, Service ini memiliki status foreground, yang memungkinkan Service dapat berjalan tanpa batasan waktu dan tetap berjalan bahkan ketika aplikasi dipindahkan ke latar belakang.

3. Menggunakan AlarmManager atau JobScheduler, dengan menggunakan kedua layanan ini, kita dapat menjadwalkan tugas yang akan dilakukan oleh Service, bahkan ketika aplikasi berada di latar belakang. Dengan demikian, Service dapat berjalan secara berkala tanpa harus terus menerus berjalan di latar belakang.

## 9. Sebutkan komponen / library yang dapat digunakan untuk melakukan proses asynchronous

1. AsyncTask: Komponen bawaan pada Android yang memungkinkan proses asynchronous dijalankan pada thread yang berbeda dari main thread.

2. Handler: Memungkinkan pembuatan thread yang berbeda untuk melakukan proses asynchronous pada aplikasi.

3. Executor Framework: Menyediakan mekanisme untuk menjalankan tugas asynchronous pada thread yang berbeda dari main thread.

4. RxJava: Library pihak ketiga yang memungkinkan penggunaan Observable dan Subscriber untuk melakukan proses asynchronous pada aplikasi.

5. Kotlin Coroutines: Library yang digunakan pada aplikasi Kotlin yang memungkinkan penggunaan fungsi suspend untuk melakukan proses asynchronous.

6. LiveData: Komponen bawaan pada Android yang memungkinkan pembuatan data observable yang dapat diupdate secara asynchronous.

7. WorkManager: Komponen bawaan pada Android yang memungkinkan menjadwalkan tugas asynchronous pada aplikasi.

## 10. Jelaskan apa yang anda ketahui tentang dynamic link

Dynamic link adalah mekanisme yang digunakan untuk membuat link yang dapat membawa pengguna ke halaman atau konten tertentu pada aplikasi atau website, tanpa harus meminta pengguna untuk memasukkan URL secara manual. Dynamic link biasanya digunakan dalam kampanye pemasaran atau berbagi konten di media sosial, di mana kita ingin mengarahkan pengguna langsung ke halaman atau konten tertentu dalam aplikasi atau website.

Dynamic link memiliki beberapa keuntungan, antara lain:

1. Mudah dibagikan: Pengguna dapat membagikan dynamic link dengan mudah melalui pesan teks, email, atau media sosial.

2. Peningkatan retensi pengguna: Dengan membawa pengguna langsung ke halaman atau konten tertentu di aplikasi, dynamic link dapat meningkatkan retensi pengguna.

3. Pelacakan pengguna: Dynamic link dapat dilacak, sehingga kita dapat memonitor penggunaan link dan performa kampanye pemasaran.

Pada platform Android, dynamic link dapat dibuat menggunakan Firebase Dynamic Links, yang merupakan layanan yang disediakan oleh Firebase. Dengan Firebase Dynamic Links, kita dapat membuat dynamic link untuk aplikasi Android, iOS, dan website, serta dapat menyesuaikan tampilan halaman yang ditampilkan kepada pengguna ketika dynamic link dibuka.

Untuk menggunakan Firebase Dynamic Links, kita perlu melakukan beberapa langkah, antara lain:

1. Menambahkan Firebase ke aplikasi.

2. Membuat dynamic link dengan menentukan URL target, tampilan halaman, dan parameter tambahan.

3. Menambahkan kode ke aplikasi untuk menangani dynamic link ketika dibuka.

## 11. Jelaskan bagaimana caranya agar aplikasi dapat menjalankan proses secara periodik

Untuk menjalankan proses secara periodik pada aplikasi Android, kita dapat menggunakan beberapa mekanisme yang tersedia di platform Android, antara lain:

1. AlarmManager: AlarmManager adalah komponen bawaan pada Android yang memungkinkan kita untuk menjalankan kode pada waktu tertentu atau berulang dalam waktu tertentu. Kita dapat membuat alarm periodik dengan menggunakan metode setRepeating() pada AlarmManager.

2. JobScheduler: JobScheduler adalah komponen bawaan pada Android yang memungkinkan kita untuk menjadwalkan tugas untuk dijalankan pada waktu tertentu atau ketika kondisi tertentu terpenuhi. Kita dapat membuat job periodik dengan menggunakan metode setPeriodic() pada JobInfo.

3. WorkManager: WorkManager adalah komponen bawaan pada Android yang memungkinkan kita untuk menjadwalkan tugas untuk dijalankan pada waktu tertentu atau ketika kondisi tertentu terpenuhi, seperti JobScheduler. Namun, WorkManager memberikan kelebihan karena dapat menjalankan tugas dengan fleksibel di antara berbagai versi platform Android dan juga dapat menangani kondisi ketika perangkat terkunci atau restart.

4. Timer: Timer adalah kelas bawaan pada Java yang memungkinkan kita untuk menjalankan kode pada waktu tertentu atau berulang dalam waktu tertentu. Kita dapat menggunakan Timer pada Android dengan membuat objek Timer pada thread yang berbeda dari main thread.

Dalam menjalankan proses periodik pada aplikasi Android, kita perlu mempertimbangkan beberapa hal, antara lain:

1. Waktu: Menentukan interval waktu yang tepat untuk menjalankan proses periodik, dan menentukan waktu terbaik untuk menjalankan proses periodik agar tidak mengganggu pengalaman pengguna.

2. Penggunaan sumber daya: Menentukan penggunaan sumber daya yang diperlukan untuk menjalankan proses periodik, seperti CPU, memori, dan jaringan.

3. Toleransi error: Memperhitungkan kemungkinan kesalahan atau gangguan yang dapat terjadi selama proses periodik berjalan, dan menentukan toleransi kesalahan yang dapat diterima.

## 12. Jelaskan design pattern yang anda ketahui!

1. Singleton: Singleton adalah design pattern yang memastikan hanya satu objek yang dibuat untuk sebuah kelas, sehingga objek tersebut dapat diakses secara global. Singleton digunakan ketika kita ingin memastikan bahwa hanya ada satu objek yang dapat mengakses sumber daya tertentu, seperti koneksi database atau log.

2. Factory Method: Factory Method adalah design pattern yang memungkinkan kita untuk membuat objek tanpa menentukan kelas spesifik dari objek tersebut. Dengan Factory Method, kita dapat membuat objek dari kelas-kelas yang berbeda secara dinamis, tanpa harus mengubah kode secara langsung.

3. Observer: Observer adalah design pattern yang memungkinkan objek untuk menerima notifikasi ketika ada perubahan pada objek lain. Observer digunakan ketika kita ingin memungkinkan beberapa objek untuk bereaksi terhadap perubahan pada objek lain, seperti dalam pola Model-View-Controller.

4. Decorator: Decorator adalah design pattern yang memungkinkan kita untuk menambahkan fungsi atau perilaku tambahan pada objek tanpa mengubah struktur dasarnya. Decorator digunakan ketika kita ingin menambahkan fungsi pada objek secara dinamis, tanpa harus membuat kelas baru.

5. Adapter: Adapter adalah design pattern yang memungkinkan kita untuk mengubah antarmuka suatu objek menjadi antarmuka yang diharapkan oleh klien. Adapter digunakan ketika kita ingin menghubungkan dua sistem yang memiliki antarmuka yang berbeda.

6. Facade: Facade adalah design pattern yang menyediakan antarmuka sederhana untuk mengakses sistem yang kompleks. Facade digunakan ketika kita ingin menyederhanakan interaksi dengan sistem yang kompleks dengan menyediakan antarmuka yang mudah dipahami.

7. Iterator: Iterator adalah design pattern yang memungkinkan kita untuk mengakses elemen dari suatu objek koleksi secara terstruktur dan berulang-ulang. Iterator digunakan ketika kita ingin mengakses elemen dari suatu objek koleksi tanpa perlu mengetahui struktur internal dari koleksi tersebut.

## 13. Jelaskan bagaimana alur yang baik untuk mengambil foto kemudian melakukan kompresi image dan menyimpan ke file

Berikut adalah alur yang baik untuk mengambil foto, melakukan kompresi, dan menyimpan ke file:

1. Membuka kamera: Pertama, kita perlu membuka kamera untuk mengambil foto. Kita dapat menggunakan intent untuk membuka aplikasi kamera bawaan pada perangkat Android.

2. Mengambil foto: Setelah kamera terbuka, kita dapat mengambil foto dengan menekan tombol shutter pada kamera. Setelah foto diambil, aplikasi akan menerima hasil balik berupa file foto dalam bentuk bitmap.

3. Kompresi gambar: Setelah foto diambil, kita dapat melakukan proses kompresi pada gambar untuk mengurangi ukuran file dan mempercepat proses transfer data. Kita dapat menggunakan metode kompresi seperti JPEG atau PNG.

4. Menyimpan ke file: Setelah proses kompresi selesai, kita dapat menyimpan gambar ke file. Kita dapat menggunakan perpustakaan penyimpanan seperti Android Storage Access Framework untuk menyimpan file ke penyimpanan internal atau eksternal.
