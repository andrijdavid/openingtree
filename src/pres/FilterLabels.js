import {timeControlLabel} from './TimeControlLabels'
import {getSelectedTimeFrameData} from '../app/util'

export const getTimeControlLabel = timeControlLabel

export function getRatedLabel(rated) {
    if(rated === 'all') {
        return "Rated and casual"
    } else if (rated === 'rated') {
        return "Rated only"
    } else if (rated === 'casual') {
        return "Casual only"
    }
}

export function getWhenPlayedLabel(timeframe, timeframeSteps) {
    return getSelectedTimeFrameData(timeframe, timeframeSteps)
}
export function getDownloadLimitLabel() {
    return "No limit"
}
