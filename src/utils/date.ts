interface ElapsedTime {
  long: string;
  short: string;
}

export function getElapsedTime(dateString: string): ElapsedTime {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const MS_PER_MONTH = MS_PER_DAY * 30;
  const MS_PER_YEAR = MS_PER_DAY * 365;

  // timeDifference = currentTime - inputTime
  const timeDifference = Date.now() - new Date(dateString).getTime();

  const yearsElapsed = Math.floor(timeDifference / MS_PER_YEAR);
  const monthsElapsed = Math.floor(timeDifference / MS_PER_MONTH);
  const daysElapsed = Math.floor(timeDifference / MS_PER_DAY);

  switch (true) {
    case yearsElapsed >= 1:
      return {
        long: yearsElapsed === 1 ? "1 year ago" : `${yearsElapsed} years ago`,
        short: `${yearsElapsed}y ago`,
      };
    case monthsElapsed >= 1:
      return {
        long:
          monthsElapsed === 1 ? "1 month ago" : `${monthsElapsed} months ago`,
        short: `${monthsElapsed}mo ago`,
      };
    case daysElapsed >= 1:
      return {
        long: daysElapsed === 1 ? "1 day ago" : `${daysElapsed} days ago`,
        short: `${daysElapsed}d ago`,
      };
    default:
      return { long: "Today", short: "Today" };
  }
}
