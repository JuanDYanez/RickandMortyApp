import s from './BgVideo.module.css'

export default function BgVideo() {
  return (
    <div className={s.backgroundVideo}>
      <video
        src="src/assets/img/Background_08.webm"
        autoPlay="true"
        muted="true"
        loop="true"
      ></video>
    </div>
  );
}