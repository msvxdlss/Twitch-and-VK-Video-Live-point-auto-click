const CHECK_INTERVAL_MS = 30000;
const claimBonusInterval = setInterval(() => {
    const icon = document.querySelector('.claimable-bonus__icon'); 
    if (icon) {
        icon.click();
    }
}, CHECK_INTERVAL_MS);