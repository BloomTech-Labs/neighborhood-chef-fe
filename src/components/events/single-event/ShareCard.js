import React, { useState } from "react";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
import LinkIcon from "@material-ui/icons/Link";

import IconButton from "@material-ui/core/IconButton";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { useLocation } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const shareButtons = [
  {
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
  },
  {
    name: "Text",
    icon: MessageIcon,
  },
  {
    name: "Email",
    icon: EmailIcon,
  },
];

const Components = {
  Facebook: FacebookShareButton,
  Twitter: TwitterShareButton,
  Text: WhatsappShareButton,
  Email: EmailShareButton,
};

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const location = useLocation();
  const url = `https://ourneighborhoodchef.com${location.pathname}`;
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Card className={`${classes.root} ${classes.share}`}>
        <Typography variant="h6" align="left">
          Share
        </Typography>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            {/* <FacebookShareButton url={url}>
              <FacebookIcon />
            </FacebookShareButton> */}
            {shareButtons.map((b) => {
              const TagName = Components[b.name];
              return (
                <TagName url={url} hashtag="#neighborhoodchef" key={b.name}>
                  <IconButton
                    title={b.name}
                    aria-label={b.name}
                    className={cardStyles({ name: b.name }).shareButtons}
                  >
                    <b.icon fontSize="large" />
                  </IconButton>
                </TagName>
              );
            })}
          </div>

          <div style={{ display: "flex" }}>
            <Typography
              variant="caption"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Copy Link:
              <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
                {copied ? (
                  <Typography
                    color="textSecondary"
                    style={{ marginLeft: "10px" }}
                  >
                    Copied!
                  </Typography>
                ) : (
                  <IconButton style={{ marginLeft: "10px" }}>
                    <LinkIcon fontSize="large" />
                  </IconButton>
                )}
              </CopyToClipboard>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ParticipantCard;
