using System;

namespace ViewModel
{
    public class AppResponse<T>
    {
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
        public bool IsSuccess
        {
            get
            {
                if (!string.IsNullOrEmpty(ErrorMessage))
                {
                    return false;
                }
                else
                {
                    return  true;

                }
            }
          
        }
    }
    public class AppResponse
    {
        public bool IsSuccess
        {
            get {
                  if(!string.IsNullOrEmpty(ErrorMessage) || Error != null)
                {
                    return  false;
                }
                else
                {
                    return  true;

                }
            }
        
        }

        public string ErrorMessage { get; set; }
        public Exception Error { get; set; }
    }
}
