import React, { useState } from "react";
import SettingsCard from "../SettingsCard";
import SettingsToggle from "../SettingsToggle";
import PriorityBadges from "../PriorityBadges";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    enabled: false,
    inApp: false,
    emailVerified: false,
    email: false,
    security: false,
    billing: false,
    recommendations: false,
  });

  return (
    <SettingsCard title="Notification Settings">
      <div className="flex flex-col space-y-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <p className="text-black dark:text-white">Enable Notifications</p>
          <SettingsToggle
            value={notifications.enabled}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, enabled: !prev.enabled }))
            }
          />
        </div>
        {notifications.enabled && (
          <>
            <div className="flex flex-col space-y-4">
              <h3 className="text-gray-700 dark:text-gray-400 text-lg font-semibold">
                Channels
              </h3>
              <hr className="border-gray-300 dark:border-gray-700" />
              <div className="pl-10 flex items-center justify-between">
                <p className="text-black dark:text-white">
                  In-App Notifications
                </p>
                <SettingsToggle
                  value={notifications.inApp}
                  onChange={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      inApp: !prev.inApp,
                    }))
                  }
                />
              </div>
              <div className="pl-10 flex items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">Email verified</p>
                  <SettingsToggle
                    value={notifications.emailVerified}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        emailVerified: !prev.emailVerified,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">
                    Email Notifications
                  </p>
                  <SettingsToggle
                    value={notifications.email}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        email: !prev.email,
                      }))
                    }
                    disabled={!notifications.emailVerified}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-gray-700 dark:text-gray-400 text-lg font-semibold">
                Categories
              </h3>
              <hr className="border-gray-300 dark:border-gray-700" />
              <div className="pl-10 flex items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">
                    Security Notifications
                  </p>
                  <SettingsToggle
                    value={notifications.security}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        security: !prev.security,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">Priority</p>
                  <PriorityBadges
                    status={"Critical"}
                    styling=" from-red-500 to-red-700"
                  />
                </div>
              </div>
              <div className="pl-10 flex items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">
                    Billing Notifications
                  </p>
                  <SettingsToggle
                    value={notifications.billing}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        billing: !prev.billing,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">Priority</p>
                  <PriorityBadges
                    status={"High"}
                    styling=" from-orange-300 to-orange-700"
                  />
                </div>
              </div>
              <div className="pl-10 flex items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">
                    Recommendation Notifications
                  </p>
                  <SettingsToggle
                    value={notifications.recommendations}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        recommendations: !prev.recommendations,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-black dark:text-white">Priority</p>
                  <PriorityBadges
                    status={"low"}
                    styling={"from-green-500 to-green-700"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </SettingsCard>
  );
}
