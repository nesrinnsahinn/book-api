# book-api
Kitap Uygulaması için kaynak kodu ve talimatlar

# Kitap Listesi Uygulaması

Bu depo, Kitap Listesi Uygulaması için kaynak kodları ve talimatları içermektedir.

## Tasarım Kararları ve Tercihler

- **React ve Redux:** Uygulamanın ön yüzü için React ve durum yönetimi için Redux kullanıldı.
- **Redux Yapılandırması:** `store` klasörü altında `store.js` ve `cartReducer.js` dosyaları oluşturuldu ve Redux, `App.jsx` dosyasında `Provider` ile yapılandırıldı.
- **React Router Kullanımı:** Sayfa yönlendirmeleri için React Router kullanıldı.
- Tasarım TailwindCSS ile gerçekleştirildi.
-  Aşağıdaki sayfalar oluşturuldu:
  - **Anasayfa:** Öne çıkan kitapların listelendiği ve kitapları başlık veya yazar adına göre aramak için Header kısmı arama çubuğu içerir.
  - **Kitap Detayları:** Bir kitapta deyatları görüntüleyerek, kitabın bilgilerini (başlık, yazar, açıklama vb.) gösteren detay sayfasına yönlendirir.
  - **Alışveriş Sepeti:** Kullanıcıların kitapları alışveriş sepetine eklemelerine izin verir. Toplam fiyatı gösterir ve kullanıcıların ödeme işlemine devam etmelerine olanak tanır.
  - **Ödeme:** Kullanıcıların ödeme işlemlerini gerçekleştirebileceği sayfa.
  - bookApi.js dosyası, kitap verilerini çekmek için gerekli API fonksiyonlarını içerir.


## Kurulum ve Çalıştırma

1. **Depoyu Klonla:**
   ```bash
   git clone https://github.com/kullanici-adiniz/kitap-listesi-uygulamasi.git
   cd kitap-listesi-uygulamasi

## Kurulum ve Çalıştırma

1. **Depoyu Klonla:**
   ```bash
   git clone https://github.com/kullanici-adiniz/kitap-listesi-uygulamasi.git
   cd kitap-listesi-uygulamasi
   
## Gerekli Paketleri Yükle:
npm install
## Uygulamayı çalıştır
npm run dev
