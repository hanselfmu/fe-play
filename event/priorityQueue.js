function PriorityQueue() {
    this.q = [];
}

// priority ≈ Linux Niceness: lower means higher priority
PriorityQueue.prototype.enqueue = function (task, priority) {
    const q = this.q;
    const el = { task, priority };
    q.push(el);
    
}

PriorityQueue.prototype.dequeue = function () {

}

const getParentIdx = idx => (idx - 1) / 2;
const getLeftChildIdx = idx => idx * 2 + 1;
const getRightChildIdx = idx => idx * 2 + 2;