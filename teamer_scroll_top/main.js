var button = document.createElement('a');
button.id = '_scroll_to_top';
button.href = '#';
button.innerHTML = 'Вверх';
document.body.appendChild(button);

var scroll_to = function(dur) {
	if (dur <= 0) return;
	var diff = -document.body.scrollTop;
	var perTick = diff / dur * 10;

	setTimeout(function() {
		document.body.scrollTop += perTick;
		if (document.body.scrollTop === 0) return;
		scroll_to(dur - 10);
	}, 10);
};

var scroll_to_top = function(e) {
	e.preventDefault();
	var duration = 150;
	scroll_to(duration);
	return false;
};

button.addEventListener('click', scroll_to_top, false);

button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '30px';
button.style.display = 'block';
button.style.padding = '10px';
button.style.backgroundColor = '#f0f0f0';

