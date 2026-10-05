const letters = {
    "miss-you": {
        title: "Why I Love You <br> You Loveee Mee 💏",
        message:
            "I love you because you love me just the I am. You understand me and appreciate my humour (big kudos on that part). You make me feel cherished, and even on my lonliest days, I know I will always have your company."
    },

    "bad-day": {
        title: "Why I Love You <br> You're A Good Listener 💜",
        message:
            "You are attentive and a good listener. You willingly provide a shoulder to cry on even on days when you yourself need support. You put others before you in a heartbeat, and that is a selfless quality that you possess."
    },

    "need-a-hug": {
        title: "Why I Love You <br> You Remember The Little Things 💓",
        message:
            "I love how you remember the tiny things about the people you love. The little details that most people might forget somehow stay with you, and that is just how you love."
    },

    "cant-sleep": {
        title: "Why I Love You <br> You Trust And Love Easily",
        message:
            "Yeah this one might be a disadvantage for you because you were just out there distributing your love, time, ADN MONEY to toilet brushes and whatever's rotting under the London Bridge(iykyk)"
    },

    "love-you": {
        title: "Why I Love You <br> You Are Loyal",
        message:
            "I love how loyal you are. When you care about someone, you really care about them, and you don't just disappear when things get difficult."
    },

    "thinking-of-you": {
        title: "Why I Love You <br> You Are One Of The Kindest People I Know",
        message:
            "I love your kindness. You have such a gentle way of caring for the people around you, and you make people feel loved in ways you probably don't even realize."
    }
};


// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);