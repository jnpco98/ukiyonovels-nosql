using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models.Components
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

        [BsonElement("chapter_ids")]
        public List<string> Chapters { get; set; }

        public Book(string creator) 
            : base(creator) {}
    }
}