const data = {
  clinicMenuData: [
    {
      title: "Dashboard",
      link: "/clinic-dashboard",
      icon: "uil-dashboard ",
    },
    {
      title: "Appointment",
      icon: "uil-stethoscope",
      link: "/clinic-dashboard/appointemt",
    },
    {
      title: "Doctors",
      icon: "uil-user",
      subMenu: [
        { title: "Doctors", link: "/clinic-dashboard/doctors" },
        { title: "add-doctor", link: "/clinic-dashboard/add-doctor" },
      ],
    },
    {
      title: "Patients",
      icon: "uil-wheelchair ",
      subMenu: [
        { title: "All Patients", link: "/clinic-dashboard/patients" },
        { title: "add-patient", link: "/clinic-dashboard/add-patient" },
      ],
    },
    {
      title: "Apps",
      icon: "uil-apps",
      subMenu: [{ title: "Calender", link: "/clinic-dashboard/calender" }],
    },
  ],

  adminMenuData: [
    {
      title: "Dashboard",
      link: "/admin",
      icon: "uil-dashboard ",
    },
    {
      title: "Appointment",
      icon: "uil-stethoscope",
      link: "/admin/appointemt",
    },
    {
      title: "Clinic",
      icon: "uil-user",
      subMenu: [
        { title: "Clinic", link: "/admin/clinic" },
        { title: "add-Clinic", link: "/admin/add-clinic" },
      ],
    },
    {
      title: "Patients",
      icon: "uil-wheelchair ",
      subMenu: [
        { title: "All Patients", link: "/admin/patients" },
        { title: "add-patient", link: "/admin/add-patient" },
      ],
    },
    {
      title: "Apps",
      icon: "uil-apps",
      subMenu: [{ title: "Calender", link: "/admin/calender" }],
    },
  ],
};

export default data;
