import moment from "moment";

export const getHowFarInPast = (d: Date | string): string => {
    const now = moment()
    const dMoment = moment(d)

    const diffInYears = now.diff(dMoment, "years")

    if (diffInYears == 1) {
        return "1 year ago";
    }
    else if (diffInYears > 1) {
        return `${diffInYears} years ago`;
    }

    const diffInMonths = now.diff(dMoment, "months")

    if (diffInMonths == 1) {
        return "1 month ago"
    }
    else if (diffInMonths > 1) {
        return `${diffInMonths} months ago`
    }

    const diffInDays = now.diff(dMoment, "days");

    if (diffInDays == 1) {
        return "1 day ago";
    }
    else if (diffInDays > 1) {
        return `${diffInDays} days ago`
    }
    
    return "no difference"
}