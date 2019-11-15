namespace Ukiyo.Handlers.Query
{
    public class SORT_ORDER
    {
        public static string ASCENDING = "asc";
        public static string DESCENDING = "desc";
    }

    public class BaseQuery
    {

        public int Page { get; set; } = 0;
        public int Count { get; set; } = 0;
        public string Order { get; set; } = SORT_ORDER.DESCENDING;

    }
}
