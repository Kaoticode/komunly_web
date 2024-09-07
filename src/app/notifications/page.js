import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NotificationCard } from "@/components/notifications-components/NotificationCard";

export default function NotificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute -left-[35%] -top-[5%] w-3/4 h-3/4 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                id="glowGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%">
                <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
          </svg>
          <svg
            className="hidden lg:flex absolute -right-3/4 w-1/2 lg:-right-1/4  lg:w-3/4 lg:h-3/4 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
          </svg>
        </div>

        <div className="container lg:w-[1000px] mx-auto flex flex-col mt-32">
          <h2 className="text-2xl my-4">
            <span className="text-blue-400">●</span> Notificaciones
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
