// using forEach iterate reminders to notify when user checkReminders
// expected: ouput reminder object that matches publishDate

function checkReminders() {
    var reminders = [
      { id: 1, title: 'Get coustume for halloween', publishDate: '2017-10-25' },
      { id: 2, title: 'Get in the mood for halloween', publishDate: '2017-10-28' },
      { id: 3, title: 'Halloween', publishDate: '2017-10-30'  }
    ];

    for (var i = 0; i < reminders.length; i++) {
      notify(reminders[i]);
    }

    reminders.forEach( notify )
}

var notify = function notifyReminder (reminder) {
  if (new Date(reminder.publishDate) <= new Date()) {
    console.log(reminder)
  }
}

checkReminders(notify)
