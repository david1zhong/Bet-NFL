import React, { useState, useEffect } from 'react';

const logos = {
  "Arizona Cardinals": "https://s.yimg.com/cv/apiv2/default/nfl/20230503/500x500/ari.png",
  "Atlanta Falcons": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_ATL_wbg.png",
  "Baltimore Ravens": "https://s.yimg.com/it/api/res/1.2/XOX_.NdcE4A8gBJgy0wwpA--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_BAL_wbg.png",
  "Buffalo Bills": "https://s.yimg.com/it/api/res/1.2/U7CFcDQNs5woJvKYvJ9PwQ--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_BUF_wbg.png",
  "Carolina Panthers": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_CAR_wbg.png",
  "Chicago Bears": "https://s.yimg.com/it/api/res/1.2/nuSbVmDIvGaN2GtKDWkUew--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/20230905/500px/bears_new_wbg.png",
  "Cincinnati Bengals": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_CIN.png",
  "Cleveland Browns": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_CLE.png",
  "Dallas Cowboys": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DAL.png",
  "Denver Broncos": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DEN.png",
  "Detroit Lions": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DET_wbg.png",
  "Green Bay Packers": "https://s.yimg.com/it/api/res/1.2/B8t4bJ9mUbcC.1t2_Mx.DA--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_GB_wbg.png",
  "Houston Texans": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_HOU.png",
  "Indianapolis Colts": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_IND.png",
  "Jacksonville Jaguars": "https://s.yimg.com/it/api/res/1.2/2nyt4pxpluMx84xHylBeOA--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_JAX_wbg.png",
  "Kansas City Chiefs": "https://s.yimg.com/it/api/res/1.2/S0ebUnvWlURo6revNdgLJw--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_KC_wbg.png",
  "Las Vegas Raiders": "https://s.yimg.com/it/api/res/1.2/zyAvxpfKoxJ2EPHh4nss1w--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20200908/500x500/raiders_wbg.png",
  "Los Angeles Chargers": "https://s.yimg.com/cv/apiv2/default/nfl/20200508/500x500/chargers.png",
  "Los Angeles Rams": "https://s.yimg.com/cv/apiv2/default/nfl/20200323/500x500/rams.png",
  "Miami Dolphins": "https://s.yimg.com/it/api/res/1.2/JXjRjjkD78arpizDFrTs4w--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_MIA_wbg.png",
  "Minnesota Vikings": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_MIN.png",
  "New England Patriots": "https://s.yimg.com/it/api/res/1.2/NWthPIbTXg64SHV55jHthA--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NE_wbg.png",
  "New Orleans Saints": "https://s.yimg.com/it/api/res/1.2/26a.mcqeOZM8wNz4ePm5qQ--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NO_wbg.png",
  "New York Giants": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NYG.png",
  "New York Jets": "https://s.yimg.com/cv/apiv2/default/20240610/500px/Jets.png",
  "Philadelphia Eagles": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_PHI.png",
  "Pittsburgh Steelers": "https://s.yimg.com/it/api/res/1.2/aEE.p..yNGzzIXh7Ufos5g--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_PIT_wbg.png",
  "San Francisco 49ers": "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_SF.png",
  "Seattle Seahawks": "https://s.yimg.com/it/api/res/1.2/Z81FMR3SlomBt5B2oBS9Zw--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_SEA_wbg.png",
  "Tampa Bay Buccaneers": "https://s.yimg.com/it/api/res/1.2/8PSYZvSvZIRHiKQgGxfR9A--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20200508/500x500/buccaneers_wbg.png",
  "Tennessee Titans": "https://s.yimg.com/it/api/res/1.2/4e_VxlBg15NRR13mNlQwXA--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_TEN_wbg.png",
  "Washington Commanders": "https://s.yimg.com/cv/apiv2/default/nfl/20220202/500x500/washington_wbg.png"
};

