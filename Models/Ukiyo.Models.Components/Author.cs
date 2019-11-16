using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Author
    {
        [Required]
        [MinLength(5, ErrorMessage = "Name length can't be less than 5 characters")]
        [MaxLength(40, ErrorMessage = "Name length can't be more than 40 characters")]
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("alt_names")]
        public IEnumerable<string> AlternateNames { get; set; }
    }
}