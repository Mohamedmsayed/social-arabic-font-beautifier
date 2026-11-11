# Social Arabic Font Beautifier (X & Facebook)

<p align="center">
  <a href="#english">English</a> • <a href="#العربية">العربية</a>
</p>

---

<a id="english"></a>

## 🌍 English

A lightweight, open-source Chromium extension (**Google Chrome**, **Microsoft Edge**, **Brave**) that replaces the default Arabic system/web fonts on **X (Twitter)** and **Facebook** with the clean, modern **IBM Plex Arabic** typeface — featuring independent, live on/off toggles for each site.

### ✨ Features

- **Bundled Font (Zero External Requests):** `IBMPlexArabic-Text.ttf` is packaged locally inside the extension to bypass strict Content Security Policies (CSP) and render instantaneously with zero network overhead.
- **Smart Arabic-Only Targeting:** Uses `unicode-range` targeting so only Arabic script characters are styled with IBM Plex Arabic while keeping English/Latin text intact.
- **Live Independent Toggles:** Toggle **X (Twitter)** and **Facebook** on or off independently from the popup menu — changes apply immediately without refreshing the page.
- **100% Privacy-Friendly:** Collects zero user data, makes zero external network calls, and only uses `chrome.storage.sync` to store your two toggle preferences.

### 🚀 Installation

1. Download the extension:
   - Go to the [**Releases**](https://github.com/Mohamedmsayed/social-arabic-font-beautifier/releases) page and download the latest `.zip` package, then extract it.
   - *(Or click **Code → Download ZIP** and extract it to a folder on your device.)*
2. Open your browser's extensions page:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Brave:** `brave://extensions`
3. Enable **Developer mode** in the top corner.
4. Click **Load unpacked** and select the extracted folder containing `manifest.json`.
5. Pin the extension icon to your toolbar to toggle X and Facebook anytime.

### 📁 Project Structure

```text
├── manifest.json              # Extension configuration (Manifest V3)
├── content.js                 # Dynamic font injection & live toggle listener for X & Facebook
├── popup.html                 # Popup toggle UI
├── popup.js                   # Syncs user preferences via chrome.storage
├── LICENSE                    # MIT License
└── fonts/
    └── IBMPlexArabic-Text.ttf # Bundled IBM Plex Arabic font
```

### 📄 Licenses

- Extension source code is licensed under the [MIT License](./LICENSE).
- **IBM Plex Sans Arabic** is open source under the [SIL Open Font License 1.1](https://scripts.sil.org/OFL).

---

<a id="العربية"></a>

<div dir="rtl">

## 🌙 العربية

إضافة خفيفة ومفتوحة المصدر لمتصفحات Chromium (**Google Chrome** و**Microsoft Edge** و**Brave**) تعمل على تحسين عرض الخط العربي في **تويتر (X)** و**فيسبوك (Facebook)** واستبدال الخطوط الافتراضية بخط **IBM Plex Arabic** الأنيق والمريح للعين، مع إمكانية تفعيل أو إيقاف كل موقع بشكل مستقل وفوري.

### ✨ المميزات

- **خط مدمج محلياً (بدون طلبات خارجية):** ملف الخط `IBMPlexArabic-Text.ttf` مدمج داخل الإضافة نفسها لتجاوز قيود الحماية (CSP) والعمل بأقصى سرعة وبدون الحاجة لتحميل خارجي.
- **تطبيق ذكي على الحروف العربية فقط:** يستهدف الحروف والنصوص العربية باستخدام `unicode-range` ليحافظ على شكل النصوص الإنجليزية كما هي دون تغيير.
- **تحكم مستقل وفوري (Live Toggles):** نافذة إعدادات بسيطة تتيح لك تفعيل أو إيقاف الإضافة على **X (Twitter)** أو **Facebook** كلٌ على حدة في نفس اللحظة بدون الحاجة لإعادة تحميل الصفحة.
- **خصوصية كاملة 100%:** الإضافة لا تجمع أي بيانات، ولا تتصل بأي خوادم خارجية، وتستخدم فقط صلاحية `storage` لحفظ تفضيلات التفعيل الخاصة بك.

### 🚀 طريقة التثبيت

1. قم بتحميل المشروع:
   - من صفحة [**Releases**](https://github.com/Mohamedmsayed/social-arabic-font-beautifier/releases) قم بتحميل آخر ملف `.zip` وفك ضغطه،
   - أو اضغط على زر **Code** ثم **Download ZIP** وفك الضغط في مجلد على جهازك.
2. افتح صفحة الإضافات في متصفحك واكتب في شريط العنوان:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Brave:** `brave://extensions`
3. فعّل وضع المطور (**Developer mode**) من الزاوية العلوية.
4. اضغط على **Load unpacked** (تحميل إضافة غير مضغوطة) واختر المجلد الذي يحتوي على ملف `manifest.json`.
5. ثبّت أيقونة الإضافة في شريط المتصفح للتحكم السريع في تفعيل تويتر أو فيسبوك.

### 📁 هيكل المشروع

</div>

```text
├── manifest.json              # إعدادات الإضافة (Manifest V3)
├── content.js                 # حقن وتطبيق الخط العربي ديناميكياً لـ X وفيسبوك
├── popup.html                 # واجهة التحكم بالتفعيل والإيقاف
├── popup.js                   # منطق حفظ ومزامنة الإعدادات عبر chrome.storage
├── LICENSE                    # رخصة MIT
└── fonts/
    └── IBMPlexArabic-Text.ttf # خط IBM Plex Arabic المدمج
```

<div dir="rtl">

### 📄 التراخيص

- الكود البرمجي للإضافة مرخص بموجب رخصة [MIT License](./LICENSE).
- خط **IBM Plex Sans Arabic** مفتوح المصدر بموجب رخصة [SIL Open Font License 1.1](https://scripts.sil.org/OFL).

</div>
