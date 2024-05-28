chrome.runtime.onStartup.addListener(() => {
    chrome.history.deleteAll(() => {
        console.log("Browsing history deleted on startup.");
    });
});
