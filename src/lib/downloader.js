async function downloadSegments(segmentUrls) {
    let completed = 0;
    for (const url of segmentUrls) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            // Process segment
            completed++;
            console.log(`Downloaded ${completed}/${segmentUrls.length}`);
        } catch (e) {
            console.error("Download failed", e);
        }
    }
}
