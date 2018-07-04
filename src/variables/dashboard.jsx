const dashboard = [
  {
    styles: {
      xs: 12, md: 12, sm: 12
    },
    title: 'Live Event',
    subtitle: 'Live Events going to happening now',
    tableHeaders: {
      "id": "ID",
      "name": "Name",
      "problemStatement": "Problem Statement"
    },
    tableData: [
      ["Reactathon", "20"],
      ["Reactathon 2.0", "50"],
    ],
    cardColor: "success",
    "type": "Live"
  },
  {
    styles: {
      xs: 12, md: 12, sm: 12
    },
    title: 'Upcoming Events',
    subtitle: 'Upcoming Events going to happen soon',
    tableHeaders: {
      "id": "ID",
      "name": "Name",
      "problemStatement": "Problem Statement"
    },
    tableData: [
      ["Reactathon", "20"],
      ["Reactathon 2.0", "50"],
    ],
    cardColor: "warning",
    "type": "Upcoming"
  },
  {
    styles: {
      xs: 12, md: 12, sm: 12
    },
    title: 'Past Events',
    subtitle: 'Past Events that have already ended',
    tableHeaders: {
      "id": "ID",
      "name": "Name",
      "problemStatement": "Problem Statement"
    },
    tableData: [
      ["Reactathon", "20"],
      ["Reactathon 2.0", "50"],
    ],
    cardColor: "danger",
    "type": "Completed"
  }
]

module.exports = {
  dashboard
};