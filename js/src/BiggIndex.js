var utils = require('./utils');

var BiggIndex = utils.make_class();
BiggIndex.prototype = {
    init,
    insert,
    remove,
    get,
    getOneWithId,
    has,
};
module.exports = BiggIndex;

function init() {
  this.index = {};
}

function insert(bigg_id, escherId, data) {
  this.index[bigg_id] = {
    ...(this.index[bigg_id] ? this.index[bigg_id] : {}),
    [escherId]: data
  }
}

function remove(bigg_id, escherId) {
  this.index[bigg_id] = Object.assign({},
    ...Object.entries(this.index[bigg_id] || {})
      .filter(([eId]) => escherId !== eId)
      .map(([k, v]) => ({[k]: v}))
  )
}

function get(bigg_id, escherId) {
  const bucket = this.index[bigg_id] || {}
  if (escherId) {
    return bucket[escherId]
  } else {
    return [...Object.values(bucket)].pop(0)
  }
}

function getOneWithId(bigg_id) {
  const bucket = this.index[bigg_id] || {}
  try {
    const [[escherId, data]] = Object.entries(bucket)
    return {escherId, data}
  } catch(e) {
    return null
  }
}

function has(bigg_id, escherId) {
  return !!this.get(bigg_id, escherId)
}