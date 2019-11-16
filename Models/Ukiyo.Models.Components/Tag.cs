using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Tag
    {
        [Required]
        [MinLength(3, ErrorMessage = "Name length can't be less than 3 characters")]
        [MaxLength(40, ErrorMessage = "Name length can't be more than 40 characters")]
        [BsonElement("name")]
        public string Name { get; set; }
    }
}