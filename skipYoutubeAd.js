if (document.getElementsByClassName("ytp-ad-skip-button").length === 1) {
    document.getElementsByClassName("ytp-ad-skip-button")[0].click();
} else {
    if (document.getElementsByClassName("ytp-ad-preview-text").length === 1) {
        document.querySelector('video').playbackRate = 16;
        const observer = new MutationObserver(function(record) {
            if (document.getElementsByClassName("ytp-ad-skip-button").length === 1) {
                document.getElementsByClassName("ytp-ad-skip-button")[0].click();
                observer.disconnect();
            }
        });
        observer.observe(document.getElementsByClassName("ytp-ad-module")[0], {
            childList: true, 
            attributes: false, 
            characterData: false, 
            subtree: false
        });
    }
}