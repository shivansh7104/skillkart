// components/Header.js
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="p-4 flex justify-between">
      <h1 className="font-bold">SkillKart</h1>
      <UserButton />
    </header>
  );
}
