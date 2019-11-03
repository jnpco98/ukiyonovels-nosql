using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models.Components
{
    public class Author : Entity
    {
        [Required]
        [MinLength(5, ErrorMessage = "Name length can't be less than 5 characters")]
        [MaxLength(20, ErrorMessage = "Name length can't be more than 20 characters")]
        [BsonElement("name")]
        public string Name { get; set; }

        [MinLength(5, ErrorMessage = "Alternate name length can't be less than 5 characters")]
        [MaxLength(30, ErrorMessage = "Alternate name length can't be more than 30 characters")]
        [BsonElement("alt_names")]
        public List<string> AlternateNames { get; set; }

        public Author(string creator) : base(creator) {}
    }
}