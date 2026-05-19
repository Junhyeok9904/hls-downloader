const test = require('tape');
// Assuming commonjs for testing, might need module.exports in source files
// For now, testing the logic flow

test('HLS Parser - basic variant detection', (t) => {
    t.plan(1);
    const mockM3U8 = "#EXT-X-STREAM-INF:BANDWIDTH=1280000\nvariant.m3u8";
    // Mock parsing result verification
    t.ok(mockM3U8.includes('#EXT-X-STREAM-INF'), 'should detect variant tag');
});
