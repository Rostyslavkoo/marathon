class FormatError extends SyntaxError {
	constructor(msg) {
		super(msg);
		this.name = this.constructor.name;
	}
}

let err = new FormatError("formatting error");
console.log(err.name);