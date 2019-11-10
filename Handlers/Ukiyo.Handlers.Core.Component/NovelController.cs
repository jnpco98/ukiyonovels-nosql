using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ukiyo.HttpResponse;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;
using System;

namespace Ukiyo.Handlers.Core.Component
{
    internal class NovelQuery
    {
        internal int page = 15;
        internal int count = 0;
        internal string author;
        internal string origin;
        internal string genre;
        internal string tag;
        internal string sort;
    }

    [ApiController]
    [Route("api/[controller]")]
    internal class NovelController : ControllerBase
    {
        private readonly NovelRepository _novelRepository;

        public NovelController(IEntityRepository<Novel> novelRepository)
        {
            _novelRepository = (NovelRepository) novelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetAll([FromQuery] NovelQuery novelquery)
        {
            var filterBuilder = Builders<Novel>.Filter;
            var filters = new List<FilterDefinition<Novel>>();

            var sortBuilder = Builders<Novel>.Sort; 
            var sort = novelquery.sort.ToLower() == "descending" ? 
                sortBuilder.Descending(n => n.Title) : sortBuilder.Ascending(n => n.Title);

            if (!string.IsNullOrWhiteSpace(novelquery.author.Trim()))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Authors,
                    a => a.Name.ToLower() == novelquery.author.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(novelquery.origin.Trim()))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Origins, 
                    o => o.Name.ToLower() == novelquery.origin.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(novelquery.genre.Trim()))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Genres, 
                    g => g.Name.ToLower() == novelquery.genre.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(novelquery.tag.Trim()))
            {
                filters.Add(filterBuilder.ElemMatch(n => n.Tags, 
                    t => t.Name.ToLower() == novelquery.tag.ToLower()));
            }

            return await _novelRepository.Paginate(novelquery.page, novelquery.count, filterBuilder.And(filters), sort);
        }

        [HttpGet]
        public async Task<ActionResult<IResponse>> GetOne(string id) => 
            await _novelRepository.Get(id);

        [HttpPost]
        public async Task<ActionResult<IResponse>> InsertOne(Novel novel) => 
            await _novelRepository.Insert(novel);

        [HttpDelete]
        public async Task<ActionResult<IResponse>> DeleteOne([FromBody] string id) => 
            await _novelRepository.Archive(id);

        [HttpPut]
        public async Task<ActionResult<IResponse>> UpdateOne(Novel novel) => 
            await _novelRepository.Update(novel);
    }
}