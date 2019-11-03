using System;

namespace HttpResponse
{
    public class Response<TData>
    {
        public int StatusCode { get; set; } = 200;

        public bool Success { get; set; } = true;

        public string Message { get; set; } = "";

        public TData Data { get; set; }

        public Exception Exception { get; set; }

        public void SetInternalError(Exception ex = null)
        {
            StatusCode = 500;
            Success = false;
            Message = "Internal Error 500";
            Data = default(TData);
            Exception = ex;
        }
    }
}
