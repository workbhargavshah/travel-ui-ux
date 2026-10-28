const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('tripForm').addEventListener('submit', event => {
  event.preventDefault();
  const destination = document.getElementById('destination').value.trim();
  const time = document.getElementById('tripTime').value;
  const style = document.getElementById('tripStyle').value;
  const feedback = document.getElementById('formFeedback');
  if (!destination && !time && !style) {
    feedback.textContent = 'Add a destination, timing, or travel style to start shaping your trip.';
    return;
  }
  const place = destination || 'somewhere wonderful';
  const vibe = style ? ` with a ${style.toLowerCase()} vibe` : '';
  const when = time ? ` (${time.toLowerCase()})` : '';
  feedback.textContent = `Your ${place} escape${vibe}${when} is taking shape — this demo form is ready to connect to a real planner.`;
});
