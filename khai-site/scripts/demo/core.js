/* Khai Tracker — browser demo: data layer.
 *
 * One plain object per day in localStorage where the app has one encrypted row per day.
 * The rules are copied from the Kotlin build: completeness, estimates, insights, CSV, FHIR.
 * Honest differences: no encryption, no Keystore, no sync, no PIN, no reminder.
 */
(function () {
  'use strict';

  var K = window.Khai = window.Khai || {};
  K.FOODS = Array.isArray(window.KHAI_FOODS) ? window.KHAI_FOODS : [];
  K.BY_ID = Object.create(null);
  K.FOODS.forEach(function (f) { K.BY_ID[f.id] = f; });

  K.STORAGE_KEY = 'khai.demo.v1';
  K.MEALS = ['breakfast', 'lunch', 'dinner', 'snacks'];
  K.DOW_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  K.DOW_HI = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
  K.MON_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  K.MON_HI = ['जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुल॰', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰'];
  K.MON_LONG_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  K.MON_LONG_HI = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्तूबर', 'नवंबर', 'दिसंबर'];

  K.AGE_BANDS = [
    { key: 'lt40', en: 'Under 40', hi: '40 से कम' },
    { key: '40_49', en: '40–49', hi: '40–49' },
    { key: '50_59', en: '50–59', hi: '50–59' },
    { key: '60_69', en: '60–69', hi: '60–69' },
    { key: 'ge70', en: '70 and above', hi: '70 और उससे अधिक' }
  ];
  K.CONDITIONS = [
    { key: 'diabetes_t2', en: 'Diabetes (type 2)', hi: 'मधुमेह (टाइप 2)' },
    { key: 'prediabetes', en: 'Pre-diabetes', hi: 'प्री-डायबिटीज़' },
    { key: 'hypertension', en: 'High blood pressure', hi: 'उच्च रक्तचाप' },
    { key: 'cholesterol', en: 'High cholesterol', hi: 'उच्च कोलेस्ट्रॉल' },
    { key: 'weight', en: 'Weight management', hi: 'वज़न प्रबंधन' },
    { key: 'none', en: 'None of these', hi: 'इनमें से कोई नहीं' }
  ];

  var EN = {
    demoBadge: 'Demo', brandSub: 'Tracker',
    tabToday: 'Today', tabHistory: 'History', tabProgress: 'Progress', tabSettings: 'Settings',
    skip: 'Skip to demo', close: 'Close', cancel: 'Cancel', confirm: 'Confirm', done: 'Done',
    back: 'Back', save: 'Save', add: 'Add', remove: 'Remove', copied: 'Copied to clipboard',
    langName: 'हिंदी', langSwitchLabel: 'Switch to Hindi',

    welcomeTitle: 'Welcome to Khai Tracker',
    welcomeBody: 'A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice.',
    codeLabel: 'Participant code', codePh: 'e.g. K01',
    ageLabel: 'Age band', choose: 'Choose',
    conditionsLabel: 'Conditions (select all that apply)',
    medsLabel: 'Daily medicines (name and dose)', medNamePh: 'e.g. Metformin', dosePh: 'Dose (optional)',
    addMed: '+ Add another', medRemove: 'Remove medicine',
    start: 'Start recording',
    consentTitle: 'Consent',
    consentBody: 'You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time.',
    consentCheck: 'I have read this and understand this browser demo is not for real clinical records.',
    onboardStorage: 'Stored only in this browser. No account, no upload.',
    errCode: 'Please enter your participant code.', errAge: 'Please choose an age band.',
    errConsent: 'Consent is required to continue.', errMed: 'Give each medicine a name, or remove the empty row.',
    stepProfile: '1 · Who', stepToday: '2 · First day',

    prevDay: 'Previous day', nextDay: 'Next day', today: 'Today', yesterday: 'Yesterday',
    dayComplete: 'Day complete', dayPartial: 'Partially complete', dayEmpty: 'Nothing recorded yet',
    foodLogged: 'Food', medsLogged: 'Medicine', readingLogged: 'Reading',
    mealBreakfast: 'Breakfast', mealLunch: 'Lunch', mealDinner: 'Dinner', mealSnacks: 'Tea & snacks',
    addFood: 'Add food', noFood: 'Nothing added yet',
    foodItemsOne: '1 item', foodItemsN: '{n} items',
    medsTitle: 'Medicines', medsHint: 'Choose what actually happened today.',
    taken: 'Taken', skipped: 'Skipped', changed: 'Changed',
    noMeds: 'No medicines recorded in your profile.', addMeds: 'Add medicines',
    vitalsTitle: 'Readings', vitalsHint: 'Fill in only what you measured. Blank means not measured — that is information too.',
    bpSys: 'Systolic', bpDia: 'Diastolic', pulse: 'Pulse',
    glucose: 'Blood sugar', weight: 'Weight',
    fasting: 'Fasting', afterFood: 'After food',
    wellbeingTitle: 'How was the day?', energy: 'Energy', mood: 'Mood', sleep: 'Sleep last night (hours)',
    note: 'Anything else? (optional)', notePh: 'A symptom, a meal out, a missed walk…',
    kcal: 'kcal', carbs: 'carb', protein: 'protein', fat: 'fat', sodium: 'sodium',
    estTotal: 'Today’s estimate', estimateNote: 'Ranges collapsed to a representative value. For patterns, not calorie counting.',
    saveToday: 'Save today’s record', savedState: 'Saved in this browser', autoSave: 'Changes save as you type, only on this device.',
    savedToast: 'Saved in this browser.', saveFailed: 'Could not save in this browser. Storage may be full or blocked.',
    removedToast: 'Removed.', addedToast: 'Added to today’s record.',
    foodPickerTitle: 'Choose a dish', searchPh: 'Search dish in English or Hindi',
    allFoods: 'All', perPortion: 'per portion', qty: 'Quantity', addToMeal: 'Add to {meal}',
    noMatches: 'No dish matches that.', libraryNote: '83 regional dishes. Portions are household measures, not weights.',

    historyTitle: 'The last 21 days', historyHint: 'A filled square means a record exists. Tap any day to look or edit.',
    legendComplete: 'Complete', legendPartial: 'Partial', legendEmpty: 'No record',
    nothingLogged: 'No record for this day.', dayDetail: 'Day detail', editDay: 'Edit this day',
    recentDays: 'Recent days', selectDay: 'Select a day above.', todayBtn: 'Today',
    status: 'Status', medsLine: '{taken} of {total} taken', notLogged: 'not logged',

    progressTitle: 'Progress', completeness: '21-day completeness',
    completenessHint: 'Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory.',
    completeDays: 'complete days', loggedDays: 'days logged', streak: 'day streak',
    progressFmt: '{complete} / {total} complete days · {logged} days logged',
    progressFmtOne: '{complete} / {total} complete days · {logged} day logged',
    thisWeek: 'this week', totalLogged: 'total logged',
    insightsTitle: 'What your own numbers say', insightsCaveat: 'These are observations about your own entries — not a diagnosis and not treatment advice.',
    insightsEmpty: 'Keep a record for about a week. Patterns need at least four paired days before anything is shown.',
    early: 'early signal', moderate: 'moderate signal', descriptive: 'descriptive',
    avgBp: 'avg BP', avgGlucose: 'avg fasting sugar', weightChange: 'weight, period',
    adherence: 'medicines taken', last7: 'Last 7 days', noInsight: 'Not enough paired days yet.',

    settingsTitle: 'Settings', profileTitle: 'Participant profile', editProfile: 'Edit profile',
    codeShort: 'Code', ageShort: 'Age band', conditionsShort: 'Conditions', medsShort: 'Medicines',
    language: 'Language', languageHint: 'Display only. Record values are stored as stable codes, so switching never rewrites a day.',
    exportsTitle: 'Export & share', exportsHint: 'Files are generated in this browser and downloaded to your device. Nothing is uploaded.',
    exportMetrics: 'Daily metrics (CSV)', exportMetricsDesc: 'One row per day: readings, medicines, estimates.',
    exportFood: 'Food log (CSV)', exportFoodDesc: 'One row per dish, with English dish names.',
    exportBackup: 'Complete backup (JSON)', exportBackupDesc: 'Profile and every day, with a schema version.',
    exportFhir: 'Health record (FHIR R4)', exportFhirDesc: 'LOINC vitals, UCUM units, Consent and Provenance.',
    exportPrint: 'Clinician summary (print)', exportPrintDesc: 'One page, English, generated from your own record.',
    sampleTitle: 'Sample data', sampleBody: 'Fill a realistic fortnight so you can try history, progress and exports without typing. It replaces this demo’s current records.',
    loadSample: 'Load 14-day sample', sampleLoaded: 'Sample fortnight loaded.',
    eraseTitle: 'Erase everything', eraseBody: 'Deletes this demo’s profile, records and settings from this browser. It cannot be undone.',
    eraseBtn: 'Erase my data', eraseConfirmTitle: 'Erase everything?',
    eraseConfirmBody: 'This removes the profile, every day and every setting from this browser. It cannot be undone.',
    eraseYes: 'Erase everything', erasedToast: 'Everything erased from this browser.',
    aboutTitle: 'About this demo', aboutBody: 'Khai Tracker 1.0.0 (browser demo). Built by Khai Foods Pvt Ltd, Jamshedpur. Product owner: Biswajit Roy Bardhan.',
    demoOnly: 'Demo only · not a medical device · not for real clinical records.',
    noDataToast: 'No days recorded yet — add a day first.',
    printHint: 'In the print dialog choose “Save as PDF” for a one-page summary.',
    downloadToast: '{name} downloaded.',
    footerNote: 'Nothing leaves this browser.',

    planTitle: 'Weekly plan draft',
    planIntro: 'A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice.',
    planEmpty: 'Log about a week of food and readings first. A draft needs at least four paired days.',
    planNotAdvice: 'Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides.',
    planDraftLabel: 'Draft for review', planEvidence: 'Why this draft',
    planAccept: 'Accept', planEdit: 'Edit', planReject: 'Reject',
    planAccepted: 'Marked accepted in this demo.', planRejected: 'Marked rejected in this demo.',
    planEditHint: 'Editing happens with the clinician in the review meeting; this demo records the decision only.',
    planDecision: 'Demo decision', planDecisionNone: 'Not reviewed yet',
    planAcceptedState: 'accepted', planRejectedState: 'rejected', planEditedState: 'edited',
    planLowConfidence: 'Low confidence — only a few paired days.',
    planTypePortion: 'Portion', planTypeTiming: 'Timing', planTypeSwap: 'Swap', planTypeRecord: 'Record',
    escalateTitle: 'Flags for the clinician',
    escalateBody: 'Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription.',
    escalateNone: 'No threshold flags in the recent record.',
    planConfidenceTitle: 'How sure is this?',
    planConfidenceBody: 'Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings.',
    planPaired: 'Built from {n} days that have both food and a reading.', planClear: 'Clear',

    bmiNote: 'Not a diagnosis.', weightUnit: 'kg', bpUnit: 'mmHg', glucoseUnit: 'mg/dL', sleepUnit: 'h'
  };

  var HI = {
    demoBadge: 'डेमो', brandSub: 'ट्रैकर',
    tabToday: 'आज', tabHistory: 'इतिहास', tabProgress: 'प्रगति', tabSettings: 'सेटिंग',
    skip: 'डेमो तक जाएँ', close: 'बंद करें', cancel: 'रद्द करें', confirm: 'पुष्टि करें', done: 'हो गया',
    back: 'वापस', save: 'सहेजें', add: 'जोड़ें', remove: 'हटाएँ', copied: 'क्लिपबोर्ड पर कॉपी हो गया',
    langName: 'English', langSwitchLabel: 'Switch to English',

    welcomeTitle: 'खाई ट्रैकर में आपका स्वागत है',
    welcomeBody: 'रोज़ का खाना और सेहत का रिकॉर्ड, जिससे आपको और आपके डॉक्टर को दिखे कि दो जाँचों के बीच असल में क्या हो रहा है। यह सिर्फ़ रिकॉर्ड रखने का साधन है, इलाज की सलाह नहीं।',
    codeLabel: 'प्रतिभागी कोड', codePh: 'जैसे K01',
    ageLabel: 'आयु वर्ग', choose: 'चुनें',
    conditionsLabel: 'स्थितियाँ (जो लागू हों, सब चुनें)',
    medsLabel: 'रोज़ की दवाइयाँ (नाम और मात्रा)', medNamePh: 'जैसे मेटफॉर्मिन', dosePh: 'मात्रा (वैकल्पिक)',
    addMed: '+ एक और जोड़ें', medRemove: 'दवा हटाएँ',
    start: 'रिकॉर्ड शुरू करें',
    consentTitle: 'सहमति',
    consentBody: 'क्या दर्ज करना है, यह आप तय करते हैं। इस डेमो में सब कुछ इसी ब्राउज़र के स्थानीय संग्रह में रहता है — कोई सर्वर नहीं, कुछ अपलोड नहीं। एंड्रॉइड ऐप में प्रविष्टियाँ फ़ोन पर एन्क्रिप्ट रहती हैं। नाम, पता, आधार नंबर या संपर्क सूची नहीं ली जाती। आप कभी भी सब कुछ मिटा सकते हैं।',
    consentCheck: 'मैंने यह पढ़ा है और समझता/समझती हूँ कि यह ब्राउज़र डेमो असली क्लिनिकल रिकॉर्ड के लिए नहीं है।',
    onboardStorage: 'सिर्फ़ इसी ब्राउज़र में। कोई खाता नहीं, कोई अपलोड नहीं।',
    errCode: 'कृपया अपना प्रतिभागी कोड भरें।', errAge: 'कृपया आयु वर्ग चुनें।',
    errConsent: 'आगे बढ़ने के लिए सहमति देना ज़रूरी है।', errMed: 'हर दवा का नाम भरें, या खाली पंक्ति हटाएँ।',
    stepProfile: '1 · आप', stepToday: '2 · पहला दिन',

    prevDay: 'पिछला दिन', nextDay: 'अगला दिन', today: 'आज', yesterday: 'कल',
    dayComplete: 'दिन पूरा', dayPartial: 'दिन अधूरा', dayEmpty: 'अभी कुछ दर्ज नहीं',
    foodLogged: 'खाना', medsLogged: 'दवा', readingLogged: 'माप',
    mealBreakfast: 'नाश्ता', mealLunch: 'दोपहर का खाना', mealDinner: 'रात का खाना', mealSnacks: 'नाश्ता-चाय और पेय',
    addFood: 'खाना जोड़ें', noFood: 'अभी कुछ नहीं जोड़ा',
    foodItemsOne: '1 मद', foodItemsN: '{n} मद',
    medsTitle: 'दवाइयाँ', medsHint: 'आज आपने जो असल में किया, वही चुनें।',
    taken: 'ली', skipped: 'छोड़ी', changed: 'बदली',
    noMeds: 'आपकी प्रोफ़ाइल में कोई दवा दर्ज नहीं है।', addMeds: 'दवाइयाँ जोड़ें',
    vitalsTitle: 'माप', vitalsHint: 'जो मापा हो वही भरें। खाली छोड़ने का मतलब है मापा नहीं गया — यह भी ज़रूरी जानकारी है।',
    bpSys: 'सिस्टोलिक', bpDia: 'डायस्टोलिक', pulse: 'नाड़ी',
    glucose: 'शुगर', weight: 'वज़न',
    fasting: 'खाली पेट', afterFood: 'खाने के बाद',
    wellbeingTitle: 'दिन कैसा रहा?', energy: 'ऊर्जा', mood: 'मन', sleep: 'पिछली रात की नींद (घंटे)',
    note: 'कुछ और? (वैकल्पिक)', notePh: 'कोई लक्षण, बाहर का खाना, छूटी हुई सैर…',
    kcal: 'कि.कैलोरी', carbs: 'कार्बो', protein: 'प्रोटीन', fat: 'वसा', sodium: 'सोडियम',
    estTotal: 'आज का अनुमान', estimateNote: 'सीमाओं को एक प्रतिनिधि मान में बदला गया है। पैटर्न देखने के लिए, कैलोरी गिनने के लिए नहीं।',
    saveToday: 'आज का रिकॉर्ड सहेजें', savedState: 'इस ब्राउज़र में सहेजा गया', autoSave: 'बदलाव तुरंत इसी डिवाइस पर सहेजे जाते हैं।',
    savedToast: 'इस ब्राउज़र में सहेजा गया।', saveFailed: 'इस ब्राउज़र में सहेजा नहीं जा सका। संग्रहण भरा या बंद हो सकता है।',
    removedToast: 'हटा दिया गया।', addedToast: 'आज के रिकॉर्ड में जोड़ा गया।',
    foodPickerTitle: 'व्यंजन चुनें', searchPh: 'अंग्रेज़ी या हिंदी में व्यंजन खोजें',
    allFoods: 'सभी', perPortion: 'प्रति भाग', qty: 'मात्रा', addToMeal: '{meal} में जोड़ें',
    noMatches: 'कोई व्यंजन नहीं मिला।', libraryNote: '83 क्षेत्रीय व्यंजन। भाग घर के बर्तन में, तोलकर नहीं।',

    historyTitle: 'पिछले 21 दिन', historyHint: 'भरा हुआ वर्ग = रिकॉर्ड मौजूद। किसी भी दिन पर थपकर देखें या सुधारें।',
    legendComplete: 'पूरा', legendPartial: 'अधूरा', legendEmpty: 'कोई रिकॉर्ड नहीं',
    nothingLogged: 'इस दिन कोई रिकॉर्ड नहीं।', dayDetail: 'दिन का विवरण', editDay: 'इस दिन को बदलें',
    recentDays: 'हाल के दिन', selectDay: 'ऊपर से कोई दिन चुनें।', todayBtn: 'आज',
    status: 'स्थिति', medsLine: '{total} में से {taken} लीं', notLogged: 'दर्ज नहीं',

    progressTitle: 'प्रगति', completeness: '21 दिन की पूर्णता',
    completenessHint: 'जिन दिनों में खाना, दवा की स्थिति (जब दवा हो) और एक माप दर्ज है, उन्हें 21 से भाग दिया गया। गिनती सहेजी गई प्रविष्टियों से, याद से नहीं।',
    completeDays: 'पूरे दिन', loggedDays: 'दर्ज दिन', streak: 'लगातार दिन',
    progressFmt: 'पूरे {complete} / {total} दिन · दर्ज {logged} दिन',
    progressFmtOne: 'पूरे {complete} / {total} दिन · दर्ज {logged} दिन',
    thisWeek: 'इस सप्ताह', totalLogged: 'कुल दर्ज',
    insightsTitle: 'आपके अपने आँकड़े क्या कहते हैं', insightsCaveat: 'ये आपकी अपनी प्रविष्टियों पर आधारित टिप्पणियाँ हैं, निदान या इलाज की सलाह नहीं।',
    insightsEmpty: 'करीब एक सप्ताह रिकॉर्ड रखें। कम से कम चार जोड़ी दिन होने पर ही कुछ दिखाया जाता है।',
    early: 'शुरुआती संकेत', moderate: 'मध्यम संकेत', descriptive: 'वर्णन',
    avgBp: 'औसत रक्तचाप', avgGlucose: 'औसत खाली पेट शुगर', weightChange: 'अवधि में वज़न',
    adherence: 'दवाएँ लीं', last7: 'पिछले 7 दिन', noInsight: 'अभी पर्याप्त जोड़ी दिन नहीं।',

    settingsTitle: 'सेटिंग', profileTitle: 'प्रतिभागी प्रोफ़ाइल', editProfile: 'प्रोफ़ाइल बदलें',
    codeShort: 'कोड', ageShort: 'आयु वर्ग', conditionsShort: 'स्थितियाँ', medsShort: 'दवाइयाँ',
    language: 'भाषा / Language', languageHint: 'सिर्फ़ दिखावट। रिकॉर्ड में स्थिर कोड रहते हैं, इसलिए भाषा बदलने से दिन नहीं बदलता।',
    exportsTitle: 'निर्यात और साझा करें', exportsHint: 'फ़ाइलें इसी ब्राउज़र में बनती हैं और आपके डिवाइस पर डाउनलोड होती हैं। कुछ अपलोड नहीं होता।',
    exportMetrics: 'दैनिक माप (CSV)', exportMetricsDesc: 'हर दिन एक पंक्ति: माप, दवाइयाँ, अनुमान।',
    exportFood: 'खाने का लॉग (CSV)', exportFoodDesc: 'हर व्यंजन एक पंक्ति, अंग्रेज़ी नाम के साथ।',
    exportBackup: 'पूरा बैकअप (JSON)', exportBackupDesc: 'प्रोफ़ाइल और हर दिन, स्कीमा संस्करण के साथ।',
    exportFhir: 'स्वास्थ्य रिकॉर्ड (FHIR R4)', exportFhirDesc: 'LOINC माप, UCUM इकाइयाँ, सहमति और Provenance।',
    exportPrint: 'डॉक्टर के लिए सारांश (प्रिंट)', exportPrintDesc: 'एक पेज, अंग्रेज़ी में, आपके रिकॉर्ड से बना।',
    sampleTitle: 'नमूना डेटा', sampleBody: 'इतिहास, प्रगति और निर्यात बिना टाइप किए देखने के लिए एक यथार्थपरक पखवाड़ा भरें। यह इस डेमो के मौजूदा रिकॉर्ड बदल देगा।',
    loadSample: '14 दिन का नमूना भरें', sampleLoaded: 'नमूना पखवाड़ा भर दिया गया।',
    eraseTitle: 'सब कुछ मिटाएँ', eraseBody: 'इस ब्राउज़र से इस डेमो की प्रोफ़ाइल, रिकॉर्ड और सेटिंग हमेशा के लिए मिट जाएँगी। इसे वापस नहीं लाया जा सकता।',
    eraseBtn: 'मेरा डेटा मिटाएँ', eraseConfirmTitle: 'सब कुछ मिटाएँ?',
    eraseConfirmBody: 'इससे इस ब्राउज़र से प्रोफ़ाइल, हर दिन और हर सेटिंग मिट जाएगी। इसे वापस नहीं लाया जा सकता।',
    eraseYes: 'सब कुछ मिटाएँ', erasedToast: 'इस ब्राउज़र से सब कुछ मिटा दिया गया।',
    aboutTitle: 'इस डेमो के बारे में', aboutBody: 'खाई ट्रैकर 1.0.0 (ब्राउज़र डेमो)। खाई फ़ूड्स प्रा. लि., जमशेदपुर द्वारा निर्मित। उत्पाद स्वामी: बिस्वजीत रॉय बर्धन।',
    demoOnly: 'सिर्फ़ डेमो · चिकित्सा उपकरण नहीं · असली क्लिनिकल रिकॉर्ड के लिए नहीं।',
    noDataToast: 'अभी कोई दिन दर्ज नहीं — पहले एक दिन जोड़ें।',
    printHint: 'प्रिंट डायलॉग में “Save as PDF” चुनें — एक पेज का सारांश बनेगा।',
    downloadToast: '{name} डाउनलोड हो गया।',
    footerNote: 'कुछ भी इस ब्राउज़र से बाहर नहीं जाता।',

    planTitle: 'साप्ताहिक योजना का ड्राफ़्ट',
    planIntro: 'आपके अपने दर्ज दिनों से बना एक ड्राफ़्ट, जिसे आहार विशेषज्ञ देखें। केवल उदाहरण — सलाह नहीं।',
    planEmpty: 'पहले लगभग एक सप्ताह का खाना और माप दर्ज करें। ड्राफ़्ट के लिए कम से कम चार जुड़े दिन चाहिए।',
    planNotAdvice: 'केवल उदाहरण। न सलाह, न निदान। इस ड्राफ़्ट के कारण अपना खाना या दवाइयाँ न बदलें — निर्णयोग्य डॉक्टर करते हैं।',
    planDraftLabel: 'समीक्षा के लिए ड्राफ़्ट', planEvidence: 'यह ड्राफ़्ट क्यों',
    planAccept: 'स्वीकार', planEdit: 'सुधार', planReject: 'अस्वीकार',
    planAccepted: 'इस डेमो में स्वीकृत चिह्नित।', planRejected: 'इस डेमो में अस्वीकृत चिह्नित।',
    planEditHint: 'सुधार डॉक्टर के साथ समीक्षा बैठक में होता है; यह डेमो सिर्फ़ निर्णय दर्ज करता है।',
    planDecision: 'डेमो निर्णय', planDecisionNone: 'अभी समीक्षा नहीं हुई',
    planAcceptedState: 'स्वीकृत', planRejectedState: 'अस्वीकृत', planEditedState: 'सुधारा हुआ',
    planLowConfidence: 'कम भरोसा — जुड़े दिन कम हैं।',
    planTypePortion: 'मात्रा', planTypeTiming: 'समय', planTypeSwap: 'बदलाव', planTypeRecord: 'रिकॉर्ड',
    escalateTitle: 'डॉक्टर के लिए चिह्न',
    escalateBody: 'ऊँचे माप बातचीत के लिए चिह्नित होते हैं। ऐप कभी निदान नहीं करता और न ही दवा बदलता है।',
    escalateNone: 'हाल के रिकॉर्ड में कोई सीमा चिह्न नहीं।',
    planConfidenceTitle: 'इसमें कितना भरोसा?',
    planConfidenceBody: 'खाना घरेलू मात्रा का अनुमान है, सीमा के रूप में — तोलकर नहीं। पैटर्न ड्राफ़्ट एक ही व्यक्ति के कुछ जुड़े दिनों से आते हैं — ये डॉक्टर के लिए संकेत हैं, निष्कर्ष नहीं।',
    planPaired: '{n} ऐसे दिनों से बना जिनमें खाना और माप दोनों हैं।', planClear: 'हटाएँ',

    bmiNote: 'यह निदान नहीं है।', weightUnit: 'कि.ग्रा.', bpUnit: 'mmHg', glucoseUnit: 'mg/dL', sleepUnit: 'घंटे'
  };

  K.lang = 'en';
  K.t = function (key, vars) {
    var dict = K.lang === 'hi' ? HI : EN;
    var s = dict[key] != null ? dict[key] : (EN[key] != null ? EN[key] : key);
    if (vars) Object.keys(vars).forEach(function (v) {
      s = s.replace(new RegExp('\\{' + v + '\\}', 'g'), String(vars[v]));
    });
    return s;
  };
  K.label = function (obj) { return K.lang === 'hi' ? obj.hi : obj.en; };
  K.ageLabel = function (key) {
    var a = K.AGE_BANDS.filter(function (x) { return x.key === key; })[0];
    return a ? K.label(a) : '—';
  };
  K.conditionLabel = function (key) {
    var c = K.CONDITIONS.filter(function (x) { return x.key === key; })[0];
    return c ? K.label(c) : key;
  };
  K.foodLabel = function (foodId, fallback) {
    var f = K.BY_ID[foodId];
    if (f) return K.lang === 'hi' ? (f.hi || f.en) : f.en;
    return fallback || foodId;
  };
  K.foodLabelEn = function (foodId, fallback) {
    var f = K.BY_ID[foodId];
    return f ? f.en : (fallback || foodId);
  };

  // ---------------------------------------------------------------- dates

  K.pad = function (n) { return (n < 10 ? '0' : '') + n; };
  K.isoOf = function (d) { return d.getFullYear() + '-' + K.pad(d.getMonth() + 1) + '-' + K.pad(d.getDate()); };
  K.parseISO = function (s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));
    if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    if (d.getFullYear() !== +m[1] || d.getMonth() !== +m[2] - 1 || d.getDate() !== +m[3]) return null;
    return d;
  };
  K.todayISO = function () { return K.isoOf(new Date()); };
  K.shift = function (s, n) {
    var d = K.parseISO(s) || new Date();
    d.setDate(d.getDate() + n);
    return K.isoOf(d);
  };
  K.lastN = function (n) {
    var out = [];
    for (var i = n - 1; i >= 0; i--) out.push(K.shift(K.todayISO(), -i));
    return out;
  };
  K.dowOf = function (s) { var d = K.parseISO(s); return d ? d.getDay() : 0; };
  K.isFuture = function (s) { return s > K.todayISO(); };
  K.prettyDate = function (s) {
    var d = K.parseISO(s);
    if (!d) return s;
    var dow = (K.lang === 'hi' ? K.DOW_HI : K.DOW_EN)[d.getDay()];
    var mon = (K.lang === 'hi' ? K.MON_HI : K.MON_EN)[d.getMonth()];
    return dow + ' ' + d.getDate() + ' ' + mon;
  };
  K.longDate = function (s) {
    var d = K.parseISO(s);
    if (!d) return s;
    var mon = (K.lang === 'hi' ? K.MON_LONG_HI : K.MON_LONG_EN)[d.getMonth()];
    return d.getDate() + ' ' + mon + ' ' + d.getFullYear();
  };
  K.relativeDay = function (s) {
    var t = K.todayISO();
    if (s === t) return K.t('today');
    if (s === K.shift(t, -1)) return K.t('yesterday');
    return K.prettyDate(s);
  };
  K.instant = function (ms) {
    try { return new Date(ms || Date.now()).toISOString(); } catch (e) { return new Date().toISOString(); }
  };

  // ---------------------------------------------------------------- numbers

  K.num = function (d) {
    if (d == null || d === '' || isNaN(d)) return '';
    var n = Number(d);
    return n === Math.round(n) ? String(n) : String(Math.round(n * 10) / 10);
  };
  K.one = function (d) { return Math.round(Number(d) * 10) / 10; };
  K.round = function (d) { return Math.round(Number(d)); };
  K.sum = function (list, key) {
    return list.reduce(function (a, x) { return a + (Number(x[key]) || 0); }, 0);
  };
  K.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  K.attr = function (s) { return K.esc(s); };

  // ---------------------------------------------------------------- model

  K.blankDay = function (date) {
    return {
      v: 1, date: date,
      meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
      meds: [], sys: null, dia: null, pulse: null, glucose: null,
      glucoseType: 'fasting', weight: null, energy: null, mood: null,
      sleep: null, note: '', updatedAt: 0
    };
  };

  K.normalizeDay = function (date, raw) {
    var e = K.blankDay(date);
    if (!raw || typeof raw !== 'object') return e;
    if (raw.meals && typeof raw.meals === 'object') {
      K.MEALS.forEach(function (slot) {
        if (Array.isArray(raw.meals[slot])) e.meals[slot] = raw.meals[slot].filter(function (f) {
          return f && typeof f === 'object' && f.id;
        }).map(function (f) {
          return {
            id: String(f.id), label: String(f.label || ''), qty: Number(f.qty) || 1,
            unit: String(f.unit || ''), kcal: Number(f.kcal) || 0, carb: Number(f.carb) || 0,
            protein: Number(f.protein) || 0, fat: Number(f.fat) || 0, sodium: Number(f.sodium) || 0
          };
        });
      });
    }
    if (Array.isArray(raw.meds)) e.meds = raw.meds.filter(function (m) {
      return m && m.name;
    }).map(function (m) {
      var st = m.status === 'skipped' || m.status === 'changed' ? m.status : 'taken';
      return { name: String(m.name), dose: String(m.dose || ''), status: st };
    });
    ['sys', 'dia', 'pulse', 'energy', 'mood'].forEach(function (k) {
      if (raw[k] != null && raw[k] !== '' && !isNaN(raw[k])) e[k] = Math.round(Number(raw[k]));
    });
    ['glucose', 'weight', 'sleep'].forEach(function (k) {
      if (raw[k] != null && raw[k] !== '' && !isNaN(raw[k])) e[k] = Number(raw[k]);
    });
    if (raw.glucoseType === 'pp' || raw.glucoseType === 'random') e.glucoseType = raw.glucoseType;
    e.note = String(raw.note || '').slice(0, 500);
    e.updatedAt = Number(raw.updatedAt) || 0;
    return e;
  };

  K.blankDb = function () {
    return {
      v: 1,
      profile: null,
      days: {},
      plan: { decisions: {} },
      settings: { lang: 'en' },
      createdAt: Date.now(),
      deviceId: 'demo-' + Math.random().toString(36).slice(2, 10)
    };
  };

  K.db = null;
  K.storageOk = true;

  K.load = function () {
    var db = null;
    try {
      var raw = localStorage.getItem(K.STORAGE_KEY);
      if (raw) db = JSON.parse(raw);
    } catch (e) { K.storageOk = false; }
    if (!db || typeof db !== 'object') db = K.blankDb();
    if (!db.days || typeof db.days !== 'object') db.days = {};
    var cleanDays = {};
    Object.keys(db.days).forEach(function (d) {
      if (K.parseISO(d)) cleanDays[d] = K.normalizeDay(d, db.days[d]);
    });
    db.days = cleanDays;
    db.plan = db.plan && typeof db.plan === 'object' ? db.plan : {};
    db.plan.decisions = db.plan.decisions && typeof db.plan.decisions === 'object' ? db.plan.decisions : {};
    db.settings = db.settings && typeof db.settings === 'object' ? db.settings : {};
    db.settings.lang = db.settings.lang === 'hi' ? 'hi' : 'en';
    if (!db.deviceId) db.deviceId = 'demo-' + Math.random().toString(36).slice(2, 10);
    if (!db.createdAt) db.createdAt = Date.now();
    K.db = db;
    K.lang = db.settings.lang;
    return db;
  };

  K.persist = function () {
    if (!K.db) return false;
    try {
      localStorage.setItem(K.STORAGE_KEY, JSON.stringify(K.db));
      K.storageOk = true;
      return true;
    } catch (e) {
      K.storageOk = false;
      return false;
    }
  };

  K.day = function (date, create) {
    if (!K.db.days[date] && create) K.db.days[date] = K.blankDay(date);
    return K.db.days[date] || null;
  };

  K.touch = function (day) {
    if (!day) return;
    day.updatedAt = Date.now();
    if (K.queuePersist) K.queuePersist(); else K.persist();
  };

  K.hasFood = function (e) { return K.MEALS.some(function (s) { return e.meals[s] && e.meals[s].length > 0; }); };
  K.hasReading = function (e) { return e.glucose != null || (e.sys != null && e.dia != null) || e.weight != null; };
  K.hasMeds = function (e) { return e.meds && e.meds.length > 0; };
  K.foodCount = function (e) {
    return K.MEALS.reduce(function (n, s) { return n + ((e.meals[s] && e.meals[s].length) || 0); }, 0);
  };
  K.dayComplete = function (e) {
    var prescribed = !!(K.db.profile && K.db.profile.medicines && K.db.profile.medicines.length);
    return !!e && K.hasFood(e) && K.hasReading(e) && (!prescribed || K.hasMeds(e));
  };
  K.dayStatus = function (e) {
    if (!e || (!K.hasFood(e) && !K.hasReading(e) && !K.hasMeds(e) && !(e.note || '').trim())) return 'empty';
    return K.dayComplete(e) ? 'complete' : 'partial';
  };
  K.totals = function (e) {
    var all = [];
    K.MEALS.forEach(function (s) { all = all.concat(e.meals[s] || []); });
    return {
      kcal: K.sum(all, 'kcal'), carb: K.sum(all, 'carb'), protein: K.sum(all, 'protein'),
      fat: K.sum(all, 'fat'), sodium: K.sum(all, 'sodium'), items: all.length
    };
  };
  K.makeFoodItem = function (food, qty) {
    function mid(a) { return (Number(a[0]) + Number(a[1])) / 2; }
    return {
      id: food.id, label: K.foodLabel(food.id), qty: qty, unit: food.unit,
      kcal: K.one(mid(food.kcal) * qty), carb: K.one(mid(food.carb) * qty),
      protein: K.one(mid(food.protein) * qty), fat: K.one(mid(food.fat) * qty),
      sodium: K.one(mid(food.sodium) * qty)
    };
  };
  K.foodForMeal = function (slot) {
    var list = K.FOODS.filter(function (f) { return f.meals.indexOf(slot) >= 0; });
    return list.length ? list : K.FOODS;
  };
  K.searchFood = function (query, slot) {
    var q = String(query || '').trim().toLowerCase();
    var pool = slot ? K.foodForMeal(slot) : K.FOODS;
    if (!q) return pool;
    return pool.filter(function (f) {
      return f.en.toLowerCase().indexOf(q) >= 0 || (f.hi || '').indexOf(query.trim()) >= 0 ||
        (f.region || '').toLowerCase().indexOf(q) >= 0 ||
        (f.tags || []).some(function (t) { return t.indexOf(q) >= 0; });
    });
  };

  // ---------------------------------------------------------------- progress

  K.window21 = function () { return K.lastN(21); };
  K.completeness = function () {
    var win = K.window21();
    var complete = win.filter(function (d) { return K.dayComplete(K.db.days[d]); }).length;
    var logged = win.filter(function (d) { return !!K.db.days[d]; }).length;
    return { complete: complete, logged: logged, pct: Math.round(complete * 100 / 21), window: win };
  };
  K.streak = function () {
    var cursor = K.todayISO();
    var streak = 0;
    if (!K.db.days[cursor]) cursor = K.shift(cursor, -1);
    while (K.db.days[cursor] && streak < 400) { streak++; cursor = K.shift(cursor, -1); }
    return streak;
  };
  K.sortedDays = function () {
    return Object.keys(K.db.days).sort().map(function (d) { return K.db.days[d]; });
  };
  K.average = function (list) {
    return list.length ? list.reduce(function (a, b) { return a + b; }, 0) / list.length : null;
  };

  K.insights = function () {
    var entries = K.sortedDays();
    var byDate = {};
    entries.forEach(function (e) { byDate[e.date] = e; });
    var out = [];
    if (entries.filter(function (e) { return K.hasReading(e) || K.hasFood(e); }).length < 4) return out;
    var hi = K.lang === 'hi';

    // 1. Heavy dinner vs next fasting glucose.
    var heavy = [], light = [];
    entries.forEach(function (e) {
      var next = byDate[K.shift(e.date, 1)];
      if (!next || next.glucose == null || next.glucoseType !== 'fasting') return;
      var dinnerCarb = (e.meals.dinner || []).reduce(function (a, f) { return a + f.carb; }, 0);
      if (!dinnerCarb) return;
      if (dinnerCarb >= 60) heavy.push(next.glucose); else light.push(next.glucose);
    });
    if (heavy.length >= 2 && light.length >= 2) {
      var a = K.average(heavy), b = K.average(light);
      if (a - b >= 12) out.push({
        headline: hi ? 'भारी रात के खाने के बाद सुबह की शुगर ऊँची रही' : 'Mornings were higher after a heavy dinner',
        detail: hi
          ? 'जिन रातों में खाने में 60 ग्राम से अधिक कार्बोहाइड्रेट था, अगली सुबह खाली पेट शुगर औसतन ' + K.round(a) + ' mg/dL रही; हल्के खाने के बाद ' + K.round(b) + ' mg/dL (' + heavy.length + ' बनाम ' + light.length + ' दिन)।'
          : 'After dinners carrying more than 60 g carbohydrate, the next fasting reading averaged ' + K.round(a) + ' mg/dL, against ' + K.round(b) + ' mg/dL after lighter dinners (' + heavy.length + ' vs ' + light.length + ' days).',
        strength: heavy.length + light.length >= 6 ? 'moderate' : 'early'
      });
    }

    // 2. Estimated sodium vs systolic.
    var highNa = [], lowNa = [];
    entries.forEach(function (e) {
      if (e.sys == null) return;
      var sodium = K.totals(e).sodium;
      if (!sodium) return;
      if (sodium >= 3000) highNa.push(e.sys); else lowNa.push(e.sys);
    });
    if (highNa.length >= 3 && lowNa.length >= 3) {
      var s1 = K.average(highNa), s2 = K.average(lowNa);
      if (s1 - s2 >= 6) out.push({
        headline: hi ? 'नमकीन दिनों में ऊपरी रक्तचाप ऊँचा रहा' : 'Systolic ran higher on saltier days',
        detail: hi
          ? 'जिन दिनों अनुमानित सोडियम 3,000 mg से ऊपर था, ऊपरी रक्तचाप औसतन ' + K.round(s1) + ' mmHg रहा; कम नमक वाले दिनों में ' + K.round(s2) + ' mmHg (' + highNa.length + ' बनाम ' + lowNa.length + ' दिन)।'
          : 'On days estimated above 3,000 mg sodium, systolic averaged ' + K.round(s1) + ' mmHg against ' + K.round(s2) + ' mmHg on lower-salt days (' + highNa.length + ' vs ' + lowNa.length + ' days).',
        strength: 'early'
      });
    }

    // 3. Sweet drinks.
    var sweet = entries.filter(function (e) {
      return K.MEALS.some(function (slot) {
        return (e.meals[slot] || []).some(function (f) {
          return f.id === 'soft_drink' || f.id === 'juice_packaged' || f.id === 'lassi_sweet';
        });
      });
    });
    if (sweet.length >= 2) out.push({
      headline: hi ? 'मीठे पेय कई दिनों में दर्ज हुए' : 'Sweet drinks appeared on several days',
      detail: hi
        ? sweet.length + ' दिनों में मीठा पेय दर्ज हुआ। इन दिनों के खाने के बाद के माप की तुलना बाकी दिनों से करें — ऐप स्वयं इसे अभी नहीं जोड़ता।'
        : 'A sweet drink was logged on ' + sweet.length + ' days. Compare the after-food readings on those days with the rest; the app does not yet pair the two automatically.',
      strength: 'early'
    });

    // 4. Where the week breaks.
    var logged = {};
    entries.forEach(function (e) { logged[e.date] = true; });
    var week = K.lastN(21);
    var perDow = [];
    for (var d = 0; d < 7; d++) {
      var days = week.filter(function (x) { return K.dowOf(x) === d; });
      perDow.push({ dow: d, logged: days.filter(function (x) { return logged[x]; }).length, total: days.length });
    }
    var worst = perDow.filter(function (x) { return x.total > 0; }).sort(function (a, b) {
      return (a.logged / a.total) - (b.logged / b.total) || a.dow - b.dow;
    })[0];
    if (worst) {
      var nameEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][worst.dow];
      var nameHi = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'][worst.dow];
      out.push({
        headline: hi ? 'सबसे अधिक छूटा दिन: ' + nameHi : 'Most often missed: ' + nameEn,
        detail: hi
          ? 'पिछले 21 दिनों में ' + nameHi + ' को ' + worst.total + ' में से ' + worst.logged + ' दिन रिकॉर्ड हुआ। छूटा हुआ दिन भी जानकारी है — यह व्यस्तता या तबीयत का संकेत हो सकता है।'
          : 'In the last 21 days, ' + nameEn + ' was logged on ' + worst.logged + ' of ' + worst.total + '. A missed day is also data: it can signal a busy day or a bad one.',
        strength: 'descriptive'
      });
    }
    return out.slice(0, 4);
  };

  K.flags = function (entries) {
    var flags = [];
    var sorted = entries.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var last7 = sorted.slice(0, 7);
    var highBp = last7.filter(function (e) { return (e.sys || 0) >= 140 || (e.dia || 0) >= 90; }).length;
    if (highBp >= 3) flags.push('Blood pressure at or above 140/90 on ' + highBp + ' of the last ' + last7.length + ' logged days.');
    var highSugar = last7.filter(function (e) { return (e.glucose || 0) >= 180; }).length;
    if (highSugar >= 2) flags.push('Blood sugar at or above 180 mg/dL on ' + highSugar + ' of the last ' + last7.length + ' logged days.');
    var missed = entries.slice(-7).filter(function (e) { return e.meds.some(function (m) { return m.status !== 'taken'; }); }).length;
    if (missed >= 2) flags.push('A medicine was recorded as skipped or changed on ' + missed + ' of the last 7 days.');
    if (entries.filter(function (e) { return !K.hasReading(e); }).length >= 7) flags.push('No measurement on most days; the record is food-led.');
    var weights = entries.map(function (e) { return e.weight; }).filter(function (w) { return w != null; });
    if (weights.length >= 2) {
      var delta = weights[weights.length - 1] - weights[0];
      if (Math.abs(delta) >= 1.5) flags.push('Weight moved ' + (delta > 0 ? '+' : '') + K.one(delta) + ' kg across the logged period.');
    }
    if (!flags.length) flags.push('No threshold flags. Read the daily record above for the pattern.');
    return flags.slice(0, 5);
  };

  // ---------------------------------------------------------------- plan draft
  // Illustrative only: a set of review points built from the participant's own
  // logged days. Nothing here is advice, a diagnosis, or a prescription change.

  K.setPlanDecision = function (id, decision) {
    if (!K.db) return;
    K.db.plan = K.db.plan || {};
    K.db.plan.decisions = K.db.plan.decisions || {};
    if (decision === 'accepted' || decision === 'edited' || decision === 'rejected') {
      K.db.plan.decisions[id] = decision;
    } else {
      delete K.db.plan.decisions[id];
    }
    K.persist();
  };

  K.planDraft = function () {
    var entries = K.sortedDays();
    var byDate = {};
    entries.forEach(function (e) { byDate[e.date] = e; });
    var hi = K.lang === 'hi';
    var paired = entries.filter(function (e) { return K.hasFood(e) && K.hasReading(e); });
    var decisions = (K.db.plan && K.db.plan.decisions) || {};
    var items = [];

    // Evening portions vs next fasting reading.
    var heavy = [], light = [];
    entries.forEach(function (e) {
      var next = byDate[K.shift(e.date, 1)];
      if (!next || next.glucose == null || next.glucoseType !== 'fasting') return;
      var dinnerCarb = (e.meals.dinner || []).reduce(function (a, f) { return a + f.carb; }, 0);
      if (!dinnerCarb) return;
      if (dinnerCarb >= 60) heavy.push(next.glucose); else light.push(next.glucose);
    });
    if (heavy.length >= 2 && light.length >= 2) {
      var fg = K.round(K.average(heavy)), fl = K.round(K.average(light));
      items.push({
        id: 'evening-portion', type: 'portion',
        title: hi ? 'शाम के खाने की मात्रा पर चर्चा करें' : 'Discuss evening meal portions',
        reason: hi
          ? 'जिन रातों में 60 ग्राम से अधिक अनुमानित कार्बोहाइड्रेट था, अगली सुबह खाली पेट शुगर औसतन ' + fg + ' mg/dL रही; हल्के खाने के बाद ' + fl + ' mg/dL (' + heavy.length + ' बनाम ' + light.length + ' रातें)।'
          : 'After dinners over 60 g estimated carbohydrate, next fasting readings averaged ' + fg + ' mg/dL vs ' + fl + ' mg/dL after lighter dinners (' + heavy.length + ' vs ' + light.length + ' evenings).'
      });
    }

    // Estimated salt vs systolic.
    var highNa = [], lowNa = [];
    entries.forEach(function (e) {
      if (e.sys == null) return;
      var sodium = K.totals(e).sodium;
      if (!sodium) return;
      if (sodium >= 3000) highNa.push(e.sys); else lowNa.push(e.sys);
    });
    if (highNa.length >= 3 && lowNa.length >= 3) {
      var sh = K.round(K.average(highNa)), sl = K.round(K.average(lowNa));
      items.push({
        id: 'salt', type: 'portion',
        title: hi ? 'नमक की मात्रा देखें' : 'Look at salt in the diet',
        reason: hi
          ? 'जिन दिनों अनुमानित सोडियम 3,000 mg से ऊपर था, ऊपरी रक्तचाप औसतन ' + sh + ' mmHg रहा; कम नमक वाले दिनों में ' + sl + ' mmHg (' + highNa.length + ' बनाम ' + lowNa.length + ' दिन)।'
          : 'On days estimated above 3,000 mg sodium, systolic averaged ' + sh + ' mmHg vs ' + sl + ' mmHg on lower-salt days (' + highNa.length + ' vs ' + lowNa.length + ' days).'
      });
    }

    // Sweet drinks.
    var sweetDays = entries.filter(function (e) {
      return K.MEALS.some(function (slot) {
        return (e.meals[slot] || []).some(function (f) {
          return f.id === 'soft_drink' || f.id === 'juice_packaged' || f.id === 'lassi_sweet';
        });
      });
    });
    if (sweetDays.length >= 2) {
      items.push({
        id: 'sweet-drinks', type: 'swap',
        title: hi ? 'मीठे पेय पर चर्चा करें' : 'Discuss sweet drinks',
        reason: hi
          ? sweetDays.length + ' दिनों में मीठा पेय दर्ज हुआ। आहार विशेषज्ञ विकल्पों पर बात कर सकते हैं — ऐप स्वयं कोई सलाह नहीं देता।'
          : 'A sweet drink was logged on ' + sweetDays.length + ' days. A dietitian can discuss alternatives; the app itself gives no advice.'
      });
    }

    // Logging completeness.
    if (paired.length < 10) {
      items.push({
        id: 'logging', type: 'record',
        title: hi ? 'रिकॉर्डिंग जारी रखें' : 'Keep the record going',
        reason: hi
          ? 'अभी ' + paired.length + ' दिन ऐसे हैं जिनमें खाना और माप दोनों दर्ज हैं। ज़्यादा जुड़े दिन ड्राफ़्ट को डॉक्टर के लिए उपयोगी बनाते हैं।'
          : 'Only ' + paired.length + ' days currently have both food and a reading. More paired days make any draft more useful to the clinician.'
      });
    }

    if (!items.length) {
      items.push({
        id: 'steady', type: 'record',
        title: hi ? 'मौजूदा रिकॉर्ड को आधार के रूप में रखें' : 'Keep the current record as the baseline',
        reason: hi
          ? 'इन दिनों में कोई खास पैटर्न नहीं दिखा। लगातार रिकॉर्डिंग ही डॉक्टर के लिए सबसे उपयोगी आधार है।'
          : 'No single pattern stood out in these days. Consistent logging remains the most useful baseline for the clinician.'
      });
    }

    items.forEach(function (it) { it.decision = decisions[it.id] || null; });

    return {
      ready: paired.length >= 4,
      pairedDays: paired.length,
      items: items,
      flags: K.flags(entries),
      confidence: paired.length >= 8 ? 'moderate' : 'early',
      lowConfidence: paired.length < 6
    };
  };

  // ---------------------------------------------------------------- exports

  function csv(v) {
    v = v == null ? '' : String(v);
    if (!v) return '';
    return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }

  K.metricsCsv = function () {
    var rows = ['participant_code,date,complete,systolic,diastolic,pulse,glucose,glucose_type,weight_kg,energy,mood,sleep_h,meds_taken,meds_total,food_items,est_kcal,est_carb_g,note'];
    K.sortedDays().forEach(function (e) {
      var code = K.db.profile ? K.db.profile.code : '';
      var t = K.totals(e);
      rows.push([
        csv(code), e.date, K.dayComplete(e) ? 1 : 0,
        e.sys == null ? '' : e.sys, e.dia == null ? '' : e.dia, e.pulse == null ? '' : e.pulse,
        e.glucose == null ? '' : K.num(e.glucose), e.glucose == null ? '' : e.glucoseType,
        e.weight == null ? '' : K.num(e.weight), e.energy == null ? '' : e.energy,
        e.mood == null ? '' : e.mood, e.sleep == null ? '' : K.num(e.sleep),
        e.meds.filter(function (m) { return m.status === 'taken'; }).length, e.meds.length,
        K.foodCount(e), K.num(t.kcal), K.num(t.carb), csv(e.note)
      ].join(','));
    });
    return '\ufeff' + rows.join('\n') + '\n';
  };

  K.foodCsv = function () {
    var rows = ['participant_code,date,meal,food_id,food,quantity,unit,kcal,carb_g,protein_g,fat_g,sodium_mg'];
    K.sortedDays().forEach(function (e) {
      var code = K.db.profile ? K.db.profile.code : '';
      K.MEALS.forEach(function (slot) {
        (e.meals[slot] || []).forEach(function (f) {
          rows.push([
            csv(code), e.date, slot, f.id, csv(K.foodLabelEn(f.id, f.label)), K.num(f.qty),
            csv(f.unit), K.num(f.kcal), K.num(f.carb), K.num(f.protein), K.num(f.fat), K.num(f.sodium)
          ].join(','));
        });
      });
    });
    return '\ufeff' + rows.join('\n') + '\n';
  };

  K.backup = function () {
    var profile = K.db.profile ? JSON.parse(JSON.stringify(K.db.profile)) : {};
    return {
      format: 'khai.backup.v1',
      exportedAt: new Date().toISOString(),
      app: 'Khai Tracker 1.0.0 (browser demo)',
      deviceId: K.db.deviceId,
      profile: profile,
      days: K.sortedDays().map(function (e) {
        var o = JSON.parse(JSON.stringify(e));
        o.code = profile.code || '';
        return o;
      })
    };
  };

  function quantity(value, unit, ucum) {
    return { value: value, unit: unit, system: 'http://unitsofmeasure.org', code: ucum };
  }
  function entryFor(fullUrl, resource) {
    return { fullUrl: 'urn:uuid:' + fullUrl, resource: resource };
  }
  function baseObservation(id, loinc, display, category, code, ts) {
    return {
      resourceType: 'Observation', id: id, status: 'final',
      category: [{ coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: category }] }],
      code: { coding: [{ system: 'http://loinc.org', code: loinc, display: display }] },
      subject: { reference: 'urn:uuid:patient-' + code },
      effectiveDateTime: ts
    };
  }
  function component(loinc, display, value, ucum) {
    return {
      code: { coding: [{ system: 'http://loinc.org', code: loinc, display: display }] },
      valueQuantity: quantity(value, ucum, ucum)
    };
  }

  K.fhir = function () {
    var profile = K.db.profile || {};
    var code = profile.code || 'unknown';
    var entries = K.sortedDays();
    var entry = [];
    entry.push(entryFor('patient-' + code, {
      resourceType: 'Patient', id: 'participant-' + code,
      identifier: [{ system: 'https://khaifoods.in/participant', value: code }],
      active: true
    }));
    entries.forEach(function (e) {
      if (e.sys != null && e.dia != null) {
        var bp = baseObservation('bp-' + e.date, '85354-9', 'Blood pressure panel', 'vital-signs', code, e.date);
        bp.component = [
          component('8480-6', 'Systolic blood pressure', e.sys, 'mm[Hg]'),
          component('8462-4', 'Diastolic blood pressure', e.dia, 'mm[Hg]')
        ];
        entry.push(entryFor('obs-bp-' + e.date, bp));
      }
      if (e.glucose != null) {
        var fasting = e.glucoseType === 'fasting';
        var g = baseObservation('glu-' + e.date,
          fasting ? '1558-6' : '2339-0',
          fasting ? 'Glucose [Mass/volume] in Blood --fasting' : 'Glucose [Mass/volume] in Blood',
          'laboratory', code, e.date);
        g.valueQuantity = quantity(e.glucose, 'mg/dL', 'mg/dL');
        g.note = [{ text: fasting ? 'Self-reported fasting sample' : 'Self-reported after food' }];
        entry.push(entryFor('obs-glu-' + e.date, g));
      }
      if (e.weight != null) {
        var w = baseObservation('wt-' + e.date, '29463-7', 'Body weight', 'vital-signs', code, e.date);
        w.valueQuantity = quantity(e.weight, 'kg', 'kg');
        entry.push(entryFor('obs-wt-' + e.date, w));
      }
    });
    var consentAt = profile.consentAt || 0;
    entry.push(entryFor('consent-' + code, {
      resourceType: 'Consent', id: 'consent-' + code, status: 'active',
      scope: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/consentscope', code: 'research' }] },
      category: [{ coding: [{ system: 'http://loinc.org', code: '59284-0', display: 'Patient Consent' }] }],
      patient: { reference: 'urn:uuid:patient-' + code },
      dateTime: consentAt > 0 ? K.instant(consentAt) : new Date().toISOString(),
      provision: { type: 'permit' }
    }));
    entry.push(entryFor('prov-' + code, {
      resourceType: 'Provenance', id: 'prov-' + code, recorded: new Date().toISOString(),
      agent: [{ who: { display: 'Khai Tracker browser demo' } }],
      target: [
        { reference: 'urn:uuid:patient-' + code },
        { reference: 'urn:uuid:consent-' + code }
      ]
    }));
    return {
      resourceType: 'Bundle', id: 'khai-bundle-' + code, type: 'collection',
      timestamp: new Date().toISOString(), entry: entry
    };
  };

  K.download = function (name, text, mime) {
    try {
      var blob = new Blob([text], { type: mime + ';charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      return true;
    } catch (e) {
      return false;
    }
  };

  K.fileStamp = function () {
    var p = K.db.profile;
    return (p && p.code ? String(p.code).replace(/[^A-Za-z0-9_-]/g, '') : 'demo') + '_' + K.todayISO();
  };

  // ---------------------------------------------------------------- sample

  K.sample = function () {
    var today = K.todayISO();
    if (!K.db.profile) K.db.profile = { code: 'K01', consentVersion: '1.0-demo', consentAt: Date.now() };
    var profile = K.db.profile;
    var days = {};
    // Medicines must be in place before the days are built, or no sample day has a dose status.
    var meds = (profile.medicines || []).slice();
    if (!meds.length) {
      meds = [
        { name: 'Metformin', dose: '500 mg' },
        { name: 'Atorvastatin', dose: '10 mg' }
      ];
      profile.medicines = meds.slice();
    }
    var breakfasts = ['paratha_aloo', 'idli', 'poha', 'dosa_masala', 'puri', 'upma'];
    var lunches = ['rice_steamed', 'dal_tadka', 'roti_phulka', 'bhindi', 'mixed_veg', 'fish_jhol', 'chicken_curry', 'curd'];
    // Light dinners are deliberately below the 60 g-carbohydrate threshold used by the insight.
    var dinnersLight = ['bhindi', 'dal_tadka', 'roti_phulka'];
    var dinnersHeavy = ['rice_steamed', 'dal_tadka', 'aloo_gobi', 'roti_phulka'];
    var seed = 20261117;
    function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }
    function pick(arr) { return arr[Math.floor(rnd() * arr.length) % arr.length]; }
    function withQty(id, qty) {
      var f = K.BY_ID[id];
      return f ? K.makeFoodItem(f, qty) : null;
    }
    function add(list, id, qty) { var x = withQty(id, qty); if (x) list.push(x); }
    // A heavy dinner on day j is reflected in the fasting reading the next morning (day j-1).
    function heavyFor(j) { return j % 3 !== 1; }
    function hasDay(j) { return j >= 0 && j <= 13 && j !== 4 && j !== 10; }
    function saltyFor(j) { return j % 4 === 1; }

    for (var i = 13; i >= 0; i--) {
      var date = K.shift(today, -i);
      // Leave two days out so history and completeness look real.
      if (i === 4 || i === 10) continue;
      var e = K.blankDay(date);
      var b = e.meals.breakfast;
      add(b, pick(breakfasts), 1);
      if (rnd() > 0.45) add(b, 'chai_sugar', 1); else add(b, 'chai_no_sugar', 1);

      var l = e.meals.lunch;
      add(l, 'rice_steamed', rnd() > 0.5 ? 1.5 : 1);
      add(l, pick(lunches), 1);
      if (rnd() > 0.5) add(l, 'roti_phulka', 2);

      var d = e.meals.dinner;
      var heavyDinner = heavyFor(i);
      (heavyDinner ? dinnersHeavy : dinnersLight).forEach(function (id) {
        add(d, id, 1);
      });

      if (rnd() > 0.78) add(e.meals.snacks, 'soft_drink', 1);
      else if (rnd() > 0.65) add(e.meals.snacks, 'samosa', 1);

      var salty = saltyFor(i);
      if (salty) {
        // Add real food until the estimate crosses the 3,000 mg threshold; never fake a reading.
        var guard = 0;
        while (K.totals(e).sodium < 3300 && guard++ < 8) add(l, 'pickle', 1);
        add(e.meals.snacks, 'namkeen', 1);
      }

      e.meds = meds.map(function (m) {
        var r = rnd();
        return { name: m.name, dose: m.dose, status: r > 0.92 ? 'skipped' : (r > 0.86 ? 'changed' : 'taken') };
      });

      if (i % 5 !== 2) {
        e.sys = (salty ? 140 : 120) + Math.round(rnd() * 12);
        e.dia = (salty ? 90 : 78) + Math.round(rnd() * 8);
        e.pulse = 68 + Math.round(rnd() * 18);
      }
      if (i % 3 !== 1) {
        // The fasting reading follows yesterday evening's dinner, not tonight's.
        var prevHeavy = hasDay(i + 1) && heavyFor(i + 1);
        e.glucose = (prevHeavy ? 118 : 96) + Math.round(rnd() * 14) + (i < 3 ? 3 : 0);
        e.glucoseType = 'fasting';
      } else if (rnd() > 0.5) {
        e.glucose = 145 + Math.round(rnd() * 40);
        e.glucoseType = 'pp';
      }
      e.weight = Math.round((69.4 - (13 - i) * 0.07 + rnd() * 0.5) * 10) / 10;
      e.energy = 2 + Math.round(rnd() * 3);
      e.mood = 2 + Math.round(rnd() * 3);
      e.sleep = Math.round((6 + rnd() * 2.2) * 10) / 10;
      if (i === 2) e.note = 'Long day at work; walked less than usual.';
      if (i === 6) e.note = 'Ate out at a wedding. Portion sizes are a guess.';
      e.updatedAt = Date.now() - i * 80000000;
      days[date] = e;
    }
    K.db.days = days;
    K.persist();
  };

  // ---------------------------------------------------------------- export filenames

  K.fileName = function (kind) {
    var code = (K.db.profile && K.db.profile.code ? String(K.db.profile.code).replace(/[^A-Za-z0-9_-]/g, '') : 'demo');
    var stamp = K.todayISO();
    if (kind === 'metrics') return 'khai_metrics_' + code + '_' + stamp + '.csv';
    if (kind === 'food') return 'khai_food_' + code + '_' + stamp + '.csv';
    if (kind === 'backup') return 'khai_backup_' + code + '_' + stamp + '.json';
    if (kind === 'fhir') return 'khai_fhir_' + code + '_' + stamp + '.json';
    return 'khai_' + code + '_' + stamp;
  };
})();
