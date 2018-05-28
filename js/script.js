function getNotification() {
  const btn_close = document.querySelector('#close');//Find element by class
  const notification = document.querySelector('#notification');
  notification.style.visibility='hidden';

  const tip = document.querySelector('#tip');
  const left = document.querySelector('#left');
  const right = document.querySelector('#right');
  const checkbox = document.querySelector('#checkbox');

  window.onload = function() {//Load check
    function loadCheker() {
      if (localStorage.notification_off !== 'true') {
        notification.style.visibility="visible";//Notification after 5 second
      }
    }
    setTimeout(loadCheker, 5000);
  };

  const tips = ['Tip of the DAY: if you want to be a real programmer you must be self and be able to ask!',
                'Tip of the DAY: constantly develop!',
                'Tip of the DAY: in moderation, use ready-made solutions',
                'Tip of the DAY: know how to express your thoughts correctly'];
  tip.innerHTML = tips[0];//First tip (default)

  btn_close.addEventListener('click', e => {//Listener to close notification
    notification.style.visibility = 'hidden';
  });

  const lastTipsIndex = 3;
  const firstTipsIndex = 0;

  function rightarrow() {
    if (count === lastTipsIndex) {
      count = firstTipsIndex - 1;
    }
    tip.innerHTML = tips[++count];
  }

  function leftarrow() {
    if (count === firstTipsIndex) {
      count = lastTipsIndex + 1;
    }
    tip.innerHTML = tips[--count];
  }

  let count = 0;
  right.addEventListener('click', e => {//Listener to scroll forward
    rightarrow();   
  });

  left.addEventListener('click', e => {//Listener to scroll back
    leftarrow();  
  });

  checkbox.addEventListener('click', e => {//Never show notification
    localStorage.setItem('notification_off', 'true');
  });

  //Control by keyboard :
  document.addEventListener('keyup', (event) => {//Control by right arrow
    const keyName = event.key;
    switch (keyName) {
      case 'ArrowRight':
        rightarrow();
        break;
      case 'ArrowLeft':
        leftarrow();
        break;
      case 'Escape':
        notification.style.visibility = 'hidden';
        break;
    }
  });
}

getNotification ();