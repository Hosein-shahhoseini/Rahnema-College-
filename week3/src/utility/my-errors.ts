export class HttpError extends Error {
    constructor(public status : number , message : string ){
        super(message);
    }
}


export class ForbiddenError extends HttpError {
    constructor() {
        super(403 ,  "Forbidden");
    }
}


export class notFoundError extends HttpError {
    constructor(){
        super(403 ,  "Forbidden");
    }
}