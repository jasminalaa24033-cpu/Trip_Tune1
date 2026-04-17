






// ================== اللغة ==================
let currentLang = "en"; // اللغة الحالية

// ================== الأسئلة ==================
const questions = {
  en: [
    "1. I like to plan my trip to Egypt in detail in advance",
    "2. I love meeting locals while traveling",
    "3. I enjoy adventures and new experiences while traveling",
    "4. I research the real history of landmarks before visiting them",
    "5. I prefer to have a clear daily itinerary for my visit",
    "6. I love sharing local food with others",
    "7. I love exploring places that are unknown to tourists",
    "8. I compare between tourism options before choosing the right trip.",
    "9. I feel happy when I exchange conversations with people from different cultures.",
    "10. I enjoy wandering in cities without a specific plan sometimes.",
    "11. I make sure to know the timings of tourist places accurately.",
    "12. I love reading the scientific or archaeological details of the sites I visit.",
    "13. I enjoy activities that allow interaction with the local community.",
    "14. I love trying activities different from traditional tourism programs.",
    "15. I prefer understanding the cultural background of the place before visiting.",
    "16. I feel comfortable when the trip is well organized.",
    "17. I love hearing stories from locals about their country.",
    "18. I feel excited to discover new cultures.",
    "19. I care about knowing the facts and figures related to tourist attractions.",
    "20. I stick to the plans I make for the trip.",
    "21. I prefer trips that allow meeting new people.",
    "22. I love trying new ideas while traveling.",
    "23. I love analyzing travelers' reviews before making a visit decision.",
    "24. I prefer to book hotels and trips in advance.",
    "25. I consider communication with people an important part of the travel experience.",
    "26. I look for unique experiences that don't repeat on every trip.",
    "27. I feel satisfied when I understand how historical landmarks were built.",
    "28. I like to know the details of transportation between places before arriving",
    "29. I enjoy sharing my travel experiences with others.",
    "30. I enjoy creative photography of the places I visit.",
    "31. I love visiting museums that provide clear scientific information.",
    "32. I enjoy preparing a list of places I will visit.",
    "33. I love visiting places that bring together people and different cultures.",
    "34. I prefer trips that give me freedom of experience and discovery.",
    "35. I prefer trips that include detailed cognitive explanation.",
    "36. I prefer having a clear time schedule while traveling.",
    "37. I make sure to respect the customs and culture of the country I visit.",
    "38. I love activities that include adventure or a different experience.",
    "39. I enjoy thinking about ancient civilizations and analyzing their history.",
    "40. I make sure to manage the trip budget carefully.",
    "41. I feel comfortable when I am part of a tourist group.",
    "42. I enjoy trying things I have never tried before.",
    "43. I love knowing the historical reasons that made a place famous.",
    "44. I like to know the local procedures and laws before traveling.",
    "45. I love making friends while traveling.",
    "46. I look for special stories and moments while traveling.",
    "47. I always search for reliable sources of tourism information.",
    "48. I prefer organized tourism programs over random trips.",
    "49. I enjoy helping others or sharing experiences with them during the trip.",
    "50. I love exploring popular markets and non-traditional places.",
    "51. I feel comfortable when the trip goes according to a clear plan.",
    "52. I believe that human relationships make the trip more valuable.",
    "53. I feel that travel is an opportunity to discover new ideas about the world.",
    "54. I prefer decisions based on clear information rather than impressions",
    "55. I like to wander in cities without a fixed plan occasionally",
    "56. I love trying activities that expand my perspective while traveling"
  ],
  ar: [
    "1. أحب التخطيط لرحلتي إلى مصر مسبقًا وبالتفصيل",
    "2. أحب التعرف على السكان المحليين أثناء السفر",
    "3. أستمتع بالمغامرات والتجارب الجديدة أثناء السفر",
    "4. أبحث عن التاريخ الحقيقي للمعالم قبل زيارتها",
    "5. أفضل أن يكون لدي جدول يومي واضح لرحلتي",
    "6. أحب مشاركة الطعام المحلي مع الآخرين",
    "7. أحب استكشاف الأماكن غير المعروفة للسياح",
    "8. أقارن بين الخيارات السياحية قبل اختيار الرحلة المناسبة",
    "9. أشعر بالسعادة عند تبادل الحديث مع أشخاص من ثقافات مختلفة",
    "10. أستمتع بالتجول في المدن بدون خطة محددة أحيانًا",
    "11. أتأكد من معرفة مواعيد الأماكن السياحية بدقة",
    "12. أحب قراءة التفاصيل العلمية أو الأثرية عن الأماكن التي أزورها",
    "13. أستمتع بالأنشطة التي تتيح التفاعل مع المجتمع المحلي",
    "14. أحب تجربة أنشطة مختلفة عن البرامج السياحية التقليدية",
    "15. أفضل فهم الخلفية الثقافية للمكان قبل زيارته",
    "16. أشعر بالراحة عندما تكون الرحلة منظمة جيدًا",
    "17. أحب سماع قصص السكان المحليين عن بلدهم",
    "18. أشعر بالحماس لاكتشاف ثقافات جديدة",
    "19. أهتم بمعرفة الحقائق والأرقام المتعلقة بالمعالم السياحية",
    "20. ألتزم بالخطط التي أضعها للرحلة",
    "21. أفضل الرحلات التي تتيح التعرف على أشخاص جدد",
    "22. أحب تجربة أفكار جديدة أثناء السفر",
    "23. أحب تحليل آراء المسافرين قبل اتخاذ قرار الزيارة",
    "24. أفضل حجز الفنادق والرحلات مسبقًا",
    "25. أعتبر التواصل مع الناس جزءًا مهمًا من تجربة السفر",
    "26. أبحث عن تجارب مميزة لا تتكرر في كل رحلة",
    "27. أشعر بالرضا عندما أفهم كيف تم بناء المعالم التاريخية",
    "28. أحب معرفة تفاصيل وسائل التنقل بين الأماكن قبل الوصول",
    "29. أستمتع بمشاركة تجاربي في السفر مع الآخرين",
    "30. أستمتع بالتصوير الإبداعي للأماكن التي أزورها",
    "31. أحب زيارة المتاحف التي تقدم معلومات علمية واضحة",
    "32. أستمتع بإعداد قائمة بالأماكن التي سأزورها",
    "33. أحب زيارة الأماكن التي تجمع بين الناس والثقافات المختلفة",
    "34. أفضل الرحلات التي تمنحني حرية التجربة والاكتشاف",
    "35. أفضل الرحلات التي تتضمن شرحًا معرفيًا تفصيليًا",
    "36. أفضل وجود جدول زمني واضح أثناء السفر",
    "37. أحرص على احترام عادات وتقاليد البلد الذي أزوره",
    "38. أحب الأنشطة التي تتضمن مغامرة أو تجربة مختلفة",
    "39. أستمتع بالتفكير في الحضارات القديمة وتحليل تاريخها",
    "40. أحرص على إدارة ميزانية الرحلة بعناية",
    "41. أشعر بالراحة عندما أكون جزءًا من مجموعة سياحية",
    "42. أستمتع بتجربة أشياء لم أجربها من قبل",
    "43. أحب معرفة الأسباب التاريخية التي جعلت المكان مشهورًا",
    "44. أحب معرفة القوانين والإجراءات المحلية قبل السفر",
    "45. أحب تكوين صداقات أثناء السفر",
    "46. أبحث عن القصص واللحظات المميزة أثناء السفر",
    "47. أبحث دائمًا عن مصادر موثوقة لمعلومات السياحة",
    "48. أفضل البرامج السياحية المنظمة على الرحلات العشوائية",
    "49. أستمتع بمساعدة الآخرين أو مشاركة التجارب معهم أثناء الرحلة",
    "50. أحب استكشاف الأسواق الشعبية والأماكن غير التقليدية",
    "51. أشعر بالراحة عندما تسير الرحلة وفق خطة واضحة",
    "52. أعتقد أن العلاقات الإنسانية تجعل الرحلة أكثر قيمة",
    "53. أشعر أن السفر فرصة لاكتشاف أفكار جديدة عن العالم",
    "54. أفضل اتخاذ القرارات بناءً على معلومات واضحة وليس الانطباعات",
    "55. أحب التجول في المدن بدون خطة ثابتة أحيانًا",
    "56. أحب تجربة أنشطة توسع من وجهة نظري أثناء السفر"
  ]
};

