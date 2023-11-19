function updateCountdown() {
    const countdownDate = new Date("2023-11-24T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + " Days";
    document.getElementById("hours").innerText = hours + " Hours";
    document.getElementById("minutes").innerText = minutes + " Minutes";
    document.getElementById("seconds").innerText = seconds + " Seconds";

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Launched!";
    }
}

const interval = setInterval(updateCountdown, 1000);
