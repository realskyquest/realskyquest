// Actions

/* Button */
export { default as Button } from './actions/button/Button.svelte';

/* Dropdown */
export { default as Dropdown } from './actions/dropdown/Dropdown.svelte';
export { default as DropdownButton } from './actions/dropdown/DropdownButton.svelte';
export { default as DropdownContent } from './actions/dropdown/DropdownContent.svelte';

// Feedback

/* Loading */
export {default as Loading } from './feedback/loading/Loading.svelte'


// Utils
import parse from 'parse-duration';

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