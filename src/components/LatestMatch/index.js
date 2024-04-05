// Write your code here
const LatestMatch = props => {
  const {matchDetails} = props

  const id = matchDetails.id
  const date = matchDetails.date
  const manOfTheMatch = matchDetails.man_of_the_match
  const umpires = matchDetails.umpires
  const result = matchDetails.result
  const competingTeam = matchDetails.competing_team
  const competingTeamLogo = matchDetails.competing_team_logo
  const firstInnings = matchDetails.first_innings
  const secondInnings = matchDetails.second_innings
  const matchStatus = matchDetails.match_status
  const venue=matchDetails.venue
  return (
    <div>
      <h1>{competingTeam}</h1>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img src={competingTeamLogo} />
      <p>FirstInnings {firstInnings}</p>
      <p>SecondInnings {secondInnings}</p>
      <p>Man of the match {manOfTheMatch}</p>
      <p>Umpires {umpires}</p>
    </div>
  )
}
export default LatestMatch
