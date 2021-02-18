using DragonAgeRPG.Models;
using DragonAgeRPG.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonagemController : ControllerBase
    {
        private readonly PersonagemService _personagemService;

        public PersonagemController(PersonagemService personagemService)
        {
            _personagemService = personagemService;
        }

        [HttpGet]
        public ActionResult<List<FichaPersonagem>> Get()
        {
            return _personagemService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<FichaPersonagem> Get(string id)
        {
            var personagem = _personagemService.Get(id);

            if(personagem == null)
            {
                return NotFound();
            }

            return personagem;
        }

        [HttpPost]
        public ActionResult<FichaPersonagem> Create([FromBody] FichaPersonagem personagem)
        {
            _personagemService.Create(personagem);

            return CreatedAtRoute("GetPersonagem", new { id = personagem.IdPersonagem.ToString() }, personagem);

        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, FichaPersonagem personagemIn)
        {
            var personagem = _personagemService.Get(id);

            if(personagem == null)
            {
                return NotFound();
            }

            _personagemService.Update(id, personagemIn);

            return NoContent();
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            var personagem = _personagemService.Get(id);

            if(personagem == null)
            {
                NotFound();
            }

            _personagemService.Remove(personagem.IdPersonagem);

            return NoContent();
        }
    }
}
