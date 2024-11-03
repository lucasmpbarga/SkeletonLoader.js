import dynamic from "next/dynamic";

const SimpleCount = dynamic(
  () => import("@/component/simple-count/simple-count"),
  { ssr: false }
);

const ParentRerenders = dynamic(
  () => import("@/component/parent-rerenders/parent-rerenders"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <SimpleCount />
      <ParentRerenders />
    </div>
  );
}
