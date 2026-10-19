# موقع دبلومة تصنيع مستحضرات التجميل

موقع ثابت (HTML/CSS/JS) بدون Build وبدون Backend. المسارات نسبية فتعمل داخل GitHub Pages.

## الرفع على GitHub
1. أنشئ حسابًا على github.com ثم Repository جديدًا (مثلًا `cosmetics-diploma`)، عام (Public).
2. اضغط Add file ← Upload files، واسحب **محتويات** هذا المجلد (index.html وassets وcontent وREADME.md) ثم Commit changes.
3. من Settings ← Pages: Source = Deploy from a branch، Branch = main، المجلد / (root)، ثم Save.
4. بعد دقائق يظهر الرابط: `https://USERNAME.github.io/REPO/`.

## التعديل
- **كل النصوص والروابط:** `assets/js/data.js`.
- **رقم واتساب:** `whatsapp` في data.js بصيغة دولية بدون صفر وبدون + (مثال: 201040114232).
- **رابط فيسبوك:** `facebook` في data.js.
- **الصورة:** استبدل `assets/images/doctor-mostafa.jpg` بنفس الاسم.
- **الألوان:** المتغيرات أعلى `assets/css/style.css`.
- **الكتب والفيديوهات:** ضع الملفات في `content/books` و`content/videos`. الموقع لا يعرض روابط تنزيل حاليًا؛ لإضافتها أضف حقل رابط حقيقيًا في data.js وعدّل بطاقة الجزء في main.js.

## ملاحظات
- لا توجد شعارات جهات ولا ادعاء اعتماد. حدّث قسم الاعتمادات فقط بعد توفر مستندات رسمية.
- لم يُضف ملف LICENSE لأن نوع الترخيص غير محدد.
