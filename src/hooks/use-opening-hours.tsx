import {
  isSameDay,
  isWeekend,
  getYear,
  getDate,
  getMonth,
  startOfDay,
} from 'date-fns'
import { CzechHolidays, HolidayDate } from 'czech-holidays'

import {
  REGULAR_HOURS,
  SPECIAL_HOURS,
} from '../components/opening-hours/are-we-open'

const useOpeningHours = (): any => {
  const result = isDayOff() ? REGULAR_HOURS.WEEKEND : REGULAR_HOURS.WEEKDAY

  const today = startOfDay(new Date())

  const foundSpecialHour = SPECIAL_HOURS.find(({ date }) =>
    isSameDay(today, startOfDay(date))
  )

  //TODO: add exception for Thursday

  return foundSpecialHour ? foundSpecialHour : result
}

const isDayOff = (): boolean => {
  const today = new Date()
  const currentYear = getYear(today)
  const currentMonth = getMonth(today)
  const currentDay = getDate(today)
  const holidays: HolidayDate[] = CzechHolidays(currentYear)

  const itIsWeekend = isWeekend(today)

  const isHolidayToday = holidays.find(
    ({ d, m }) => d === currentDay && m === currentMonth + 1
  )

  return !!isHolidayToday || itIsWeekend
}

export default useOpeningHours
