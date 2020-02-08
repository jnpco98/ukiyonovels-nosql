using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Artist: INovelFilter
    {
        [Required]
        [MinLength(3, ErrorMessage = "Name length can't be less than 3 characters")]
        [MaxLength(60, ErrorMessage = "Name length can't be more than 60 characters")]
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("alt_names")]
        public IEnumerable<string> AlternateNames { get; set; }
    }
}