const MLflow = require('./index')

module.exports = class Metrics extends MLflow {
	
	constructor(args) {
		super(args)
		this.path = 'metrics'
	}
	
	getHistory({run_uuid, metric_key}) {
		return this.req('get', '/get-history', {run_uuid, metric_key})
	}
	
}
