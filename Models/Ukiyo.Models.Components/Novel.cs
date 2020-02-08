using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ukiyo.Models.Components
{
    public interface INovelFilter
    {
        public string Name { get; set; }
    }

    public class NovelSort
    {
        public const string TITLE = "title";
        public const string LAST_MODIFIED = "lastmodified";
    }

    public class Novel : Entity, IHandleized
    {
        [Required]
        [MinLength(10, ErrorMessage = "Title length can't be less than 10 characters")]
        [MaxLength(100, ErrorMessage = "Title length can't be more than 100 characters")]
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("handle")]
        public string Handle { get; set; }
        
        [BsonElement("type")]
        public string Type { get; set; }

        [Required]
        [MinLength(20, ErrorMessage = "Description length can't be less than 20 characters")]
        [MaxLength(1000, ErrorMessage = "Description length can't be more than 1000 characters")]
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

        [BsonElement("artists")]
        public IEnumerable<Author> Artists { get; set; }

        [BsonElement("related_novels")]
        public IEnumerable<string> RelatedNovels { get; set; }

        [BsonElement("associated_names")]
        public IEnumerable<string> AssociatedNames { get; set; }

        [BsonElement("media_gallery")]
        public IEnumerable<string> MediaGallery { get; set; }

        [BsonElement("cover_image")]
        public IEnumerable<string> CoverImage { get; set; }

        [BsonElement("likes_count")]
        public int Likes { get; set; } = 0; 

        [BsonElement("views_count")]
        public int Views { get; set; } = 0;

        public Novel(string creator)
            : base(creator) { }

        public string HandleSource
        {
            get { return Title; }
        }

        public override void ModifyOnGet()
        {
            base.ModifyOnGet();
            this.Views = this.Views += 1;
            this.Likes = this.Likes += 1;
        }

        public override void ModifyOnUpdate(Entity source)
        {
            base.ModifyOnUpdate(source);
        }
    }
}