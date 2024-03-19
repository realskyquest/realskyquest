// Utils
import parse from 'parse-duration';

/* https://github.com/plasmatech8/ripple-class */
export function RippleEffect(event: MouseEvent, centerRipple: boolean) {
    const btn = event.currentTarget as HTMLElement;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    const clientRect = btn.getBoundingClientRect();

    if (centerRipple === false) {
        circle.style.left = `${event.clientX - clientRect.left + btn.scrollLeft - radius}px`;
        circle.style.top = `${event.clientY - clientRect.top + btn.scrollTop - radius}px`;
    }

    circle.classList.add('ripple-object');
    btn.appendChild(circle);

    const duration = getComputedStyle(circle).getPropertyValue('--ripple-duration');
    setTimeout(() => circle.remove(), parse(duration));
}