// ================== الاختيارات ==================
const optionsText = {
  en: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
  ar: ["موافق جدًا", "موافق", "محايد", "غير موافق", "غير موافق بشدة"]
};

// ================== الصفحات ==================
let currentPage = 0;
const questionsPerPage = 7;
const totalPages = Math.ceil(questions.en.length / questionsPerPage);

// ================== الإجابات ==================
let answers = new Array(totalPages).fill(null).map(() => []);

// ================== الأزرار ==================
const nextBtn = document.querySelector(".nav-buttons button:last-child");
const prevBtn = document.querySelector(".nav-buttons button:first-child");

// ================== تحميل الأسئلة ==================
function loadQuestions() {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  const start = currentPage * questionsPerPage;
  const end = start + questionsPerPage;

  const currentQuestions = questions[currentLang].slice(start, end);

  currentQuestions.forEach(q => {
    const questionHTML = `
      <div class="question">
        <p>${q}</p>
        <div class="options">
          ${optionsText[currentLang].map(opt => `<button>${opt}</button>`).join("")}
        </div>
      </div>
      <hr>
    `;
    container.innerHTML += questionHTML;
  });

  addEvents();
  restoreAnswers();
  updateNextButton();
  updateProgress();
}

// ================== استرجاع الإجابات ==================
function restoreAnswers() {
  const allOptions = document.querySelectorAll(".options");
  allOptions.forEach((optionBox, index) => {
    const saved = answers[currentPage][index];
    if (saved !== undefined) {
      const buttons = optionBox.querySelectorAll("button");
      buttons[saved].classList.add("active");
    }
  });
}

