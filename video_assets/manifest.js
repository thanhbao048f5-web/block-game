// 视频素材清单（由切片工具生成）
window.VIDEO_MANIFEST = {
  title: '微信视频',
  count: 135,          // 片段数（每 0.2s 一段）
  fps: 5,              // 每秒帧数
  frameExt: 'jpg',     // 帧图片格式
  soundExt: 'wav',     // 音频格式（降级音效用）
  bg: 'video_assets/bg.mp4',  // 背景视频（画面 + 原声，点击时 seek 到对应帧融合）
  full: 'video_assets/full.wav', // 整段音频（一次下载，点击任意位置精确播放，零卡顿）
  frameDir: 'video_assets/frames/f_',
  soundDir: 'video_assets/sounds/s_',
  framePad: 4,         // 文件名补零位数
  soundPad: 4
};
