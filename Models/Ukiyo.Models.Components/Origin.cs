using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Origin : Entity
    {
        [Required]
        [MinLength(5, ErrorMessage = "Name length can't be less than 5 characters")]
        [MaxLength(20, ErrorMessage = "Name length can't be more than 20 characters")]
        [BsonElement("name")]
        public string Name { get; set; }

        public Origin(string creator)
            : base(creator) { }
    }
}