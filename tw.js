function checkPoint() {
    const icon = document.querySelector('.claimable-bonus__icon');
    if (!icon) return;
    icon.click();
}
setTimeout(function() {
    setInterval(checkPoint, 5000);
  }, 5000);
