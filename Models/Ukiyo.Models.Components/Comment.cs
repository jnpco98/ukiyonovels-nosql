using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Comment : Entity
    {
        [Required]
        [MinLength(20, ErrorMessage = "Message length can't be less than 20 characters")]
        [MaxLength(3000, ErrorMessage = "Message length can't be more than 3000 characters")]
        [BsonElement("message")]
        public string Message { get; set; }

        [Required]
        [BsonElement("chapter_id")]
        public string Chapter { get; set; }


        public Comment(string creator)
            : base(creator) { }
    }
}