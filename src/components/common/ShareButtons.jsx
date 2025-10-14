'use client';

import { useState, useEffect } from 'react';
import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, XIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon,
  EmailShareButton, EmailIcon,
} from 'react-share';

export default function ShareButtons({ title }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // This ensures window is available and runs only on the client
    setShareUrl(window.location.href);
  }, []);

  if (!shareUrl) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex items-center gap-2">
        <span className="font-semibold text-sm mr-2">Share:</span>
        <TwitterShareButton url={shareUrl} title={title}>
            <XIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={title} body="Check out this page:">
            <EmailIcon size={32} round />
        </EmailShareButton>
    </div>
  );
}
