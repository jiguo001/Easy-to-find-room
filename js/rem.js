(function() {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;

    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        if (clientWidth > 750) {
            clientWidth = 750;
        }
        if (clientWidth < 320) {
            clientWidth = 320;
        }
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            setRem();
        }, 300);
    }, false);
})();