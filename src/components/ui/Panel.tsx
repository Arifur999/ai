export default function Panel({
  index,
  style,
}: {
  index: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className="
        w-[260px] h-[340px] mx-6
        bg-black/40 backdrop-blur
        rounded-xl
        flex items-center justify-center
        text-white text-2xl font-semibold
      "
    >
      {index + 1}
    </div>
  );
}
