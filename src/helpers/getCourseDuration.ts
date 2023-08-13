export function getDuration(timeInMinutes: number) {
	let m = timeInMinutes % 60;
	let h = (timeInMinutes - m) / 60;
	return h.toString() + ':' + m.toString() + ' hours';
}
