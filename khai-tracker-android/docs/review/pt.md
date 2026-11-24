# Portuguese (pt) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Portuguese (Português)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/pt.json` (app and site)
- Generated automatically; no reviewer has approved this draft.

## What to check

1. Meaning matches the English source. Do not translate dish names or brand names; they must stay in their familiar original form.
2. The non-medical-device disclaimer and the no-affiliation sentence are accurate and complete.
3. Consent wording is understandable to a lay person and does not imply care, diagnosis or a relationship with any named health system.
4. Numbers, units, placeholders (`{...}`, `%1$d`) and inline tags (`<b>`, `<br>`) are preserved exactly.
5. Tone is neutral and non-promotional; no invented capability is added.

## Automated checks (not a human review)

- App: 0 problem(s)
- Site: 0 problem(s)

## App strings — Portuguese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Sobre |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nCriado por Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, Índia.\n\nFeito para telefones compartilhados, redes instáveis e pratos indianos variados. Prioridade offline. Sem análise de dados por terceiros. Sem publicidade. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Responsável pelo produto: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Adicionar alimento |  |
| `add_medicines` | Add medicines | Adicionar medicamentos |  |
| `already_saved` | Saved. You can keep editing and save again. | Salvo. Você pode continuar editando e salvar novamente. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Pergunte a um profissional de saúde qualificado. |  |
| `assistant_input_ph` | Ask a question | Faça uma pergunta |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | Respostas retiradas apenas do próprio texto de ajuda desta ferramenta. Sem IA, sem diagnóstico, sem conselho. |  |
| `assistant_listen` | Listen | Ouvir |  |
| `assistant_send` | Send | Enviar |  |
| `assistant_tab` | Guide | Guia |  |
| `assistant_title` | Khai Guide | Guia Khai |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | Não tenho resposta para isso. Só respondo a perguntas sobre o uso desta ferramenta. |  |
| `back` | Back | Voltar |  |
| `bp_dia` | Diastolic (lower) | Diastólica (inferior) |  |
| `bp_sys` | Systolic (upper) | Sistólica (superior) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Cancelar |  |
| `carbs` | Carbohydrate | Carboidrato |  |
| `close` | Close | Fechar |  |
| `completeness` | 21-day completeness | Completude de 21 dias |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Dias com refeições, medicamentos e uma medição, divididos por 21. Contados a partir de registros salvos, não da memória. |  |
| `confirm` | Confirm | Confirmar |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Você escolhe o que registrar. Seus registros ficam criptografados neste telefone e só são enviados ao servidor do estudo Khai se seu coordenador fornecer um endereço de servidor. Você pode apagar tudo a qualquer momento. Nenhum nome, endereço, número Aadhaar ou lista de contatos é coletado. Você pode se retirar apagando seus dados. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Li ou ouvi isto e concordo em participar. |  |
| `consent_listen` | Listen in Hindi | Ouvir em hindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Versão do consentimento 1.0 · registrada neste dispositivo com carimbo de data e hora |  |
| `consent_title` | Consent | Consentimento |  |
| `day_detail` | Day detail | Detalhes do dia |  |
| `days_logged` | Days logged | Dias registrados |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | O Khai Tracker é uma ferramenta de acompanhamento, não um conselho médico. Ele nunca faz diagnósticos e nunca altera uma prescrição. |  |
| `done` | Done | Concluído |  |
| `dose_hint` | Dose (optional) | Dose (opcional) |  |
| `edit_day` | Edit this day | Editar este dia |  |
| `edit_profile` | Edit profile | Editar perfil |  |
| `energy` | Energy | Energia |  |
| `erase` | Erase my data | Apagar meus dados |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Isso apaga permanentemente todos os registros, seu perfil e suas configurações de lembrete neste telefone. Não é possível desfazer. |  |
| `erase_yes` | Erase everything | Apagar tudo |  |
| `estimated` | estimated | estimado |  |
| `export_backup` | Full backup (JSON) | Backup completo (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Registro de saúde (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Registro de alimentação (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Compartilhe apenas com as pessoas que você escolher. Os arquivos saem do telefone somente quando você toca em compartilhar. |  |
| `export_metrics` | Daily readings (CSV) | Medições diárias (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Resumo para o profissional de saúde (PDF) |  |
| `export_title` | Export and share | Exportar e compartilhar |  |
| `export_working` | Preparing file… | Preparando o arquivo… |  |
| `fat` | Fat | Gordura |  |
| `food_items` | %1$d food items | %1$d itens de comida |  |
| `food_library_title` | Food library | Biblioteca de alimentos |  |
| `glucose` | Blood sugar | Açúcar no sangue |  |
| `glucose_fasting` | Fasting | Em jejum |  |
| `glucose_pp` | After food | Depois de comer |  |
| `hide_previews` | Hide this app in the recent-apps preview | Ocultar este app na prévia de apps recentes |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Um quadrado preenchido indica um registro. Toque em qualquer dia para revisar ou corrigir. |  |
| `history_title` | Last 21 days | Últimos 21 dias |  |
| `insight_descriptive` | description | descrição |  |
| `insight_early` | early signal | sinal inicial |  |
| `insight_moderate` | moderate signal | sinal moderado |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Estas são observações sobre seus próprios registros, não um diagnóstico nem uma recomendação de tratamento. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Continue registrando por uma semana. Padrões aparecem quando há pelo menos cinco dias com medições. |  |
| `insights_title` | What your own data shows | O que seus próprios dados mostram |  |
| `kcal` | Energy | Energia |  |
| `language` | Language / भाषा | Idioma / भाषा |  |
| `loading` | Loading… | Carregando… |  |
| `meal_breakfast` | Breakfast | Café da manhã |  |
| `meal_dinner` | Dinner | Jantar |  |
| `meal_lunch` | Lunch | Almoço |  |
| `meal_snacks` | Snacks & drinks | Lanches e bebidas |  |
| `meds_changed` | Changed | Alterado |  |
| `meds_empty` | No medicines listed yet. | Nenhum medicamento listado ainda. |  |
| `meds_hint` | Tick what you actually did today. | Marque o que você realmente fez hoje. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Não há medicamentos listados no seu perfil. Adicione-os uma vez e depois marque-os todos os dias. |  |
| `meds_skipped` | Skipped | Não tomado |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d de %2$d medicamentos tomados |  |
| `meds_taken` | Taken | Tomado |  |
| `meds_title` | Medicines | Medicamentos |  |
| `mood` | Mood | Humor |  |
| `no` | No | Não |  |
| `no_food_yet` | Nothing added yet | Nada adicionado ainda |  |
| `note` | Anything else? (optional) | Mais alguma coisa? (opcional) |  |
| `nothing_logged` | No entry for this day. | Nenhum registro para este dia. |  |
| `notif_channel` | Daily reminder | Lembrete diário |  |
| `notif_channel_desc` | One daily reminder to record your day. | Um lembrete por dia para registrar seu dia. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Dois minutos tranquilos: o que você comeu e o que mediu hoje? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Permita notificações para receber o lembrete diário. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Adicionar outro |  |
| `onboard_age` | Age group | Faixa etária |  |
| `onboard_age_ph` | Select | Selecionar |  |
| `onboard_code` | Participant code | Código de participante |  |
| `onboard_code_ph` | e.g. K01 | ex.: K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Condições de saúde (marque todas que se aplicam) |  |
| `onboard_error_age` | Please choose an age group. | Escolha uma faixa etária. |  |
| `onboard_error_code` | Please enter your participant code. | Digite seu código de participante. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Confirme o consentimento para continuar. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Um registro diário de alimentação e saúde que ajuda você e seu profissional de saúde a ver o que acontece de verdade entre as consultas. É uma ferramenta de acompanhamento, não um conselho médico. |  |
| `onboard_meds` | Daily medicines (name and dose) | Medicamentos diários (nome e dose) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | ex.: Metformin 500 mg |  |
| `onboard_start` | Start tracking | Começar o acompanhamento |  |
| `onboard_title` | Welcome to Khai Tracker | Bem-vindo ao Khai Tracker |  |
| `pending` | Pending sync | Aguardando sincronização |  |
| `per_portion` | per portion | por porção |  |
| `pick_day` | Pick a day above. | Escolha um dia acima. |  |
| `pin_change` | Change PIN | Alterar PIN |  |
| `pin_enter` | Enter your PIN | Digite seu PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | O PIN deve ter exatamente 4 dígitos. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Útil em um telefone familiar compartilhado. Um PIN de 4 dígitos é pedido ao abrir o app e novamente após um minuto de inatividade. |  |
| `pin_lock` | App lock | Bloqueio do app |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | Escolha um PIN de 4 dígitos |  |
| `pin_remove` | Remove PIN | Remover PIN |  |
| `pin_removed` | PIN removed. | PIN removido. |  |
| `pin_saved` | PIN saved. | PIN salvo. |  |
| `pin_set` | Set PIN | Definir PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN incorreto. Tente novamente. |  |
| `portion_q` | Portion | Porção |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | Seus registros ficam criptografados neste dispositivo com uma chave guardada no cofre seguro deste telefone. Nada é enviado a lugar algum, a menos que você configure um servidor de estudo. Não há análise de dados nem publicidade. |  |
| `privacy_title` | Privacy | Privacidade |  |
| `profile` | Profile and medicines | Perfil e medicamentos |  |
| `progress_title` | Progress | Progresso |  |
| `protein` | Protein | Proteína |  |
| `pulse` | Pulse | Pulso |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | As estimativas são faixas porque o mesmo prato varia de uma casa para outra. Elas servem para identificar padrões, não para contar calorias. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | A fala em hindi não está instalada neste telefone. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Uma notificação discreta na hora que você escolher. Sem cobrança por sequência perdida, sem anúncios. |  |
| `reminder_off` | Reminder off | Lembrete desativado |  |
| `reminder_on` | Reminder on | Lembrete ativado |  |
| `reminder_time` | Reminder time | Horário do lembrete |  |
| `reminders` | Daily reminder | Lembrete diário |  |
| `remove` | Remove | Remover |  |
| `remove_confirm` | Remove this item? | Remover este item? |  |
| `save` | Save | Salvar |  |
| `save_failed` | Could not save. Please try again. | Não foi possível salvar. Tente novamente. |  |
| `save_today` | Save today | Salvar hoje |  |
| `saved` | Saved on this device. Encrypted. | Salvo neste dispositivo. Criptografado. |  |
| `search_food` | Search a dish in English or Hindi | Busque um prato em inglês ou hindi |  |
| `settings_title` | Settings | Configurações |  |
| `share` | Share | Compartilhar |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Nenhum app neste telefone pode receber o arquivo. Instale um app de e-mail ou de arquivos e tente novamente. |  |
| `sleep` | Sleep last night (hours) | Sono da última noite (horas) |  |
| `sodium` | Salt (sodium) | Sal (sódio) |  |
| `streak` | Day streak | Sequência de dias |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | Isso não parece um endereço válido. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Falha na sincronização. Os registros estão seguros neste telefone e a tentativa será repetida. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | Opcional. Seu coordenador fornece um endereço de servidor. Deixe em branco para manter tudo apenas neste telefone. |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | Use um endereço HTTPS. Dados de saúde nunca são enviados sem criptografia. |  |
| `sync_never` | Not synced yet. | Ainda não sincronizado. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | Sincronizar agora |  |
| `sync_offline` | No internet right now. Entries queued. | Sem internet agora. Registros na fila. |  |
| `sync_ok` | Synced. All entries are on the server. | Sincronizado. Todos os registros estão no servidor. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | Salvar endereço |  |
| `sync_title` | Institution sync | Sincronização do estudo |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | Endereço do servidor |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Histórico |  |
| `tab_progress` | Progress | Progresso |  |
| `tab_settings` | Settings | Configurações |  |
| `tab_today` | Today | Hoje |  |
| `this_week` | This week | Esta semana |  |
| `todays_total` | Today\'s estimate | Estimativa de hoje |  |
| `total_carbs` | Carbohydrate | Carboidrato |  |
| `uncertainty` | Range, not a single number | Uma faixa, não um número único |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Preencha apenas o que você mediu. Em branco significa que não foi medido, o que também é uma informação útil. |  |
| `vitals_title` | Readings | Medições |  |
| `weight` | Weight (kg) | Peso (kg) |  |
| `wellbeing_title` | How was the day? | Como foi o dia? |  |
| `yes` | Yes | Sim |  |

## Site strings — Portuguese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Sobre esta demonstração |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Baixar APK |  |
| `action_menu` | Open menu | Abrir menu |  |
| `action_theme` | Switch theme | Mudar tema |  |
| `addFood` | Add food | Adicionar alimento |  |
| `addMed` | + Add another | + Adicionar outro |  |
| `adherence` | medicines taken | medicamentos tomados |  |
| `ageLabel` | Age band | Faixa etária |  |
| `allFoods` | All | Todos |  |
| `askClinician` | Ask a qualified clinician. | Pergunte a um profissional de saúde qualificado. |  |
| `assistantInputPh` | Ask a question | Faça uma pergunta |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Respostas retiradas apenas do próprio texto de ajuda desta ferramenta. Sem IA, sem diagnóstico, sem conselho. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Mudar o idioma de exibição altera apenas os rótulos. Os valores registados permanecem como códigos estáveis, pelo que nenhum dia é reescrito. |  |
| `assistantListen` | Listen | Ouvir |  |
| `assistantNav` | Guide | Guia |  |
| `assistantSend` | Send | Enviar |  |
| `assistantTitle` | Khai Guide | Guia Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Não tenho resposta para isso. Só respondo a perguntas sobre o uso desta ferramenta. |  |
| `avgBp` | avg BP | pressão arterial média |  |
| `back` | Back | Voltar |  |
| `bmiNote` | Not a diagnosis. | Não é um diagnóstico. |  |
| `bpSys` | Systolic | Sistólica |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Leia como um projeto, não como um anúncio: nenhuma implantação, piloto, endosso ou parceria hospitalar é afirmada. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | A linha honesta: o app do participante e a demonstração no navegador existem hoje. Cada componente hospitalar aqui é uma proposta de projeto. |  |
| `codeLabel` | Participant code | Código de participante |  |
| `codeShort` | Code | Código |  |
| `completeDays` | complete days | dias completos |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Dias com comida, situação dos medicamentos (quando prescritos) e pelo menos uma medição, divididos por 21. Contados a partir de registros salvos, não da memória. |  |
| `conditionsLabel` | Conditions (select all that apply) | Condições de saúde (selecione todas que se aplicam) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Você decide o que informar. Nesta demonstração, tudo fica no armazenamento local deste navegador — não há servidor e nada é enviado. No app Android, os registros ficam criptografados no telefone. Nenhum nome, endereço, documento oficial ou lista de contatos é coletado. Você pode apagar tudo a qualquer momento. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Li isto e entendo que esta demonstração no navegador não é para registros clínicos reais. |  |
| `consentTitle` | Consent | Consentimento |  |
| `dayComplete` | Day complete | Dia completo |  |
| `demoBadge` | Demo | Demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Apenas demonstração · não é um dispositivo médico · não é para registros clínicos reais. |  |
| `downloadToast` | {name} downloaded. | {name} baixado. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Tradução provisória — requer revisão por falante nativo antes de uso clínico. |  |
| `early` | early signal | sinal inicial |  |
| `eraseBtn` | Erase my data | Apagar meus dados |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Isso remove o perfil, todos os dias e todas as configurações deste navegador. Não é possível desfazer. |  |
| `eraseTitle` | Erase everything | Apagar tudo |  |
| `eraseYes` | Erase everything | Apagar tudo |  |
| `errCode` | Please enter your participant code. | Digite seu código de participante. |  |
| `errConsent` | Consent is required to continue. | É necessário consentir para continuar. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Medições elevadas são marcadas para uma conversa. O app nunca faz diagnósticos nem altera prescrições. |  |
| `escalateNone` | No threshold flags in the recent record. | Nenhum sinal de limite nos registros recentes. |  |
| `escalateTitle` | Flags for the clinician | Pontos para o profissional de saúde |  |
| `estTotal` | Today’s estimate | Estimativa de hoje |  |
| `exportBackup` | Complete backup (JSON) | Backup completo (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Registro de saúde (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Registro de alimentação (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Métricas diárias (CSV) |  |
| `exportPrint` | Clinician summary (print) | Resumo para o profissional de saúde (impressão) |  |
| `exportsTitle` | Export & share | Exportar e compartilhar |  |
| `eyebrow_capability` | Capability map | Mapa de capacidades |  |
| `eyebrow_demo` | Browser demo · no install | Demonstração no navegador · sem instalação |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Implantação hospitalar · projeto de referência |  |
| `fasting` | Fasting | Em jejum |  |
| `foodItemsOne` | 1 item | 1 item |  |
| `foodLogged` | Food | Alimentação |  |
| `foodPickerTitle` | Choose a dish | Escolha um prato |  |
| `footerNote` | Nothing leaves this browser. | Nada sai deste navegador. |  |
| `footer_browser_demo` | Browser demo | Demonstração no navegador |  |
| `footer_contact` | Contact | Contato |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Apenas demonstração · não é um dispositivo médico · nenhuma afiliação com Zhongshan Hospital, HIMSS ou qualquer sistema de saúde citado. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Um instrumento de medição para o intervalo entre as consultas. Criado em Jamshedpur para telefones compartilhados, baterias fracas e clínicas distantes. |  |
| `footer_hospital_design` | Hospital design | Projeto hospitalar |  |
| `footer_limits` | Limits and answers | Limites e respostas |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Não é um dispositivo médico. Nenhuma afiliação com Zhongshan Hospital, HIMSS ou qualquer sistema de saúde citado. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Nada sai deste navegador. |  |
| `footer_product` | Product | Produto |  |
| `footer_transparency` | Transparency | Transparência |  |
| `footer_verification` | Verification | Verificação |  |
| `glucose` | Blood sugar | Açúcar no sangue |  |
| `head_404` | That page is not here. | Esta página não está aqui. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Um ciclo fechado, feito para os lugares que um hospital nunca alcança. |  |
| `head_functions` | Every function, honestly labelled. | Cada função, nomeada com honestidade. |  |
| `head_hospital` | The hospital is the unit of change. | O hospital é a unidade de mudança. |  |
| `head_privacy` | Your record stays yours. | Seu registro continua seu. |  |
| `head_security` | What is protected, and what is not. | O que é protegido e o que não é. |  |
| `historyTitle` | The last 21 days | Os últimos 21 dias |  |
| `hospAudit` | Audit trail | Registro de auditoria |  |
| `hospCohort` | Cohort | Coorte |  |
| `hospComplete` | complete | completo |  |
| `hospDisc1` | Prescribed but not dispensed | Prescrito mas não dispensado |  |
| `hospDiscrepancies` | Medication discrepancies | Divergências de medicamentos |  |
| `hospOpenHospital` | Open hospital control room | Abrir centro de controle do hospital |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Registre cerca de uma semana no app do participante para ver um pacote de revisão aqui. |  |
| `hospReviewPack` | Today's review pack | Pacote de revisão de hoje |  |
| `hospitalBack` | Back to app | Voltar ao app |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Um esboço de projeto da camada hospitalar construída em torno do mesmo registro. A coorte abaixo é sintética — nenhum paciente real, nenhuma ligação com hospital, nenhuma decisão clínica. |  |
| `hospitalTitle` | Hospital control room | Centro de controle do hospital |  |
| `hospital_layer` | Hospital deployment layer | Camada de implantação hospitalar |  |
| `hospital_s1` | Status of this document | Situação deste documento |  |
| `hospital_s10` | Governance and safety | Governança e segurança |  |
| `hospital_s11` | Phased rollout | Implantação por etapas |  |
| `hospital_s12` | What would make this real | O que tornaria isso real |  |
| `hospital_s2` | Why the hospital, not just the phone | Por que o hospital, e não só o telefone |  |
| `hospital_s3` | Reference topology | Topologia de referência |  |
| `hospital_s4` | Roles and access | Funções e acessos |  |
| `hospital_s5` | Coordinator console | Console do coordenador |  |
| `hospital_s6` | Clinician review workflow | Fluxo de revisão do profissional de saúde |  |
| `hospital_s7` | Closed-loop medication | Medicação em ciclo fechado |  |
| `hospital_s8` | Integration contract | Contrato de integração |  |
| `hospital_s9` | Identity and data flow | Identidade e fluxo de dados |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Mantenha um registro por cerca de uma semana. Padrões precisam de pelo menos quatro dias pareados antes de aparecer. |  |
| `insightsTitle` | What your own numbers say | O que seus próprios números dizem |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Idioma |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | A mesma estrutura de registro, a mesma biblioteca de alimentos e as mesmas regras da versão Android, funcionando inteiramente nesta página. Não é para registros clínicos reais. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Este é o padrão completo seguido pelo projeto, de um instrumento de medição no telefone a um ciclo fechado supervisionado por um profissional de saúde. Cada função está marcada como Entregue, Demonstração ou Roteiro, com uma condição prévia indicada. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Um registro no telefone só fecha um ciclo quando uma clínica pode agir com base nele. Esta página é uma arquitetura de referência para essa camada hospitalar. É um projeto conceitual: nada está implantado e nenhum hospital é citado como parceiro. |  |
| `legendComplete` | Complete | Completo |  |
| `legend_read` | How to read this map | Como ler este mapa |  |
| `loadSample` | Load 14-day sample | Carregar exemplo de 14 dias |  |
| `mealBreakfast` | Breakfast | Café da manhã |  |
| `medsLabel` | Daily medicines (name and dose) | Medicamentos diários (nome e dose) |  |
| `medsTitle` | Medicines | Medicamentos |  |
| `nav_blueprint` | Blueprint | Projeto |  |
| `nav_clinician` | For clinicians | Para profissionais de saúde |  |
| `nav_demo` | Demo | Demonstração |  |
| `nav_functions` | Functions | Funções |  |
| `nav_hospital` | Hospital | Hospital |  |
| `nav_loop` | The loop | O ciclo |  |
| `nav_security` | Security | Segurança |  |
| `nav_what` | What it does | O que faz |  |
| `noDataToast` | No days recorded yet — add a day first. | Nenhum dia registrado ainda — adicione um dia primeiro. |  |
| `noMatches` | No dish matches that. | Nenhum prato corresponde a isso. |  |
| `noMeds` | No medicines recorded in your profile. | Nenhum medicamento registrado no seu perfil. |  |
| `not_map` | What this map is not | O que este mapa não é |  |
| `note` | Anything else? (optional) | Mais alguma coisa? (opcional) |  |
| `nothingLogged` | No record for this day. | Nenhum registro para este dia. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Armazenado apenas neste navegador. Sem conta, sem envio. |  |
| `planAccept` | Accept | Aceitar |  |
| `planAccepted` | Marked accepted in this demo. | Marcado como aceito nesta demonstração. |  |
| `planAcceptedState` | accepted | aceito |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Os valores de alimentação são estimativas de porções caseiras apresentadas como faixas, não medições pesadas. Os rascunhos de padrões vêm de alguns dias pareados de uma única pessoa — são pontos de discussão para um profissional de saúde, não conclusões. |  |
| `planConfidenceTitle` | How sure is this? | Quanto isso é confiável? |  |
| `planDecision` | Demo decision | Decisão da demonstração |  |
| `planDraftLabel` | Draft for review | Rascunho para revisão |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | A edição acontece com o profissional de saúde na reunião de revisão; esta demonstração registra apenas a decisão. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Registre cerca de uma semana de alimentação e medições primeiro. Um rascunho precisa de pelo menos quatro dias pareados. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Um rascunho para um nutricionista revisar, feito apenas com os seus dias registrados. Ilustrativo — não é um conselho. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Baixa confiança — apenas alguns dias pareados. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Apenas ilustrativo. Não é conselho nem diagnóstico. Não mude sua alimentação nem seus medicamentos por causa deste rascunho — um profissional de saúde qualificado decide. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Feito com {n} dias que têm comida e uma medição. |  |
| `planTitle` | Weekly plan draft | Rascunho de plano semanal |  |
| `planTypePortion` | Portion | Porção |  |
| `prevDay` | Previous day | Dia anterior |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Na janela de impressão, escolha “Salvar como PDF” para um resumo de uma página. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} dias completos · {logged} dias registrados |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} dias completos · {logged} dia registrado |  |
| `progressTitle` | Progress | Progresso |  |
| `recentDays` | Recent days | Dias recentes |  |
| `removedToast` | Removed. | Removido. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Vê o pacote de revisão dos participantes designados, com sinais e itens de rascunho ligados aos dias de origem. |  |
| `roleCoordinator` | Coordinator | Coordenador |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Vê a completude da coorte, a fila de revisão e o registro de auditoria. Não pode alterar prescrições. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Vê a fila de divergências de medicamentos e os pontos prescrito → dispensado → tomado. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | A regra em todas as linhas: o software lê primeiro, uma pessoa decide. |  |
| `sampleTitle` | Sample data | Dados de exemplo |  |
| `saveToday` | Save today’s record | Salvar o registro de hoje |  |
| `savedToast` | Saved in this browser. | Salvo neste navegador. |  |
| `settingsTitle` | Settings | Configurações |  |
| `skip` | Skip to demo | Pular para a demonstração |  |
| `skip_content` | Skip to content | Pular para o conteúdo |  |
| `start` | Start recording | Começar a registrar |  |
| `status` | Status | Situação |  |
| `status_demo` | Demo | Demonstração |  |
| `status_roadmap` | Roadmap | Roteiro |  |
| `status_shipped` | Shipped | Entregue |  |
| `stepProfile` | 1 · Who | 1 · Quem |  |
| `tabToday` | Today | Hoje |  |
| `taken` | Taken | Tomado |  |
| `thisWeek` | this week | esta semana |  |
| `title_404` | Page not found — Khai Tracker | Página não encontrada — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Projeto de transformação digital — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — demonstração no navegador |  |
| `title_functions` | Function map — Khai Tracker | Mapa de funções — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Projeto de implantação hospitalar — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — seu dia, medido |  |
| `title_privacy` | Privacy — Khai Tracker | Privacidade — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Segurança — Khai Tracker |  |
| `vitalsTitle` | Readings | Medições |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Um registro diário de alimentação e saúde, para que você e seu profissional de saúde vejam o que acontece de verdade entre as consultas. Ele faz um registro. Ele não dá conselhos de tratamento. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Bem-vindo ao Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Como foi o dia? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Portuguese (pt)
Reviewer is a native speaker: yes / no
Relevant competence (linguistic / clinical / consent): ______________
Date (YYYY-MM-DD): ____________________________

App strings checked:      yes / no
Site strings checked:     yes / no
Consent wording checked:  yes / no
Disclaimer + no-affiliation sentence checked: yes / no
Placeholders, units and dish names checked:   yes / no

Decision: APPROVED FOR REAL USE / NOT APPROVED
Reviewer signature: ___________________________
```

Approval must be recorded in the release ticket before this locale is listed as reviewed. Until then the picker keeps its draft notice.
