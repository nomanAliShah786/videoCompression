const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const inputPath = './test.webm';
const outputPath = 'output.mp4';

const width = 640;
const height = 480;
const bitrate = '800k';

ffmpeg(inputPath)
  .size(`${width}x${height}`)
  .videoBitrate(bitrate)
  .save(outputPath)
  .on('end', () => {
    console.log('Video resolution and file size have been changed successfully!');
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });