
*/

let ufcFighter = {
  name: `Conor Mcgregor`,
  nickName: `The Notorious`,
  age: 31,
  weightClass: [`lightweight`, `featherweight`, `welterweight`],
  team: `Straight Blast Gym`,
  residence: {
    hometown: `Dublin`,
    country: `Ireland`
  },
  status: `active fighter`,
  isMarried: true,
  isChampion: false,
  strickingAccuracy: `49%`,
  record: {
    wins: {
      KOs: 19,
      submissions: 1,
      decisions: 2
    },
    losses: {
      byKO: 0,
      bySubmissions: 4,
      byDecisions: 0
    },
    KOs: 18
  },
  famousFor: [
    {
      hisQuote: `We’re not just here to take part. We’re here to take over.`
    },
    {
      hisWhisky: {
        name: `Proper 12`,
        irishWhiskey: true
      }
    },
    {
      his13SecondsKO: {
        opponent: `Jose Aldo`,
        champion: true,
        weightDivision: `Lightweight`,
        pastChampions: 0,
        championYears: 8,
        aboutFighter: {
          city: `MANAUS, AMAZONAS`,
          country: `Brazil`,
          record: {
            wins: 28,
            losses: {
              submissions: 1,
              decisions: 1,
              ko: 3
            }
          }
        }
      }
    }
  ],
  hisRivalries: [
    {
      name: 'Jose Aldo',
      date: {
        year: 2015,
        month: `December`,
        day: 12
      },
      isChampion: true,
      age: 31,
      famousKO: [
        {
          round: 1,
          time: `14 seconds`,
          winBy: `KO`
        }
      ]
    },
    {
      name: 'Khabib Nurmagomedov',
      date: {
        year: 2018,
        month: `October`,
        day: 6
      },
      isChampion: true,
      age: 32,
      loss: [
        {
          round: 4,
          time: {
            minutes: 3,
            seconds: 3
          },
          lossBy: `Submission`
        }
      ]
    },
    {
      name: 'Nate Diaz',
      date: {
        year: 2016,
        month: `March`,
        day: 5
      },
      isChampion: true,
      age: 29,
      famousTap: [
        {
          round: 2,
          time: {
            minutes: 5,
            seconds: 0
          },
          lossBy: `Submission`
        }
      ]
    },
    {
      name: 'Donald Cerrone',
      date: {
        year: 2020,
        month: `January`,
        day: 18
      },
      isChampion: false,
      age: 32,
      win: [
        {
          round: 1,
          time: {
            minutes: 3,
            seconds: 3
          },
          lossBy: `KO`
        }
      ]
    }
  ],
  saying: function() {
    console.log(this.famousFor[0].hisQuote);
  }
};

console.log(ufcFighter.saying());
