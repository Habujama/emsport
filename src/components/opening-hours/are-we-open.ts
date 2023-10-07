interface OpeningHour {
  start: number
  end: number
}

interface OpeningHourWithDate extends OpeningHour {
  date: Date
}

export const SPECIAL_HOURS: OpeningHourWithDate[] = [
  // example: { date: new Date('2020-12-31'), long: '08:00—16:30', ' }
]

interface RegularHours {
  [key: string]: OpeningHour
}

export const REGULAR_HOURS: RegularHours = {
  WEEKDAY: {
    start: 9,
    end: 17,
  },
  WEEKEND: {
    start: 9,
    end: 11.5,
  },
}
