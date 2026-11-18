package `in`.khaifoods.tracker

import android.content.Context
import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.Drawable
import android.text.InputType
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.HorizontalScrollView
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView

/**
 * Framework-only view helpers. No third-party UI library is linked into this app: the whole
 * interface is native widgets, which keeps the APK small, the attack surface narrow and the
 * behaviour identical on a five-year-old mid-range phone.
 */
object Ui {

    fun Context.dp(v: Int): Int = (v * resources.displayMetrics.density + 0.5f).toInt()

    fun Context.color(id: Int): Int = getColor(id)

    fun v(ctx: Context): LinearLayout = LinearLayout(ctx).apply {
        orientation = LinearLayout.VERTICAL
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
        )
    }

    fun h(ctx: Context): LinearLayout = LinearLayout(ctx).apply {
        orientation = LinearLayout.HORIZONTAL
        gravity = Gravity.CENTER_VERTICAL
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
        )
    }

    fun blank(ctx: Context, heightDp: Int): View = View(ctx).apply {
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ctx.dp(heightDp))
    }

    /**
     * Screens pad their own content; the scroll view only adds breathing room below the last card.
     * Padding here as well would double the gutter and squeeze the cards on a 360 dp phone.
     */
    fun scroll(ctx: Context, content: View, padH: Int = 0): ScrollView = ScrollView(ctx).apply {
        isFillViewport = true
        clipToPadding = false
        setPadding(ctx.dp(padH), 0, ctx.dp(padH), ctx.dp(20))
        addView(content, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f)
    }

    fun card(ctx: Context, build: (LinearLayout) -> Unit = {}): LinearLayout {
        val c = v(ctx)
        c.background = ctx.getDrawable(R.drawable.card_bg)
        c.setPadding(ctx.dp(16), ctx.dp(14), ctx.dp(16), ctx.dp(16))
        val lp = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        lp.bottomMargin = ctx.dp(12)
        c.layoutParams = lp
        build(c)
        return c
    }

    /** A card that adds its own heading. */
    fun section(ctx: Context, title: String?, build: (LinearLayout) -> Unit): LinearLayout =
        card(ctx) { c ->
            if (title != null) c.addView(heading(ctx, title))
            build(c)
        }

    fun heading(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 17f
        setTextColor(ctx.color(R.color.khai_text))
        typeface = Typeface.create("serif", Typeface.BOLD)
        setPadding(0, 0, 0, ctx.dp(6))
    }

    fun hero(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 26f
        setTextColor(ctx.color(R.color.khai_text))
        typeface = Typeface.create("serif", Typeface.BOLD)
        setLineSpacing(ctx.dp(2).toFloat(), 1f)
        setPadding(0, ctx.dp(4), 0, ctx.dp(6))
    }

    fun body(ctx: Context, text: String, muted: Boolean = true, size: Float = 14f): TextView = TextView(ctx).apply {
        this.text = text
        textSize = size
        setTextColor(ctx.color(if (muted) R.color.khai_muted else R.color.khai_text))
        setLineSpacing(ctx.dp(3).toFloat(), 1f)
        setPadding(0, ctx.dp(2), 0, ctx.dp(4))
    }

    fun label(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 13.5f
        setTextColor(ctx.color(R.color.khai_muted))
        setPadding(0, ctx.dp(10), 0, ctx.dp(4))
    }

    fun input(ctx: Context, hint: String, numeric: Boolean = false, decimal: Boolean = false): EditText =
        EditText(ctx).apply {
            this.hint = hint
            textSize = 16f
            setTextColor(ctx.color(R.color.khai_text))
            setHintTextColor(ctx.color(R.color.khai_muted))
            background = ctx.getDrawable(R.drawable.input_bg)
            setPadding(ctx.dp(12), ctx.dp(11), ctx.dp(12), ctx.dp(11))
            minHeight = ctx.dp(48)
            inputType = when {
                decimal -> InputType.TYPE_CLASS_NUMBER or InputType.TYPE_NUMBER_FLAG_DECIMAL
                numeric -> InputType.TYPE_CLASS_NUMBER
                else -> InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_FLAG_CAP_SENTENCES
            }
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
            )
            importantForAutofill = View.IMPORTANT_FOR_AUTOFILL_NO
        }

    fun field(ctx: Context, labelText: String, input: EditText): LinearLayout = v(ctx).apply {
        addView(label(ctx, labelText))
        addView(input)
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
    }

    fun button(ctx: Context, text: String, primary: Boolean = true, onClick: () -> Unit): Button =
        Button(ctx).apply {
            this.text = text
            textSize = 15.5f
            isAllCaps = false
            typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
            background = ctx.getDrawable(if (primary) R.drawable.btn_primary else R.drawable.btn_outline)
            setTextColor(ctx.color(if (primary) R.color.white else R.color.khai_primary))
            minHeight = ctx.dp(50)
            minimumHeight = ctx.dp(50)
            setPadding(ctx.dp(16), ctx.dp(10), ctx.dp(16), ctx.dp(10))
            stateListAnimator = null
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply { topMargin = ctx.dp(10) }
            setOnClickListener { onClick() }
        }

    fun smallButton(ctx: Context, text: String, primary: Boolean = false, onClick: () -> Unit): Button =
        button(ctx, text, primary, onClick).apply {
            textSize = 13.5f
            minHeight = ctx.dp(40)
            minimumHeight = ctx.dp(40)
            setPadding(ctx.dp(12), ctx.dp(6), ctx.dp(12), ctx.dp(6))
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply { topMargin = ctx.dp(8) }
        }

    fun rowButton(ctx: Context, text: String, primary: Boolean, weight: Float, onClick: () -> Unit): Button =
        button(ctx, text, primary, onClick).apply {
            textSize = 14f
            layoutParams = LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, weight).apply {
                topMargin = ctx.dp(8)
                marginEnd = ctx.dp(6)
            }
        }

    fun chip(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 13.5f
        setTextColor(ctx.color(R.color.khai_primary_dark))
        background = ctx.getDrawable(R.drawable.chip_bg)
        setPadding(ctx.dp(12), ctx.dp(7), ctx.dp(12), ctx.dp(7))
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
        ).apply { marginEnd = ctx.dp(6); topMargin = ctx.dp(6) }
    }

    fun chipRow(ctx: Context, items: List<String>): HorizontalScrollView {
        val row = h(ctx)
        items.forEach { row.addView(chip(ctx, it)) }
        return HorizontalScrollView(ctx).apply {
            isHorizontalScrollBarEnabled = false
            addView(row)
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply { topMargin = ctx.dp(4) }
        }
    }

    /** Same row, but each chip asks the question it is labelled with. */
    fun chipRow(ctx: Context, items: List<String>, onClick: (String) -> Unit): HorizontalScrollView {
        val row = h(ctx)
        items.forEach { text ->
            row.addView(chip(ctx, text).apply {
                isClickable = true
                isFocusable = true
                contentDescription = text
                setOnClickListener { onClick(text) }
            })
        }
        return HorizontalScrollView(ctx).apply {
            isHorizontalScrollBarEnabled = false
            addView(row)
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply { topMargin = ctx.dp(4) }
        }
    }

    fun pill(ctx: Context, text: String, bg: Int, fg: Int): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 12.5f
        setTextColor(fg)
        background = rounded(ctx, bg, 999)
        setPadding(ctx.dp(10), ctx.dp(5), ctx.dp(10), ctx.dp(5))
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
        ).apply { marginEnd = ctx.dp(6); topMargin = ctx.dp(4) }
    }

    fun rounded(ctx: Context, color: Int, radiusDp: Int): Drawable =
        android.graphics.drawable.GradientDrawable().apply {
            setColor(color)
            cornerRadius = ctx.dp(radiusDp).toFloat()
        }

    fun divider(ctx: Context): View = View(ctx).apply {
        setBackgroundColor(ctx.color(R.color.khai_line))
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 1).apply {
            topMargin = ctx.dp(10); bottomMargin = ctx.dp(6)
        }
    }

    /** 1-5 rating row with a large tap target and a selected state. */
    fun rating(ctx: Context, initial: Int, onPick: (Int) -> Unit): LinearLayout {
        val row = h(ctx)
        val buttons = mutableListOf<TextView>()
        fun apply(value: Int) {
            buttons.forEachIndexed { idx, b ->
                val on = idx + 1 == value
                b.background = rounded(ctx, ctx.color(if (on) R.color.khai_primary else R.color.khai_primary_light), 12)
                b.setTextColor(ctx.color(if (on) R.color.white else R.color.khai_primary_dark))
            }
        }
        for (i in 1..5) {
            val b = TextView(ctx).apply {
                text = i.toString()
                gravity = Gravity.CENTER
                textSize = 16f
                typeface = Typeface.DEFAULT_BOLD
                isClickable = true
                isFocusable = true
                contentDescription = i.toString()
                layoutParams = LinearLayout.LayoutParams(0, ctx.dp(48), 1f).apply {
                    marginEnd = ctx.dp(6)
                }
                setOnClickListener { apply(i); onPick(i) }
            }
            buttons.add(b)
            row.addView(b)
        }
        apply(initial)
        row.setPadding(0, ctx.dp(2), 0, ctx.dp(2))
        return row
    }

    /** Two-column stat block used on the progress screen. */
    fun stat(ctx: Context, value: String, caption: String, accent: Boolean = false): LinearLayout = v(ctx).apply {
        background = rounded(
            ctx,
            ctx.color(if (accent) R.color.khai_primary_light else R.color.khai_bg),
            14
        )
        setPadding(ctx.dp(12), ctx.dp(12), ctx.dp(12), ctx.dp(12))
        addView(TextView(ctx).apply {
            text = value
            textSize = 22f
            typeface = Typeface.create("serif", Typeface.BOLD)
            setTextColor(ctx.color(if (accent) R.color.khai_primary_dark else R.color.khai_text))
        })
        addView(TextView(ctx).apply {
            text = caption
            textSize = 12f
            setTextColor(ctx.color(R.color.khai_muted))
            setPadding(0, ctx.dp(2), 0, 0)
        })
    }

    fun noteBox(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 13.5f
        setTextColor(ctx.color(R.color.khai_warn))
        background = ctx.getDrawable(R.drawable.note_bg)
        setPadding(ctx.dp(12), ctx.dp(10), ctx.dp(12), ctx.dp(10))
        setLineSpacing(ctx.dp(2).toFloat(), 1f)
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
        ).apply { topMargin = ctx.dp(8) }
    }

    /** Centred empty state. */
    fun empty(ctx: Context, text: String): TextView = TextView(ctx).apply {
        this.text = text
        textSize = 14f
        gravity = Gravity.CENTER
        setTextColor(ctx.color(R.color.khai_muted))
        setPadding(ctx.dp(8), ctx.dp(24), ctx.dp(8), ctx.dp(24))
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
    }

    /** Two or three mutually exclusive options, e.g. fasting / after food. */
    fun segmented(ctx: Context, labels: List<String>, selected: Int, onPick: (Int) -> Unit): LinearLayout {
        val row = h(ctx)
        val cells = mutableListOf<TextView>()
        fun paint(index: Int) {
            cells.forEachIndexed { i, cell ->
                val on = i == index
                cell.background = rounded(ctx, ctx.color(if (on) R.color.khai_primary else R.color.khai_primary_light), 12)
                cell.setTextColor(ctx.color(if (on) R.color.white else R.color.khai_primary_dark))
            }
        }
        labels.forEachIndexed { i, text ->
            val cell = TextView(ctx).apply {
                this.text = text
                gravity = Gravity.CENTER
                textSize = 14f
                isClickable = true
                isFocusable = true
                contentDescription = text
                minHeight = ctx.dp(44)
                setPadding(ctx.dp(6), ctx.dp(10), ctx.dp(6), ctx.dp(10))
                layoutParams = LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f).apply {
                    marginEnd = ctx.dp(6)
                }
                setOnClickListener { paint(i); onPick(i) }
            }
            cells.add(cell)
            row.addView(cell)
        }
        paint(selected)
        return row
    }
}

/** Text-change listener without pulling a lifecycle library into the app. */
fun android.widget.EditText.onChangeText(block: (String) -> Unit) {
    addTextChangedListener(object : android.text.TextWatcher {
        override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
        override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            block(s?.toString() ?: "")
        }
        override fun afterTextChanged(s: android.text.Editable?) {}
    })
}
