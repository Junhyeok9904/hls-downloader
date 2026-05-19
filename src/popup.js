document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ action: "getStreams" }, (response) => {
        const content = document.getElementById('content');
        if (response && response.streams && response.streams.length > 0) {
            content.innerHTML = '<ul>' + response.streams.map(s => `<li>${s.url}</li>`).join('') + '</ul>';
        } else {
            content.innerHTML = '<p>No streams detected yet. Refresh the page.</p>';
        }
    });
});
