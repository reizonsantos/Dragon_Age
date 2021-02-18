using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Models
{
    public class Inventario
    {
        public int IdArma { get; set; }
        public string NomeArma { get; set; }
        public int Ataque { get; set; }
        public int Dano { get; set; }
        public string CaracteristicaArma { get; set; }
        public string GrupoArma { get; set; }
    }
}
