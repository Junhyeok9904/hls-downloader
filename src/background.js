let detectedStreams = [];

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    const url = info.request.url;
    if (url.includes('.m3u8')) {
        detectedStreams.push({
            url: url,
            timestamp: Date.now()
        });
        console.log("HLS stream detected:", url);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getStreams") {
        sendResponse({ streams: detectedStreams });
    }
});
