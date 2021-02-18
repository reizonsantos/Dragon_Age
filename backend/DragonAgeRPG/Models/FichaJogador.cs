using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Models
{
    public class FichaJogador
    {   
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdJogador { get; set; }
        public string NomeJogador { get; set; }
        public string Usuario { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
     
    }
}
