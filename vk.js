const CHECK_INTERVAL_MS = 30000;
const claimBonusInterval = setInterval(() => {
    const icon = document.querySelector('.PointActions_buttonBonus_F37Ur');
    if (icon) {
        icon.click();
    }
}, CHECK_INTERVAL_MS);