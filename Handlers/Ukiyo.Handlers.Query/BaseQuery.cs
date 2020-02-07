namespace Ukiyo.Handlers.Query
{
    public class SortOrder
    {
        public const string ASCENDING = "asc";
        public const string DESCENDING = "desc";
    }

    public class BaseQuery
    {
        public int Page { get; set; } = 0;
        public int Count { get; set; } = 15;
        public string Sort { get; set; } = "";
        public string Order { get; set; } = SortOrder.ASCENDING;
    }
}