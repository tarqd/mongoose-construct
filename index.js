module.exports = function(schema){
	schema.queue('hook', ['construct', function(){}])
	schema.queue('construct',[])

	schema.queue = function(name, args){
		this.callQueue.splice(-1, 0, [name, args])
		return this;
	}
}