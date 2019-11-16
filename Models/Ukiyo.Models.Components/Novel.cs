using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public class Novel : Entity
    {
        [Required]
        [MinLength(10, ErrorMessage = "Title length can't be less than 10 characters")]
        [MaxLength(30, ErrorMessage = "Title length can't be more than 30 characters")]
        [BsonElement("title")]
        public string Title { get; set; }

        [Required]
        [MinLength(20, ErrorMessage = "Description length can't be less than 20 characters")]
        [MaxLength(300, ErrorMessage = "Description length can't be more than 300 characters")]
        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("tags")]
        public IEnumerable<Tag> Tags { get; set; }

        [BsonElement("genres")]
        public IEnumerable<Genre> Genres { get; set; }

        [BsonElement("origins")]
        public IEnumerable<Origin> Origins { get; set; }

        [BsonElement("authors")]
        public IEnumerable<Author> Authors { get; set; }

        [BsonElement("related_novels")]
        public IEnumerable<string> RelatedNovels { get; set; }

        [BsonElement("media_gallery")]
        public IEnumerable<string> MediaGallery { get; set; }

        [BsonElement("cover_image")]
        public IEnumerable<string> CoverImage { get; set; }

        public Novel(string creator)
            : base(creator) { }
    }
}