const teamAbbreviations = {
  "Arizona Cardinals": "ARI",
  "Atlanta Falcons": "ATL",
  "Baltimore Ravens": "BAL",
  "Buffalo Bills": "BUF",
  "Carolina Panthers": "CAR",
  "Chicago Bears": "CHI",
  "Cincinnati Bengals": "CIN",
  "Cleveland Browns": "CLE",
  "Dallas Cowboys": "DAL",
  "Denver Broncos": "DEN",
  "Detroit Lions": "DET",
  "Green Bay Packers": "GB",
  "Houston Texans": "HOU",
  "Indianapolis Colts": "IND",
  "Jacksonville Jaguars": "JAX",
  "Kansas City Chiefs": "KC",
  "Las Vegas Raiders": "LV",
  "Los Angeles Chargers": "LAC",
  "Los Angeles Rams": "LAR",
  "Miami Dolphins": "MIA",
  "Minnesota Vikings": "MIN",
  "New England Patriots": "NE",
  "New Orleans Saints": "NO",
  "New York Giants": "NYG",
  "New York Jets": "NYJ",
  "Philadelphia Eagles": "PHI",
  "Pittsburgh Steelers": "PIT",
  "San Francisco 49ers": "SF",
  "Seattle Seahawks": "SEA",
  "Tampa Bay Buccaneers": "TB",
  "Tennessee Titans": "TEN",
  "Washington Commanders": "WAS"
};

