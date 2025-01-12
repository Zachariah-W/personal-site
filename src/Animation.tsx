import { Player } from "@lottiefiles/react-lottie-player";

export default function Animation({
  src,
  tempo,
  ...props
}: { src: object; tempo: number } & React.ComponentProps<"div">) {
  return (
    <div className="flex items-center gap-0.5" id="lottie" {...props}>
      <Player
        autoplay={true}
        loop={true}
        src={src}
        style={{
          width: "2em",
          height: "2em",
        }}
        speed={tempo}
      />
      {props.children}
    </div>
  );
}
