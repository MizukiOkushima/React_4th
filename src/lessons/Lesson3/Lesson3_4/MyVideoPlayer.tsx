import { forwardRef } from "react";

type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

// forwardRef 独自のコンポーネントを使う場合に使う
export const MyVideoPlayer = forwardRef<HTMLVideoElement, MyVideoPlayerProps>(
  (props, ref) => {
    return (
      <video width={props.width} ref={ref}>
        <source src={props.src} type={props.type} />
      </video>
    );
  }
);