export default function getItemDetails(item) {
  const redditDetails = {
    redditCampaign: item.links.reddit_campaign,
    redditLaunch: item.links.reddit_launch,
    redditRecovery: item.links.reddit_recovery,
    redditRedditMedia: item.links.reddit_media
  };

  const hasReused = Object.values(item.reuse).includes(true);
  const hasWithReddit =
    Object.values(redditDetails).find(value => value !== null) !== undefined;

  return {
    badge: item.links.mission_patch_small,
    rocketName: item.rocket.rocket_name,
    rocketType: item.rocket.rocket_type,
    launchDate: humanizeDate(item.launch_date_utc),
    details: item.details,
    id: item.flight_number,
    article: item.links.article_link,
    hasReused,
    hasWithReddit,
    launchSuccess: item.launch_success
  };

  function humanizeDate(date) {
    const parsedDate = new Date(Date.parse(date)).toLocaleDateString();
    return parsedDate;
  }
}
