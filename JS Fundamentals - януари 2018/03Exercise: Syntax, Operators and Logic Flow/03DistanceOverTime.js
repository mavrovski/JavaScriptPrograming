function distanceOverTime(arr) {

  let distOne = (arr[0]/3.6)*arr[2]
  let distTwo = (arr[1]/3.6)*arr[2]
  let delta = Math.abs(distOne- distTwo);
  console.log(delta);
}

arr = [5, -5, 40]
distanceOverTime(arr)