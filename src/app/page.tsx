import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center items-center flex-col">
      <Link
        href="/login"
        className="text-2xl py-4 px-8 shadow-solid shadow-secondary hover:shadow-none transition-all duration-300 rounded-md bg-primary"
      >
        Click to Login
      </Link>
    </div>
  );
}
