/* ---------------- DATA (10 Recipes) ---------------- */
const RECIPES = [
  {
    title: "Chocolate Cake",
    img: "https://i0.wp.com/www.bakingbond.co.in/wp-content/uploads/2023/04/Chocolate_Cake_05.jpg?fit=520%2C520&ssl=1",
    video: "https://www.youtube.com/embed/qtlhdIfojmc",
    prep: 20, cook: 35, serves: 8,
    ingredients: ["2 cups flour","1½ cups sugar","½ cup cocoa powder","2 tsp baking powder","2 eggs","1 cup milk","½ cup oil","1 tsp vanilla"],
    steps: ["Heat oven to 180°C.","Whisk dry ingredients.","Whisk eggs, milk, oil, vanilla.","Combine wet + dry; pour in pan.","Bake 30–35 mins; cool & frost."]
  },
  {
    title: "Paneer Butter Masala",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
    video: "https://www.youtube.com/embed/oYZ--rdHL6I",
    prep: 15, cook: 20, serves: 3,
    ingredients: ["200g paneer cubes","2 tbsp butter","1 cup tomato puree","½ cup cream","1 tsp garam masala","Kasuri methi","Salt"],
    steps: ["Sauté puree with spices.","Simmer till thick.","Stir in cream.","Add paneer; cook 3–4 mins.","Garnish & serve."]
  },
  {
    title: "White Sauce Pasta",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    video: "https://www.youtube.com/embed/1-SJGQ2HLp8",
    prep: 10, cook: 15, serves: 2,
    ingredients: ["200g pasta","2 tbsp butter","2 tbsp flour","1½ cup milk","½ cup cheese","Salt & pepper"],
    steps: ["Boil pasta al dente.","Make roux (butter+flour).","Whisk in milk; thicken.","Add cheese & season.","Combine pasta; serve."]
  },
  {
    title: "Veggie Pizza",
    img: "	https://www.thecountrycook.net/wp-content/uploads/2021/03/Veggie-Pizza.jpg",
    video: "https://www.youtube.com/embed/TBrz3chSss0?si=wvEyMZDSpYQ77PO2",
    prep: 20, cook: 15, serves: 2,
    ingredients: ["Pizza base","Tomato sauce","Mozzarella","Bell peppers","Onion","Olives"],
    steps: ["Spread sauce.","Add veggies & cheese.","Bake at 220°C 12–15 mins.","Slice & enjoy."]
  },
  {
    title: "Cold Coffee",
    img: "https://i.ytimg.com/vi/iRr7jADrwws/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAupWv0SIF6DOvVdHh5NMn2V87Hvg",
    video: "https://www.youtube.com/embed/iRr7jADrwws?si=Wq-Fgg1AquoRHNy9",
    prep: 5, cook: 0, serves: 2,
    ingredients: ["1½ cup milk","2 tbsp instant coffee","2 tbsp sugar","Ice cubes","Chocolate syrup (opt)"],
    steps: ["Blend milk+sugar+coffee.","Add ice; blend again.","Serve chilled."]
  },
  {
    title: "Mango Shake",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg",
    video: "https://www.youtube.com/embed/5uXAbI1WmbQ?si=PpGR8gwRiVVGbgxQ",
    prep: 5, cook: 0, serves: 2,
    ingredients: ["Ripe mangoes","Chilled milk","Sugar or honey","Ice (opt)","Cardamom (opt)"],
    steps: ["Blend mango + milk + sugar.","Adjust sweetness.","Serve cold."]
  },
  {
    title: "Veg Sandwich",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80",
    video: "https://www.youtube.com/embed/sOGKyqn7ePY",
    prep: 10, cook: 5, serves: 2,
    ingredients: ["Bread slices","Butter","Cucumber","Tomato","Onion","Salt & pepper"],
    steps: ["Butter slices.","Layer veggies & season.","Toast/grill if desired."]
  },
  {
    title: "Chicken Biryani",
    img: "https://www.ruchifoodline.com/recipes//cdn/recipes/chicken-biryani.jpg",
    video: "https://www.youtube.com/embed/oCE5o9VxlXU?si=gagTjkmsl0pZhTeHk",
    prep: 25, cook: 40, serves: 4,
    ingredients: ["Basmati rice","Chicken","Yogurt","Biryani masala","Onion","Mint","Saffron"],
    steps: ["Parboil rice.","Cook chicken masala.","Layer rice+chicken.","Dum 15–20 mins; serve."]
  },
  {
    title: "Idli Sambar",
    img: "https://www.foodiaq.com/wp-content/uploads/2025/03/Idli-sambar.jpg",
    video: "https://www.youtube.com/embed/_QLLo1b5Zcw?si=Gjv3rwS_r4ceFwMY",
    prep: 10, cook: 25, serves: 3,
    ingredients: ["Idli batter","Toor dal","Tamarind","Sambar powder","Veggies","Mustard seeds"],
    steps: ["Steam idlis.","Cook dal & veggies.","Add tamarind & spice; simmer.","Serve hot."]
  },
  {
    title: "Fudgy Brownies",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5wVhGi0X4_1IVMSJ5FBPSvE6OGbeq0Duhg&s",
    video: "https://www.youtube.com/embed/X9hKRIQ3uxc?si=9IBvQ84qjX6f3TQs",
    prep: 15, cook: 25, serves: 9,
    ingredients: ["Butter","Sugar","Cocoa","Eggs","Flour","Chocolate chunks","Salt"],
    steps: ["Melt butter + cocoa.","Whisk sugar & eggs.","Fold flour + chocolate.","Bake 20–25 mins."]
  }
];

