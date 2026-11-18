/* Khai Guide — a deterministic, grounded question-and-answer helper.
 *
 * There is no model, no training and no network call. Every answer is a fixed
 * list of strings already present in the translated help text, so the helper
 * cannot invent a claim. Personal interpretation, diagnosis and treatment
 * questions are refused and redirected to a clinician.
 *
 * Voice input/output is deliberately not present yet; this is text only.
 */
(function () {
  'use strict';

  var I = window.KhaiI18n;
  var FALLBACK = {
    assistantIntro: "Questions answered from this tool's own help text. No AI, no diagnosis, no advice.",
    assistantUnknown: 'I don\'t have an answer for that. I only answer questions about using this tool.',
    askClinician: 'Ask a qualified clinician.'
  };

  function T(key) {
    if (I && typeof I.t === 'function') return I.t(key);
    return FALLBACK[key] || key;
  }

  // Answer keys are all existing translated help strings. Nothing here is
  // generated, and nothing here interprets the participant's own readings.
  var INTENTS = [
    {
      id: 'device',
      match: ['medical device', 'is this a device', 'diagnose', 'diagnosis',
              'is it approved', 'fda', 'certified', 'do you diagnose', 'a doctor'],
      // The translated footer doubles as the match phrase so this intent is
      // reachable in every locale, not just English.
      q: 'footer_not_medical',
      a: ['footer_not_medical', 'escalateBody', 'askClinician']
    },
    {
      id: 'advice',
      match: ['advice', 'treatment', 'prescription', 'should i', 'what medicine',
              'change my', 'diet plan', 'ask a doctor'],
      q: 'planTitle',
      a: ['planNotAdvice', 'askClinician']
    },
    {
      id: 'readings',
      match: ['reading', 'blood pressure', 'sugar', 'glucose', 'weight', 'pulse',
              'interpret', 'normal', 'high', 'low', 'my numbers', 'bp'],
      q: 'vitalsTitle',
      a: ['bmiNote', 'insightsEmpty', 'escalateBody', 'askClinician']
    },
    {
      id: 'medicines',
      match: ['medicine', 'medication', 'drug', 'dose', 'tablet', 'pill',
              'metformin', 'missed a dose'],
      q: 'medsTitle',
      a: ['planNotAdvice', 'escalateBody', 'askClinician']
    },
    {
      id: 'export',
      match: ['export', 'download', 'csv', 'fhir', 'json', 'print', 'share',
              'clinician summary', 'backup'],
      q: 'exportsTitle',
      a: ['exportMetrics', 'exportFhir', 'exportPrint', 'footer_nothing_leaves']
    },
    {
      id: 'privacy',
      match: ['privacy', 'private', 'data', 'secure', 'encrypt', 'upload',
              'server', 'who sees', 'my information'],
      q: 'consentTitle',
      a: ['consentBody', 'onboardStorage', 'footer_nothing_leaves']
    },
    {
      id: 'language',
      match: ['language', 'hindi', 'english', 'translate', 'draft language',
              'switch language'],
      q: 'language',
      a: ['assistantLanguageAnswer']
    },
    {
      id: 'food',
      match: ['food', 'carb', 'portion', 'dish', 'calorie', 'diet', 'meal',
              'eat', 'estimate'],
      q: 'planConfidenceTitle',
      a: ['planConfidenceBody', 'planIntro']
    },
    {
      id: 'patterns',
      match: ['pattern', 'trend', 'progress', 'completeness', 'streak',
              'insight', 'a week', 'how long'],
      q: 'insightsTitle',
      a: ['insightsEmpty', 'completenessHint', 'planNotAdvice']
    },
    {
      id: 'hospital',
      match: ['hospital', 'clinic', 'cohort', 'pilot', 'deployment', 'partner',
              'real patient'],
      q: 'hospitalTitle',
      a: ['hospitalIntro', 'callout_blueprint']
    },
    {
      id: 'about',
      match: ['what is', 'about', 'who built', 'khai foods', 'purpose',
              'your app', 'this app'],
      q: 'aboutTitle',
      a: ['welcomeBody', 'footer_desc', 'footer_not_medical']
    }
  ];

  var CHIPS = ['aboutTitle', 'vitalsTitle', 'medsTitle', 'exportsTitle',
               'consentTitle', 'language', 'planConfidenceTitle', 'insightsTitle'];

  function norm(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[\u200b-\u200d\ufeff]/g, '')
      .replace(/[.,!?;:'"()\[\]{}…·—–_\-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function findIntent(question) {
    var q = norm(question);
    if (!q) return null;
    var best = null;
    var bestScore = 0;
    INTENTS.forEach(function (intent) {
      var score = 0;
      intent.match.forEach(function (phrase) {
        if (q.indexOf(norm(phrase)) >= 0) score += phrase.indexOf(' ') >= 0 ? 2 : 1;
      });
      if (intent.q) {
        var label = norm(T(intent.q));
        if (label && (q.indexOf(label) >= 0 || (label.indexOf(q) >= 0 && q.length >= 4))) {
          score += 3;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        best = intent;
      }
    });
    return best;
  }

  function answerText(question) {
    var intent = findIntent(question);
    var keys = intent ? intent.a : ['assistantUnknown'];
    var parts = [];
    keys.forEach(function (key) {
      var text = T(key);
      if (text && parts.indexOf(text) < 0) parts.push(text);
    });
    var clinician = T('askClinician');
    if (clinician && parts.indexOf(clinician) < 0) parts.push(clinician);
    return parts.join('\n\n');
  }

  var log = document.getElementById('guide-log');
  var chips = document.getElementById('guide-chips');
  var form = document.getElementById('guide-form');
  var input = document.getElementById('guide-input');
  if (!log || !chips || !form || !input) return;

  function addMessage(role, text) {
    var row = document.createElement('div');
    row.className = 'guide-msg guide-' + role;
    var body = document.createElement('p');
    body.textContent = text;
    row.appendChild(body);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
  }

  function renderChips() {
    chips.textContent = '';
    CHIPS.forEach(function (key) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'guide-chip';
      btn.textContent = T(key);
      btn.addEventListener('click', function () { ask(btn.textContent); });
      chips.appendChild(btn);
    });
  }

  function reset() {
    // The intro and the non-medical claim are already shown in the page note;
    // repeating them in the log is noise, not an answer.
    log.textContent = '';
    renderChips();
  }

  function ask(question) {
    var q = String(question || '').trim();
    if (!q) return;
    addMessage('user', q);
    addMessage('guide', answerText(q));
    input.value = '';
    input.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ask(input.value);
  });

  window.addEventListener('khai:languagechange', reset);
  reset();
})();
