import {axiosAutoRequest, axiosRequest} from './common.js'
import httpreq from './url.js'

export const queryListApi = ({data, vm}) => {
    return axiosAutoRequest({
        url: httpreq.queryPrdList,
        data
    }, vm)
};


export const queryListDetailApi = ({data, vm}) => {
    return axiosAutoRequest({
        url: httpreq.queryPrdListInfo,
        data
    }, vm)
};