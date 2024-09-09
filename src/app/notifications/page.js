import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NotificationCard } from "@/components/notifications-components/NotificationCard";
import { PurpleCirclesBg } from "@/components/PurpleCirclesBg";

export default function NotificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PurpleCirclesBg />

        <div className="container lg:w-[1000px] mx-auto flex flex-col mt-32">
          <h2 className="text-2xl my-4">
            <span className="text-komunly-blue-light">●</span> Notificaciones
          </h2>
          <ul className="flex flex-col gap-4">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
