using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Chapter : Entity
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title length can't be less than 5 characters")]
        [MaxLength(100, ErrorMessage = "Title length can't be more than 100 characters")]
        [BsonElement("title")]
        public string Title { get; set; }

        [MinLength(10, ErrorMessage = "Description length can't be less than 10 characters")]
        [MaxLength(100, ErrorMessage = "Description length can't be more than 100 characters")]
        [BsonElement("description")]
        public string Description { get; set; }

        [Required]
        [MinLength(100, ErrorMessage = "Content length can't be less than 100 characters")]
        [MaxLength(30000, ErrorMessage = "Content length can't be more than 30000 characters")]
        [BsonElement("content")]
        public string Content { get; set; }

        [Required]
        [BsonElement("novel_id")]
        public string Novel { get; set; }

        [BsonElement("book_id")]
        public string Book { get; set; }

        public Chapter(string _creator)
            : base(_creator) { }
    }
}