const ads = [
    {
        "poster": "https://telegra.ru.com/p/4d77bd04x042b5b4176e7a04ab139bf879f939fc76d077ffc",
        "deskripsi": "Cek [COD] Celana Dalam Boxer Magnet Terapi Pembesar Kelamin Mr P Penis Kesehatan Pria Dewasa Vakoou Original Terbukti Ampuh dengan harga Rp57.900 - Rp64.000",
        "link": "https://shope.ee/4fJX6YpAcS"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04x7af3c6389fb263b82ce2b16d17b4b76f6d077ffc",
        "deskripsi": "Cek LOVE☆ 1Pc Round Non-Piercing Nipple Ring Shield Body Piercing Jewelry Screw Adjustable dengan harga Rp20.597 - Rp22.621",
        "link": "https://shope.ee/3V7ZlsD2Ey"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04x41207da0e4d3f19ae3c269cf4ee6f7596d077ffc",
        "deskripsi": "Cek OBAT KEMBALI PERAWAN OBAT PERAPAT MISS V SPESIAL KEWANITAAN HERBAL AZZAHRA NATURINDO BISA COD dengan harga Rp70.000",
        "link": "https://shope.ee/2KvcOeXuZl"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04xa9a62cb0d6d3dad5e64b9a68f7d144426d077ffc",
        "deskripsi": "Cek Set 4 Pcs Boxer Pria Seamless Tanpa Jahitan Import Bahan Katun Celana Dalam Pria 4 Warna Korean dengan harga Rp34.500",
        "link": "https://shope.ee/6A8Kxk0VX6"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04x7e61d6850cb0a3bf57e7e9135b7a1f986d077ffc",
        "deskripsi": "Cek BEE - Boxer Pria Munafie Celana Dalam Boxer Pria Import CD 5856 dengan harga Rp6.799 - Rp8.499",
        "link": "https://shope.ee/10QEoIIcZW"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04xb918fd20fddb1c194e0d95b419dd27c36d077ffc",
        "deskripsi": "Cek [Set Kotak 4pcs] Boxer pria polos Celana dalam yang nyaman bernapas Impor high quality CD pria dengan harga Rp49.800",
        "link": "https://shope.ee/8UWFk8Wr2m"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04xeec18b195da390e02aa426c81e1af87c6d077ffc",
        "deskripsi": "Cek Celana Dalam Pria Boxer Seamless Rajut  UK M,L,XL,XXL - MR DAX 296 dengan harga Rp12.800 - Rp14.990",
        "link": "https://shope.ee/2fYSnVr7Ro"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04xe90892fac0ac6076a11fa609cbdc59236d077ffc",
        "deskripsi": "Cek celana dalam pria boxer 6pcs random dengan harga Rp52.800 - Rp69.700",
        "link": "https://shope.ee/5UseAlJ7eU"
    },
    {
        "poster": "https://telegra.ru.com/p/4d77bd04x24a6edb0b7d9656a890ba49aa598f7d96d077ffc",
        "deskripsi": "Cek BEE - Celana Dalam Boxer Rajut Impor Pria CD Underwear Sempak Pria Import Premium P19 dengan harga Rp6.699 - Rp9.000",
        "link": "https://shope.ee/3pkQBkWzCc"
    }
]
  
function randomads() {
  let random = ads[Math.floor(Math.random() * ads.length)];
  iklan.innerHTML = `<a href="${random.link}"><img src="${random.poster}" class="rounded" width="100%"><div class="container-fluid full-width-image" style="margin-top:-50px"><h1>${random.deskripsi}</h1></div></div><div class="modal-footer" style="border-style:none;margin-top:-5px"><img class="position-absolute bottom-0 start-50 translate-middle-x" src="assets/img/buy.png" height="60px"></a>`;
  ads.innerHTML = random.ads;
}
randomads();