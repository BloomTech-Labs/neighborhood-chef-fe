export default function useTimes() {
    const amTimes = [];
    const pmTimes = [];
    let normalTimes = [];
    const militaryTimes = [];

    for (let i = 1; i <= 12.5; i = i + 0.5) {
        if (i % 1 === 0) {
            amTimes.push(`${i}:00am`);
            pmTimes.push(`${i}:00pm`);
        } else {
            amTimes.push(`${i - 0.5}:30am`);
            pmTimes.push(`${i - 0.5}:30pm`);
        }
    }

    normalTimes = [...amTimes, ...pmTimes];

    for (let i = 0; i < 24; i = i + 1) {
        if (i % 1 === 0) {
        }
        if (i < 10) {
            militaryTimes.push(`0${i}:00:00`, `0${i}:30:00`);
        } else {
            militaryTimes.push(`${i}:00:00`, `${i}:30:00`);
        }
    }

    return { militaryTimes, normalTimes };
}
