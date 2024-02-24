export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

const gender = ["Male", "Female", "Other"];
const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const genderOptions = gender.map((item) => ({
    value: item.toLowerCase(),
    label: item,
  }));

export const bloodGroupOptions = bloodGroup.map((item) => ({
    value: item,
    label: item,
  }));


  export const weekDaysOptions = weekdays.map((item) => ({
    value: item,
    label: item,
  }));