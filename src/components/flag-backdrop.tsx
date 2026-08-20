export function FlagBackdrop() {
  return (
    <div className="flag-stage" aria-hidden="true">
      <div className="flag-css">
        <span className="flag-lozenge" />
        <span className="flag-globe" />
      </div>
      <video
        className="flag-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.jpg"
      >
        <source src="/videos/flag.mp4" type="video/mp4" />
      </video>
      <div className="flag-ripple" />
      <div className="flag-shade" />
    </div>
  );
}
