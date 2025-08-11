import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) return <div>Please sign in</div>;
  return <div>Welcome, {user.firstName}</div>;
}
