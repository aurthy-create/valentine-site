// ===== Calendar Data =====
const messages = {
  1: { 
      text: "click on today's date", 
      image: "card.png" 
  },
  2: { 
      text: "click on today's date", 
      image: "card.png" 
  },
  3: { 
      text: "click on today's date", 
      image: "card.png" 
  },
  4: { 
      text: "click on today's date", 
      image: "card.png" 
  },
  5: { 
      text: "click on today's date", 
      image: "card.png" 
  },
   6: { 
      text: "click on today's date", 
      image: "card.png" 
  },
  7: { 
      text: "Happy Rose Day baby. I wish I could get you real roses right now. Hopefully soon.", 
      image: "rose.png" 
  },
  8: { 
      text: "Happy Propose Day baby! not even going to ask you to be my valentine, you are mine, forever mine. Hehe", 
      image: "propose.png" 
  },
  9: { 
      text: "Happy Chocolate Day baby. Wish I could share chocolates with you right now!", 
      image: "chocolate.png" 
  },
  10:{ 
      text: "Happy Teddy Day! You are my teddy.", 
      image: "teddy.png" 
  },
  11:{ 
      text: "Happy Promise Day! I pinky promise to always be there for you.", 
      image: "promise.png" 
  },
  12:{ 
      text: "Happy Hug Day! You keep me warm by giving me big hug.", 
      image: "hug.png" 
  },
  13:{ 
      text: "Happy Kiss Day! I want to give you sooooooo many kissys", 
      image: "kiss.png" 
  },
  14:{ 
      text: "Happy Valentine’s Day! You make every day special. I want to hold your hand forever", 
      image: "vday.png" 
  },
  15:{ 
      text: "Valentine’s Day maybe over but my love for is going stay forever", 
      image: "infinity.png" 
  },
  16:{ 
      text: "you are greatest gift", 
      image: "present.png" 
  },
  17:{ 
      text: "this is how i see you", 
      image: "kittyeep.png" 
  },
};

// ===== Create Calendar =====
const calendar = document.getElementById("calendar");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // 0=Jan, 1=Feb
const isFebruary = currentMonth === 1; // Only enable Feb days

for(let day=1; day<=28; day++){
  const div = document.createElement("div");
  div.classList.add("calendar-day");
  div.textContent = day;
  div.dataset.day = day;

  // Highlight today
  if(isFebruary && day === currentDay) div.classList.add("today");

  // Grey out future days
  if(isFebruary && day > currentDay){
    div.classList.add("future");
  }

  calendar.appendChild(div);
}
// ===== Handle day clicks =====
document.querySelectorAll(".calendar-day").forEach(dayDiv => {
  dayDiv.addEventListener("click", () => {
    const day = parseInt(dayDiv.dataset.day);
    // Only allow today/past in February
    if(isFebruary && day <= currentDay){
      envelopeModal.classList.remove("hidden");
      envelope.dataset.day = day;
    }
  });
});
//floating hearts
const heartsContainer = document.getElementById("hearts-container");
const heartImages = ["heart (1).png","heart (2).png","heart (3).png","heart (4).png","heart (5).png","heart (6).png","heart.png"];

for(let i=0; i<15; i++){
  const img = document.createElement("img");
  img.src = heartImages[Math.floor(Math.random()*heartImages.length)];
  
  // Random initial position
  img.style.left = Math.random() * 90 + "vw";
  img.style.top = Math.random() * 90 + "vh";

  // Random size
  const size = 20 + Math.random()*40;
  img.style.width = size + "px";
  img.style.height = size + "px";

  heartsContainer.appendChild(img);

  // Animate floating
  let top = parseFloat(img.style.top);
  setInterval(() => {
    top -= 0.3;             // speed
    if(top < -10) top = 100; // reset to bottom
    img.style.top = top + "vh";
  }, 20);
}


// ===== Envelope & Message Modals =====
const envelopeModal = document.getElementById("envelope-modal");
const messageModal = document.getElementById("message-modal");
const envelope = document.querySelector(".envelope");
const messageText = document.getElementById("message-text");
const messageImage = document.getElementById("message-image");
const closeMessage = document.getElementById("close-message");



// Click envelope to show message
envelope.addEventListener("click", () => {
  envelopeModal.classList.add("hidden");
  const day = parseInt(envelope.dataset.day);
  if(messages[day]){
    messageText.textContent = messages[day].text;
    messageImage.src = messages[day].image;
    messageModal.classList.remove("hidden");
  }
});

// Close message
closeMessage.addEventListener("click", () => {
  messageModal.classList.add("hidden");
});

function openRoseCard() {
  document.getElementById("roseCardOverlay").classList.remove("hidden");
}

function closeRoseCard() {
  document.getElementById("roseCardOverlay").classList.add("hidden");
}











