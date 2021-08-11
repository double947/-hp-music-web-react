/**
 * 生成 [min, max) 随机数（包前不包后）
 * @param  {number} min
 * @param  {number} max
 * 
 * [min, max]:
 * Math.floor(Math.random() * (max - min + 1) + min)
 * 
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}