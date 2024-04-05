// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamObj()
  }
  getTeamObj = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await response.json()
    const teamBannerUrl = responseData.team_banner_url
    const latestMatchDetails = responseData.latest_match_details
    const recentMatches = responseData.recent_matches

    this.setState({
      isLoading: false,
      latestMatchDetails: latestMatchDetails,
      recentMatches: recentMatches,
      teamBannerUrl: teamBannerUrl,
    })
  }

  renderLatestMatch = () => {
    const {latestMatchDetails} = this.state

    return <LatestMatch matchDetails={latestMatchDetails} />
  }

  renderRecentMatches = () => {
    const {recentMatches} = this.state
    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, teamBannerUrl} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="" />
            this.renderLatestMatch() this.renderRecentMatches()
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
