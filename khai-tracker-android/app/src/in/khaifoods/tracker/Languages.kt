package `in`.khaifoods.tracker

import java.util.Locale

/** One row of the marketable language registry; kept in code so the picker needs no assets. */
data class LanguageInfo(
    val code: String,
    val native: String,
    val status: String,
    val tag: String
) {
    val isDraft: Boolean get() = status == "draft"
}

/**
 * 26-language marketable set: the largest speaker bases plus official languages
 * of major health markets. English and Hindi are shipped; the other 24 are drafts
 * that require native-speaker clinical and consent review before real use.
 */
object Languages {
    val ALL = listOf(
        LanguageInfo("en", "English", "shipped", "en"),
        LanguageInfo("hi", "हिन्दी", "shipped", "hi-IN"),
        LanguageInfo("bn", "বাংলা", "draft", "bn-IN"),
        LanguageInfo("ta", "தமிழ்", "draft", "ta-IN"),
        LanguageInfo("te", "తెలుగు", "draft", "te-IN"),
        LanguageInfo("mr", "मराठी", "draft", "mr-IN"),
        LanguageInfo("gu", "ગુજરાતી", "draft", "gu-IN"),
        LanguageInfo("kn", "ಕನ್ನಡ", "draft", "kn-IN"),
        LanguageInfo("ml", "മലയാളം", "draft", "ml-IN"),
        LanguageInfo("pa", "ਪੰਜਾਬੀ", "draft", "pa-IN"),
        LanguageInfo("ur", "اردو", "draft", "ur-IN"),
        LanguageInfo("fr", "Français", "draft", "fr-FR"),
        LanguageInfo("de", "Deutsch", "draft", "de-DE"),
        LanguageInfo("pt", "Português", "draft", "pt-PT"),
        LanguageInfo("it", "Italiano", "draft", "it-IT"),
        LanguageInfo("ru", "Русский", "draft", "ru-RU"),
        LanguageInfo("zh", "中文", "draft", "zh-CN"),
        LanguageInfo("ja", "日本語", "draft", "ja-JP"),
        LanguageInfo("ko", "한국어", "draft", "ko-KR"),
        LanguageInfo("ar", "العربية", "draft", "ar-SA"),
        LanguageInfo("tr", "Türkçe", "draft", "tr-TR"),
        LanguageInfo("vi", "Tiếng Việt", "draft", "vi-VN"),
        LanguageInfo("id", "Bahasa Indonesia", "draft", "id-ID"),
        LanguageInfo("th", "ไทย", "draft", "th-TH"),
        LanguageInfo("sw", "Kiswahili", "draft", "sw-KE"),
        LanguageInfo("am", "አማርኛ", "draft", "am-ET")
    )

    /** Only reviewed languages may be chosen for real records. Drafts stay in the review packets. */
    val SHIPPED = ALL.filter { !it.isDraft }

    fun find(code: String?): LanguageInfo = ALL.firstOrNull { it.code == code } ?: ALL[0]

    fun native(code: String?): String = find(code).native

    fun isDraft(code: String?): Boolean = find(code).isDraft

    fun locale(code: String?): Locale = Locale.forLanguageTag(find(code).tag)
}
