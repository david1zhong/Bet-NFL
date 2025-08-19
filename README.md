# Bet NFL
### By: David Zhong

## Description
A real-time NFL betting program that displays up-to-date odds in a clean, structured layout. Offers an interactive way to practice betting decisions without real risk.

## Features
- Pulls NFL game information, including team matchups, start times, and betting odds (spread, moneyline, totals), by querying an AWS Lambda API with data cached in S3 every 12 hours.
- Betting odds are from DraftKings US provided by The Odds API.
- Users can place bets or parlays on games with a wager cap of $15k.
- Bets are then recorded on a Google Sheet (had a MongoDB implentation but found that Google Sheets was more practical for my usage).

## Technologies
- React
- AWS Lambda
- AWS S3
- Node.js
- Rest API
- Tailwind CSS
- Google Apps Scripts
- Google Sheets

## Future Features
- Results check
- Bet check
