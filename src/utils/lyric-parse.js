/**
[00:00.000] 作词 : 黄伟文
[00:01.000] 作曲 : Eric Kwok
[00:02.000] 编曲 : Eric Kwok
[00:14.17]忘掉种过的花 重新的出发 放弃理想吧
[00:23.00]别再看尘封的囍帖 你正在要搬家
[00:30.78]筑得起 人应该接受 都有日倒下
[00:37.76]其实没有一种安稳快乐 永远也不差
[00:45.55]就似这一区 曾经称得上 美满甲天下
[00:53.58]但霎眼 全街的单位 快要住满乌鸦
[01:01.26]好景不会每日常在
[01:05.12]天梯不可只往上爬
[01:08.89]爱的人 没有一生一世吗
[01:14.06]大概不需要害怕
[01:18.78]忘掉爱过的他
[01:21.59]当初的囍帖金箔印着那位他
[01:25.46]裱起婚纱照那道墙
[01:27.81]及一切美丽旧年华 明日同步拆下
 */

// [01:18.78]忘掉爱过的他
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split("\n");
  const lyrics = [];
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3? result[3]*1: result[3]*10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      const lineObj = {time, content};
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}