window.onload = function() {
    const secondHand = document.querySelector(".sec-hand");
    const minuteHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secDeg = ((seconds / 60) * 360) + 90;
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const minDeg = ((minutes / 60) * 360) + 90;
        const hourDeg = ((hours / 12) * 360) + 90;
        secondHand.style.transform = `rotate(${secDeg}deg)`;
        minuteHand.style.transform = `rotate(${minDeg}deg)`;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    setInterval(setDate, 1000);
}