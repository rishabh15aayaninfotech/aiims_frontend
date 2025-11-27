import StudentDashboard from "../StudentDashboard";
import "./StudentSettings.css";

export default function StudentSettings() {
  const settings = [
    {
      category: "Account",
      items: [
        {
          title: "Change Password",
          subtitle: "Update your password",
          action: "Change",
        },
      ],
    },

    {
      category: "Privacy",
      items: [
        {
          title: "Profile Visibility",
          subtitle: "Control who can see your profile information",
          action: "Manage",
        },
      ],
    },

    {
      category: "Notifications",
      items: [
        {
          title: "Email Notifications",
          subtitle: "Manage your email notification preferences",
          action: "Manage",
        },
        {
          title: "In-App Notifications",
          subtitle: "Manage your in-app notification preferences",
          action: "Manage",
        },
      ],
    },

    {
      category: "Accessibility",
      items: [
        {
          title: "Font Size",
          subtitle: "Adjust the font size for better readability",
          action: "Adjust",
        },
        {
          title: "Color Contrast",
          subtitle: "Change the color contrast for better visibility",
          action: "Adjust",
        },
      ],
    },

    {
      category: "Language",
      items: [
        {
          title: "Language Selection",
          subtitle: "Change your preferred language",
          action: "Select",
        },
      ],
    },

    {
      category: "Help & Support",
      items: [
        {
          title: "Help Center",
          subtitle: "Get help and support",
          action: "Visit",
        },
      ],
    },
  ];

  return (
    <StudentDashboard>
      <div className="student-settings">
        <h2 className="fw-bold mb-4">Settings</h2>

        {settings.map((section, index) => (
          <div key={index} className="settings-section">
            <h5 className="section-title">{section.category}</h5>

            {section.items.map((item, idx) => (
              <div className="settings-row" key={idx}>
                <div>
                  <h6 className="setting-name">{item.title}</h6>
                  <p className="setting-sub">{item.subtitle}</p>
                </div>

                <button className="btn action-btn">{item.action}</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StudentDashboard>
  );
}
