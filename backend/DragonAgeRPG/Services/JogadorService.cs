using DragonAgeRPG.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Services
{
    public class JogadorService
    {
        private readonly IMongoCollection<FichaJogador> _jogadores;

        public JogadorService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("dragonage"));
            var database = client.GetDatabase("dragonage");
            _jogadores = database.GetCollection<FichaJogador>("FichaJogador");
        }

        public List<FichaJogador> Get()
        {
            return _jogadores.Find(jogador => true).ToList();
        }

        public FichaJogador Get(string id)
        {
            return _jogadores.Find<FichaJogador>(jogador => jogador.IdJogador == id).FirstOrDefault();
        }

        public FichaJogador Create(FichaJogador jogador)
        {
            _jogadores.InsertOne(jogador);
            return jogador;
        }

        public void Update(string id, FichaJogador jogadorIn)
        {
            _jogadores.ReplaceOne(jogador => jogador.IdJogador == id, jogadorIn);
        }

        public void Remove(FichaJogador jogadorIn)
        {
            _jogadores.DeleteOne(jogador => jogador.IdJogador == jogadorIn.IdJogador);
        }

        public void Remove(string id)
        {
            _jogadores.DeleteOne(jogador => jogador.IdJogador == id);
        }
    }
}
