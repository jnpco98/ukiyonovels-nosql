using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Models
{
    public abstract class Entity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("creator_id")]
        public string Creator { get; set; }

        [BsonElement("archived")]
        public bool Archived { get; set; }

        [BsonElement("created_at")]
        public DateTime CreatedAt { get; set; }

        [BsonElement("last_modified")]
        public DateTime LastModified { get; set; }

        public Entity(string creator)
        {
            Id = ObjectId.GenerateNewId().ToString();
            Creator = creator;
            Archived = false;
            CreatedAt = DateTime.Now;
        }
    }
}