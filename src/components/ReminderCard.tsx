import { Button } from "@/components/ui/button";

export function ReminderCard({ plant, time }: { plant: string; time: string }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{plant}</h2>
      <p>Water at: {time}</p>
      <Button className="mt-2">Mark as Done</Button>
    </div>
  );
}
