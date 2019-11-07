using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Models.Components
{
    public class Tag : Entity
    {
        [Required]
        [MinLength(3, ErrorMessage = "Name length can't be less than 3 characters")]
        [MaxLength(40, ErrorMessage = "Name length can't be more than 40 characters")]
        [BsonElement("name")]
        public string Name { get; set; }

        public Tag(string creator)
            : base(creator) { }
    }
}