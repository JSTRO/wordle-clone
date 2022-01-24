export default function getClassFromStatus(status) {
  if (status === 'correct') {
    return 'background-green'
  } else if (status === 'present') {
    return 'background-yellow'
  } else {
    return 'background-gray'
  }
}