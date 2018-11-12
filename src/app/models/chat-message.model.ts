export class ChatMessage{
    $key?: string;
    email?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
    constructor(userName:string,email:string,message:string){
           
    }
}
