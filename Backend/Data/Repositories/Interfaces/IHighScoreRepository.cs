﻿using Backend.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data.Repositories.Interfaces
{
    public interface IHighScoreRepository : IRepository<Highscore>
    {
        IEnumerable<VHighScore> GetHighscores();
    }
}
