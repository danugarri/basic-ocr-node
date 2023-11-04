class PromiseRejected extends Error {
  constructor(message = 'Promise Rejected') {
    super(message);
    this.name = 'PromiseRejected';
  }
}

module.exports = { PromiseRejected };
