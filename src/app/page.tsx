import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-bold">
          Welcome to Vacation Club
        </h1>
        <Button type="button">Join Now</Button>
      </div>
    </main>
  );
}
