"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-green-900">Welcome to Plant Care Reminder!</h1>
      <p className="mt-4 text-lg text-green-700">Never forget to water your plants again.</p>
      <Button className="mt-6">Get Started</Button>
    </div>
  );
}
