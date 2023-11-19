document.addEventListener('DOMContentLoaded', function () {
    const countDownDate = new Date("Jan 31, 2024 12:00:00").getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Conversion
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        } else {
            document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
});