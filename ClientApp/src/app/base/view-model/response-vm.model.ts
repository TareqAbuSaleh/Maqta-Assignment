export class ResponseVM<T> {
    data: T;
    isSuccess: boolean;
    errorMessage: string;
  
    constructor(data: T, isSuccess: boolean,errorMessage:string) {
        this.data = data;
        this.isSuccess = isSuccess;
        this.errorMessage = errorMessage;
      
    }

}