// ================== عد الإجابات ==================
function countPageAnswers() {
  let answered = 0;
  const allQuestions = document.querySelectorAll(".question");
  allQuestions.forEach(q => {
    if (q.querySelector(".active")) answered++;
  });
  return answered;
}

// ================== البروجريس ==================
function updateProgress() {
  const totalAnswered = answers.reduce((sum, page) => sum + page.length, 0);
  const percent = Math.round((totalAnswered / questions.en.length) * 100);

  document.getElementById("progress").style.width = percent + "%";
  document.getElementById("percentage").textContent = percent + "%";

  document.getElementById("progressText").textContent =
    currentLang === "en"
      ? `You answered ${totalAnswered} of ${questions.en.length} questions`
      : `أجبت على ${totalAnswered} من ${questions.ar.length} سؤال`;
}

// ================== زر Next ==================
function updateNextButton() {
  nextBtn.disabled = countPageAnswers() < questionsPerPage;
  if (currentPage === totalPages - 1) nextBtn.disabled = false;
}

// ================== الأحداث ==================
function addEvents() {
  const allOptions = document.querySelectorAll(".options");
  allOptions.forEach((optionBox, index) => {
    const buttons = optionBox.querySelectorAll("button");
    buttons.forEach((btn, btnIndex) => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        answers[currentPage][index] = btnIndex;

        updateNextButton();
        updateProgress();
      });
    });
  });
}

// ================== Next ==================
nextBtn.addEventListener("click", () => {
  if (currentPage === totalPages - 1) {
    window.location.href = "results.html";
    return;
  }

  currentPage++;
  loadQuestions();

  prevBtn.disabled = false;
  nextBtn.textContent = currentLang === "en" ? "Next" : "التالي";
});

// ================== Previous ==================
prevBtn.addEventListener("click", () => {
  currentPage--;
  loadQuestions();
  nextBtn.disabled = false;
  if (currentPage === 0) prevBtn.disabled = true;
});

// ================== زر اللغة 🌐 ==================
const langBtn = document.getElementById("langBtn");
langBtn.addEventListener("click", () => {
  if (currentLang === "en") {
    currentLang = "ar";
    document.body.dir = "rtl";
    langBtn.innerHTML = `<i class="bi bi-globe"></i> A`;
  } else {
    currentLang = "en";
    document.body.dir = "ltr";
    langBtn.innerHTML = `<i class="bi bi-globe"></i> ع`;
  }
  loadQuestions();
});

// ================== بداية ==================
loadQuestions();
prevBtn.disabled = true;
//dark mood

let darkBtn=document.getElementById('moon') 
darkBtn.addEventListener('click',(e)=>{

     document.body.classList.toggle('dark') 
     setItem() }) 
     
     function setItem(){ 
        if(document.body.classList.contains('dark')){ localStorage.setItem('theme','dark') 
            darkBtn.classList.remove('bi-moon') 
            darkBtn.classList.add('bi-sun') } 
        else{ localStorage.setItem('theme','light') 
            darkBtn.classList.remove('bi-sun') 
            darkBtn.classList.add('bi-moon') } } 
            
        function get(){ 
            if(localStorage.getItem('theme')==='dark'){ 
                document.body.classList.add('dark') 
                darkBtn.classList.remove('bi-moon') 
                darkBtn.classList.add('bi-sun') } } 
get()