import { ReminderCard } from "@/components/ReminderCard";
import { AddReminder } from "@/components/AddReminder";

export default function Reminders() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Reminders</h1>
      <AddReminder />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ReminderCard plant="Fern" time="8:00 AM" />
        <ReminderCard plant="Cactus" time="10:00 AM" />
        <ReminderCard plant="Orchid" time="2:00 PM" />
      </div>
    </div>
  );
}
