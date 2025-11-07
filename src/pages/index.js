import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Dimon. Tu Limon.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