/* ---------------- STATE ---------------- */
let idx = 0;
let timerId = null;
let remaining = 0; // seconds
const hero = document.getElementById('hero');
const app  = document.getElementById('app');

/* ---------------- HELPERS ---------------- */
const $ = sel => document.querySelector(sel);
const imgEl = $('#img'), titleEl = $('#title'), metaEl = $('#meta');
const ingEl = $('#ingredients'), stepsEl = $('#steps'), vidEl = $('#video');
const barEl = $('#bar'), picker = $('#picker'), indexLabel = $('#indexLabel');
const clockEl = $('#clock'), startBtn = $('#startTimer'), pauseBtn = $('#pauseTimer'), resetBtn = $('#resetTimer');

function mmss(secs){
  const m = String(Math.floor(secs/60)).padStart(2,'0');
  const s = String(secs%60).padStart(2,'0');
  return `${m}:${s}`;
}

function setProgress(){
  barEl.style.width = `${((idx+1)/RECIPES.length)*100}%`;
  indexLabel.textContent = `${idx+1} / ${RECIPES.length}`;
}

/* ---------------- RENDER ---------------- */
function render(i){
  const r = RECIPES[i];
  titleEl.textContent = r.title;
  imgEl.src = r.img;
  imgEl.alt = r.title;
  metaEl.textContent = `Prep: ${r.prep} mins | Cook: ${r.cook} mins | Serves: ${r.serves}`;
  ingEl.innerHTML = r.ingredients.map(x=>`<li>${x}</li>`).join('');
  stepsEl.innerHTML = r.steps.map(x=>`<li>${x}</li>`).join('');
  vidEl.src = r.video;
  // timer defaults to cook time
  remaining = r.cook * 60;
  clockEl.textContent = mmss(remaining);
  clearInterval(timerId); timerId=null;
  startBtn.disabled = false; pauseBtn.disabled = true; resetBtn.disabled = false;
  picker.value = String(i);
  setProgress();
}

/* ---------------- TIMER ---------------- */
function startTimer(){
  if(timerId) return;
  startBtn.disabled = true; pauseBtn.disabled = false;
  timerId = setInterval(()=>{
    remaining--;
    clockEl.textContent = mmss(Math.max(remaining,0));
    if(remaining<=0){
      clearInterval(timerId); timerId=null;
      clockEl.textContent = "00:00";
      alert("⏱️ Time's up! Check your recipe.");
      startBtn.disabled = false; pauseBtn.disabled = true;
    }
  },1000);
}
function pauseTimer(){
  if(!timerId) return;
  clearInterval(timerId); timerId=null;
  startBtn.disabled = false; pauseBtn.disabled = true;
}
function resetTimer(){
  clearInterval(timerId); timerId=null;
  remaining = RECIPES[idx].cook * 60;
  clockEl.textContent = mmss(remaining);
  startBtn.disabled = false; pauseBtn.disabled = true;
}

/* ---------------- NAV ---------------- */
function goNext(){ idx = (idx+1)%RECIPES.length; render(idx); window.scrollTo({top:0,behavior:'smooth'}) }
function goPrev(){ idx = (idx-1+RECIPES.length)%RECIPES.length; render(idx); window.scrollTo({top:0,behavior:'smooth'}) }

/* ---------------- INIT ---------------- */
document.getElementById('start').addEventListener('click', ()=>{
  hero.classList.add('fade-out');
  setTimeout(()=>{ hero.style.display='none'; app.style.display='block'; }, 550);
  // build picker
  picker.innerHTML = RECIPES.map((r,i)=>`<option value="${i}">${r.title}</option>`).join('');
  render(idx);
});
picker.addEventListener('change', e=>{ idx = +e.target.value; render(idx); });

document.getElementById('next').addEventListener('click', goNext);
document.getElementById('prev').addEventListener('click', goPrev);
document.getElementById('next2').addEventListener('click', goNext);
document.getElementById('prev2').addEventListener('click', goPrev);

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
