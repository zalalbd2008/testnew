import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import phoneIcon from 'public/phone.gif';
import Image from 'next/image';

const VideoModal = () => {
  const router = useRouter();
  const [vid, setVid] = useState(true);

  const heandelClick = () => {
    router.push('tel: +18882073469');
  };
  const videoRef = useRef<HTMLVideoElement | any>(null);
  useEffect(() => {
    const video = videoRef.current;

    if (!vid) {
      video.pause();
    }
  }, [vid]);
  return (
    <div className={'vid-m' + (vid ? ' vid-a' : ' ')}>
      <div className="vid-c">
        <button
          aria-label="close video popup"
          className="close-v"
          onClick={() => setVid(false)}
        >
          <i className="fa-light fa-xmark-large"></i>
        </button>
        <video autoPlay controls ref={videoRef}>
          <source src="/images/popup-video.mp4" type="video/mp4" />
        </video>

        <a
          href="tel:+18884423442"
          className="d-flex align-items-center "
          style={{
            width: '140px',
            height: '50px',
          }}
        >
          <Image
            src={phoneIcon}
            alt="Phone Icon"
            style={{
              width: '20px',
              height: '20px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />

          <p className="call-animation">Call Now</p>
        </a>
      </div>
    </div>
  );
};

export default VideoModal;
