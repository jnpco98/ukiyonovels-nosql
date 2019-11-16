using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Book : Entity
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title length can't be less than 5 characters")]
        [MaxLength(30, ErrorMessage = "Title length can't be more than 30 characters")]
        [BsonElement("title")]
        public string Title { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Description length can't be less than 10 characters")]
        [MaxLength(40, ErrorMessage = "Description length can't be more than 40 characters")]
        [BsonElement("description")]
        public string Description { get; set; }

        [Required]
        [BsonElement("novel_id")]
        public string Novel { get; set; }

        public Book(string creator)
            : base(creator) { }
    }
}