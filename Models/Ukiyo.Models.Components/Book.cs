using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Book : Entity
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title length can't be less than 5 characters")]
        [MaxLength(50, ErrorMessage = "Title length can't be more than 50 characters")]
        [BsonElement("title")]
        public string Title { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Description length can't be less than 10 characters")]
        [MaxLength(100, ErrorMessage = "Description length can't be more than 100 characters")]
        [BsonElement("description")]
        public string Description { get; set; }

        [Required]
        [BsonElement("novel_id")]
        public string Novel { get; set; }

        public Book(string creator)
            : base(creator) { }
    }
}