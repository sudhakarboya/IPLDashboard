// Write your code here
const MatchCard = props => {
  const {recentMatchDetails} = props
  const id = recentMatchDetails.id
  const date = recentMatchDetails.date
  const manOfTheMatch = recentMatchDetails.man_of_the_match
  const umpires = recentMatchDetails.umpires
  const result = recentMatchDetails.result
  const competingTeam = recentMatchDetails.competing_team
  const competingTeamLogo = recentMatchDetails.competing_team_logo
  const firstInnings = recentMatchDetails.first_innings
  const secondInnings = recentMatchDetails.second_innings
  const matchStatus = recentMatchDetails.match_status

  return (
    <li>
      <img src={competingTeamLogo} alt="" />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
