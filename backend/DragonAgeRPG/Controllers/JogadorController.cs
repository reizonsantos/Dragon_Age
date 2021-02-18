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
    public class JogadorController : ControllerBase
    {
        private readonly JogadorService _jogadorService;

        public JogadorController(JogadorService jogadorService)
        {
            _jogadorService = jogadorService;
        }
        
        [HttpGet]
        public ActionResult<List<FichaJogador>> Get()
        {
            return _jogadorService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<FichaJogador> Get(string id)
        {
            var jogador = _jogadorService.Get(id);
            if (jogador == null)
            {
                return NotFound();
            }

            return jogador;
        }

        [HttpPost]
        public ActionResult<FichaJogador> Create([FromBody] FichaJogador jogador)
        {
            _jogadorService.Create(jogador);

            return CreatedAtRoute("Getjogador", new { id = jogador.IdJogador.ToString() }, jogador);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, FichaJogador jogadorIn)
        {
            var jogador = _jogadorService.Get(id);

            if (jogador == null)
            {
                return NotFound();
            }

            _jogadorService.Update(id, jogadorIn);

            return NoContent();
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            var jogador = _jogadorService.Get(id);

            if (jogador == null)
            {
                NotFound();
            }

            _jogadorService.Remove(jogador.IdJogador);

            return NoContent();
        }
    }
}
