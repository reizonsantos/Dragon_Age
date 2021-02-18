using DragonAgeRPG.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Services
{
    public class PersonagemService
    {
        private readonly IMongoCollection<FichaPersonagem> _personagens;

        public PersonagemService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("dragonage"));
            var database = client.GetDatabase("dragonage");
            _personagens = database.GetCollection<FichaPersonagem>("FichaPersonagem");
        }

        public List<FichaPersonagem> Get()
        {
            return _personagens.Find(personagem => true).ToList();
        }

        public FichaPersonagem Get(string id)
        {
            return _personagens.Find<FichaPersonagem>(personagem => personagem.IdPersonagem == id).FirstOrDefault();
        }

        public FichaPersonagem Create(FichaPersonagem personagem)
        {
            _personagens.InsertOne(personagem);
            return personagem;
        }

        public void Update(string id, FichaPersonagem personagemIn)
        {
            _personagens.ReplaceOne(personagem => personagem.IdPersonagem == id, personagemIn);
        }

        public void Remove(FichaPersonagem personagemIn)
        {
            _personagens.DeleteOne(personagem => personagem.IdPersonagem == personagemIn.IdPersonagem);
        }

        public void Remove(string id)
        {
            _personagens.DeleteOne(personagem => personagem.IdPersonagem == id);
        }
    }
}
