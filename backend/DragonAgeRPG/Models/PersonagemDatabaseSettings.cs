using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragonAgeRPG.Models
{
    public class PersonagemDatabaseSettings : IPersonagemDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

    }
    public interface IPersonagemDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
