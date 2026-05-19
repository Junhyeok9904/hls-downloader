function generateFFmpegCommand(playlistUrl, outputName) {
    return `ffmpeg -i "${playlistUrl}" -c copy -bsf:a aac_adtstoasc "${outputName}.mp4"`;
}
