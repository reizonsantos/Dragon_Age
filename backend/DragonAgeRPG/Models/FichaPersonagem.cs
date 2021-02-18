using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Models
{
    public class FichaPersonagem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdPersonagem { get; set; }
        public string NomePersonagem { get; set; }
        public string Raca { get; set; }
        public int Idade { get; set; }
        public string Sexo { get; set; }
        public string Classe { get; set; }
        public int Nivel { get; set; }
        public int PontoExp { get; set; }
        public Atributo Atributos { get; set; }
        public Caracteristica Caracteristicas { get; set; }
        public Habilidade Habilidades { get; set; }
        public Inventario Equipamento { get; set; }
        public Mochila Itens { get; set; }
    }
}
