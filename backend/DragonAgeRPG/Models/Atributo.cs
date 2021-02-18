using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Models
{
    public class Atributo
    {
        public int Astucia { get; set; }
        public int Comunicacao { get; set; }
        public int Constituicao { get; set; }
        public int Destreza { get; set; }
        public int Forca { get; set; }
        public int Magia { get; set; }
        public int Percepcao { get; set; }
        public int Vontade { get; set; }

        public bool ProfAstucia { get; set; }
        public bool ProfComunicacao { get; set; }
        public bool ProfConstituicao { get; set; }
        public bool ProfDestreza { get; set; }
        public bool ProfForca { get; set; }
        public bool ProfMagia { get; set; }
        public bool ProfPercepcao { get; set; }
        public bool ProfVontade { get; set; }

        public string FocoAstucia { get; set; }
        public string FocoComunicacao { get; set; }
        public string FocoConstituicao { get; set; }
        public string FocoDestreza { get; set; }
        public string FocoForca { get; set; }
        public string FocoMagia { get; set; }
        public string FocoPercepcao { get; set; }
        public string FocoVontade { get; set; }
    }
}
