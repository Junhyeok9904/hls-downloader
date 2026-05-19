# Developer's Guide for Authorized HLS Downloader

This extension generates CLI-ready commands to process HLS streams locally.

## Setup Requirements
1. **FFmpeg:** Ensure [FFmpeg](https://ffmpeg.org/) is installed and added to your system's PATH.
2. **Usage:**
   - Detect the stream using the extension.
   - Copy the generated command from the extension logs/UI.
   - Run the command in your terminal:
     `ffmpeg -i "YOUR_PLAYLIST_URL" -c copy "OUTPUT_NAME.mp4"`

## Testing Edge Cases
To verify the extension's robustness, test against the following:
- **Relative Path Resolution:** Use playlists where segment URLs are relative (e.g., `segment_001.ts`).
- **Master Playlist:** Ensure the extension prompts for a variant selection if multiple exist.
- **Network Failures:** Intercepted requests with 404/500 errors to verify retry behavior.
- **Encryption Check:** Ensure streams with `#EXT-X-KEY` tags are effectively blocked from the download queue.