function App() {
  const [data, setData] = useState(null);
  const [selectedBets, setSelectedBets] = useState([]);
  const [betAmount, setBetAmount] = useState(10);
  const [isPlacingBet, setIsPlacingBet] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('https://gg25v0d7zi.execute-api.us-east-2.amazonaws.com/dev/odds')
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error));
  }, []);

  const clearMessages = () => {
    setSuccessMessage(false);
    setErrorMessage(false);
  };

  const getBetTypeLabel = (betType) => {
    switch(betType) {
      case 'moneyline': return 'MONEYLINE';
      case 'total': return 'TOTAL';
      case 'spread': return 'SPREAD';
      default: return betType.toUpperCase();
    }
  };

  const handleBetSelection = (gameIndex, betType, teamIndex, odds, point) => {
    clearMessages();

    const game = data[gameIndex];
    const gameId = gameIndex + 1;
    const awayTeam = game.away_team;
    const homeTeam = game.home_team;
    const matchup = `${awayTeam} @ ${homeTeam}`;

    let teamName, displayName, betDescription;

    if (betType === 'spread') {
      teamName = teamIndex === 0 ? awayTeam : homeTeam;
      betDescription = point;
      displayName = `${teamName} ${point}`;
    } else if (betType === 'moneyline') {
      teamName = teamIndex === 0 ? awayTeam : homeTeam;
      betDescription = odds !== undefined ? odds.toString() : '-110';
      displayName = teamName;
    } else if (betType === 'total') {
      const overUnder = teamIndex === 0 ? 'Over' : 'Under';
      teamName = `${overUnder} ${point}`;
      betDescription = `${overUnder} ${point}`;
      displayName = `${overUnder} ${point}`;
    }

    const existingBetIndex = selectedBets.findIndex(bet => 
      bet.gameId === gameId && bet.betType === betType && bet.teamIndex === teamIndex
    );

    if (existingBetIndex !== -1) {
      setSelectedBets(prev => prev.filter((_, index) => index !== existingBetIndex));
      return;
    }

    let newSelectedBets = selectedBets.slice();

    // Ensure mutually exclusive picks per game where appropriate
    if (betType === 'spread' || betType === 'moneyline') {
      newSelectedBets = newSelectedBets.filter(bet => 
        !(bet.gameId === gameId && (bet.betType === 'spread' || bet.betType === 'moneyline'))
      );
    } else if (betType === 'total') {
      newSelectedBets = newSelectedBets.filter(bet => !(bet.gameId === gameId && bet.betType === 'total'));
    }

    newSelectedBets.push({
      gameId,
      betType,
      teamIndex,
      value: betDescription,
      description: betDescription,
      displayName,
      team: teamName,
      matchup,
      awayTeam,
      homeTeam,
      odds: odds !== undefined ? odds.toString() : '-110',
      betTypeLabel: getBetTypeLabel(betType)
    });

    setSelectedBets(newSelectedBets);
  };

  const isBetSelected = (gameIndex, betType, teamIndex) => {
    const gameId = gameIndex + 1;
    return selectedBets.some(bet => 
      bet.gameId === gameId && bet.betType === betType && bet.teamIndex === teamIndex
    );
  };

  const formatOdds = (odds) => {
    try {
      const numOdds = parseInt(odds, 10);
      if (isNaN(numOdds) || !isFinite(numOdds)) return "-110";
      return numOdds > 0 ? `+${numOdds}` : numOdds.toString();
    } catch (error) {
      return "-110";
    }
  };

  const calculateParlayOdds = (bets) => {
    let decimalOdds = 1;
    bets.forEach(bet => {
      const americanOdds = parseInt(bet.odds, 10) || -110;
      let decimal;
      if (americanOdds > 0) decimal = (americanOdds / 100) + 1;
      else decimal = (100 / Math.abs(americanOdds)) + 1;
      decimalOdds *= decimal;
    });

    let americanOdds;
    if (decimalOdds >= 2) {
      americanOdds = Math.round((decimalOdds - 1) * 100);
    } else {
      americanOdds = Math.round(-100 / (decimalOdds - 1));
    }

    return americanOdds.toString();
  };

  const calculatePotentialWinnings = () => {
    if (selectedBets.length === 0) return 0;

    let winnings = 0;
    try {
      if (selectedBets.length === 1) {
        const americanOdds = parseInt(selectedBets[0].odds, 10) || -110;
        if (americanOdds > 0) winnings = betAmount * (americanOdds / 100);
        else winnings = betAmount * (100 / Math.abs(americanOdds));
      } else {
        const parlayOdds = calculateParlayOdds(selectedBets);
        const americanOdds = parseInt(parlayOdds, 10) || -110;
        if (americanOdds > 0) winnings = betAmount * (americanOdds / 100);
        else winnings = betAmount * (100 / Math.abs(americanOdds));
      }

      if (isNaN(winnings) || !isFinite(winnings)) return 0;
      return winnings;
    } catch (error) {
      console.error('Error calculating winnings:', error);
      return 0;
    }
  };

  const submitBetToGoogleSheet = () => {
    if (selectedBets.length === 0) {
      alert('Please select at least one bet before submitting');
      return;
    }

    if (betAmount <= 0) {
      alert('Please enter a bet amount greater than $0');
      return;
    }

    const potentialWinnings = calculatePotentialWinnings();
    const betType = selectedBets.length > 1 ? 'Parlay' : 'Single';

    let odds;
    if (selectedBets.length === 1) odds = formatOdds(selectedBets[0].odds);
    else odds = formatOdds(calculateParlayOdds(selectedBets));

    const betDetails = selectedBets.map(bet => ({
      matchup: `${bet.awayTeam} @ ${bet.homeTeam}`,
      team: bet.team,
      betType: bet.betTypeLabel,
      selection: bet.displayName,
      odds: formatOdds(bet.odds)
    }));

    const formData = {
      date: new Date().toISOString(),
      betType,
      numberOfLegs: selectedBets.length,
      wagerAmount: betAmount.toFixed(2),
      potentialWinnings: potentialWinnings.toFixed(2),
      totalOdds: odds,
      betDetails: JSON.stringify(betDetails)
    };

    setIsPlacingBet(true);
    clearMessages();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw4bJ5Tm4o1Jb9TktdKVK_boOXT1ArFKwagX3gsYE-lyrhPW3gq31DVsB7Q4hENUAqO/exec';

    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(formData) })
      .then(() => {
        setIsPlacingBet(false);
        setSuccessMessage(true);
        setErrorMessage(false);
      })
      .catch(() => {
        setIsPlacingBet(false);
        setSuccessMessage(false);
        setErrorMessage(true);
      });
  };

  const handleRemoveAllSelections = () => {
    clearMessages();
    setSelectedBets([]);
    setBetAmount(0);
  };

  const getDisplayName = (teamName) => {
    if (isMobile && teamName.length > 12) return teamAbbreviations[teamName] || (teamName.substring(0, 8) + '...');
    return teamName;
  };

  if (!data) return (
    <div className="min-h-screen bg-[#1c1e1d] flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <div className={`bg-[#1c1e1d] p-4 min-h-screen ${isMobile ? 'w-full pb-96' : 'flex-1'}`} style={{ width: isMobile ? '100%' : 'max(60%, 535px)' }}>
        <div className={`grid gap-1 items-center mb-2 ${isMobile ? 'grid-cols-[1fr_75px_75px_75px]' : 'grid-cols-[1fr_100px_100px_100px]'}`}>
          <div style={{ color: '#d9cec9', fontWeight: 600, fontSize: 14 }}>NFL</div>
          <div style={{ textAlign: 'center', color: '#9ca3af', fontWeight: 600, fontSize: 14 }}>SPREAD</div>
          <div style={{ textAlign: 'center', color: '#9ca3af', fontWeight: 600, fontSize: 14 }}>MONEY</div>
          <div style={{ textAlign: 'center', color: '#9ca3af', fontWeight: 600, fontSize: 14 }}>TOTAL</div>
        </div>

        {data.map((game, index) => (
          <div key={index}>
            {/* Away Team Info */}
            <div className={`grid gap-1 items-center mb-1 ${isMobile ? 'grid-cols-[1fr_75px_75px_75px]' : 'grid-cols-[1fr_100px_100px_100px]'}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <img src={logos[game.away_team]} alt={game.away_team} style={{ width: 25, height: 25, flexShrink: 0 }} />
                <span style={{ color: '#3391eb', fontSize: isMobile ? 13 : 16, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {getDisplayName(game.away_team)}
                </span>
              </div>

              {/* Away Spread */}
              {game.spreads.length > 0 && (
                <button
                  className={`font-bold rounded-lg text-white flex flex-col justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'spread', 0) ? 'bg-[#2a90ff]' : 'bg-[#1c1e1d] hover:bg-[#2c2d2f]'}`}
                  style={{ border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'spread', 0, game.spreads[0].price, game.spreads[0].point >= 0 ? `+${game.spreads[0].point}` : game.spreads[0].point)}
                >
                  <div style={{ fontSize: isMobile ? 12 : 15 }}>{game.spreads[0].point >= 0 ? `+${game.spreads[0].point}` : game.spreads[0].point}</div>
                  <div style={{ fontSize: isMobile ? 10 : 12, color: isBetSelected(index, 'spread', 0) ? '#ffffff' : '#3889eb', marginTop: '-2px' }}>
                    ({formatOdds(game.spreads[0].price)})
                  </div>
                </button>
              )}

              {/* Away Money */}
              {game.h2h.length > 0 && (
                <button
                  className={`font-bold rounded-lg flex justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'moneyline', 0) ? 'bg-[#2a90ff] text-white' : 'bg-[#1c1e1d] text-[#3889eb] hover:bg-[#2c2d2f]'}`}
                  style={{ fontSize: isMobile ? 12 : 14, border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'moneyline', 0, game.h2h[0].price)}
                >
                  {formatOdds(game.h2h[0].price)}
                </button>
              )}

              {/* Away Total */}
              {game.totals.length > 0 && (
                <button
                  className={`font-bold rounded-lg text-white flex flex-col justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'total', 0) ? 'bg-[#2a90ff]' : 'bg-[#1c1e1d] hover:bg-[#2c2d2f]'}`}
                  style={{ border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'total', 0, game.totals[0].price, game.totals[0].point)}
                >
                  <div style={{ fontSize: isMobile ? 12 : 15 }}>O{game.totals[0].point}</div>
                  <div style={{ fontSize: isMobile ? 10 : 12, color: isBetSelected(index, 'total', 0) ? '#ffffff' : '#3889eb', marginTop: '-2px' }}>
                    ({formatOdds(game.totals[0].price)})
                  </div>
                </button>
              )}
            </div>

            {/* Teams Horizontal Separator */}
            <div className={`border-b-2 border-[#3d3f3e] my-1`} style={{ width: isMobile ? '25%' : '32%' }}></div>

            {/* Home Team Info */}
            <div className={`grid gap-1 items-center mt-1 ${isMobile ? 'grid-cols-[1fr_75px_75px_75px]' : 'grid-cols-[1fr_100px_100px_100px]'}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <img src={logos[game.home_team]} alt={game.home_team} style={{ width: 25, height: 25, flexShrink: 0 }} />
                <span style={{ color: '#3391eb', fontSize: isMobile ? 13 : 16, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {getDisplayName(game.home_team)}
                </span>
              </div>

              {/* Home Spread */}
              {game.spreads.length > 1 && (
                <button
                  className={`font-bold rounded-lg text-white flex flex-col justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'spread', 1) ? 'bg-[#2a90ff]' : 'bg-[#1c1e1d] hover:bg-[#2c2d2f]'}`}
                  style={{ border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'spread', 1, game.spreads[1].price, game.spreads[1].point >= 0 ? `+${game.spreads[1].point}` : game.spreads[1].point)}
                >
                  <div style={{ fontSize: isMobile ? 12 : 15 }}>{game.spreads[1].point >= 0 ? `+${game.spreads[1].point}` : game.spreads[1].point}</div>
                  <div style={{ fontSize: isMobile ? 10 : 12, color: isBetSelected(index, 'spread', 1) ? '#ffffff' : '#3889eb', marginTop: '-2px' }}>
                    ({formatOdds(game.spreads[1].price)})
                  </div>
                </button>
              )}

              {/* Home Money */}
              {game.h2h.length > 1 && (
                <button
                  className={`font-bold rounded-lg flex justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'moneyline', 1) ? 'bg-[#2a90ff] text-white' : 'bg-[#1c1e1d] text-[#3889eb] hover:bg-[#2c2d2f]'}`}
                  style={{ fontSize: isMobile ? 12 : 14, border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'moneyline', 1, game.h2h[1].price)}
                >
                  {formatOdds(game.h2h[1].price)}
                </button>
              )}

              {/* Home Total */}
              {game.totals.length > 1 && (
                <button
                  className={`font-bold rounded-lg text-white flex flex-col justify-center items-center w-full ${isMobile ? 'h-8' : 'h-10'} ${isBetSelected(index, 'total', 1) ? 'bg-[#2a90ff]' : 'bg-[#1c1e1d] hover:bg-[#2c2d2f]'}`}
                  style={{ border: '1.3px solid #62afff' }}
                  onClick={() => handleBetSelection(index, 'total', 1, game.totals[1].price, game.totals[1].point)}
                >
                  <div style={{ fontSize: isMobile ? 12 : 15 }}>U{game.totals[1].point}</div>
                  <div style={{ fontSize: isMobile ? 10 : 12, color: isBetSelected(index, 'total', 1) ? '#ffffff' : '#3889eb', marginTop: '-2px' }}>
                    ({formatOdds(game.totals[1].price)})
                  </div>
                </button>
              )}
            </div>

            {/* Game Time */}
            <div style={{ fontSize: 12, color: '#b6b8b6', marginTop: 5, marginBottom: index === data.length - 1 ? 0 : 8 }}>
              {new Date(game.commence_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()},{' '}
              {new Date(game.commence_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' })}
            </div>

            {/* Horizontal Separator */}
            {index !== data.length - 1 && (
              <div className="w-full border-b border-gray-600 my-5"></div>
            )}
          </div>
        ))}
      </div>

      {/* Betslip */}
      <div className={`bg-[#0a0a0a] p-4 ${isMobile ? 'fixed bottom-0 left-0 right-0 h-96 overflow-y-auto border-t-2 border-gray-600' : 'flex-1 min-w-80'}`}>
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">{selectedBets.length}</div>
          <h2 className="text-xl font-bold text-white">Betslip</h2>

          <button onClick={handleRemoveAllSelections} className="ml-auto text-sm text-red-400">Remove all</button>
        </div>

        {selectedBets.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <div>No selections yet</div>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {selectedBets.map((bet, i) => (
                <div key={`${bet.gameId}-${bet.betType}-${bet.teamIndex}-${i}`} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">{bet.matchup}</div>
                      <div className="text-white font-medium">{bet.displayName}</div>
                      <div className="text-xs text-gray-400">{bet.betTypeLabel} • {formatOdds(bet.odds)}</div>
                    </div>
                    <button onClick={() => setSelectedBets(prev => prev.filter((_, idx) => idx !== i))} className="text-sm text-red-400">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Parlay Odds */}
            {selectedBets.length > 1 && (
              <div className="mb-3 bg-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div className="text-white font-medium">{selectedBets.length} leg parlay</div>
                  <div className="text-white font-bold">{formatOdds(calculateParlayOdds(selectedBets))}</div>
                </div>
              </div>
            )}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm text-gray-400 mb-1">WAGER</div>
                <div className="flex items-center">
                  <span className="text-white text-lg mr-1">$</span>
                  <input
                    type="text"
                    className="w-full bg-transparent text-white text-lg border-none p-0 focus:outline-none"
                    value={betAmount === 0 ? '' : betAmount}
                    onChange={(e) => {
                      clearMessages();
                      let val = e.target.value.replace(/[^0-9]/g, '');
                      if (val === '') setBetAmount(0);
                      else setBetAmount(Math.min(parseInt(val, 10), 15000));
                    }}
                  />
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm text-gray-400 mb-1">TO WIN</div>
                <div className="text-green-400 font-bold text-lg">{betAmount > 0 ? `$${calculatePotentialWinnings().toFixed(2)}` : ''}</div>
              </div>
            </div>

            <button
              className={`mt-4 w-full font-bold py-3 rounded-lg ${isPlacingBet ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-[#128101] hover:bg-green-700 text-white'}`}
              onClick={submitBetToGoogleSheet}
              disabled={isPlacingBet}
            >
              {isPlacingBet ? 'Placing Bet...' : 'Place Bet'}
            </button>

            {successMessage && (
              <div className="mt-3 p-3 bg-green-700 text-white rounded-lg">Bet successfully placed! Your bet information has been recorded.</div>
            )}

            {errorMessage && (
              <div className="mt-3 p-3 bg-red-700 text-white rounded-lg">There was an error placing your bet. Please try again.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
