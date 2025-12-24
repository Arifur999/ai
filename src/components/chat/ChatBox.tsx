type Props = {
  provider: string;
};

export default function ChatBox({ provider }: Props) {
  return (
    <div>
      <p>Current AI: {provider}</p>
      {/* ChatInput + Messages এখানে যাবে */}
    </div>
  );
}