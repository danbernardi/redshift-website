var express = require('express');
var router = express.Router();
var Slack = require('slack-node');

router.get('/:channel_name', (req, res, next) => {
  const apiToken = process.env.SLACK_API_KEY;
  const slack = new Slack(apiToken);

  slack.api('channels.list', (err, response) => {
    if (err) {
      res.status(500).send('something broke', err);
    }

    const channel = response.channels
      ? response.channels.find((channel) => {
        return channel.name === req.params.channel_name;
      })
      : null;

    if (channel) {
      slack.api('channels.history', { 'channel': channel.id, 'count': process.env.HISTORY_LENGTH }, (err, response) => {
        res.send(response.messages.filter((message, index) => {
          //Only show posts with images
          return message.attachments && message.attachments[0].image_url;
        }));
      });
    }
  });
});

module.exports = router;
