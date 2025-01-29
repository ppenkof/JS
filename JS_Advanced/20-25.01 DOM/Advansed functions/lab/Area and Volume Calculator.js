function solve(area, vol, input) {
  function vol() {
    return Math.abs(this.x * this.y * this.z);
  }

  function area() {
    return Math.abs(this.x * this.y);
  }

  const data = JSON.parse(input);
  const result =[];

  for (const line of data) {
    result.push({
        area: area.call(line),
        volume: vol.call(line)
    });
  }
  return result;

solve(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]');
}
//solve(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]')