type Props = {
  provider: string;
};

export default function ChatTabs({ provider }: Props) {
  return (
    <div>
      <p>Current AI: {provider}</p>
      {/* ChatInput + Messages এখানে যাবে */}
    </div>
  );
}