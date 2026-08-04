/* iCARE site translations + language switcher.
   Shared by every page. Add data-i18n="key" (text), data-i18n-html="key" (rich text),
   or data-i18n-ph="key" (input placeholder) to elements you want translated.
   Dog listings are intentionally NOT translated — they stay in their original language. */
(function () {
  var DICT = {
  "en": {
    "nav.dogs": "Meet all dogs",
    "nav.how": "How we work",
    "nav.getinvolved": "Get involved",
    "nav.faq": "FAQ",
    "nav.contact": "Contact Us",
    "nav.menu": "Menu",
    "gi.hero.eyebrow": "Get involved",
    "gi.hero.title": "More than one way to help",
    "gi.hero.intro": "Whether you're catching a flight or opening your home for a little while, there's a way you can help a rescue dog reach safety and a family of their own.",
    "gi.flight.title": "✈️ Flight volunteers",
    "gi.flight.intro": "Already flying from mainland China to Europe or North America? You could be the reason a rescue dog reaches their new family. It costs you nothing — we take care of everything.",
    "gi.flight.s1": "<b>You book your own trip.</b> If you're flying from mainland China to Europe or North America on a pet-friendly airline, tell us ideally 1–2 months ahead so we have time to prepare the dog's paperwork.",
    "gi.flight.s2": "<b>We handle everything else.</b> We book the dog's place under your name and cover every cost and document. A team member meets you at the airport about 3 hours before departure with the dog and its papers, and helps with check-in.",
    "gi.flight.s3": "<b>Most dogs fly in the hold.</b> They travel safely in a climate-controlled crate with the luggage — no contact needed, and it doesn't affect your own baggage allowance. Only a few small dogs ride in the cabin; if that ever comes up we'll ask you first, and we prefer escorts who are comfortable with dogs.",
    "gi.flight.s4": "<b>On arrival.</b> You collect the dog near the oversized-baggage area and show its documents at customs (we cover any cart or tip). We add you to a group chat before you fly, and a volunteer or the adopter meets you and the dog in the arrivals hall.",
    "gi.flight.note": "<b>Which flights work:</b> pet-friendly airlines such as Korean Air, Asiana, ANA, Air Canada, Lufthansa, KLM, and Air France, with baggage through-checked. Flights via Hong Kong don't work. We fly most often to <b>Europe</b> (Germany, France, the Netherlands, Poland) and <b>Canada</b>. The <b>US is possible but much rarer and costlier</b>: under US rules introduced in August 2024, a dog arriving from China must clear a CDC-registered animal facility on arrival, including rabies-antibody testing — and a 28-day quarantine if that testing isn't completed in time. Please ask us before counting on a US placement.",
    "gi.f.name": "Your name",
    "gi.f.email": "Email",
    "gi.f.phone": "Phone / WhatsApp",
    "gi.f.from": "Flying from (city)",
    "gi.f.to": "Flying to",
    "gi.f.dates": "Travel date(s) — ideally 1–2 months ahead",
    "gi.f.dates.ph": "e.g. mid-October",
    "gi.f.airline": "Airline (optional)",
    "gi.f.cabin": "Open to a small dog in the cabin with you?",
    "gi.f.exp": "Have you had dogs before?",
    "gi.f.confirm": "I'm 18 or older and could arrive about 3 hours early to help with the hand-over.",
    "gi.f.else": "Anything else (optional)",
    "gi.f.submitFlight": "Offer to help fly a dog",
    "gi.trans.title": "🏡 Transition families",
    "gi.trans.intro": "Not every rescue animal goes straight to their forever home. Sometimes their family needs a little more time, or a dog or cat just needs somewhere calm to land after a long journey. Transition families open their homes for a few days or weeks so an animal has a safe, loving place to stay in between. We cover their food and any vet care while they're with you.",
    "gi.tf.city": "City / country",
    "gi.tf.host": "Could you host a…",
    "gi.tf.kids": "Anyone under 12 at home?",
    "gi.tf.avail": "When could you start, and for how long?",
    "gi.tf.home": "Do you rent or own? If renting, are pets allowed?",
    "gi.tf.pets": "Other pets at home? (type — and are they vaccinated & neutered?)",
    "gi.tf.about": "A little about your home & any animal experience",
    "gi.f.submitTrans": "Offer to be a transition family",
    "gi.thanks": "💚 Thank you! We've got your details and will be in touch soon."
  },
  "de": {
    "nav.dogs": "Unsere Hunde",
    "nav.how": "So arbeiten wir",
    "nav.getinvolved": "Mitmachen",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.menu": "Menü",
    "gi.hero.eyebrow": "Mitmachen",
    "gi.hero.title": "Viele Wege, zu helfen",
    "gi.hero.intro": "Ob auf einem Flug oder mit einem vorübergehenden Zuhause – Sie können einem geretteten Hund helfen, in Sicherheit und in eine eigene Familie zu finden.",
    "gi.flight.title": "✈️ Flugpaten",
    "gi.flight.intro": "Sie fliegen demnächst vom chinesischen Festland nach Europa oder Nordamerika? Dann könnten Sie einem geretteten Hund den Weg zu seiner neuen Familie ebnen. Für Sie kostenlos – den Rest übernehmen wir.",
    "gi.flight.s1": "<b>Sie buchen ganz normal Ihre Reise.</b> Fliegen Sie mit einer tierfreundlichen Airline vom chinesischen Festland nach Europa oder Nordamerika, sagen Sie uns am besten 1–2 Monate vorher Bescheid – dann haben wir Zeit, die Papiere des Hundes vorzubereiten.",
    "gi.flight.s2": "<b>Um den Rest kümmern wir uns.</b> Wir buchen den Platz des Hundes auf Ihren Namen und übernehmen alle Kosten und Dokumente. Rund 3 Stunden vor Abflug bringt Ihnen jemand aus unserem Team den Hund samt Papieren an den Flughafen und hilft beim Check-in.",
    "gi.flight.s3": "<b>Die meisten Hunde reisen im Frachtraum.</b> Sicher verstaut in einer klimatisierten Box, zusammen mit dem Gepäck – Sie müssen sich um nichts kümmern, und Ihr Gepäck bleibt davon unberührt. Nur wenige kleine Hunde dürfen in die Kabine; sollte das der Fall sein, fragen wir Sie vorher – am liebsten sind uns Begleiter, die sich mit Hunden auskennen.",
    "gi.flight.s4": "<b>Bei der Ankunft.</b> Sie holen den Hund beim Sperrgepäck ab und zeigen am Zoll seine Papiere (Gepäckwagen oder Trinkgeld gehen auf uns). Schon vor dem Flug holen wir Sie in einen Gruppenchat, und in der Ankunftshalle wartet jemand von uns oder die neue Familie auf Sie und den Hund.",
    "gi.flight.note": "<b>Passende Flüge:</b> tierfreundliche Airlines wie Korean Air, Asiana, ANA, Air Canada, Lufthansa, KLM oder Air France, mit durchgehend aufgegebenem Gepäck. Über Hongkong geht es leider nicht. Am häufigsten fliegen wir nach <b>Europa</b> (Deutschland, Frankreich, Niederlande, Polen) und <b>Kanada</b>. In die <b>USA ist es möglich, aber selten und teuer</b>: Seit August 2024 muss jeder Hund aus China dort erst durch eine CDC-registrierte Einrichtung – mit Tollwut-Antikörpertest und, falls der nicht rechtzeitig vorliegt, 28 Tagen Quarantäne. Fragen Sie uns lieber vorher, ob eine Vermittlung in die USA klappt.",
    "gi.f.name": "Ihr Name",
    "gi.f.email": "E-Mail",
    "gi.f.phone": "Telefon / WhatsApp",
    "gi.f.from": "Abflugort (Stadt)",
    "gi.f.to": "Reiseziel",
    "gi.f.dates": "Reisedatum – am besten 1–2 Monate im Voraus",
    "gi.f.dates.ph": "z. B. Mitte Oktober",
    "gi.f.airline": "Airline (optional)",
    "gi.f.cabin": "Wäre ein kleiner Hund in der Kabine für Sie okay?",
    "gi.f.exp": "Hatten Sie schon mal einen Hund?",
    "gi.f.confirm": "Ich bin mindestens 18 und könnte rund 3 Stunden früher am Flughafen sein, um bei der Übergabe zu helfen.",
    "gi.f.else": "Sonst noch etwas? (optional)",
    "gi.f.submitFlight": "Ich möchte einen Hund begleiten",
    "gi.trans.title": "🏡 Übergangsfamilien",
    "gi.trans.intro": "Nicht jedes gerettete Tier zieht sofort in sein endgültiges Zuhause. Manchmal braucht die neue Familie noch etwas Zeit, oder ein Hund oder eine Katze muss nach der langen Reise erst einmal zur Ruhe kommen. Übergangsfamilien nehmen ein Tier für ein paar Tage oder Wochen bei sich auf, damit es in der Zwischenzeit sicher und geborgen ist. Futter und Tierarztkosten übernehmen wir, solange es bei Ihnen wohnt.",
    "gi.tf.city": "Stadt / Land",
    "gi.tf.host": "Ich könnte aufnehmen…",
    "gi.tf.kids": "Kinder unter 12 im Haushalt?",
    "gi.tf.avail": "Ab wann und wie lange könnten Sie aufnehmen?",
    "gi.tf.home": "Zur Miete oder Eigentum? Bei Miete: sind Tiere erlaubt?",
    "gi.tf.pets": "Weitere Tiere im Haushalt? (welche – und geimpft & kastriert?)",
    "gi.tf.about": "Erzählen Sie kurz von Ihrem Zuhause und Ihrer Erfahrung mit Tieren",
    "gi.f.submitTrans": "Ich möchte Übergangsfamilie werden",
    "gi.thanks": "💚 Vielen Dank! Ihre Angaben sind bei uns – wir melden uns bald."
  },
  "fr": {
    "nav.dogs": "Nos chiens",
    "nav.how": "Comment ça marche",
    "nav.getinvolved": "Nous aider",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "gi.hero.eyebrow": "Nous aider",
    "gi.hero.title": "Plusieurs façons d'aider",
    "gi.hero.intro": "Un vol que vous prenez, un canapé que vous prêtez quelques semaines… il y a mille façons d'aider un chien à rejoindre la sécurité et une famille bien à lui.",
    "gi.flight.title": "✈️ Bénévoles convoyeurs",
    "gi.flight.intro": "Vous partez bientôt de Chine continentale vers l'Europe ou l'Amérique du Nord ? Vous pourriez être celui ou celle qui ramène un chien vers sa nouvelle famille. Ça ne vous coûte rien – on s'occupe de tout.",
    "gi.flight.s1": "<b>Vous réservez votre voyage comme d'habitude.</b> Si vous volez de Chine continentale vers l'Europe ou l'Amérique du Nord avec une compagnie qui accepte les animaux, prévenez-nous idéalement 1 à 2 mois à l'avance, le temps de préparer les papiers du chien.",
    "gi.flight.s2": "<b>On s'occupe du reste.</b> On réserve la place du chien à votre nom et on prend en charge tous les frais et documents. Environ 3 heures avant le départ, quelqu'un de l'équipe vous rejoint à l'aéroport avec le chien et ses papiers, et vous aide à l'enregistrement.",
    "gi.flight.s3": "<b>La plupart des chiens voyagent en soute.</b> Bien installés dans une caisse à température contrôlée, avec les bagages : vous n'avez rien à gérer, et ça n'entame pas votre franchise bagages. Seuls quelques petits chiens voyagent en cabine ; le cas échéant, on vous demande d'abord, et on préfère confier ça à quelqu'un à l'aise avec les chiens.",
    "gi.flight.s4": "<b>À l'arrivée.</b> Vous récupérez le chien du côté des bagages hors format et montrez ses papiers à la douane (chariot ou pourboire, c'est pour nous). Avant le vol, on vous ajoute à un groupe de discussion, et dans le hall d'arrivée, un bénévole ou la nouvelle famille vous attend, vous et le chien.",
    "gi.flight.note": "<b>Les vols qui marchent :</b> des compagnies qui acceptent les animaux comme Korean Air, Asiana, ANA, Air Canada, Lufthansa, KLM ou Air France, avec bagages enregistrés jusqu'au bout. Les vols via Hong Kong, ça ne marche pas. On vole surtout vers l'<b>Europe</b> (Allemagne, France, Pays-Bas, Pologne) et le <b>Canada</b>. Les <b>États-Unis, c'est possible mais rare et coûteux</b> : depuis août 2024, un chien venu de Chine doit passer par un centre agréé par la CDC à l'arrivée, avec test des anticorps antirabiques – et 28 jours de quarantaine si ce test n'est pas prêt à temps. Demandez-nous avant de miser sur une adoption aux États-Unis.",
    "gi.f.name": "Votre nom",
    "gi.f.email": "E-mail",
    "gi.f.phone": "Téléphone / WhatsApp",
    "gi.f.from": "Ville de départ",
    "gi.f.to": "Destination",
    "gi.f.dates": "Dates de voyage – idéalement 1 à 2 mois à l'avance",
    "gi.f.dates.ph": "ex. mi-octobre",
    "gi.f.airline": "Compagnie (facultatif)",
    "gi.f.cabin": "Un petit chien en cabine avec vous, ça vous irait ?",
    "gi.f.exp": "Avez-vous déjà eu un chien ?",
    "gi.f.confirm": "J'ai 18 ans ou plus et je peux arriver environ 3 heures à l'avance pour aider à la remise.",
    "gi.f.else": "Autre chose ? (facultatif)",
    "gi.f.submitFlight": "Je veux accompagner un chien",
    "gi.trans.title": "🏡 Familles d'accueil",
    "gi.trans.intro": "Tous les animaux sauvés ne filent pas droit vers leur foyer définitif. Parfois la famille a besoin d'un peu plus de temps, ou un chien ou un chat a juste besoin d'un endroit calme où souffler après un long voyage. Les familles d'accueil ouvrent leur porte quelques jours ou quelques semaines, le temps qu'un animal soit au chaud et en sécurité. Sa nourriture et ses frais vétérinaires, c'est pour nous, tant qu'il est chez vous.",
    "gi.tf.city": "Ville / pays",
    "gi.tf.host": "Je pourrais accueillir…",
    "gi.tf.kids": "Des enfants de moins de 12 ans à la maison ?",
    "gi.tf.avail": "À partir de quand, et pour combien de temps ?",
    "gi.tf.home": "Location ou propriété ? Si location, animaux autorisés ?",
    "gi.tf.pets": "D'autres animaux chez vous ? (lesquels – vaccinés et stérilisés ?)",
    "gi.tf.about": "Dites-nous un mot sur votre foyer et votre expérience avec les animaux",
    "gi.f.submitTrans": "Je veux être famille d'accueil",
    "gi.thanks": "💚 Merci ! On a bien reçu vos infos, on revient vers vous très vite."
  },
  "zh": {
    "nav.dogs": "狗狗们",
    "nav.how": "我们的做法",
    "nav.getinvolved": "参与进来",
    "nav.faq": "常见问题",
    "nav.contact": "联系我们",
    "nav.menu": "菜单",
    "gi.hero.eyebrow": "参与进来",
    "gi.hero.title": "帮忙的方式有很多",
    "gi.hero.intro": "也许是您即将出发的一趟航班，也许是您愿意腾出几周的一张沙发——帮一只狗狗抵达安全、拥有一个真正属于自己的家，其实有很多种方式。",
    "gi.flight.title": "✈️ 飞行志愿者",
    "gi.flight.intro": "最近要从中国大陆飞往欧洲或北美吗？也许您就能成为把一只狗狗送到新家的人。您一分钱都不用花——剩下的都交给我们。",
    "gi.flight.s1": "<b>您照常订自己的机票。</b>只要搭乘可以带宠物的航空公司，从中国大陆飞往欧洲或北美，最好提前 1–2 个月告诉我们，好留出时间帮狗狗办文件。",
    "gi.flight.s2": "<b>剩下的都交给我们。</b>我们会用您的名字帮狗狗订舱位，所有费用和文件也都由我们负责。起飞前大约 3 小时，我们的工作人员会带着狗狗和文件在机场跟您碰面，陪您一起办托运。",
    "gi.flight.s3": "<b>大多数狗狗都在货舱里。</b>它们和行李一起，安安稳稳地待在带空调的航空箱里——您不用照看，也不会占用您的行李额度。只有少数小型犬能进客舱；真遇到这种情况，我们会先问过您，也更希望交给熟悉狗狗的人。",
    "gi.flight.s4": "<b>到达之后。</b>您在超大件行李提取处附近领狗狗，向海关出示它的文件（手推车、小费都算我们的）。起飞前我们就会把您拉进一个群，志愿者或领养人会在到达大厅等着您和狗狗。",
    "gi.flight.note": "<b>哪些航班可以：</b>可以带宠物的航空公司，比如大韩、韩亚、全日空、加航、汉莎、荷航、法航，而且行李要直挂到底。经香港走不行。我们最常飞<b>欧洲</b>（德国、法国、荷兰、波兰）和<b>加拿大</b>。<b>美国也行，但少见而且贵</b>：从 2024 年 8 月起，从中国去的狗狗到了美国必须先进一家 CDC 登记的机构，做狂犬病抗体检测——要是没能及时出结果，还得隔离 28 天。想送去美国的话，先问问我们能不能安排。",
    "gi.f.name": "您的名字",
    "gi.f.email": "邮箱",
    "gi.f.phone": "电话 / WhatsApp",
    "gi.f.from": "出发城市",
    "gi.f.to": "飞往哪里",
    "gi.f.dates": "出行日期（最好提前 1–2 个月）",
    "gi.f.dates.ph": "例如：十月中旬",
    "gi.f.airline": "航空公司（选填）",
    "gi.f.cabin": "介意让一只小狗在客舱陪您一起飞吗？",
    "gi.f.exp": "您以前养过狗吗？",
    "gi.f.confirm": "我已满 18 岁，可以提前大约 3 小时到机场帮忙交接。",
    "gi.f.else": "还有什么想告诉我们的吗？（选填）",
    "gi.f.submitFlight": "我想帮忙带一只狗狗",
    "gi.trans.title": "🏡 过渡家庭",
    "gi.trans.intro": "不是每只狗狗到了之后都能马上住进永远的家。有时候是新家庭还需要一点时间，有时候是狗狗或猫咪刚下飞机，需要一个安静的地方缓一缓。过渡家庭会先收留它几天或几周，让它在这段日子里有个安稳、有人疼的落脚处。它在您家的这段时间，吃的和看病的钱都由我们来出。",
    "gi.tf.city": "城市 / 国家",
    "gi.tf.host": "我可以照顾…",
    "gi.tf.kids": "家里有 12 岁以下的孩子吗？",
    "gi.tf.avail": "您从什么时候开始、大概能照顾多久？",
    "gi.tf.home": "您是租房还是自己的房子？租房的话，能养宠物吗？",
    "gi.tf.pets": "家里还有别的动物吗？（是什么——打过疫苗、绝育了吗？）",
    "gi.tf.about": "简单说说您的家，还有您照顾动物的经验吧",
    "gi.f.submitTrans": "我想成为过渡家庭",
    "gi.thanks": "💚 谢谢您！信息我们收到了，很快会联系您。"
  }
};

  function t(lang, key) {
    return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || "";
  }
  function apply(lang) {
    if (!DICT[lang]) lang = "en";
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n")); if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-html")); if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-ph")); if (v) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("icare_lang", lang); } catch (e) {}
    window.__lang = lang;
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }
  function init() {
    var saved = "en";
    try { saved = localStorage.getItem("icare_lang") || "en"; } catch (e) {}
    if (!DICT[saved]) saved = "en";
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
    apply(saved);
  }
  window.setLang = apply;
  window.i18nT = function (key) { return t(window.__lang || "en", key); };
  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
