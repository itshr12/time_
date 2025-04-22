anime({
    targets:'#s',
    backgroundColor:'rgb(49, 48, 46)',
});
anime({
    targets: '#txt',
});

setInterval(()=>{
    var t=dayjs();
    var tm=t.format('HH:mm:ss');
    $('#tim').text(tm);
},1000);

anime({
    targets: '#txt',
    opacity: [0.3, 1],
    easing: 'easeInOutQuad',
    duration: 2000,
    loop: true,
    direction: 'alternate'
  });
  
  anime({
    targets: '#pth',
    translateY:-40,
    scale: [
      { value: 1, duration: 0 },
      { value: 1.2, duration: 800 },
      { value: 1, duration: 1200 }
    ],
    easing: 'easeInOutSine',
    loop: true
  });
  