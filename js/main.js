const data = [
    "👋 Hey! I'm still working on this!",
    "🚧 Website under construction 🚧",
    "☎️ NovAtion is not available at the moment.",
    "🚫 You're not supposed to be here...",
    "👾 Currently playing CS:GO...",
    "💩 I'm uh... not in front of my computer right now...",
    "🐌 Slowly working on this website.",
    "🔒 What's the password?",
    "🧨 QUICK! GET OUT! THIS WEBSITE IS ABOUT TO BLOW UP!",
    "🎃 BOOOH! Haha did I scare you? Now go away.",
    "🔧 Sorry, everything is broken. This is gonna take a while.",
    "🙎‍♀️ What are you doing? Go empty the dishwasher!",
    "☀️ Go outside! The weather is beautiful!",
    "💻 Y0u g0t h4ck3d. Y0u sh0uld pr0b4bly turn 0ff y0ur c0mput3r.",
    "💾 LOADING WEBSITE... 12 YEARS REMAINING...",
    "🖥️ Windows is rebooting your computer to update things... Be patient...",
    "🛸 The server is currently getting kidnapped by aliens.",
    "🚓 HEY! You're on a private land here! I'm calling the cops!"
];

let title = document.getElementById("title");
let current = 0;
let disabled = false;

title.addEventListener("click", () => {
    if (disabled) return;
    if (current + 1 == data.length) window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    disabled = true;
    title.style.opacity = "0";
    title.style.transition = "0.2s";

    setTimeout(() => {
        title.innerText = data[++current];
        title.style.opacity = "1";
        disabled = false;
    }, 200);
});
