const tabs = document.querySelectorAll('.tab'),
tabContents = document.querySelectorAll('.tab__content');

document.addEventListener('click', e => {
	const tabTargetNum = [...tabs].indexOf(e.target);
  if (tabTargetNum === -1) {
  	return;
  }

  document.querySelector('.tab_active').classList.remove('tab_active');
  document.querySelector('.tab__content_active').classList.remove('tab__content_active');

  e.target.classList.add('tab_active');
  tabContents[tabTargetNum].classList.add('tab__content_active');

})
