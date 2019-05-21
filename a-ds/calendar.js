var MyCalendarTwo = function() {
  this.singles = [];
  this.doubles = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  if (!canFit(this.doubles, start, end)) return false;
  const overlaps = getOverlapsAndFillGaps(this.singles, start, end);
  overlaps.forEach(o => insert(this.doubles, o));
  return true;
};

function canFit(intervals, start, end) {
  if (intervals.length === 0) return true;
  let l = 0;
  let r = intervals.length - 1;
  if (end <= intervals[l][0] || start >= intervals[r][1]) return true;
  if (l === r) return false;
  while (r - l > 1) {
    const m = Math.floor((l + r) / 2);
    if (start < intervals[m][0]) {
      r = m;
    } else if (start > intervals[m][0]) {
      l = m;
    } else {
      return false;
    }
  }
  return start >= intervals[l][1] && end <= intervals[r][0];
}

function getOverlapsAndFillGaps(intervals, start, end) {
  if (intervals.length === 0) {
    intervals.push([start, end]);
    return [];
  }
  let l = 0;
  let r = intervals.length - 1;
  if (end <= intervals[l][0]) {
    intervals.unshift([start, end]);
    return [];
  }
  if (start >= intervals[r][1]) {
    intervals.push([start, end]);
    return [];
  }
  if (l === r) {
    intervals[0] = [Math.min(intervals[0][0], start), Math.max(intervals[0][1], end)];
    return [[Math.max(intervals[0][0], start), Math.min(intervals[0][1], end)]];
  }
  while (r - l > 1) {
    const m = Math.floor((l + r) / 2);
    if (start < intervals[m][0]) {
      r = m;
    } else if (start > intervals[m][0]) {
      l = m;
    } else {
      break;
    }
  }
  const overlaps = [];
  let mergeCount = 0;
  const mergeLeft = intervals[l][0];
  while (l < intervals.length) {
    mergeCount++;
    const [curStart, curEnd] = intervals[l];
    if (curStart >= end) break;
    if (curEnd <= start) {
      l++;
      continue;
    }
    overlaps.push([
      Math.max(start, curStart),
      Math.min(end, curEnd)
    ]);
    l++;
  }
  const mergeRight = intervals[l - 1][1];
  intervals.splice(l - mergeCount, mergeCount, [mergeLeft, Math.max(mergeRight, end)]);
  return overlaps;
}

function insert(intervals, newInterval) {
  if (intervals.length === 0) return intervals.push(newInterval);
  let l = 0;
  let r = intervals.length - 1;
  const [start, end] = newInterval;
  if (end <= intervals[l][0]) return intervals.unshift(newInterval);
  if (start >= intervals[r][1]) return intervals.push(newInterval);
  while (r - l > 1) {
    const m = Math.floor((l + r) / 2);
    if (start < intervals[m][0]) {
      r = m;
    } else if (start > intervals[m][0]) {
      l = m;
    }
  }
  intervals.splice(l + 1, 0, newInterval);
}

const cal = new MyCalendarTwo();
const list = [[47, 50], [1, 10], [27, 36], [40, 47], [20, 27], [15, 23]];
list.forEach(item => {
  console.log('booking', item, cal.book(item[0], item[1]));
  console.log('single booking list', cal.singles);
  console.log('double booking list', cal.doubles);
});
