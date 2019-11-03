using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Models.Components
{
    public class Comment : Entity
    {
        [Required]
        [MinLength(40, ErrorMessage = "Message length can't be less than 40 characters")]
        [MaxLength(3000, ErrorMessage = "Message length can't be more than 3000 characters")]
        [BsonElement("message")]
        public string Message { get; set; }

        public Comment(string creator) 
            : base(creator) {}
    }
}