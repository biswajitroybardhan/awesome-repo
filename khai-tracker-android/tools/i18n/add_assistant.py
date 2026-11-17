#!/usr/bin/env python3
"""Seed the grounded-assistant UI keys into every non-English locale.

These strings are machine-authored drafts. They inherit the same
review-required status as the rest of the translated copy and must be checked
by a native speaker before clinical use.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
WEB = HERE.parents[2] / "khai-site" / "tools" / "i18n" / "translations"

# Values shared by the site (assistant*) and the app (assistant_*).
COMMON = {
    "hi": ("मार्गदर्शिका", "खाई मार्गदर्शिका", "इस टूल की अपनी सहायता-पाठ से निकाले गए प्रश्नों के उत्तर। कोई AI नहीं, कोई निदान नहीं, कोई सलाह नहीं।", "कोई प्रश्न पूछें", "भेजें", "मेरे पास इसका उत्तर नहीं है। मैं सिर्फ़ इस टूल के इस्तेमाल के प्रश्नों का उत्तर देता हूँ।", "किसी योग्य चिकित्सक से पूछें।", "डिस्प्ले की भाषा बदलने से सिर्फ़ लेबल बदलते हैं। दर्ज किए गए मान स्थिर कोड रहते हैं, इसलिए किसी दिन का रिकॉर्ड कभी नहीं बदलता।"),
    "bn": ("গাইড", "খাই গাইড", "এই টুলের নিজস্ব সহায়তা পাঠ থেকে নেওয়া প্রশ্নের উত্তর। কোনো AI নেই, কোনো রোগনির্ণয় নেই, কোনো পরামর্শ নেই।", "একটি প্রশ্ন জিজ্ঞাসা করুন", "পাঠান", "এর উত্তর আমার কাছে নেই। আমি শুধু এই টুল ব্যবহার সম্পর্কে প্রশ্নের উত্তর দিতে পারি।", "একজন যোগ্য চিকিৎসকের সাথে পরামর্শ করুন।", "ডিসপ্লে ভাষা বদলালে শুধু লেবেল বদলায়। রেকর্ড করা মান স্থিতিশীল কোড হিসেবে থাকে, তাই কোনো দিনের রেকর্ড কখনো বদলায় না।"),
    "ta": ("வழிகாட்டி", "கை வழிகாட்டி", "இந்தக் கருவியின் சொந்த உதவி உரையிலிருந்து எடுக்கப்பட்ட பதில்கள். AI இல்லை, நோயறிதி இல்லை, ஆலோசனை இல்லை.", "ஒரு கேள்வி கேளுங்கள்", "அனுப்பு", "இதற்கு என்னிடம் பதில் இல்லை. இந்தக் கருவியைப் பயன்படுத்துவது பற்றிய கேள்விகளுக்கு மட்டுமே நான் பதிலளிக்கிறேன்.", "ஒரு தகுதியான மருத்துவரிடம் கேளுங்கள்.", "காட்சி மொழியை மாற்றினால் லேபிள்கள் மட்டுமே மாறும். பதிவு செய்யப்பட்ட மதிப்புகள் நிலையான குறியீடுகளாக இருப்பதால் ஒரு நாளும் மீண்டும் எழுதப்படவில்லை."),
    "te": ("గైడ్", "ఖాయ్ గైడ్", "ఈ టూల్ స్వంత సహాయక పాఠ్యం నుంచి తీసిన ప్రశ్నలకు సమాధానాలు. AI లేదు, రోగనిర్ధారణ లేదు, సలహా లేదు.", "ఒక ప్రశ్న అడగండి", "పంపు", "దీనికి నా వద్ద సమాధానం లేదు. ఈ టూల్ వాడకం గురించిన ప్రశ్నలకు మాత్రమే నేను సమాధానం ఇస్తాను.", "అర్హత కలిగిన వైద్యుడిని అడగండి.", "డిస్ప్లే భాష మార్చినప్పుడు లేబుళ్లు మాత్రమే మారతాయి. రికార్డ్ చేసిన విలువలు స్థిరమైన కోడ్\u200cలుగా ఉంటాయి కాబట్టి ఏ రోజూ తిరిగి రాయబడదు."),
    "mr": ("मार्गदर्शक", "खाई मार्गदर्शक", "या टूलच्या स्वतःच्या मदत-मजकूरमधून काढलेली प्रश्नांची उत्तरे. कोणताही AI नाही, निदान नाही, सल्ला नाही.", "एक प्रश्न विचारा", "पाठवा", "याचे उत्तर माझ्याकडे नाही. मी फक्त या टूलच्या वापराविषयीच्या प्रश्नांची उत्तरे देतो.", "एका पात्र वैद्यकीय तज्ञाकडे विचारा.", "प्रदर्शन भाषा बदलल्याने फक्त लेबले बदलतात. नोंदवलेली मूल्ये स्थिर कोड राहतात, म्हणून कोणताही दिवस कधीही पुन्हा लिहिला जात नाही."),
    "gu": ("માર્ગદર્શિકા", "ખાઈ માર્ગદર્શિકા", "આ ટૂલના પોતાના સહાય-પાઠમાંથી લીધેલા પ્રશ્નોના જવાબો. કોઈ AI નથી, કોઈ નિદાન નથી, કોઈ સલાહ નથી.", "એક પ્રશ્ન પૂછો", "મોકલો", "આનો જવાબ મારી પાસે નથી. હું ફક્ત આ ટૂલના ઉપયોગ વિશેના પ્રશ્નોના જવાબ આપું છું.", "યોગ્ય ચિકિત્સકને પૂછો.", "ડિસ્પ્લે ભાષા બદલવાથી ફક્ત લેબલ બદલાય છે. રેકોર્ડ કરેલા મૂલ્યો સ્થિર કોડ રહે છે, તેથી કોઈ દિવસ ક્યારેય ફરીથી લખાતો નથી."),
    "kn": ("ಮಾರ್ಗದರ್ಶಿ", "ಖಾಯಿ ಮಾರ್ಗದರ್ಶಿ", "ಈ ಉಪಕರಣದ ಸ್ವಂತ ಸಹಾಯ ಪಠ್ಯದಿಂದ ತೆಗೆದುಕೊಂಡ ಪ್ರಶ್ನೆಗಳ ಉತ್ತರಗಳು. ಯಾವುದೇ AI ಇಲ್ಲ, ರೋಗನಿರ್ಣಯ ಇಲ್ಲ, ಸಲಹೆ ಇಲ್ಲ.", "ಒಂದು ಪ್ರಶ್ನೆ ಕೇಳಿ", "ಕಳುಹಿಸಿ", "ಇದಕ್ಕೆ ನನ್ನಲ್ಲಿ ಉತ್ತರವಿಲ್ಲ. ಈ ಉಪಕರಣವನ್ನು ಬಳಸುವುದರ ಬಗ್ಗೆ ಮಾತ್ರ ನಾನು ಉತ್ತರಿಸುತ್ತೇನೆ.", "ಅರ್ಹ ವೈದ್ಯರನ್ನು ಕೇಳಿ.", "ಪ್ರದರ್ಶನ ಭಾಷೆ ಬದಲಾಯಿಸಿದಾಗ ಲೇಬಲ್\u200cಗಳು ಮಾತ್ರ ಬದಲಾಗುತ್ತವೆ. ದಾಖಲಿಸಿದ ಮೌಲ್ಯಗಳು ಸ್ಥಿರ ಕೋಡ್\u200cಗಳಾಗಿ ಉಳಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ದಿನವನ್ನು ಮರುಬರೆಯಲಾಗುವುದಿಲ್ಲ."),
    "ml": ("വഴികാട്ടി", "ഖായ് വഴികാട്ടി", "ഈ ഉപകരണത്തിന്റെ സ്വന്തം സഹായ പാഠത്തിൽ നിന്ന് എടുത്ത ചോദ്യങ്ങളുടെ ഉത്തരങ്ങൾ. AI ഇല്ല, രോഗനിർണയം ഇല്ല, ഉപദേശം ഇല്ല.", "ഒരു ചോദ്യം ചോദിക്കുക", "അയയ്ക്കുക", "ഇതിന് എന്റെ പക്കൽ ഉത്തരമില്ല. ഈ ഉപകരണം ഉപയോഗിക്കുന്നതിനെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് മാത്രമേ ഞാൻ ഉത്തരം നൽകുന്നുള്ളൂ.", "ഒരു യോഗ്യതയുള്ള ഡോക്ടറോട് ചോദിക്കുക.", "ഡിസ്പ്ലെ ഭാഷ മാറ്റുമ്പോൾ ലേബലുകൾ മാത്രമേ മാറുന്നുള്ളൂ. രേഖപ്പെടുത്തിയ മൂല്യങ്ങൾ സ്ഥിരമായ കോഡുകളായി തുടരുന്നതിനാൽ ഒരു ദിവസവും വീണ്ടും എഴുതപ്പെടുന്നില്ല."),
    "pa": ("ਗਾਈਡ", "ਖਾਈ ਗਾਈਡ", "ਇਸ ਟੂਲ ਦੇ ਆਪਣੇ ਮਦਦ-ਪਾਠ ਤੋਂ ਲਏ ਗਏ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ। ਕੋਈ AI ਨਹੀਂ, ਕੋਈ ਨਿਦਾਨ ਨਹੀਂ, ਕੋਈ ਸਲਾਹ ਨਹੀਂ।", "ਇੱਕ ਸਵਾਲ ਪੁਛੋ", "ਭੇਜੋ", "ਮੇਰੇ ਕੋਲ ਇਸਦਾ ਜਵਾਬ ਨਹੀਂ ਹੈ। ਮੈਂ ਸਿਰਫ਼ ਇਸ ਟੂਲ ਦੀ ਵਰਤੋਂ ਬਾਰੇ ਸਵਾਲਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦਾ ਹਾਂ।", "ਕਿਸੇ ਯੋਗ ਡਾਕਟਰ ਤੋਂ ਪੁਛੋ।", "ਡਿਸਪਲੇ ਭਾਸ਼ਾ ਬਦਲਣ ਨਾਲ ਸਿਰਫ਼ ਲੇਬਲ ਬਦਲਦੇ ਹਨ। ਦਰਜ ਕੀਤੇ ਮੁੱਲ ਸਥਿਰ ਕੋਡ ਰਹਿੰਦੇ ਹਨ, ਇਸ ਲਈ ਕਿਸੇ ਵੀ ਦਿਨ ਨੂੰ ਕਦੇ ਮੁੜ ਨਹੀਂ ਲਿਖਿਆ ਜਾਂਦਾ।"),
    "ur": ("رہنما", "خائی رہنما", "اس ٹول کی اپنی مدد کے متن سے لیے گئے سوالات کے جوابات۔ نہ کوئی AI، نہ تشخیص، نہ مشورہ۔", "ایک سوال پوچھیں", "بھیجیں", "میرے پاس اس کا جواب نہیں ہے۔ میں صرف اس ٹول کے استعمال کے بارے میں سوالات کا جواب دیتا ہوں۔", "کسی قابل ڈاکٹر سے پوچھیں۔", "ڈسپلے کی زبان بدلنے سے صرف لیبل بدلتے ہیں۔ ریکارڈ کیے گئے اقدام مستحکم کوڈز رہتے ہیں، اس لیے کسی دن کا ریکارڈ کبھی دوبارہ نہیں لکھا جاتا۔"),
    "fr": ("Guide", "Guide Khai", "Des réponses tirées uniquement de l'aide intégrée à cet outil. Pas d'IA, pas de diagnostic, pas de conseil.", "Posez une question", "Envoyer", "Je n'ai pas de réponse à cela. Je réponds uniquement aux questions sur l'utilisation de cet outil.", "Consultez un professionnel de santé qualifié.", "Changer la langue d'affichage ne modifie que les libellés. Les valeurs enregistrées restent des codes stables : aucun jour n'est jamais réécrit."),
    "de": ("Hilfe", "Khai-Hilfe", "Antworten ausschließlich aus den eigenen Hilfetexten dieses Werkzeugs. Keine KI, keine Diagnose, keine Beratung.", "Frage eingeben", "Senden", "Dafür habe ich keine Antwort. Ich beantworte nur Fragen zur Nutzung dieses Werkzeugs.", "Fragen Sie eine qualifizierte Fachperson.", "Ein Wechsel der Anzeigesprache ändert nur die Beschriftungen. Gespeicherte Werte bleiben stabile Codes, sodass kein Tag überschrieben wird."),
    "pt": ("Guia", "Guia Khai", "Respostas retiradas apenas do próprio texto de ajuda desta ferramenta. Sem IA, sem diagnóstico, sem conselho.", "Faça uma pergunta", "Enviar", "Não tenho resposta para isso. Só respondo a perguntas sobre o uso desta ferramenta.", "Pergunte a um profissional de saúde qualificado.", "Mudar o idioma de exibição altera apenas os rótulos. Os valores registados permanecem como códigos estáveis, pelo que nenhum dia é reescrito."),
    "it": ("Guida", "Guida Khai", "Risposte tratte solo dal testo di aiuto di questo strumento. Nessuna IA, nessuna diagnosi, nessun consiglio.", "Fai una domanda", "Invia", "Non ho una risposta per questo. Rispondo solo alle domande sull'uso di questo strumento.", "Chiedi a un professionista sanitario qualificato.", "Cambiare la lingua di visualizzazione modifica solo le etichette. I valori registrati restano codici stabili, quindi nessun giorno viene riscritto."),
    "ru": ("Справка", "Справка Khai", "Ответы берутся только из встроенной справки этого инструмента. Никакого ИИ, никакого диагноза, никаких рекомендаций.", "Задайте вопрос", "Отправить", "У меня нет ответа на это. Я отвечаю только на вопросы об использовании этого инструмента.", "Обратитесь к квалифицированному специалисту.", "Смена языка отображения изменяет только подписи. Записанные значения остаются стабильными кодами, поэтому ни один день не перезаписывается."),
    "zh": ("指南", "Khai 指南", "答案仅取自本工具自带的帮助文本。没有人工智能，没有诊断，没有建议。", "请输入问题", "发送", "我无法回答这个问题。我只能回答有关如何使用本工具的问题。", "请咨询合格的医务人员。", "切换显示语言只会更改标签。记录的值保持为稳定代码，因此任何一天的记录都不会被重写。"),
    "ja": ("ガイド", "Khai ガイド", "このツール固有のヘルプテキストからのみ回答します。AIは使わず、診断も助言もしません。", "質問を入力", "送信", "その質問には答えられません。このツールの使い方に関する質問にのみ答えます。", "資格のある医療専門家にご相談ください。", "表示言語を切り替えてもラベルが変わるだけです。記録した値は安定したコードのままなので、日々の記録が書き換わることはありません。"),
    "ko": ("안내", "Khai 안내", "이 도구 자체의 도움말에서만 가져온 답변입니다. AI도, 진단도, 조언도 없습니다.", "질문을 입력하세요", "보내기", "그 질문에 대한 답이 없습니다. 이 도구 사용법에 관한 질문에만 답합니다.", "자격을 갖춘 의료 전문가에게 문의하세요.", "표시 언어를 바꾸면 레이블만 바뀝니다. 기록된 값은 안정적인 코드로 남아 있어 하루 기록이 다시 작성되지 않습니다."),
    "ar": ("دليل", "دليل خاي", "إجابات مأخوذة فقط من نص المساعدة الخاص بهذه الأداة. لا ذكاء اصطناعي، ولا تشخيص، ولا نصيحة.", "اطرح سؤالاً", "إرسال", "لا أملك إجابة عن هذا. أجيب فقط عن الأسئلة الخاصة باستخدام هذه الأداة.", "اسأل أخصائياً مؤهلاً.", "تغيير لغة العرض يغيّر التسميات فقط. تبقى القيم المسجلة رموزاً ثابتة، لذلك لا يُعاد كتابة أي يوم."),
    "tr": ("Kılavuz", "Khai Kılavuzu", "Yanıtlar yalnızca bu aracın kendi yardım metninden alınır. Yapay zekâ yok, tanı yok, tavsiye yok.", "Bir soru sorun", "Gönder", "Bunun için bir yanıtım yok. Yalnızca bu aracın kullanımıyla ilgili soruları yanıtlarım.", "Nitelikli bir sağlık uzmanına danışın.", "Görüntüleme dilini değiştirmek yalnızca etiketleri değiştirir. Kaydedilen değerler sabit kodlar olarak kalır, böylece hiçbir gün yeniden yazılmaz."),
    "vi": ("Hướng dẫn", "Hướng dẫn Khai", "Câu trả lời chỉ lấy từ văn bản trợ giúp của chính công cụ này. Không có AI, không chẩn đoán, không tư vấn.", "Đặt một câu hỏi", "Gửi", "Tôi không có câu trả lời cho điều đó. Tôi chỉ trả lời các câu hỏi về cách sử dụng công cụ này.", "Hãy hỏi một chuyên gia y tế có trình độ.", "Đổi ngôn ngữ hiển thị chỉ thay đổi nhãn. Các giá trị đã ghi vẫn là mã cố định, nên không ngày nào bị ghi lại."),
    "id": ("Panduan", "Panduan Khai", "Jawaban hanya diambil dari teks bantuan alat ini sendiri. Tanpa AI, tanpa diagnosis, tanpa saran.", "Ajukan pertanyaan", "Kirim", "Saya tidak punya jawaban untuk itu. Saya hanya menjawab pertanyaan tentang penggunaan alat ini.", "Tanyakan kepada tenaga kesehatan yang berkualifikasi.", "Mengubah bahasa tampilan hanya mengubah label. Nilai yang tersimpan tetap berupa kode stabil, sehingga tidak ada hari yang ditulis ulang."),
    "th": ("คู่มือ", "คู่มือ Khai", "คำตอบมาจากข้อความช่วยเหลือของเครื่องมือนี้เท่านั้น ไม่มี AI ไม่มีการวินิจฉัย ไม่มีคำแนะนำ", "ถามคำถาม", "ส่ง", "ฉันไม่มีคำตอบสำหรับเรื่องนั้น ฉันตอบเฉพาะคำถามเกี่ยวกับการใช้เครื่องมือนี้", "ถามแพทย์หรือผู้เชี่ยวชาญที่ผ่านการรับรอง", "การเปลี่ยนภาษาที่แสดงจะเปลี่ยนเฉพาะป้ายชื่อ ค่าที่บันทึกยังคงเป็นรหัสที่คงที่ ดังนั้นข้อมูลของวันใดจะไม่ถูกเขียนทับ"),
    "sw": ("Mwongozo", "Mwongozo wa Khai", "Majibu yanatokana tu na maandishi ya msaada ya chombo hiki. Hakuna AI, hakuna utambuzi, hakuna ushauri.", "Uliza swali", "Tuma", "Sina jibu la hilo. Najibu tu maswali kuhusu matumizi ya chombo hiki.", "Uliza mtaalamu wa afya aliyehitimu.", "Kubadilisha lugha ya kuonyesha hubadilisha tu lebo. Thamani zilizohifadhiwa zinabaki kama misimbo thabiti, kwa hiyo siku yoyote haiandikwi upya."),
    "am": ("መመሪያ", "የካይ መመሪያ", "መልሶች የሚገኙት ከዚህ መሳሪያ የራሱ የእርዳታ ጽሑፍ ብቻ ነው። AI የለም፣ ምርመራ የለም፣ ምክር የለም።", "ጥያቄ ጠይቅ", "ላክ", "ለዚህ መልስ የለኝም። ስለዚህ መሳሪያ አጠቃቀም ብቻ ነው የምመልሰው።", "ብቁ ከሆነ የጤና ባለሙያ ጠይቅ።", "የማሳያ ቋንቋ መቀየር መለያዎችን ብቻ ነው የሚቀይረው። የተመዘገቡ እሴቶች የተረጋጉ ኮዶች ሆነው ይቀራሉ፣ ስለዚህ ምንም ቀን እንደገና አይጻፍም።"),
}

WEB_KEYS = ("assistantNav", "assistantTitle", "assistantIntro", "assistantInputPh",
            "assistantSend", "assistantUnknown", "askClinician", "assistantLanguageAnswer")
APP_KEYS = ("assistant_tab", "assistant_title", "assistant_intro", "assistant_input_ph",
            "assistant_send", "assistant_unknown", "ask_clinician")


def load(path):
    return json.loads(path.read_text(encoding="utf-8"))


def save(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")


for code, values in COMMON.items():
    nav, title, intro, hint, send, unknown, clinician, lang_answer = values
    web_values = (nav, title, intro, hint, send, unknown, clinician, lang_answer)
    app_values = (nav, title, intro, hint, send, unknown, clinician)

    if code == "hi":
        # Hindi is shipped: page strings live in hi-page.json, app strings in
        # values-hi/strings.xml (added separately so XML escaping stays explicit).
        hi_page = HERE / "hi-page.json"
        data = load(hi_page)
        for key, value in zip(WEB_KEYS, web_values):
            data[key] = value
        save(hi_page, data)
        print("seeded hi (web via hi-page.json; app strings added to values-hi)")
        continue

    app_path = HERE / "translations" / (code + ".json")
    app_data = load(app_path)
    for key, value in zip(APP_KEYS, app_values):
        app_data[key] = value
    save(app_path, app_data)

    web_path = WEB / (code + ".json")
    web_data = load(web_path)
    for key, value in zip(WEB_KEYS, web_values):
        web_data[key] = value
    save(web_path, web_data)

    print("seeded", code)
