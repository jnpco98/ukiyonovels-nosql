using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models.Components
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

        [BsonElement("book_ids")]
        public List<string> Books { get; set; }

        [BsonElement("chapter_ids")]
        public List<string> Chapters { get; set; }

        [BsonElement("review_ids")]
        public List<string> Reviews { get; set; }

        [BsonElement("tags")]
        public List<Tag> Tags { get; set; }

        [BsonElement("genres")]
        public List<Genre> Genres { get; set; }

        [BsonElement("origins")]
        public List<Origin> Origins { get; set; }

        [BsonElement("authors")]
        public List<Author> Authors { get; set; }

        public Novel(string creator)
            : base(creator) { }
    }
}