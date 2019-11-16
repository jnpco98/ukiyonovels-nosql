using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Review : Entity
    {
        [Required]
        [MinLength(20, ErrorMessage = "Message length can't be less than 20 characters")]
        [MaxLength(3000, ErrorMessage = "Message length can't be more than 3000 characters")]
        [BsonElement("message")]
        public string Message { get; set; }

        [BsonElement("rating")]
        public float Rating { get; set; }

        [BsonElement("novel_id")]
        [Required]
        public string Novel { get; set; }

        public Review(string creator)
            : base(creator) { }
    }
}