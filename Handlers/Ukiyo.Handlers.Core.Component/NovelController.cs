using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Ukiyo.Models.Components;
using Ukiyo.Repositories;

namespace Ukiyo.Handlers.Core.Component
{
    [ApiController]
    [Route("api/[controller]")]
    internal class NovelController : ControllerBase
    {
        private readonly NovelRepository _novelRepository;

        public NovelController(NovelRepository novelRepository)
        {
            _novelRepository = novelRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Novel>> GetAllNovels()
        {
        }

        public ActionResult<>
    }
}