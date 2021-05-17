// 첫글자를 대문자로 만들어 주는 친구
export default function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
