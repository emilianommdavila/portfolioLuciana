import React, { useRef, useEffect } from 'react';

interface IframeProps {
  src: string;
  title: string;
  width?: number;
  height?: number;
  loop?: boolean;
}

const Iframe: React.FC<IframeProps> = ({ src, title, width = 853, height = 480, loop = false }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe && loop) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      let player: any;

      // Agregamos una verificación de tipo para evitar el error en TypeScript
      (window as any).onYouTubeIframeAPIReady = function () {
        player = new window.YT.Player(iframe, {
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
              event.target.setLoop(true);
            },
          },
        });
      };

      return () => {
        if (player) {
          player.destroy();
        }
      };
    }
  }, [loop]);

  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      ref={iframeRef}
    ></iframe>
  );
};

export default Iframe;
