function checkPoint() {
    const icon = document.querySelector('.PointActions_buttonBonus_F37Ur');
    if (!icon) return;
    icon.click();
}
setTimeout(function() {
    setInterval(checkPoint, 5000);
  }, 5000);
